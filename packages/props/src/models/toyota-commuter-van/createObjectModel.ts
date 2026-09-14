import * as THREE from 'three';
// Fresh procedural van geometry; reference mesh is evidence only.
type Batch={p:number[],n:number[],c:number[]};
function batch():Batch{return {p:[],n:[],c:[]};}
function add(b:Batch,g:THREE.BufferGeometry,color:string,pos=[0,0,0],rot=[0,0,0]){
 const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot as [number,number,number]));g.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(...pos as [number,number,number]),q,new THREE.Vector3(1,1,1)));
 const flat=g.index?g.toNonIndexed():g;flat.computeVertexNormals();const p=flat.getAttribute('position'),n=flat.getAttribute('normal');const c=new THREE.Color(color);
 for(let i=0;i<p.count;i++){b.p.push(p.getX(i),p.getY(i),p.getZ(i));b.n.push(n.getX(i),n.getY(i),n.getZ(i));b.c.push(c.r,c.g,c.b);}if(flat!==g)flat.dispose();g.dispose();
}
function box(b:Batch,s:number[],p:number[],color:string,r=[0,0,0]){add(b,new THREE.BoxGeometry(...s as [number,number,number]),color,p,r);}
function geometry(b:Batch){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(b.p,3));g.setAttribute('wearPosition',new THREE.Float32BufferAttribute(b.p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(b.n,3));g.setAttribute('color',new THREE.Float32BufferAttribute(b.c,3));g.computeBoundingBox();g.computeBoundingSphere();return g;}
function sheet(b:Batch,points:number[][],color:string){const a=new THREE.Vector3(...points[0] as [number,number,number]),c=new THREE.Color(color);for(let j=1;j<points.length-1;j++){
 const v=new THREE.Vector3(...points[j] as [number,number,number]),w=new THREE.Vector3(...points[j+1] as [number,number,number]),n=v.clone().sub(a).cross(w.clone().sub(a)).normalize();for(const t of [a,v,w]){b.p.push(t.x,t.y,t.z);b.n.push(n.x,n.y,n.z);b.c.push(c.r,c.g,c.b);}
}}
function roundedLoop(pts:number[][],radius=.035,steps=4){const out:number[][]=[];for(let i=0;i<pts.length;i++){const p=pts[i],a=pts[(i+pts.length-1)%pts.length],b=pts[(i+1)%pts.length];const la=Math.hypot(a[0]-p[0],a[1]-p[1]),lb=Math.hypot(b[0]-p[0],b[1]-p[1]);const r=Math.min(radius,la*.2,lb*.2),start=p.map((v,k)=>v+(a[k]-v)*r/la),end=p.map((v,k)=>v+(b[k]-v)*r/lb);for(let j=0;j<=steps;j++){const t=j/steps;out.push(p.map((v,k)=>(1-t)*(1-t)*start[k]+2*t*(1-t)*v+t*t*end[k]));}}return out;}
function panel(b:Batch,outline:number[][],holes:number[][][],x:number,thickness:number,color:string){
 const shape=new THREE.Shape(outline.map(p=>new THREE.Vector2(p[0],p[1])));for(const h of holes)shape.holes.push(new THREE.Path(h.map(p=>new THREE.Vector2(p[0],p[1]))));
 const g=new THREE.ExtrudeGeometry(shape,{depth:thickness,bevelEnabled:false,steps:1,curveSegments:1});g.rotateY(-Math.PI/2);add(b,g,color,[x,0,0]);
}
function tube(b:Batch,start:number[],end:number[],radius:number,color:string,segments=6){const a=new THREE.Vector3(...start as [number,number,number]),z=new THREE.Vector3(...end as [number,number,number]);const dir=z.clone().sub(a);const g=new THREE.CylinderGeometry(radius,radius,dir.length(),segments,1);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize()));add(b,g,color,a.add(z).multiplyScalar(.5).toArray());}
function frame(b:Batch,inner:number[][],color:string,width=.02,thickness=.012){
 const center=new THREE.Vector3();inner.forEach(p=>center.add(new THREE.Vector3(...p as [number,number,number])));center.multiplyScalar(1/inner.length);
 const normal=new THREE.Vector3(...inner[1] as [number,number,number]).sub(new THREE.Vector3(...inner[0] as [number,number,number])).cross(new THREE.Vector3(...inner[2] as [number,number,number]).sub(new THREE.Vector3(...inner[0] as [number,number,number]))).normalize();
 const outer=inner.map(p=>new THREE.Vector3(...p as [number,number,number]).sub(center).multiplyScalar(1+width*3).add(center).toArray());const back=(p:number[])=>new THREE.Vector3(...p as [number,number,number]).addScaledVector(normal,-thickness).toArray();
 for(let i=0;i<inner.length;i++){const j=(i+1)%inner.length;sheet(b,[outer[i],outer[j],inner[j],inner[i]],color);sheet(b,[back(inner[i]),back(inner[j]),back(outer[j]),back(outer[i])],color);sheet(b,[outer[j],outer[i],back(outer[i]),back(outer[j])],color);sheet(b,[inner[i],inner[j],back(inner[j]),back(inner[i])],color);}
}
function ribbedFloor(b:Batch,width:number,length:number,bottom:number,top:number,z:number,color:string,count:number,rise:number){
 const pts:number[][]=[[-width/2,bottom],[width/2,bottom],[width/2,top]];
 for(let i=count-1;i>=0;i--){const x=-width/2+(i+.5)*width/count;pts.push([x+.022,top],[x+.012,top+rise],[x-.012,top+rise],[x-.022,top]);}pts.push([-width/2,top]);
 const sh=new THREE.Shape(pts.map(p=>new THREE.Vector2(p[0],p[1])));add(b,new THREE.ExtrudeGeometry(sh,{depth:length,bevelEnabled:false,steps:1}),color,[0,0,z-length/2]);
}
function slab(b:Batch,pts:number[][],color:string,depth=.008){const a=new THREE.Vector3(...pts[0] as [number,number,number]),n=new THREE.Vector3(...pts[1] as [number,number,number]).sub(a).cross(new THREE.Vector3(...pts[2] as [number,number,number]).sub(a)).normalize();const back=pts.map(p=>new THREE.Vector3(...p as [number,number,number]).addScaledVector(n,-depth).toArray());sheet(b,pts,color);sheet(b,[...back].reverse(),color);for(let i=0;i<pts.length;i++){const j=(i+1)%pts.length;sheet(b,[pts[j],pts[i],back[i],back[j]],color);}}
function mappedFace(b:Batch,outline:number[][],holes:number[][][],map:(p:number[])=>number[],color:string,flip=false){const sh=new THREE.Shape(outline.map(p=>new THREE.Vector2(...p as [number,number])));for(const h of holes)sh.holes.push(new THREE.Path(h.map(p=>new THREE.Vector2(...p as [number,number]))));const g=new THREE.ShapeGeometry(sh,1),p=g.getAttribute('position'),idx=g.index!;for(let i=0;i<idx.count;i+=3){const pts=[0,1,2].map(j=>{const k=idx.getX(i+j);return map([p.getX(k),p.getY(k)]);});if(flip)pts.reverse();sheet(b,pts,color);}g.dispose();}
function weldNormals(b:Batch){
 const at=new Map<string,{n:THREE.Vector3,w:number}[]>();const faceNormals:THREE.Vector3[]=[];
 for(let i=0;i<b.p.length;i+=9){const vs=[0,3,6].map(j=>new THREE.Vector3(...b.p.slice(i+j,i+j+3) as [number,number,number])),n=vs[1].clone().sub(vs[0]).cross(vs[2].clone().sub(vs[0])).normalize();faceNormals.push(n);
 for(let k=0;k<3;k++){const a=vs[(k+1)%3].clone().sub(vs[k]),c=vs[(k+2)%3].clone().sub(vs[k]);if(a.lengthSq()<1e-14||c.lengthSq()<1e-14)continue;const key=vs[k].toArray().map(v=>v.toFixed(6)).join(','),list=at.get(key)||[];list.push({n,w:a.angleTo(c)});at.set(key,list);}}
 for(let i=0;i<b.p.length;i+=3){const key=b.p.slice(i,i+3).map(v=>v.toFixed(6)).join(','),normal=faceNormals[Math.floor(i/9)],sum=new THREE.Vector3();for(const x of at.get(key)||[])if(x.n.dot(normal)>.50)sum.addScaledVector(x.n,x.w);sum.normalize();b.n[i]=sum.x;b.n[i+1]=sum.y;b.n[i+2]=sum.z;}
}
function studioEnvironment(){const w=128,h=64,data=new Uint8Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const u=x/w,v=y/h,soft=Math.exp(-Math.pow((u-.20)/.085,8)-Math.pow((v-.25)/.13,8))*.70+Math.exp(-Math.pow((u-.71)/.055,8)-Math.pow((v-.34)/.18,8))*.40,level=Math.min(1,(v<.52?.38:.13)+soft),i=(y*w+x)*4;data[i]=Math.round(level*249);data[i+1]=Math.round(level*252);data[i+2]=Math.round(level*255);data[i+3]=255;}const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.mapping=THREE.EquirectangularReflectionMapping;t.colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;t.name='procedural-neutral-studio';return t;}
type V={p:number[],n:number[],c:number[]};
const dot=(a:number[],b:number[])=>a.reduce((s,x,i)=>s+x*b[i],0);
const sub=(a:number[],b:number[])=>a.map((x,i)=>x-b[i]);
function conformEdges(b:Batch):Batch{
 const points=new Map<string,number[]>();for(let i=0;i<b.p.length;i+=3){const p=b.p.slice(i,i+3);points.set(p.map(v=>v.toFixed(6)).join(','),p);}const all=[...points.values()],out:Batch={p:[],n:[],c:[]};
 const put=(v:V)=>{out.p.push(...v.p);out.n.push(...v.n);out.c.push(...v.c);};
 for(let i=0;i<b.p.length;i+=9){const vs=[0,3,6].map(j=>({p:b.p.slice(i+j,i+j+3),n:b.n.slice(i+j,i+j+3),c:b.c.slice(i+j,i+j+3)}));const ring:V[]=[];
 for(let k=0;k<3;k++){const a=vs[k],z=vs[(k+1)%3],d=sub(z.p,a.p),dd=dot(d,d);ring.push(a);if(dd<1e-12)continue;const hits:{t:number,p:number[]}[]=[];
 for(const p of all){const t=dot(sub(p,a.p),d)/dd;if(t<=1e-5||t>=1-1e-5)continue;const q=a.p.map((x,j)=>x+t*d[j]);if(Math.hypot(...sub(q,p))<1e-6)hits.push({t,p});}
 hits.sort((a,b)=>a.t-b.t);for(const {t,p} of hits)ring.push({p,n:a.n.map((v,j)=>v+(z.n[j]-v)*t),c:a.c.map((v,j)=>v+(z.c[j]-v)*t)});
 }
 if(ring.length===3){ring.forEach(put);continue;}const center:V={p:[0,1,2].map(j=>vs.reduce((s,v)=>s+v.p[j],0)/3),n:vs[0].n,c:[0,1,2].map(j=>vs.reduce((s,v)=>s+v.c[j],0)/3)};for(let k=0;k<ring.length;k++){put(center);put(ring[k]);put(ring[(k+1)%ring.length]);}
 }return out;
}
function splitAt(b:Batch,axis:number,cut:number){const out=batch();for(let i=0;i<b.p.length;i+=9){const tri=[0,3,6].map(j=>({p:b.p.slice(i+j,i+j+3),c:b.c.slice(i+j,i+j+3)}));const lo=Math.min(...tri.map(v=>v.p[axis])),hi=Math.max(...tri.map(v=>v.p[axis]));const polys:any[][]=[];if(lo>=cut-1e-8||hi<=cut+1e-8)polys.push(tri);else for(const sign of [-1,1]){const poly=[];for(let k=0;k<3;k++){const a=tri[k],z=tri[(k+1)%3],ia=sign*(a.p[axis]-cut)>=0,iz=sign*(z.p[axis]-cut)>=0;if(ia)poly.push(a);if(ia!==iz){const t=(cut-a.p[axis])/(z.p[axis]-a.p[axis]);poly.push({p:a.p.map((v,j)=>v+t*(z.p[j]-v)),c:a.c.map((v,j)=>v+t*(z.c[j]-v))});}}polys.push(poly);}for(const poly of polys)for(let k=1;k<poly.length-1;k++)for(const v of [poly[0],poly[k],poly[k+1]]){out.p.push(...v.p);out.c.push(...v.c);out.n.push(0,0,0);}}Object.assign(b,out);}
function clipY(poly:number[][],height:number,above:boolean){const out:number[][]=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],ia=above?a[1]>=height:a[1]<=height,ib=above?b[1]>=height:b[1]<=height;if(ia)out.push(a);if(ia!==ib){const t=(height-a[1])/(b[1]-a[1]);out.push([a[0]+t*(b[0]-a[0]),height]);}}return out;}
function bumper(b:Batch,sign:number,color:string){
 const xs=sign>0?[-.875,-.82,-.65,-.52,-.24,0,.24,.52,.65,.82,.875]:[-.875,-.82,-.65,0,.65,.82,.875],zf=(x:number)=>sign*((sign>0?2.68:2.69)-.13*Math.pow(Math.abs(x)/.875,4)),rings=xs.map(x=>{const z=zf(x);return [[x,.345,z],[x,.495,z],[x,.52,z-sign*.025],[x,.52,z-sign*.16],[x,.32,z-sign*.16],[x,.32,z-sign*.025]];});
 for(let j=0;j<rings.length-1;j++)for(let k=sign>0?1:0;k<6;k++){const n=(k+1)%6,pts=[rings[j][k],rings[j+1][k],rings[j+1][n],rings[j][n]];if(sign<0)pts.reverse();sheet(b,pts,color);}for(const j of [0,rings.length-1]){const pts=[...rings[j]];if((j>0)===(sign>0))pts.reverse();sheet(b,pts,color);}
 if(sign>0){const holes=[[-.52,-.24],[.24,.52]].map(([a,z])=>[[a,.37],[z,.37],[z,.46],[a,.46]]),front=batch();mappedFace(front,[...xs.map(x=>[x,.345]),...xs.slice().reverse().map(x=>[x,.495])],holes,p=>[p[0],p[1],0],color);for(const x of xs.slice(1,-1))splitAt(front,0,x);for(let i=0;i<front.p.length;i+=3)front.p[i+2]=zf(front.p[i]);b.p.push(...front.p);b.c.push(...front.c);b.n.push(...front.n);
 for(const h of holes){const f=h.map(p=>[p[0],p[1],zf(p[0])]),back=h.map(p=>[p[0],p[1],zf(p[0])-.065]);for(let i=0;i<4;i++){const j=(i+1)%4;sheet(b,[f[i],f[j],back[j],back[i]],'#444a43');}sheet(b,back,'#1e231f');}}
}

