#!/usr/bin/env node
/**
 * Fork an adopted pack's item into another namespace (docs/adopting-packs.md).
 *
 *   node scripts/fork-item.mjs @medieval-kit/bronze-bell                 # -> @thai-kit/bronze-bell
 *   node scripts/fork-item.mjs @medieval-kit/bronze-bell --as @thai-kit/temple-bell
 *   node scripts/fork-item.mjs @medieval-kit/bronze-bell --as @my-kit    # into another adopted pack
 *   node scripts/fork-item.mjs @medieval-kit/bronze-bell --dry-run
 *
 * Moves the source directory (vendoring the shared pack source it imports),
 * moves the record with `forkedFrom` set, rewrites every level placement,
 * then drops the old item from its pack and refreshes the new one so both
 * packs' bundles and index entries match the trees. `--no-pack-refresh`
 * skips that last step.
 */
import { execFileSync } from 'node:child_process';
import path from 'node:path';

import { OWN_NAMESPACE, REPO_ROOT } from '@thaikit/registry-core';

import { forkItem } from './lib/packs/fork.mjs';
import { ok, fail, log, parseArgs } from './lib/out.mjs';

async function main() {
  const args = parseArgs();
  const from = args._[0] ?? args.id ?? args.from;
  if (!from) return fail('usage: fork-item.mjs @ns/name [--as @thai-kit/name | @other-ns] [--dry-run] [--no-pack-refresh]');
  const result = await forkItem(String(from), { to: args.as ? String(args.as) : OWN_NAMESPACE, dryRun: Boolean(args['dry-run']) });
  log(`${result.from} -> ${result.to}${result.dryRun ? ' (dry run)' : ''}`);
  if (result.vendored.length) log(`vendored ${result.vendored.length} shared file(s) under ${result.dir}/_vendor/`);
  for (const l of result.levels) log(`level ${l.level}: ${l.rewritten} placement(s) re-pointed`);
  if (result.dryRun || args['no-pack-refresh']) return ok(result);

  const run = (...a) => execFileSync(process.execPath, [path.join(REPO_ROOT, 'scripts/install-pack.mjs'), ...a], { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
  log(`pack   : dropping ${result.from}`);
  run('--drop-item', result.from);
  log(`pack   : refreshing ${result.to}`);
  run('--refresh-item', result.to, '--add');
  return ok(result);
}

main().catch((err) => fail(err));
