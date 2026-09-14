import fs from 'node:fs/promises';
import path from 'node:path';
import { gunzipSync } from 'node:zlib';

/** Validate the actual exported UV lookups against Cycles' chart-owned mask. */
export async function auditAtlasCoverage(doc, directory, { onProgress } = {}) {
  const layout=JSON.parse(await fs.readFile(path.join(directory,'atlas-layout.json'),'utf8'));
  const size=layout.size, failures=[], rows=[];
  for(const node of doc.getRoot().listNodes())for(const p of node.getMesh()?.listPrimitives()??[]) {
    const page=p.getMaterial()?.getExtras()?.tk?.lightmapAtlas;
    const expected=layout.objects?.[node.getName()];
    if((expected || page!==undefined) && (!Number.isInteger(page)||page<0||page>=layout.count||(expected&&expected.atlas!==page)))
      failures.push({page,node:node.getName(),reason:'invalid atlas assignment'});
  }
  for(let page=0;page<layout.count;page++){
    const bytes=gunzipSync(await fs.readFile(path.join(directory,`atlas-${String(page).padStart(3,'0')}`,'owner.bin.gz')));
    if(bytes.byteLength!==size*size*4)throw Error(`atlas ${page}: invalid coverage mask size`);
    const owner=new Int32Array(bytes.buffer,bytes.byteOffset,bytes.byteLength/4);
    const idAt=(u,v)=>{
      const x=Math.floor(u*size),y=Math.floor((1-v)*size);
      return x>=0&&y>=0&&x<size&&y<size?owner[y*size+x]:-1;
    };
    const supported=(u,v,id)=>{
      const x=u*size-.5,y=(1-v)*size-.5,bx=Math.floor(x),by=Math.floor(y),fx=x-bx,fy=y-by;
      let weight=0;
      for(let dy=0;dy<=1;dy++)for(let dx=0;dx<=1;dx++){
        const xx=bx+dx,yy=by+dy;
        if(xx>=0&&yy>=0&&xx<size&&yy<size&&owner[yy*size+xx]===id)weight+=(dx?fx:1-fx)*(dy?fy:1-fy);
      }
      return weight>=.99;
    };
    let checked=0;
    for(const node of doc.getRoot().listNodes())for(const p of node.getMesh()?.listPrimitives()??[]){
      if(p.getMaterial()?.getExtras()?.tk?.lightmapAtlas!==page)continue;
      const assignment=layout.objects?.[node.getName()];
      if(layout.objects && (!assignment || assignment.atlas!==page)) {
        failures.push({page,node:node.getName(),reason:'atlas assignment does not match layout'});continue;
      }
      const uv=p.getAttribute('TEXCOORD_1'),index=p.getIndices();
      if(!uv){failures.push({page,node:node.getName(),reason:'missing UV'});continue}
      const count=index?.getCount()??uv.getCount();
      for(let i=0;i<count;i+=3){
        const t=[0,1,2].map(k=>uv.getElement(index?index.getScalar(i+k):i+k,[]));
        if(t.some(v=>v.some(x=>!Number.isFinite(x)||x<0||x>1))){failures.push({page,node:node.getName(),triangle:i/3,reason:'invalid UV'});continue;}
        const area=Math.abs((t[1][0]-t[0][0])*(t[2][1]-t[0][1])-(t[1][1]-t[0][1])*(t[2][0]-t[0][0]));
        if(area<1e-18)continue;
        const c=[(t[0][0]+t[1][0]+t[2][0])/3,(t[0][1]+t[1][1]+t[2][1])/3],id=idAt(...c);
        let pass=id>=0&&supported(...c,id);
        if(assignment && layout.rectangles?.[id]?.source!==assignment.source)pass=false;
        for(let edge=0;pass&&edge<3;edge++){
          const a=t[edge],b=t[(edge+1)%3],steps=Math.max(1,Math.ceil(Math.hypot(a[0]-b[0],a[1]-b[1])*size*4));
          for(let j=0;j<=steps;j++)if(!supported(a[0]+(b[0]-a[0])*j/steps,a[1]+(b[1]-a[1])*j/steps,id)){pass=false;break}
        }
        // Compression and LODs may move a face over an interior gap even
        // when its centroid and perimeter remain inside the chart.
        if (pass) {
          const q=t.map(([u,v])=>[u*size,(1-v)*size]);
          const [a,b,c]=q;
          const det=(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
          const minX=Math.max(0,Math.ceil(Math.min(...q.map(v=>v[0]))-.5));
          const maxX=Math.min(size-1,Math.floor(Math.max(...q.map(v=>v[0]))-.5));
          const minY=Math.max(0,Math.ceil(Math.min(...q.map(v=>v[1]))-.5));
          const maxY=Math.min(size-1,Math.floor(Math.max(...q.map(v=>v[1]))-.5));
          for(let y=minY;pass&&y<=maxY;y++)for(let x=minX;x<=maxX;x++) {
            const px=x+.5,py=y+.5;
            const u=((b[0]-px)*(c[1]-py)-(b[1]-py)*(c[0]-px))/det;
            const v=((c[0]-px)*(a[1]-py)-(c[1]-py)*(a[0]-px))/det;
            if(u>=-1e-7&&v>=-1e-7&&u+v<=1+1e-7&&owner[y*size+x]!==id){pass=false;break;}
          }
        }
        checked++;
        if(!pass && failures.length<1000)failures.push({page,node:node.getName(),triangle:i/3,reason:'lookup leaves chart coverage'});
      }
    }
    rows.push({atlas:page,triangles:checked});
    onProgress?.(`atlas ${page+1}/${layout.count}: checked ${checked} exported triangles; ${failures.length} failures so far`);
  }
  return {ok:failures.length===0,atlases:rows,failures};
}
