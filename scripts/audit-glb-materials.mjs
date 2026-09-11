#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import * as THREE from 'three';
import { materialCompatibilityIssues } from '../web/client/src/unreal/materialCompatibility.js';

export async function auditFactories(directory) {
  const report = { checked: 0, failures: [], renderCallbacks: [] };
  const entries = (await fs.readdir(directory, { withFileTypes: true })).filter(e => e.isDirectory());
  for (const entry of entries) {
    const source = path.join(directory, entry.name, 'createObjectModel.ts');
    try { await fs.access(source); } catch { continue; }
    report.checked++;
    try {
      const { outputFiles } = await build({
        entryPoints: [source], bundle: true, write: false, format: 'cjs', platform: 'node',
        plugins: [{ name: 'shared-three', setup(builder) {
          builder.onResolve({ filter: /^three$/ }, () => ({ path: 'three', external: true }));
        } }],
      });
      const module = { exports: {} };
      new Function('module', 'exports', 'require', outputFiles[0].text)(module, module.exports, name => {
        if (name !== 'three') throw new Error(`Unsupported factory import: ${name}`);
        return THREE;
      });
      const root = module.exports.createObjectModel(undefined, {});
      const issues = materialCompatibilityIssues(root);
      if (issues.length) report.failures.push({ asset: entry.name, issues });
      const geometries = new Set(), materials = new Set(), textures = new Set();
      root.traverse(object => {
        if (object.onBeforeRender !== THREE.Object3D.prototype.onBeforeRender) {
          report.renderCallbacks.push({ asset: entry.name, object: object.name });
        }
        if (object.geometry) geometries.add(object.geometry);
        for (const m of [object.material].flat().filter(Boolean)) {
          materials.add(m);
          for (const value of Object.values(m)) if (value?.isTexture) textures.add(value);
        }
      });
      for (const value of [...geometries, ...materials, ...textures]) value.dispose();
    } catch (error) {
      report.failures.push({ asset: entry.name, error: error.message });
    }
  }
  return report;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const directory = process.argv[2] || fileURLToPath(new URL('../packages/props/src/models', import.meta.url));
  const report = await auditFactories(directory);
  console.log(JSON.stringify(report, null, 2));
  if (report.failures.length) process.exitCode = 1;
}
