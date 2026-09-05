/**
 * Where a bake builds and what the delivered file is called -- the ONE place
 * the naming lives, shared by the pipeline, verify, smoke and the web server.
 *
 * A full bake builds in `levels/<id>/build/` and delivers `<id>.glb`. A quick
 * export of ONE cell builds in `levels/<id>/build/cell_<ix>_<iz>/` and
 * delivers `<id>_<ix>_<iz>.glb`, so a cell's raw, stages and level.glb never
 * overwrite the full build's (and `--resume-from` on either resumes the right
 * one). The job record, log and out file stay in `build/` regardless: one bake
 * per level at a time, quick or full.
 */
import path from 'node:path';

import { levelDir } from '@thaikit/registry-core';

/** A cell key as the client spells it: `<ix>_<iz>`, either signed. */
export const CELL_KEY_RE = /^-?\d+_-?\d+$/;

export function assertCellKey(cell) {
  if (cell != null && !CELL_KEY_RE.test(String(cell))) throw new Error(`--cell must be <ix>_<iz>, got ${JSON.stringify(cell)}`);
  return cell == null ? null : String(cell);
}

export function buildDirOf(id, cell = null) {
  const base = path.join(levelDir(id), 'build');
  return cell ? path.join(base, `cell_${cell}`) : base;
}

export function exportNameOf(id, cell = null) {
  return cell ? `${id}_${cell}.glb` : `${id}.glb`;
}
