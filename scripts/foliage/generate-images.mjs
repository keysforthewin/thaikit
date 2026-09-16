#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import {FOLIAGE} from './catalog.mjs';
const root=path.resolve(process.env.THAIKIT_REPO_ROOT??'.','scratch/foliage-20260915/images');
const model='fal-ai/nano-banana-2';
const key=process.env.FAL_KEY;if(!key)throw new Error('FAL_KEY is not configured');
const headers={Authorization:`Key ${key}`,'Content-Type':'application/json'};
const pause=ms=>new Promise(r=>setTimeout(r,ms));
async function json(url,options={}){const r=await fetch(url,{...options,headers:options.method?headers:{Authorization:headers.Authorization},signal:AbortSignal.timeout(90000)});if(!r.ok)throw new Error(`${r.status}: ${(await r.text()).slice(0,500)}`);return r.json();}
async function generate(id,role,prompt){
 const dir=path.join(root,id);await fs.mkdir(dir,{recursive:true});const record=path.join(dir,`${role}.json`),image=path.join(dir,`${role}.png`);
 if(await fs.stat(image).catch(()=>false))return;
 let job=await fs.readFile(record,'utf8').then(JSON.parse).catch(()=>null);
 if(!job){const input={prompt,num_images:1,aspect_ratio:'1:1',resolution:'2K',output_format:'png',seed:731,limit_generations:true};const q=await json(`https://queue.fal.run/${model}`,{method:'POST',body:JSON.stringify(input)});job={model,input,submittedAt:new Date().toISOString(),...q};await fs.writeFile(record,JSON.stringify(job,null,2));}
 console.log(`${new Date().toISOString()} ${id}/${role}: ${job.request_id}`);
 for(;;){const s=await json(job.status_url);if(s.status==='COMPLETED')break;if(s.status!=='IN_QUEUE'&&s.status!=='IN_PROGRESS')throw new Error(JSON.stringify(s));await pause(5000);}
 const result=await json(job.response_url);if(!result.images?.[0]?.url)throw new Error(JSON.stringify(result));
 const response=await fetch(result.images[0].url);if(!response.ok)throw new Error(`image download ${response.status}`);await fs.writeFile(image,Buffer.from(await response.arrayBuffer()));await fs.writeFile(record,JSON.stringify({...job,result,completedAt:new Date().toISOString()},null,2));console.log(`${id}/${role}: complete`);
}
const jobs=FOLIAGE.flatMap(a=>[
 ()=>generate(a.id,'reference',`Photoreal botanical asset reference of one complete healthy ${a.species}. ${a.form}. ${a.potted?'In a simple weathered Thai street planter.':'Roots or stem base visible, no pot.'} Natural rich green foliage, believable dense canopy with visible layered depth, structurally clear trunk and stems. Entire plant including base and tips inside frame with 8 percent margin. Neutral overcast daylight, plain light grey background, ground contact only, eye-level three-quarter view. No text, diagram, labels, buildings, people or watermark.`),
 ()=>generate(a.id,'leaf',`Botanical cutout texture for a three-dimensional game plant: ${a.leaf}. Species ${a.species}. ONE specimen, its main stem pointing from bottom-centre toward top-centre. Front view, orthographic, flat diffuse illumination, real photographic surface and fine venation, healthy mature foliage. Entire specimen inside frame with narrow 5 percent margin. ISOLATE against absolutely uniform pure saturated blue RGB(0,0,255), including every hole between leaves. Blue background must have no gradient, shadows or objects. No blue on the plant. No pot, trunk, ground, scene, text, labels or additional specimens.`)
]);
jobs.push(()=>generate('shared','bark','Seamlessly tileable close photograph of rough grey-brown tropical tree bark, fine vertical fissures with varied weathered ridges, no moss, no leaves, no knots dominating the frame. Flat diffuse neutral illumination, orthographic surface texture, uniform scale throughout, no directional shadows, no text or border.'));
let next=0;await Promise.all(Array.from({length:3},async()=>{while(next<jobs.length)await jobs[next++]();}));
