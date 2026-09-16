import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'esbuild';
const root=process.cwd();
await build({entryPoints:['scripts/foliage/preview.ts'],outfile:'scratch/foliage-20260915/preview.js',bundle:true,format:'esm',platform:'browser'});
http.createServer(async(req,res)=>{try{
 const pathname=decodeURIComponent(new URL(req.url,'http://local').pathname);
 if(pathname==='/'){res.setHeader('content-type','text/html');res.end('<script type="module" src="/scratch/foliage-20260915/preview.js"></script>');return;}
 if(req.method==='POST'&&pathname.startsWith('/save/')){const target=path.resolve(root,'scratch/foliage-20260915/rendered',pathname.slice(6));if(!target.startsWith(path.join(root,'scratch/foliage-20260915/rendered/')))throw new Error('Invalid path');const chunks=[];for await(const c of req)chunks.push(c);await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,Buffer.concat(chunks));res.end('ok');return;}
 const target=path.resolve(root,pathname.slice(1));if(!target.startsWith(path.join(root,'scratch/foliage-20260915/')))throw new Error('Invalid path');const ext=path.extname(target);res.setHeader('content-type',({'.js':'text/javascript','.png':'image/png','.webp':'image/webp','.json':'application/json'})[ext]??'application/octet-stream');res.end(await fs.readFile(target));
 }catch(e){res.statusCode=500;res.end(e.message);}}).listen(3735,'0.0.0.0',()=>console.log('Foliage preview ready :3735'));