function vanShell(b:Batch,glass:Batch,trim:Batch){
 const white='#c7c9c7',liner='#545e54',dark='#303831';
 const outer=[[-2.5,.40],[-2.5,1.78],[-2.48625,1.87625],[-2.445,1.945],[-2.37625,1.98625],[-2.28,2.0],[1.43,2.0],[1.62,1.96],[1.73,1.89],[1.78,1.85],[2.35,1.02],[2.52,.90],[2.52,.40]];
 for(const axle of [1.50,-1.60]){const a0=Math.asin(.06/.39);for(let j=0;j<=12;j++){const a=a0+j*(Math.PI-2*a0)/12;outer.push([axle+.39*Math.cos(a),.34+.39*Math.sin(a)]);}}
 const inner=outer.map((p,i)=>{const a=outer[(i+outer.length-1)%outer.length],z=outer[(i+1)%outer.length],d1=[p[0]-a[0],p[1]-a[1]],d2=[z[0]-p[0],z[1]-p[1]],l1=Math.hypot(...d1),l2=Math.hypot(...d2),n1=[d1[1]/l1,-d1[0]/l1],n2=[d2[1]/l2,-d2[0]/l2],den=1+n1[0]*n2[0]+n1[1]*n2[1];return p.map((v,k)=>v+.035*(n1[k]+n2[k])/den);});
 const holes=[roundedLoop([[-2.28,1.06],[-2.28,1.80],[-.72,1.80],[-.72,1.06]],.09,2),roundedLoop([[-.60,1.06],[-.60,1.80],[.70,1.80],[.70,1.06]],.09,2),roundedLoop([[.83,1.06],[.83,1.80],[1.58,1.80],[2.13,1.06]],.085,2)];
 for(const side of [-1,1]){
  for(const [lo,hi] of [[-1,1.02],[1.02,1.86],[1.86,1.93],[1.93,3]]){const hs=lo===1.02?holes:[];mappedFace(b,clipY(clipY(outer,lo,true),hi,false),hs,p=>[side*.875,p[1],p[0]],white,side>0);mappedFace(b,clipY(clipY(inner,lo,true),hi,false),hs,p=>[side*.835,p[1],p[0]],liner,side<0);}
  for(const h of holes){for(let i=0;i<h.length;i++){const a=h[i],z=h[(i+1)%h.length],pts=[[side*.875,a[1],a[0]],[side*.835,a[1],a[0]],[side*.835,z[1],z[0]],[side*.875,z[1],z[0]]];if(side>0)pts.reverse();sheet(b,pts,white);}panel(glass,h,[],side*.870+(side<0?.008:0),.008,'#3a4849');frame(trim,h.map(p=>[side*.887,p[1],p[0]]),dark,.010,.009);}
 }
 for(let e=0;e<outer.length;e++){
  const crown=(k:number)=>[0,0,.07,.115,.145,.15,.15,.085,.025,0][k]||0;
  const map=(inside:boolean,p:number[])=>{const pr=inside?inner:outer,a=pr[e],z=pr[(e+1)%pr.length],u=p[0],t=p[1];return [(inside?.835:.875)*u,a[1]+(z[1]-a[1])*t+(crown(e)*(1-t)+crown((e+1)%outer.length)*t)*Math.cos(u*Math.PI/2)+.006*Math.max(0,1-Math.abs(Math.abs(u)-.40)/.035)*(crown(e)*(1-t)+crown((e+1)%outer.length)*t)/.15,a[0]+(z[0]-a[0])*t];};
  const windowLoop=e===9?roundedLoop([[-.89,.08],[.89,.08],[.89,.88],[-.89,.88]],.06,3):e===0?roundedLoop([[-.85,.49],[.85,.49],[.85,.88],[-.85,.88]],.06,3):[];
  if(windowLoop.length){const outline=[[-1,0],[1,0],[1,1],[-1,1]];mappedFace(b,outline,[windowLoop],p=>map(false,p),white,true);mappedFace(b,outline,[windowLoop],p=>map(true,p),liner);for(let j=0;j<windowLoop.length;j++){const a=windowLoop[j],z=windowLoop[(j+1)%windowLoop.length];sheet(b,[map(false,a),map(true,a),map(true,z),map(false,z)],white);}const pts=windowLoop.map(p=>map(false,p)).reverse(),center=[0,1,2].map(k=>pts.reduce((a,p)=>a+p[k],0)/pts.length),shrink=(p:number[],scale:number)=>p.map((v,k)=>center[k]+(v-center[k])*scale);slab(glass,pts.map(p=>e===9?shrink(p,.985):p).map(p=>[p[0],p[1]-(e===9?.006:0),p[2]+(e===0?.006:-.008)]),'#52676a');frame(trim,pts.map(p=>e===9?shrink(p,.97):p).map(p=>[p[0],p[1]+.002,p[2]+(e===9?.018:-.010)]),dark,e===9?.015:.012,e===9?.024:.008);
  }else{const us=[1,2,3,4,5,6,7,8,10,11].includes(e)?[-1,-.8333,-.6667,-.5,-.435,-.40,-.365,-.25,0,.25,.365,.40,.435,.5,.6667,.8333,1]:[-1,1];for(let j=0;j<us.length-1;j++){const u=us[j],z=us[j+1],pts=[[u,0],[z,0],[z,1],[u,1]];sheet(b,pts.map(p=>map(false,p)).reverse(),white);sheet(b,pts.map(p=>map(true,p)),liner);}}
 }
}
function lensAtlas(kind:'normal'|'albedo'|'orm'){
 const w=512,h=256,data=new Uint8Array(w*h*4);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4;let rgb=kind==='normal'?[128,128,255]:kind==='orm'?[255,102,89]:[255,255,255];
  if(x<256){const u=x/255,v=y/255,edge=Math.min(u,1-u,v,1-v),chamber=u<.67?u/.67:(u-.67)/.33,dx=chamber*2-1,dy=v*2-1,radial=Math.sqrt(dx*dx+dy*dy),flute=Math.sin(u*Math.PI*72),divider=Math.exp(-Math.pow((u-.67)/.018,2)),bulb=Math.exp(-(dx*dx+dy*dy)/.06),rim=Math.exp(-Math.pow((radial-.83)/.12,2));
   if(kind==='albedo'){const value=edge<.035?.48:.71+.12*rim+.13*bulb+.03*flute-.22*divider;rgb=[241*value,245*value,236*value];}
   if(kind==='orm')rgb=[255,edge<.035?100:60+12*divider,edge<.035?90:70];
   if(kind==='normal'){const nx=.12*dx+.09*flute,ny=.13*dy,n=new THREE.Vector3(nx,ny,1).normalize();rgb=[128+127*n.x,128+127*n.y,128+127*n.z];}
  }
  for(let k=0;k<3;k++)data[i+k]=Math.round(rgb[k]);data[i+3]=255;
 }
 const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.name='commuter-headlamp-chambers-'+kind;t.colorSpace=kind==='albedo'?THREE.SRGBColorSpace:THREE.NoColorSpace;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;
}
function lensUvs(g:THREE.BufferGeometry){const p=g.getAttribute('position'),c=g.getAttribute('color'),base=new THREE.Color('#c0c6bd'),uv:number[]=[];for(let i=0;i<p.count;i++){const x=Math.abs(p.getX(i)),y=p.getY(i),lens=Math.abs(c.getX(i)-base.r)+Math.abs(c.getY(i)-base.g)+Math.abs(c.getZ(i)-base.b)<.001;uv.push(lens?.015+.47*(x-.49)/.31:.75,lens?.05+.90*(y-.59)/.16:.5);}g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function glassAtlas(){const w=32,h=256,data=new Uint8Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const height=.90+y/255*1.30,band=1-Math.max(0,Math.min(1,(height-1.21)/.035)),i=(y*w+x)*4;data[i]=Math.round(255*(1-band)+48*band);data[i+1]=Math.round(255*(1-band)+57*band);data[i+2]=Math.round(255*(1-band)+53*band);data[i+3]=Math.round((.46+.50*band)*255);}const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.name='commuter-windscreen-cowl-alpha';t.colorSpace=THREE.SRGBColorSpace;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;}
function glassUvs(g:THREE.BufferGeometry){const p=g.getAttribute('position'),uv:number[]=[];for(let i=0;i<p.count;i++){const j=i-i%3,a=new THREE.Vector3().fromBufferAttribute(p,j),b=new THREE.Vector3().fromBufferAttribute(p,j+1),d=new THREE.Vector3().fromBufferAttribute(p,j+2),n=b.sub(a).cross(d.sub(a)).normalize(),front=p.getZ(i)>1.6&&Math.abs(n.z)>.55;uv.push(.5,front?Math.max(.01,Math.min(.99,(p.getY(i)-.90)/1.30)):.99);}g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function paintAtlas(roughness=false){const w=1536,h=512,data=new Uint8Array(w*h*4),base=[199,201,199],dust=[117,113,102],weather=[142,147,147];
 const hash=(x:number,y:number)=>{const n=Math.sin(x*127.1+y*311.7)*43758.5453;return n-Math.floor(n);},noise=(x:number,y:number)=>{const ix=Math.floor(x),iy=Math.floor(y);let u=x-ix,v=y-iy;u=u*u*(3-2*u);v=v*v*(3-2*v);return (hash(ix,iy)*(1-u)+hash(ix+1,iy)*u)*(1-v)+(hash(ix,iy+1)*(1-u)+hash(ix+1,iy+1)*u)*v;};
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const region=Math.floor(x/512),u=(x%512)/511,v=y/511,a=region===2?u*1.88-.94:u*5.4-2.7,b=region===1?v*1.88-.94:v*2.4,worldY=region===1?2.1:b,cloud=.65*noise(a*9,b*9)+.35*noise(a*23+17,b*23+17),fine=noise(a*95,b*95),road=1-Math.max(0,Math.min(1,(worldY-.35)/.48)),aged=(region===1?.18:.10)+cloud*(region===1?.24:.18)+(region===1?.12*noise(a*.8+30,b*45):0),mud=road*(.20+.45*cloud+.15*fine),i=(y*w+x)*4;
  let seam=0;if(region===0&&worldY>.44&&worldY<1.86){const d=Math.min(Math.abs(a-.77),Math.abs(a+.65));seam=Math.max(0,Math.min(1,(.009-d)/.007));}
  for(let k=0;k<3;k++){const faded=base[k]*(1-aged)+weather[k]*aged;data[i+k]=Math.round((faded*(1-mud)+dust[k]*mud)*(1-.78*seam));}
  if(roughness){data[i]=255;data[i+1]=Math.round(Math.min(.95,.48+.18*cloud+.24*mud)*255);data[i+2]=0;}
  if(y===h-1){data[i]=255;data[i+1]=roughness?150:255;data[i+2]=roughness?0:255;}data[i+3]=255;
 }
 const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.name='commuter-weathered-paint-'+(roughness?'roughness':'albedo');t.colorSpace=roughness?THREE.NoColorSpace:THREE.SRGBColorSpace;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;
}
function paintUvs(g:THREE.BufferGeometry){const p=g.getAttribute('position'),c=g.getAttribute('color'),uv:number[]=[],base=new THREE.Color('#c7c9c7');
 for(let i=0;i<p.count;i++){const painted=Math.abs(c.getX(i)-base.r)+Math.abs(c.getY(i)-base.g)+Math.abs(c.getZ(i)-base.b)<.001;if(!painted){uv.push(.5,511.5/512);continue;}c.setXYZ(i,1,1,1);const j=i-i%3,a=new THREE.Vector3().fromBufferAttribute(p,j),b=new THREE.Vector3().fromBufferAttribute(p,j+1),d=new THREE.Vector3().fromBufferAttribute(p,j+2),n=b.sub(a).cross(d.sub(a)).normalize(),roof=Math.abs(n.y)>.60&&p.getY(i)>1.8,side=!roof&&Math.abs(n.x)>Math.abs(n.z),region=roof?1:side?0:2,u=region===2?(p.getX(i)+.94)/1.88:(p.getZ(i)+2.7)/5.4,v=roof?(p.getX(i)+.94)/1.88:p.getY(i)/2.4;uv.push((region+Math.max(.002,Math.min(.998,u)))/3,Math.max(.002,Math.min(.99,v)));}
 g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;
}
function interiorSurface(kind:'orm'|'albedo'|'normal'){const w=512,h=768,data=new Uint8Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4;data[i]=data[i+1]=data[i+2]=255;
 if(kind==='orm'){data[i+1]=Math.round(x/511*255);data[i+2]=Math.round(y/255*255);}if(kind==='normal'){data[i]=data[i+1]=128;data[i+2]=255;}
 if(y>=256&&y<512){const u=x/512,v=(y-256)/255,axial=(v-.5)*.25,tread=Math.max(0,Math.min(1,(.055-Math.abs(axial))/.014)),phase=u*48+(v-.5)*1.8,frac=phase-Math.floor(phase),cut=Math.exp(-Math.pow((frac-.50)/.060,2)),track=Math.exp(-Math.pow((Math.abs(axial)-.020)/.003,2)),grain=Math.sin(x*127.1+y*311.7)*43758.5453,fine=grain-Math.floor(grain);
  if(kind==='albedo'){const c=Math.round(235+12*fine-65*tread*Math.max(cut,track));data[i]=c;data[i+1]=c;data[i+2]=c;}
  if(kind==='orm'){data[i]=255;data[i+1]=Math.round((.87+.10*fine)*255);data[i+2]=0;}
  if(kind==='normal'){const nx=tread*.48*cut*(frac<.50?-1:1),ny=tread*.32*track*(Math.abs(axial)<.020?-1:1)*Math.sign(axial),n=new THREE.Vector3(nx,ny,1).normalize();data[i]=Math.round((n.x*.5+.5)*255);data[i+1]=Math.round((n.y*.5+.5)*255);data[i+2]=Math.round((n.z*.5+.5)*255);}
 }
 if(y>=512){const u=x/511,v=(y-512)/255,hash=Math.sin(x*127.1+y*311.7)*43758.5453,grain=hash-Math.floor(hash),panel=Math.pow(Math.max(0,Math.cos(u*Math.PI*10)),14),seam=Math.exp(-Math.pow((Math.min(u,1-u)-.045)/.009,2)),shade=.87+.08*grain-.07*panel-.11*seam,crease=Math.sin(v*73+Math.sin(u*31));
  if(kind==='albedo'){data[i]=Math.round(255*shade);data[i+1]=Math.round(255*shade);data[i+2]=Math.round(255*shade);}
  if(kind==='orm'){data[i]=255;data[i+1]=Math.round(255*(.72+.10*grain));data[i+2]=0;}
  if(kind==='normal'){const n=new THREE.Vector3(.025*Math.sin(u*Math.PI*10),.018*crease,1).normalize();data[i]=Math.round(128+127*n.x);data[i+1]=Math.round(128+127*n.y);data[i+2]=Math.round(128+127*n.z);}
 }data[i+3]=255;}
 const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.name='commuter-rubber-steel-vinyl-'+kind;t.colorSpace=kind==='albedo'?THREE.SRGBColorSpace:THREE.NoColorSpace;t.wrapS=THREE.RepeatWrapping;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;}
