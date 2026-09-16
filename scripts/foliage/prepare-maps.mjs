import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { FOLIAGE } from './catalog.mjs';
const root=process.env.THAIKIT_REPO_ROOT??process.cwd();
const images=path.join(root,'scratch/foliage-20260915/images');
const output=path.join(root,'scratch/foliage-20260915/prepared');
const reports=[];
for(const asset of FOLIAGE){
 const dest=path.join(output,asset.id,'maps');await fs.mkdir(dest,{recursive:true});
 const {data,info}=await sharp(path.join(images,asset.id,'leaf.png')).ensureAlpha().raw().toBuffer({resolveWithObject:true});
 let opaque=0,transparent=0,minX=info.width,minY=info.height,maxX=0,maxY=0;
 for(let i=0;i<data.length;i+=4){
  const r=data[i],g=data[i+1],b=data[i+2];
  // The requested solid blue screen is absent from botanical green/red/yellow.
  // A soft edge retains fine leaflets; suppress blue spill before filtering.
  const excess=Math.max(0,b-Math.max(r,g));
  const alpha=Math.max(0,Math.min(1,1-(excess-12)/75));
  data[i+3]=Math.round(alpha*255);
  if(excess>12)data[i+2]=Math.min(b,Math.max(r,g));
  if(alpha>.5){opaque++;const pixel=i/4,x=pixel%info.width,y=Math.floor(pixel/info.width);minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}else transparent++;
 }
 const coverage=opaque/(opaque+transparent);
 if(coverage<.02||coverage>.95)throw new Error(`${asset.id}: invalid cutout coverage ${coverage}`);
 await sharp(data,{raw:info}).extract({left:minX,top:minY,width:maxX-minX+1,height:maxY-minY+1}).resize(1024,1024,{fit:'fill'}).webp({quality:93,alphaQuality:100}).toFile(path.join(dest,'leaf.webp'));
 await sharp(path.join(images,'shared/bark.png')).resize(512,512).webp({quality:88}).toFile(path.join(dest,'bark.webp'));
 await sharp(path.join(images,asset.id,'reference.png')).resize(640,640,{fit:'contain',background:'#e6e6e6'}).webp({quality:90}).toFile(path.join(output,asset.id,'reference.webp'));
 reports.push({id:asset.id,leafCoverage:coverage});
}
await fs.writeFile(path.join(output,'cutout-report.json'),JSON.stringify(reports,null,2));
console.log(`Prepared ${reports.length} botanical cutouts and shared bark`);
