/** Build reproducible, self-contained source; publication stays a separate step. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'esbuild';
import sharp from 'sharp';
import { updateAsset, readRegistry } from '@thaikit/registry-core';
import { entryModule, previewHelpers } from '../lib/vibe3d-entry.mjs';
import { FOLIAGE } from './catalog.mjs';
const root=process.env.THAIKIT_REPO_ROOT??process.cwd();
const read=p=>fs.readFile(path.join(root,p),'utf8');
const upstream=JSON.parse(await read('scripts/foliage/vendor/ez-tree/UPSTREAM.json'));
const license=await read('scripts/foliage/vendor/ez-tree/LICENSE');
const sourceTypes=(await read('scripts/foliage/factory.ts')).match(/export type ProceduralModelOptions = .*;/)[0];
const registry=await readRegistry();
for(const a of FOLIAGE){
 const asset=registry.assets.find(r=>r.id===a.id);if(!asset)throw new Error(`Register ${a.id} first`);
 const rel=`packages/props/src/models/${a.id}`,dir=path.join(root,rel);
 const built=await build({stdin:{contents:`import {makeFoliage} from './factory.ts';\nconst recipe=${JSON.stringify(a)};\nexport function createModel(options={}){return makeFoliage(recipe,options);}\nexport function createObjectModel(spec={},options={}){return makeFoliage(recipe,options);}`,resolveDir:path.join(process.cwd(),'scripts/foliage'),sourcefile:`${a.id}.ts`,loader:'ts'},bundle:true,write:false,format:'esm',platform:'browser',external:['three'],legalComments:'inline'});
 const source=`/*! EZ-Tree (MIT), pinned source.\n${license.replaceAll('*/','* /')}\n*/\n${built.outputFiles[0].text}\n${sourceTypes}\n`;
 await fs.mkdir(dir,{recursive:true});await fs.writeFile(path.join(dir,'createObjectModel.ts'),source);
 await fs.writeFile(path.join(dir,'model.ts'),entryModule(asset,previewHelpers(source),true));
 await fs.cp(path.join(root,'scratch/foliage-20260915/prepared',a.id,'maps'),path.join(dir,'maps'),{recursive:true});
 await fs.copyFile(path.join(root,'scratch/foliage-20260915/prepared',a.id,'reference.webp'),path.join(dir,'reference.webp'));
 await fs.writeFile(path.join(dir,'foliage-recipe.json'),JSON.stringify({version:1,...a,upstream},null,2));
 await fs.writeFile(path.join(dir,'object-sculpt-spec.json'),JSON.stringify({id:a.id,workflow:'procedural-foliage',species:a.species,dimensions:{width:a.width,height:a.height,depth:a.width},componentTree:[{id:'trunk'},{id:'canopy'},...(a.potted?[{id:'planter'}]:[])],materials:[{id:'bark'},{id:'leaves'},...(a.potted?[{id:'planter'}]:[])],recipe:'foliage-recipe.json',lightmap:false},null,2));
 // Preserve measured physical compounds; deriving collision is a separate step.
 try { await fs.access(path.join(dir,'colliders.json')); }
 catch { await fs.writeFile(path.join(dir,'colliders.json'),JSON.stringify({parts:[],disabled:true,reason:'Collision pending physical-only derivation; leaf-only variants remain disabled.'},null,2)); }
 const receipt=JSON.parse(await read(`scratch/foliage-20260915/images/${a.id}/reference.json`));
 const maps=[];for(const name of ['leaf','bark']){const file=`${rel}/maps/${name}.webp`,meta=await sharp(path.join(root,file)).metadata();maps.push({material:name==='leaf'?'leaves':'bark',role:'albedo',file,bytes:(await fs.stat(path.join(root,file))).size,width:meta.width,height:meta.height});}
 await updateAsset(a.id,r=>{
  r.image={file:`${rel}/reference.webp`,w:640,h:640,model:receipt.model,seed:receipt.input.seed,prompt:receipt.input.prompt,createdAt:receipt.completedAt??receipt.submittedAt,uploadedUrl:receipt.result?.images?.[0]?.url??null};r.status.image='done';
  r.model.source=`${rel}/createObjectModel.ts`;r.model.spec=`${rel}/object-sculpt-spec.json`;r.model.maps=maps;
  r.model.generator={tool:a.kind==='tree'||a.kind==='shrub'?'EZ-Tree + ThaiKit':'ThaiKit botanical geometry',version:'1',seed:a.seed,recipe:`${rel}/foliage-recipe.json`,upstream:'https://github.com/dgreenheck/ez-tree/tree/dcf309bd86bd521083d9c70f01f2de45fdc7c457'};
  r.model.reference={provider:'procedural-foliage',glb:null,params:{species:a.species},seed:a.seed};
  r.model.representations=[...[0,1,2].map(detail=>({name:`mesh-lod${detail}`,options:{detail},bakeLighting:false,billboard:'none'})),{name:'billboard',options:{representation:'billboard'},bakeLighting:false,billboard:'yaw'},{name:'cluster',options:{representation:'cluster',lighting:'unlit'},bakeLighting:false,billboard:'none'}];
  r.license.generatedBy=[{role:'geometry',model:'procedural-foliage-v1',vendor:'ThaiKit / EZ-Tree'},{role:'texture',model:'fal-ai/nano-banana-2',vendor:'fal.ai'}];r.license.notice='Procedural geometry includes MIT-licensed EZ-Tree by Dan Greenheck; license retained in source. Botanical textures generated with fal.ai Nano Banana 2.';
  return r;
 });
 console.log(`Built ${a.id}`);
}
