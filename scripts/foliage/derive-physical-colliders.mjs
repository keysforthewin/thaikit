/** Derive the existing compound format from physical foliage geometry only. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {FOLIAGE} from './catalog.mjs';
const root=process.env.THAIKIT_REPO_ROOT??process.cwd();
const out=path.join(root,'scratch/foliage-colliders-20260916');await fs.mkdir(out,{recursive:true});
const dry=process.argv.includes('--dry-run');
for(const a of FOLIAGE){
 if(['birds-nest-fern','pandan'].includes(a.id))continue; // These meshes consist entirely of leaves.
 const source=path.join(root,'packages/props/src/models',a.id,'colliders.json');
 const backup=path.join(out,a.id+'-before.json');
 try{await fs.copyFile(source,backup,fs.constants.COPYFILE_EXCL);}catch(e){if(e.code!=='EEXIST')throw e;}
 const args=['scripts/derive-colliders.mjs','--id',a.id,'--include-meshes','trunk,planter','--fit-stems'];
 if(a.tree||a.kind==='shrub')args.push('--trunk-only');
 if(dry)args.push('--dry-run');
 const r=spawnSync(process.execPath,args,{cwd:process.cwd(),encoding:'utf8'});
 await fs.writeFile(path.join(out,a.id+(dry?'-dry':'')+'.json'),r.stdout);
 await fs.writeFile(path.join(out,a.id+(dry?'-dry':'')+'.log'),r.stderr);
 process.stdout.write(r.stderr);
 if(r.status)throw new Error(`${a.id} failed`);
}