function interiorUvs(g:THREE.BufferGeometry,wheel=false,drum=false){const p=g.getAttribute('position'),c=g.getAttribute('color'),uv:number[]=[],vinyl=new THREE.Color('#46514b');
 for(let i=0;i<p.count;i++){if(!wheel&&!drum&&Math.abs(c.getX(i)-vinyl.r)+Math.abs(c.getY(i)-vinyl.g)+Math.abs(c.getZ(i)-vinyl.b)<.001){const center=p.getX(i)>0?.42:-.42,u=THREE.MathUtils.clamp((p.getX(i)-center)/.52+.5,.01,.99),v=THREE.MathUtils.clamp((p.getY(i)-.55)/.80,.01,.99);uv.push(u,(512.5+255*v)/768);continue;}const r=Math.hypot(p.getY(i),p.getZ(i)),steel=wheel&&r<.212&&c.getX(i)>.12,hash=Math.sin(Math.floor(p.getX(i)*500)*127.1+Math.floor(p.getY(i)*500)*311.7+Math.floor(p.getZ(i)*500)*71.3)*43758.5453,grain=hash-Math.floor(hash),dust=wheel?.12+.08*grain:0;
  if(wheel){const d=new THREE.Color('#685d46');c.setXYZ(i,c.getX(i)*(1-dust)+d.r*dust,c.getY(i)*(1-dust)+d.g*dust,c.getZ(i)*(1-dust)+d.b*dust);}
  const rough=drum?.98:steel?.57+.10*grain:wheel?.93:.85,metal=steel?.50:0;if(wheel&&r>.22){let u=Math.atan2(p.getZ(i),p.getY(i))/(Math.PI*2)+.5;const start=i-i%3,angles=[0,1,2].map(j=>Math.atan2(p.getZ(start+j),p.getY(start+j))/(Math.PI*2)+.5);if(Math.max(...angles)-Math.min(...angles)>.5&&u<.5)u+=1;uv.push(u,(256.5+255*Math.max(.002,Math.min(.998,(p.getX(i)+.125)/.25)))/768);}else uv.push((Math.round(rough*511)+.5)/512,(Math.round(metal*255)+.5)/768);
 }g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
export function createObjectModel(spec:any={},options:any={}):THREE.Group{
 const root=new THREE.Group();root.name='toyota-commuter-van';const body=batch(),trim=batch(),glass=batch(),interior=batch(),ac=batch(),bumpers=batch(),wheel=batch();
 vanShell(body,glass,trim);const white='#c7c9c7',dark='#303831',silver='#9a9b91';
 // Separate AC casing is a rounded closed profile, attached to the roof.
 const acOutline=roundedLoop([[-.53,-.38],[.53,-.38],[.53,.38],[-.53,.38]],.13,3);const acShape=new THREE.Shape(acOutline.map(p=>new THREE.Vector2(...p as [number,number])));const acGeom=new THREE.ExtrudeGeometry(acShape,{depth:.10,bevelEnabled:true,bevelSize:.032,bevelThickness:.032,bevelSegments:2,steps:1});acGeom.rotateX(-Math.PI/2);const ap=acGeom.getAttribute('position');for(let i=0;i<ap.count;i++){const z=ap.getZ(i),t=Math.max(0,Math.min(1,(z+.30)/.68)),height=Math.max(0,ap.getY(i));ap.setX(i,ap.getX(i)*(1-.10*t));ap.setY(i,ap.getY(i)-.45*height*t*t);}acGeom.computeVertexNormals();add(ac,acGeom,white,[0,2.148,-1.60]);const hatchSeal=new THREE.Color('#787d75');for(let i=0;i<ac.p.length;i+=3)if(ac.p[i+1]<2.146){ac.c[i]=hatchSeal.r;ac.c[i+1]=hatchSeal.g;ac.c[i+2]=hatchSeal.b;}
 bumper(bumpers,1,white);bumper(bumpers,-1,white);
 const grilleProfile=[[2.515,.60],[2.515,.76],[2.565,.76]];for(let j=15;j>=0;j--)grilleProfile.push([j%4===1?2.572:2.558,.60+j*.01]);panel(trim,grilleProfile,[],.45,.90,dark);
 for(const side of [-1,1]){
  const lens=roundedLoop([[side*.49,.59,2.55],[side*.80,.59,2.55],[side*.80,.75,2.55],[side*.49,.75,2.55]],.025,1);if(side<0)lens.reverse();slab(trim,lens,'#c0c6bd',.025);frame(trim,lens.map(p=>[side*.645+(p[0]-side*.645)*1.04,.67+(p[1]-.67)*1.11,p[2]+.002]),dark,.025,.014);box(trim,[.04,.11,.03],[side*.835,.67,2.545],'#ad8148');
  box(trim,[.05,.24,.03],[side*.85,.89,-2.52],'#8c342b');
  box(trim,[.027,.03,.20],[side*.903,.96,1.04],silver);box(trim,[.03,.15,.055],[side*.903,.94,.54],silver);
  box(trim,[.018,.02,1.70],[side*.902,1.00,-1.40],dark);
  for(const z of [-1.49,.05,1.42]){const start=trim.p.length;add(trim,new THREE.BoxGeometry(.012,.64,.018,1,1,3),dark,[side*.881,1.43,z]);const chrome=new THREE.Color(silver);for(let i=start;i<trim.p.length;i+=9){const middle=(trim.p[i+2]+trim.p[i+5]+trim.p[i+8])/3;if(Math.abs(middle-z)<.0031&&side*trim.n[i]>.9)for(let j=0;j<9;j+=3){trim.c[i+j]=chrome.r;trim.c[i+j+1]=chrome.g;trim.c[i+j+2]=chrome.b;}}if(z!==1.42)box(trim,[.016,.055,.028],[side*.875,1.38,z+.035],dark);}
  const mirrorShape=new THREE.Shape(roundedLoop([[-.05,-.125],[.05,-.125],[.05,.125],[-.05,.125]],.025,2).map(p=>new THREE.Vector2(...p as [number,number])));add(trim,new THREE.ExtrudeGeometry(mirrorShape,{depth:.12,bevelEnabled:false,steps:1}),dark,[side*.89,1.13,2.17]);
  // Stamped color bands sit on closed thin strips, with visible separation from body.
  for(const [j,color] of ['#977071','#b1a378','#759083'].entries())box(bumpers,[.003,.022,4.50],[side*.880,.84+j*.026,-.12],color);
 }
 box(trim,[.36,.12,.020],[0,.42,2.68],'#989c94');
 // Cabin floor is already part of the closed body shell.
 for(const side of [-1,1]){tube(trim,[side<0?-.62:.10,1.12,2.303],[side<0?-.16:.55,1.21,2.250],.007,dark,6);for(const axle of [1.5,-1.6])box(interior,[.17,.27,.024],[side*.81,.255,axle-.375],dark,[-.08,0,0]);box(interior,[.13,.035,.38],[side*.89,.3825,2.08],dark);}
 // Connected seat cushions and backs avoid overlapping boxes within the batch.
 for(const z of [1.20,.1,-1.02,-2.02])for(const x of [-.42,.42]){const shape=new THREE.Shape(roundedLoop([[-.22,.57],[.23,.57],[.23,.72],[-.13,.72],[-.20,1.32],[-.30,1.32]],.035,2).map(p=>new THREE.Vector2(...p as [number,number])));const g=new THREE.ExtrudeGeometry(shape,{depth:.48,bevelEnabled:true,bevelSize:.018,bevelThickness:.018,bevelSegments:2,steps:1});g.rotateY(-Math.PI/2);add(interior,g,'#46514b',[x+.24,0,z]);}
 box(interior,[1.48,.16,.30],[0,.96,2.07],'#515c56');
 const steeringShape=new THREE.Shape(Array.from({length:20},(_,i)=>new THREE.Vector2(.145*Math.cos(i*Math.PI/10),.145*Math.sin(i*Math.PI/10))));
 for(let h=0;h<3;h++){const pts=[];for(let j=0;j<4;j++){const a=h*Math.PI*2/3+.20+j*(Math.PI*2/3-.40)/3;pts.push(new THREE.Vector2(.118*Math.cos(a),.118*Math.sin(a)));}for(let j=3;j>=0;j--){const a=h*Math.PI*2/3+.20+j*(Math.PI*2/3-.40)/3;pts.push(new THREE.Vector2(.045*Math.cos(a),.045*Math.sin(a)));}steeringShape.holes.push(new THREE.Path(pts));}
 add(interior,new THREE.ExtrudeGeometry(steeringShape,{depth:.022,bevelEnabled:false,steps:1}),dark,[-.43,1.20,1.82],[-.40,0,0]);

 const profile=[[.206,-.095],[.205,-.12],[.235,-.125],[.285,-.10],[.34,-.03],[.34,.03],[.285,.10],[.235,.125],[.205,.12],[.206,.095],[.206,-.095]];
 const wp=(i:number,j:number)=>{const [r,x]=profile[i],a=j*Math.PI/12;return [x,r*Math.sin(a),r*Math.cos(a)];};
 for(let i=0;i<9;i++)for(let j=0;j<24;j++)sheet(wheel,[wp(i+1,j),wp(i+1,j+1),wp(i,j+1),wp(i,j)],i===0||i>=8?silver:'#343630');
 const circle=(r:number,n:number,cy=0,cz=0)=>Array.from({length:n},(_,j)=>[cy+r*Math.cos(j*Math.PI*2/n),cz+r*Math.sin(j*Math.PI*2/n)]);
 const outside=circle(.206,24),vents=Array.from({length:12},(_,j)=>circle(.0135,5,.16*Math.cos(j*Math.PI/6),.16*Math.sin(j*Math.PI/6))),hub=circle(.055,8),nuts=Array.from({length:6},(_,j)=>circle(.012,6,.09*Math.sin(j*Math.PI/3),.09*Math.cos(j*Math.PI/3)));
 for(const side of [-1,1]){
  mappedFace(wheel,outside,[...vents,hub,...nuts],p=>[side*.095,p[0],p[1]],silver,side<0);
  for(const [loop,rise,color] of [[hub,.050,silver],...nuts.map(n=>[n,.014,'#797d73'])] as [number[][],number,string][]){
   const front=loop.map(p=>[side*(.095+rise),p[0],p[1]]);for(let j=0;j<loop.length;j++){const k=(j+1)%loop.length,pts=[[side*.095,...loop[j]],[side*.095,...loop[k]],front[k],front[j]];if(side<0)pts.reverse();sheet(wheel,pts,color);}sheet(wheel,side<0?front.reverse():front,color);
  }
 }
 for(const loop of vents)for(let j=0;j<loop.length;j++){const k=(j+1)%loop.length;sheet(wheel,[[-.095,...loop[j]],[.095,...loop[j]],[.095,...loop[k]],[-.095,...loop[k]]],'#343831');}
 for(let i=0;i<wheel.p.length;i+=3){const r=Math.hypot(wheel.p[i+1],wheel.p[i+2]);if(r<.206){const bowl=.009*Math.exp(-Math.pow((r-.13)/.034,2))*Math.max(0,Math.min(1,(.206-r)/.015));wheel.p[i]-=Math.sign(wheel.p[i])*bowl;}}
 // Stamped lower side-panel crown and crease are continuous with both shell skins.
 const belt=[[.40,0],[.66,.015],[1.02,0]];
 for(const [height] of belt.slice(1))splitAt(body,1,height);
 for(const b of [body,trim,glass,interior,bumpers])for(let i=0;i<b.p.length;i+=3){const y=b.p[i+1],x=b.p[i];if(y<=.40||y>=1.02)continue;let offset=0;for(let j=0;j<belt.length-1;j++)if(y>=belt[j][0]&&y<=belt[j+1][0]){const t=(y-belt[j][0])/(belt[j+1][0]-belt[j][0]);offset=belt[j][1]*(1-t)+belt[j+1][1]*t;break;}b.p[i]*=1+offset/.875;}
 splitAt(body,2,2.10);splitAt(body,2,2.50);
 const nose=batch(),rest=batch();for(let i=0;i<body.p.length;i+=9){const b=Math.min(body.p[i+2],body.p[i+5],body.p[i+8])>=2.09999?nose:rest;b.p.push(...body.p.slice(i,i+9));b.n.push(...body.n.slice(i,i+9));b.c.push(...body.c.slice(i,i+9));}for(const cut of [-.5,0,.5])splitAt(nose,0,cut);Object.assign(body,{p:[...rest.p,...nose.p],n:[...rest.n,...nose.n],c:[...rest.c,...nose.c]});
 body.p=body.p.map(v=>Math.round(v*1e5)/1e5);Object.assign(body,conformEdges(body));
 for(const b of [body,trim,glass,interior])for(let i=0;i<b.p.length;i+=3){const z=b.p[i+2],x=b.p[i];if(z>2.10)b.p[i+2]-=.13*Math.pow(Math.abs(x)/.875,4)*Math.min(1,(z-2.10)/.40);}
 for(const b of [body,trim,glass,interior])for(let i=0;i<b.p.length;i+=3){const y=b.p[i+1],t=Math.max(0,Math.min(1,(y-1.08)/.92));b.p[i]*=1-.17*t*t;}
 const solid=conformEdges(body);for(const b of [solid,trim,glass,interior,ac,bumpers,wheel])b.p=b.p.map(Math.fround);for(const b of [solid,trim,interior,ac,bumpers,wheel])weldNormals(b);
 for(let i=0;i<wheel.p.length;i+=3){const x=wheel.p[i],y=wheel.p[i+1],z=wheel.p[i+2],r=Math.hypot(y,z),b=.009*Math.exp(-Math.pow((r-.13)/.034,2))*Math.max(0,Math.min(1,(.206-r)/.015));if(r>.058&&r<.19&&Math.abs(Math.abs(x)-(.095-b))<.0001&&Math.abs(wheel.n[i])>.3){const derivative=-2*(r-.13)/(.034*.034)*b,n=new THREE.Vector3(Math.sign(x),derivative*y/r,derivative*z/r).normalize();wheel.n.splice(i,3,n.x,n.y,n.z);}}
 const mats={paint:new THREE.MeshPhysicalMaterial({color:0xffffff,vertexColors:true,roughness:.48,clearcoat:.2,clearcoatRoughness:.4,side:THREE.DoubleSide}),trim:new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.40,metalness:.35,side:THREE.DoubleSide}),glass:new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.12,transparent:true,opacity:.46,depthWrite:false,side:THREE.DoubleSide}),interior:new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.85,side:THREE.DoubleSide})};const env=studioEnvironment();for(const m of Object.values(mats)){m.envMap=env;m.envMapIntensity=.75;}mats.trim.normalMap=lensAtlas('normal');mats.trim.map=lensAtlas('albedo');const lensOrm=lensAtlas('orm');mats.trim.roughnessMap=lensOrm;mats.trim.metalnessMap=lensOrm;mats.trim.roughness=1;mats.trim.metalness=1;mats.trim.normalScale.set(.55,.55);mats.glass.forceSinglePass=true;mats.paint.map=paintAtlas();mats.paint.roughnessMap=paintAtlas(true);mats.paint.roughness=1;const orm=interiorSurface('orm');mats.interior.map=interiorSurface('albedo');mats.interior.normalMap=interiorSurface('normal');mats.interior.roughnessMap=orm;mats.interior.metalnessMap=orm;mats.interior.roughness=1;mats.interior.metalness=1;mats.glass.map=glassAtlas();mats.glass.opacity=1;
 for(const [id,b,m] of [['body',solid,mats.paint],['trim',trim,mats.trim],['glazing',glass,mats.glass],['interior',interior,mats.interior],['roof-ac',ac,mats.paint],['bumpers',bumpers,mats.paint]] as any[]){const node=new THREE.Group();node.name=id;const mesh=new THREE.Mesh(id==='trim'?lensUvs(geometry(b)):id==='glazing'?glassUvs(geometry(b)):m===mats.paint?paintUvs(geometry(b)):interiorUvs(geometry(b)),m);mesh.name=id+'-geometry';node.add(mesh);root.add(node);}
 const wm=new THREE.InstancedMesh(interiorUvs(geometry(wheel),true),mats.interior,4);wm.name='wheels';root.add(wm);const pivots:THREE.Group[]=[];let idx=0;
 for(const [axle,z] of [['front',1.50],['rear',-1.60]] as any[])for(const [side,x] of [['l',.81],['r',-.81]] as any[]){const pivot=new THREE.Group();pivot.name=`wheel-${axle}-${side}`;pivot.position.set(x,.34,z);root.add(pivot);pivots.push(pivot);pivot.updateMatrix();wm.setMatrixAt(idx++,pivot.matrix);}
 const drum=batch();add(drum,new THREE.CylinderGeometry(.195,.195,.035,9), '#151914',[0,0,0],[0,0,Math.PI/2]);const dm=new THREE.InstancedMesh(interiorUvs(geometry(drum),false,true),mats.interior,4);dm.name='brake-drums';root.add(dm);pivots.forEach((p,i)=>dm.setMatrixAt(i,p.matrix));
 const syncWheels=()=>{pivots.forEach((p,i)=>{p.updateMatrix();wm.setMatrixAt(i,p.matrix);dm.setMatrixAt(i,p.matrix);});wm.instanceMatrix.needsUpdate=true;dm.instanceMatrix.needsUpdate=true;};wm.onBeforeRender=syncWheels;dm.onBeforeRender=syncWheels;
 root.userData.sculptRuntime={nodes:12,pivots:[root.name,...pivots.map(p=>p.name)],sockets:[],colliders:[],destructionGroups:[]};root.userData.buildPass='blockout';root.userData.qualityStatus='unreviewed';return root;
}

export interface ProceduralModelOptions { baseUrl?: string; [key: string]: unknown; }
export function createModel(options: ProceduralModelOptions = {}): THREE.Group { return createObjectModel(null, options); }
