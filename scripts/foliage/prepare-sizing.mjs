/** Archive old stage caches so a later resume cannot mix old lighting with new foliage. */
import fs from 'node:fs/promises';
import path from 'node:path';
const root=process.env.THAIKIT_REPO_ROOT??process.cwd();
const dir=path.join(root,'levels/bangkoksoi/build');
const archive=path.join(dir,'cli/20260915-before-foliage');
const done=path.join(archive,'archived.json');
if(await fs.stat(done).catch(()=>false))throw new Error('Caches already archived; do not repeat this preparation');
await fs.mkdir(archive,{recursive:true});
const names=(await fs.readdir(dir)).filter(n=>n==='raw.glb'||n==='bake.json'||/^stage[123](?:_[a-z]+)?\.glb$/.test(n)||/^lod.*\.json$/.test(n));
for(const name of names)await fs.rename(path.join(dir,name),path.join(archive,name));
await fs.writeFile(done,JSON.stringify({at:new Date().toISOString(),files:names},null,2));
console.log(`Archived ${names.length} old intermediates; delivered GLBs retained`);
