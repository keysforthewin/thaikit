import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { blenderExe } from '../../lib/blender.mjs';
import { pruneUnusedGeometry } from './geometry-usage.mjs';

/** Reuse the accepted near reduction at distance. A failed aggressive far
 * candidate must not make the far tier heavier than its near counterpart.
 * Sharing also avoids downloading a second set of per-LOD UVs and lighting.
 * Far-only accepted candidates retain their separate, more permissive LOD.
 */
export async function shareLodGeometry({doc,report,outDir,signal,onProgress=()=>{}}) {
  const nearGroup=report.groups.find(g=>g.tier===1),farGroup=report.groups.find(g=>g.tier===2);
  if(!nearGroup)return report;
  const dropped=new Set();
  let shared=0;
  for(const row of report.accepted.filter(r=>r.tier===1)) {
    const cell=doc.getRoot().listNodes().find(n=>n.getName()===row.cell);
    const near=cell.listChildren().find(n=>n.getName()==='lod1');
    const far=cell.listChildren().find(n=>n.getName()==='lod2');
    const sourceNodes=near.listChildren().filter(n=>nearGroup.mapping[n.getName()]?.source===row.target);
    if(!sourceNodes.length)throw new Error(`Missing accepted near LOD ${row.target}`);
    const farTarget=row.target.replace(/^lt1_/,'lt2_');
    for(const node of [...far.listChildren()]) {
      if(node.getName()===row.node || farGroup?.mapping[node.getName()]?.source===farTarget)node.dispose();
    }
    for(const node of sourceNodes)far.addChild(doc.createNode(node.getName()).setMesh(node.getMesh()).setMatrix(node.getMatrix()));
    dropped.add(farTarget);shared++;
  }
  if(farGroup)farGroup.droppedSources=[...dropped];
  report.sharedNearLods=shared;
  await doc.transform(pruneUnusedGeometry());
  const input=path.join(outDir,'shared-input.json');await fs.writeFile(input,JSON.stringify(report));
  onProgress(`sharing ${shared} accepted near LODs with the far tier; clearing unused far lighting`);
  const executable=await blenderExe();
  if(!executable)throw new Error('LOD atlas trimming requires local Blender');
  await new Promise((resolve,reject)=>{
    const child=spawn(executable,['-b','-t','4','--python-exit-code','1','--python',fileURLToPath(new URL('../bakers/trim_lod_atlases.py',import.meta.url)),'--','--report',input,'--out',outDir],{stdio:['ignore','pipe','pipe'],signal});
    let tail='';const feed=d=>{tail=(tail+d).slice(-6000)};child.stdout.on('data',feed);child.stderr.on('data',feed);
    child.on('error',reject);child.on('close',code=>code===0?resolve():reject(new Error(`LOD atlas trimming failed: ${tail}`)));
  });
  return JSON.parse(await fs.readFile(path.join(outDir,'shared-transfer.json'),'utf8'));
}
