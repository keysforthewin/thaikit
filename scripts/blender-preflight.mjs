#!/usr/bin/env node
/**
 * Step 0 for both mesh skills: is Blender open and listening?
 *
 * This exists so a skill fails in one place with one clear instruction, rather
 * than halfway through a build with a socket error. It answers two questions:
 * is anything listening, and what path should Blender be handed for this repo.
 *
 * Usage: node scripts/blender-preflight.mjs [--host H] [--port N] [--check-path]
 *
 * --check-path writes a probe file into scratch/ and prints the Blender-side
 * spelling of it, so the round trip can be verified by hand the first time.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { SCRATCH_DIR, toRepoRelative } from '@thaikit/registry-core';

import {
  BLENDER_HOST, BLENDER_PORT, START_BLENDER,
  blenderRepoRoot, probeAddon, toBlenderPath, execStub,
} from './lib/blender.mjs';
import { ok, fail, log, parseArgs } from './lib/out.mjs';

async function main() {
  const args = parseArgs();
  const host = args.host || BLENDER_HOST;
  const port = Number(args.port || BLENDER_PORT);

  const probe = await probeAddon({ host, port });

  let probeFile = null;
  if (args['check-path']) {
    const dir = path.join(SCRATCH_DIR, '_blender');
    await fs.mkdir(dir, { recursive: true });
    const abs = path.join(dir, 'probe.txt');
    await fs.writeFile(abs, `written by blender-preflight at ${new Date().toISOString()}\n`);
    const rel = toRepoRelative(abs);
    probeFile = { repoPath: rel, blenderPath: toBlenderPath(rel), stub: execStub(rel) };
  }

  if (!probe.connected) {
    log(START_BLENDER);
    return fail(`no BlenderMCP addon on ${host}:${port} (${probe.error})`, {
      connected: false,
      host,
      port,
      repoPathForBlender: blenderRepoRoot(),
      instructions: START_BLENDER,
    });
  }

  log(`BlenderMCP addon reachable on ${host}:${port}`);
  log(`Blender should open this repo as: ${blenderRepoRoot()}`);

  ok({
    connected: true,
    host,
    port,
    repoPathForBlender: blenderRepoRoot(),
    probeFile,
    /**
     * The addon answers on the socket, but only an MCP call can report the
     * running Blender version -- the skills read it from get_scene_info.
     */
    blenderVersion: null,
  });
}

main().catch((err) => fail(err));
