import * as THREE from 'three';
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

// Independently authored procedural geometry. Meshy data is evidence only.
// All dimensions and assembly choices originate in object-sculpt-spec.json vehicleAssembly.
const DEFAULT = {width:1.87,height:1.79,length:5.3,wheelRadius:.38,wheelWidth:.23,frontAxle:1.55,rearAxle:-1.55,hoodFront:2.35,hoodRear:1.155,cabRear:-.9,bedRear:-2.15,hoodHeight:1.04,roofHeight:1.79,beltHeight:1.04,bedFloor:.72,bedRail:1.17,windshieldBase:1.08,windshieldTop:.65,roofFront:.65,roofRear:-.76,roofHalfWidth:.74,beltHalfWidth:.87,bodyHalfWidth:.89,tailgateLength:.5,fenderArchExponent:.72};
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
function cargoTub(b:Batch,color:string){const wo=.85,wi=.80,yb=.69,yi=.75,yt=1.17,zr=-2.15,zf=-.90,zi=-.94;
 sheet(b,[[-wo,yb,zr],[wo,yb,zr],[wo,yb,zf],[-wo,yb,zf]],color);
 sheet(b,[[-wo,yb,zf],[wo,yb,zf],[wo,yt,zf],[-wo,yt,zf]],color);
 sheet(b,[[-wi,yi,zi],[-wi,yt,zi],[wi,yt,zi],[wi,yi,zi]],color);
 sheet(b,[[-wi,yi,zr],[-wi,yi,zi],[wi,yi,zi],[wi,yi,zr]],color);
 for(const side of [-1,1]){let outer=[[side*wo,yb,zr],[side*wo,yt,zr],[side*wo,yt,zf],[side*wo,yb,zf]],inner=[[side*wi,yi,zr],[side*wi,yi,zi],[side*wi,yt,zi],[side*wi,yt,zr]];if(side<0){outer.reverse();inner.reverse();}sheet(b,outer,color);sheet(b,inner,color);
 let rim=[[side*wi,yt,zr],[side*wi,yt,zi],[side*wo,yt,zi],[side*wo,yt,zr]];if(side<0)rim.reverse();sheet(b,rim,color);
 const xa=Math.min(side*wi,side*wo),xb=Math.max(side*wi,side*wo);sheet(b,[[xa,yi,zr],[xa,yt,zr],[xb,yt,zr],[xb,yi,zr]],color);}
 sheet(b,[[-wo,yt,zi],[-wo,yt,zf],[wo,yt,zf],[wo,yt,zi]],color);
 sheet(b,[[-wo,yb,zr],[-wo,yi,zr],[wo,yi,zr],[wo,yb,zr]],color);
}
function mappedFace(b:Batch,outline:number[][],holes:number[][][],map:(p:number[])=>number[],color:string,flip=false){const sh=new THREE.Shape(outline.map(p=>new THREE.Vector2(...p as [number,number])));for(const h of holes)sh.holes.push(new THREE.Path(h.map(p=>new THREE.Vector2(...p as [number,number]))));const g=new THREE.ShapeGeometry(sh,1),p=g.getAttribute('position'),idx=g.index!;for(let i=0;i<idx.count;i+=3){const pts=[0,1,2].map(j=>{const k=idx.getX(i+j);return map([p.getX(k),p.getY(k)]);});if(flip)pts.reverse();sheet(b,pts,color);}g.dispose();}
function splitAt(b:Batch,axis:number,cut:number){const out=batch();for(let i=0;i<b.p.length;i+=9){const tri=[0,3,6].map(j=>({p:b.p.slice(i+j,i+j+3),c:b.c.slice(i+j,i+j+3)}));const lo=Math.min(...tri.map(v=>v.p[axis])),hi=Math.max(...tri.map(v=>v.p[axis]));const polys:any[][]=[];if(lo>=cut-1e-8||hi<=cut+1e-8)polys.push(tri);else for(const sign of [-1,1]){const poly=[];for(let k=0;k<3;k++){const a=tri[k],z=tri[(k+1)%3],ia=sign*(a.p[axis]-cut)>=0,iz=sign*(z.p[axis]-cut)>=0;if(ia)poly.push(a);if(ia!==iz){const t=(cut-a.p[axis])/(z.p[axis]-a.p[axis]);poly.push({p:a.p.map((v,j)=>v+t*(z.p[j]-v)),c:a.c.map((v,j)=>v+t*(z.c[j]-v))});}}polys.push(poly);}for(const poly of polys)for(let k=1;k<poly.length-1;k++)for(const v of [poly[0],poly[k],poly[k+1]]){out.p.push(...v.p);out.c.push(...v.c);out.n.push(0,0,0);}}Object.assign(b,out);}
function cabShell(b:Batch,color:string){
 const outer=[[-.90,.72],[-.90,1.62],[-.73,1.72],[.64,1.72],[1.14,1.081],[1.14,.72]];
 const inner=outer.map(p=>[.04+(p[0]-.04)*.95,1.38+(p[1]-1.38)*.91]);
 const holes=[roundedLoop([[-.73,1.13],[-.73,1.64],[-.1,1.64],[-.1,1.13]],.07),roundedLoop([[-.01,1.13],[-.01,1.64],[.56,1.64],[.96,1.13]],.07)];
 for(const side of [-1,1]){mappedFace(b,outer,holes,p=>[side*.82,p[1],p[0]],color,side>0);mappedFace(b,inner,holes,p=>[side*.78,p[1],p[0]],'#686c63',side<0);
 for(const h of holes)for(let i=0;i<h.length;i++){const a=h[i],z=h[(i+1)%h.length];const pts=[[side*.82,a[1],a[0]],[side*.78,a[1],a[0]],[side*.78,z[1],z[0]],[side*.82,z[1],z[0]]];if(side>0)pts.reverse();sheet(b,pts,color);}}
 const windows:{front:number[][],rear:number[][]}={front:[],rear:[]};
 for(let edge=0;edge<outer.length;edge++){
 const crownAt=(k:number)=>k===2||k===3?.04:0;
 const map=(inside:boolean,p:number[])=>{const prof=inside?inner:outer,a=prof[edge],z=prof[(edge+1)%prof.length],u=p[0],t=p[1],crown=edge===3?.04*Math.max(0,1-t/.12):crownAt(edge)*(1-t)+crownAt((edge+1)%outer.length)*t;return [(inside?.78:.82)*u,a[1]+(z[1]-a[1])*t+crown*Math.cos(u*Math.PI/2),a[0]+(z[0]-a[0])*t];};
 const outline=[];for(let i=0;i<=12;i++)outline.push([-1+i/6,edge===3?.12:0]);for(let i=12;i>=0;i--)outline.push([-1+i/6,1]);
 if(edge===3)for(let k=0;k<12;k++){const u=-1+k/6,z=u+1/6,pts=[[u,0],[z,0],[z,.12],[u,.12]];sheet(b,pts.map(p=>map(false,p)).reverse(),color);sheet(b,pts.map(p=>map(true,p)),'#686c63');}
 const windowLoop=(edge===0||edge===3)?roundedLoop([[-.86,edge===0?.48:.15],[.86,edge===0?.48:.15],[.86,.90],[-.86,.90]],.055,2):[];
 if(windowLoop.length){mappedFace(b,outline,[windowLoop],p=>map(false,p),color,true);mappedFace(b,outline,[windowLoop],p=>map(true,p),'#686c63',false);}else for(let k=0;k<12;k++){const u=-1+k/6,z=u+1/6,pts=[[u,0],[z,0],[z,1],[u,1]];sheet(b,pts.map(p=>map(false,p)).reverse(),color);sheet(b,pts.map(p=>map(true,p)),'#686c63');}
 if(windowLoop.length){for(let i=0;i<windowLoop.length;i++){const a=windowLoop[i],z=windowLoop[(i+1)%windowLoop.length];sheet(b,[map(false,a),map(true,a),map(true,z),map(false,z)],color);}windows[edge===3?'front':'rear']=windowLoop.map(p=>map(false,p)).reverse();}
 }
 return windows;
}
function weldNormals(b:Batch,crease=Math.PI){const at=new Map<string,{n:THREE.Vector3,w:number}[]>(),faceNormals:THREE.Vector3[]=[];
 for(let i=0;i<b.p.length;i+=9){const v=[0,3,6].map(j=>new THREE.Vector3(...b.p.slice(i+j,i+j+3) as [number,number,number])),n=v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0])).normalize();faceNormals.push(n);for(let k=0;k<3;k++){const a=v[(k+1)%3].clone().sub(v[k]),c=v[(k+2)%3].clone().sub(v[k]);if(a.lengthSq()<1e-14||c.lengthSq()<1e-14)continue;const key=v[k].toArray().map(x=>x.toFixed(6)).join(','),faces=at.get(key)||[];faces.push({n,w:a.angleTo(c)});at.set(key,faces);}}
 const threshold=Math.cos(crease);for(let i=0;i<b.p.length;i+=3){const base=faceNormals[Math.floor(i/9)],key=b.p.slice(i,i+3).map(x=>x.toFixed(6)).join(','),sum=new THREE.Vector3();for(const f of at.get(key)||[])if(base.dot(f.n)>threshold-1e-6)sum.addScaledVector(f.n,f.w);sum.normalize();b.n[i]=sum.x;b.n[i+1]=sum.y;b.n[i+2]=sum.z;}
}
function cabinAtlas(kind:'albedo'|'orm'|'normal'){
 const w=512,h=512,data=new Uint8Array(w*h*4),noise=(x:number,y:number)=>{const a=Math.sin(x*127.1+y*311.7)*43758.5453;return a-Math.floor(a);};
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  const region=Math.floor(x/256)+2*Math.floor(y/256),u=(x%256)/255,v=(y%256)/255,grain=noise(x,y),cloud=.5+.5*Math.sin(u*17+Math.sin(v*11))*Math.sin(v*23-u*5),i=(y*w+x)*4;
  let rgb=[255,255,255],rough=.85,metal=0,nx=0,ny=0;
  if(region===0){const phase=u*Math.PI*2*48+(v-.5)*5,groove=Math.pow(Math.max(0,Math.cos(phase)),16),mud=.13+.16*cloud+.04*grain;rgb=[48,51,45].map((c,k)=>c*(1-mud)+[128,116,87][k]*mud);rgb=rgb.map(c=>c*(1-.16*groove));rough=.88+.07*grain;nx=.13*Math.sin(phase)*Math.pow(Math.max(0,Math.cos(phase)),6);ny=.025*(grain-.5);}
  if(region===1){const radius=Math.hypot(u-.5,v-.5),rust=.04+.10*cloud,edge=Math.exp(-Math.pow((radius-.34)/.015,2));rgb=[151,156,146].map((c,k)=>c*(1-rust)+[130,99,60][k]*rust);rgb=rgb.map(c=>c*(.94+.05*grain-.13*edge));rough=.39+.18*cloud;metal=.72;nx=.009*Math.sin(u*251);ny=.009*Math.sin(v*211);for(let j=0;j<6;j++){const a=j*Math.PI/3,bx=.5+.10/.55*Math.cos(a),by=.5+.10/.55*Math.sin(a),dx=u-bx,dy=v-by,r=Math.hypot(dx,dy),angle=Math.atan2(dy,dx),hex=r*Math.cos(((angle+Math.PI*4)%(Math.PI/3))-Math.PI/6);if(hex<.020){const bevel=Math.min(1,Math.max(0,(hex-.015)/.005));rgb=[168,172,161].map(c=>c*(1-.22*bevel));rough=.34;nx=r?dx/r*.32*bevel:0;ny=r?dy/r*.32*bevel:0;}}}
  if(region===2){const seam=Math.exp(-Math.pow((Math.min(u,1-u)-.045)/.012,2)),channel=Math.pow(Math.max(0,Math.cos(u*Math.PI*8)),18),shade=.90+.06*grain-.10*seam-.05*channel;rgb=[112,117,107].map(c=>c*shade);rough=.75+.1*grain;nx=.025*Math.sin(u*Math.PI*8);ny=.012*Math.sin(v*83);}
  if(region===3){const worn=.08+.10*cloud;rgb=[255,255,255].map((c,k)=>c*(1-worn)+[197,182,154][k]*worn);rough=.78+.12*grain;nx=.015*(grain-.5);ny=.015*Math.sin(u*97);}
  if(kind==='orm')rgb=[255,255*rough,255*metal];if(kind==='normal'){const n=new THREE.Vector3(nx,ny,1).normalize();rgb=[128+127*n.x,128+127*n.y,128+127*n.z];}
  for(let k=0;k<3;k++)data[i+k]=Math.round(rgb[k]);data[i+3]=255;
 }
 const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.name='dmax-rubber-steel-cabin-'+kind;t.colorSpace=kind==='albedo'?THREE.SRGBColorSpace:THREE.NoColorSpace;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;
}
function cabinUvs(g:THREE.BufferGeometry,wheel=false){const p=g.attributes.position,c=g.attributes.color,uv:number[]=[],seat=new THREE.Color('#70756b');
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),isSeat=Math.abs(c.getX(i)-seat.r)+Math.abs(c.getY(i)-seat.g)+Math.abs(c.getZ(i)-seat.b)<.001;let region=3,u=(z+2.2)/3.4,v=x/1.7+.5;
  if(wheel){region=Math.hypot(y,z)>.275?0:1;if(region===0){u=Math.acos(Math.cos(Math.atan2(y,z)))/Math.PI;v=x/.30+.5;}else{u=y/.55+.5;v=z/.55+.5;}c.setXYZ(i,1,1,1);}
  else if(isSeat){region=2;u=(x-(x>0?.38:-.38))/.55+.5;v=(y-.73)/.73;c.setXYZ(i,1,1,1);}
  u=THREE.MathUtils.clamp(u,.006,.994);v=THREE.MathUtils.clamp(v,.006,.994);uv.push((region%2+u)/2,(Math.floor(region/2)+v)/2);
 }g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;
}
// Dirt chroma mask sampled from the de-lit authoritative lower-door crop.
// No source geometry or photographed lighting is embedded.
function referenceWearTexture(roughness=false){const mask=Uint8Array.from(atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMLiMjRkZdUXRodJeXoqKLormirpeixbm5uaKXl3RRRjo6LgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuI0YuRmhdXV2Li6K5xa65ua6XoqKuxcXRrouAaEYjIwwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAFxcjIyM6UV1RXYuLosW5rtHFrpeuxa7FucWuaF1GIwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXI0YuFxcjFyM6XV10i5e5ua65xdGuoqK5ubm5ootoUS4MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMLi4jFwwMIy4uUUYuFy4uLkZRdHSLoq6uucWuua6XoqKil5eXdFE6FwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFzo6OjojIyMjFyNRaEYuLjpRXUZogIuiubm50bmirqKXgIuAdGhROgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcuLjpGOi4jIxcjLlFdXV1GRkZdUV10i6Kuubm5ua6il4t0dHRRLhcMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXLlFROjo6LiMjFyMuRlFdXWhdUV1oXYCil665ua6urq6XdF1RUS4MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCMXIwAAAC4uUWhdRi4uFyMjFyMjRl1dXWhodHSAi6Kirrmuoq6uopddUTojAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMOjouLhcjLlFRaGhROiMjIyMuRjpdaF2AaGiAi5eLoqKuua6LoqKLi3RRIwAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXF0ZdaF1dRlFRaHSLdGhRLiMuRlFRUV10dIuAi5eLl5eurrmurpeioouAXS4XAAAAAAAAAAAAAAAAAAAXFwAAAAAAAAAAAAAAAAAAAAwXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABdGXXSLgGh0gHSAl5eAdF1GOjpRXWhddKKXi5eiopeurrm5ubmil5eAgF1RLgwAAAAAAAAAAAAAAAAMIyMMAAAAAAAAAAAAAAAAAAAADAwXDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyMXDAwMAAAAF0ZogIuLl4uXl66irq6LaGhdUWhoaHR0l665ucXFxcW5xbm5xaKXi3RoUTojDAAAAAAAAAAXIxcjFyMXFwwAAAAAAAAAAAAAAAAAAAAAIy4jIyMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRi4jLiMXDBc6Rl2Ai5eXrrm5ubmuoqKLaHR0i5eXoqKu0cXR3NzR6NHR0cW5l5eXgGg6IxcjDAAAAAwXLjo6Li4jFwAAAAAAAAAAAAAAAAAAAAAAAAwuLjouIwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhRRjpGIy46OkZoaJeXrq7FxdHF3NG5rqKAl4uirqKiudHo3Nzc6PPz/+jcxbmul4t0US4jIy4jDBcMFyNGUV1GOkYXDAwAAAAAAAAAAAAAAAAAAAAADBcjFyMXDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXV1oXVFROlFRaGiXrq65ucXc6Nzo0cW5ubmixcXFudHR8/////P///Pz6OjFxa6Li3RRFyMuRkY6US4jOl1dUVE6OiMXDAAAAAAAAAAAAAAAAAAAAAAAFwwMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIBdaGhoaF2Xoq65ucXF0fPo6Ojo3MW5rq7R0ejc6P////////Pz89zc0dyii4BoXVEuIzpRdGhoXVFdXV1dUV1GFwwXDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALmuoot0dIB0dKKuucW5ucXR8/P/8+jz3MXR3NHo8/Po/////////////+jF0aKXdGhdUTo6LkZdaF1oXV1oXV1RUVE6OiMXDBcXDAwMFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbnFxa6XopeXubnR0dHF0ejz///////z3Nzz3Oj/////////////8/Po0cW5uYCAXWhdRjouIzpdUXRoaF1dUV1RXVFdLiMjFxcjIxcjDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRxdHF0dzRxbnF0dzc6Nzc6PP/8/////Pz3PP///////////////P/6NHFxaKXgGhRUV1dXVE6Li4uUVFoXVFRUVFRUVFROjouIyMuLi4XFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALnR0dHc8/Po0dHR3PPo/9zc8////////////////////////////+jRxcWuroCAaF1dXVFRXV1GRi4jOlFRXVFGRl1RXV1dOi4jIy4uLi4XDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArsXR0dzc3P/z3PPz6Ojo3MXR//////////////////////P/6PPz3MXFrouXdGhoXVFRXVFRXWhdUTpRXVFdaGhoaF1oaF1GLiMjIyMjIy4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5ucXFudHF3PPz6Ojz6PPz3NHo8//////////////////z0dzo3NzRxbmii4t0gGhdXV1RUVFdXV1RUV1oXV1ddHR0dF1oXUYuLhcMAAwMIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMW5xcXF0cXc8+jz6Ojo3NzRudHz8//////////////////c0dHcua65l5eLi3SAXVFRUV1dXV1dXWhodGhdUV1oaHR0aGhGIy4MDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAudHFxdHR0fPo8/Po6Ojo3NHF0dzc////////////////8+jc3MWuormXi4uAdHR0XWhoXWiAgIuAdHR0aFFdXVFGaGhoXToXDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACuxbnFxdHR6Ojo6PPo6Ojz0dHo3Nzz8/P////////////z6NHFubmurqKLi3R0gHR0aGhdXXSAl5eLdHRoXV1ROi4uOjpGLgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALnF0cXF0dzz3Ojz8+jo6PPR3P/z//P////////////////cxdHFrrmuoqKLl4uLi3RoaGh0i4CLopeii4t0XS4uIyMMFwwXDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbnF0dHc3Nzo8//z6Oj/8/Po8/P/8//////////////z3NzR0cXFuaKioqKAi4uil4uAdICLl5eXl5eii3RdIyMAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRxcXF3Oj/8+j/////8+jz8//////////////////z///c0dzc0cXFubmXopeAi5eiopeLi5eXoqKiopeAdFEjFwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANHR0cXo////8///////////////////////////8////9zRxdG5xcWuxcWioouLl5eXl4uLl5eioqKuoot0XSMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3NHcxdz/8//z////////////8/P////////////////z3NHFxcXFua650aKioouXl4uiopeXi5eioouXl3RdIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADc3PPc6Ojz8//////////////////////////z///////c0bm5xcW5xcXFxdGuopeXl5eiopeioqKigIuLXVEXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=='),c=>c.charCodeAt(0)),w=1024,h=1024,data=new Uint8Array(w*h*4),base=[73,103,76],dust=[165,149,116];
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const worldY=y/511*1.8,mx=Math.round(x/1023*70),my=Math.max(0,Math.min(31,31-Math.round((worldY-.40)/.45*31))),fade=1-Math.max(0,Math.min(1,(worldY-.76)/.25)),noise=Math.sin(x*127.1+y*311.7)*43758.5453,grain=noise-Math.floor(noise),density=(.10+.90*Math.pow(mask[my*128+mx]/255,1.2))*fade,amount=density*(.60+.20*grain),i=(y*w+x)*4;for(let k=0;k<3;k++)data[i+k]=Math.round(base[k]*(1-amount)+dust[k]*amount);const z=x/(w-1)*5.3-2.65;if(z>1.87&&worldY<.725){for(let k=0;k<3;k++)data[i+k]=Math.round([112,117,112][k]*(1-amount*.35)+dust[k]*amount*.35);}if(worldY>.51&&worldY<1.07&&Math.min(Math.abs(z+.06),Math.abs(z+.86))<.0055)for(let k=0;k<3;k++)data[i+k]=Math.round(data[i+k]*.25);if(roughness){data[i]=255;data[i+1]=Math.round((.38+.50*amount)*255);data[i+2]=255;}if(y>=512){const u=x/1023,v=(y-512)/511,cloud=.5+.5*Math.sin(u*13+Math.sin(v*9))*Math.sin(v*17-u*5),streak=Math.pow(Math.max(0,Math.sin(v*210+Math.sin(u*17)*.4)),18)*Math.pow(Math.max(0,Math.sin(u*37+v*13)),6),weather=.08+.12*cloud+.045*streak;for(let k=0;k<3;k++)data[i+k]=Math.round(base[k]*(1-weather)+[135,151,132][k]*weather);if(roughness){data[i]=255;data[i+1]=Math.round(255*(.36+.22*weather));data[i+2]=0;}}
 data[i+3]=255;if(y===h-1)for(let k=0;k<3;k++)data[i+k]=255;}
 const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.name='dmax-reference-door-wear';t.colorSpace=roughness?THREE.NoColorSpace:THREE.SRGBColorSpace;t.channel=0;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;}
function paintWearUvs(g:THREE.BufferGeometry,offsetY=0){const p=g.getAttribute('position'),c=g.getAttribute('color'),base=new THREE.Color('#49674c'),uv:number[]=[];for(let i=0;i<p.count;i++){const painted=Math.abs(c.getX(i)-base.r)+Math.abs(c.getY(i)-base.g)+Math.abs(c.getZ(i)-base.b)<.001;if(painted){c.setXYZ(i,1,1,1);const j=i-i%3,a=new THREE.Vector3().fromBufferAttribute(p,j),b=new THREE.Vector3().fromBufferAttribute(p,j+1),d=new THREE.Vector3().fromBufferAttribute(p,j+2),up=Math.abs(b.sub(a).cross(d.sub(a)).normalize().y)>.65,z=p.getZ(i)+(offsetY?-2.15:0),u=THREE.MathUtils.clamp((z+2.65)/5.3,.002,.998);uv.push(u,up?.502+.496*THREE.MathUtils.clamp((p.getX(i)+.95)/1.9,.002,.998):THREE.MathUtils.clamp((p.getY(i)+offsetY)/1.8,.002,.995)*.5);}else uv.push(.5,1023.5/1024);}g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function lensSlab(b:Batch,pts:number[][],color:string){
 const a=new THREE.Vector3(...pts[0] as [number,number,number]),n=new THREE.Vector3(...pts[1] as [number,number,number]).sub(a).cross(new THREE.Vector3(...pts[2] as [number,number,number]).sub(a)).normalize();
 const center=pts.reduce((sum,p)=>sum.add(new THREE.Vector3(...p as [number,number,number])),new THREE.Vector3()).multiplyScalar(1/pts.length).addScaledVector(n,.014).toArray(),back=pts.map(p=>new THREE.Vector3(...p as [number,number,number]).addScaledVector(n,-.008).toArray());
 for(let i=0;i<pts.length;i++){const j=(i+1)%pts.length;sheet(b,[center,pts[i],pts[j]],color);sheet(b,[pts[j],pts[i],back[i],back[j]],color);}sheet(b,[...back].reverse(),color);
}
// One UV atlas separates chrome, molded trim, and fluted lamp reflector response.
function trimAtlas(kind:'albedo'|'orm'|'normal'){
 const w=512,h=256,data=new Uint8Array(w*h*4);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  const i=(y*w+x)*4;let rgb=[255,255,255];
  if(y<128){if(kind==='orm')rgb=[255,x/(w-1)*255,y/127*255];if(kind==='normal')rgb=[128,128,255];}
  else {
   const u=x/(w-1),v=(y-128)/127,dx=(u-.58)/.31,dy=(v-.48)/.40,r=Math.hypot(dx,dy),edge=Math.min(u,1-u,v,1-v),flute=Math.sin(u*Math.PI*36),ring=Math.exp(-Math.pow((r-.83)/.10,2));
   if(kind==='albedo'){const shade=edge<.035?48:Math.round(185+40*Math.max(0,1-r*r)+22*ring+3*flute);rgb=[shade,shade+3,shade+1];}
   if(kind==='orm')rgb=[255,edge<.035?170:Math.round(57+flute*8),edge<.035?0:120];
   if(kind==='normal'){const nx=(r<1?dx*.32:0)+flute*.04,ny=r<1?dy*.32:0,nz=Math.sqrt(Math.max(.1,1-nx*nx-ny*ny));rgb=[(nx*.5+.5)*255,(ny*.5+.5)*255,(nz*.5+.5)*255];}
  }
  for(let k=0;k<3;k++)data[i+k]=Math.round(rgb[k]);data[i+3]=255;
 }
 const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.name='dmax-trim-'+kind;t.colorSpace=kind==='albedo'?THREE.SRGBColorSpace:THREE.NoColorSpace;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;
}
function trimUvs(g:THREE.BufferGeometry){
 const p=g.getAttribute('position'),c=g.getAttribute('color'),uv:number[]=[],lens=new THREE.Color('#a4aba5'),chrome=new THREE.Color('#aaaaa1'),mirror=new THREE.Color('#b5bbb8');
 for(let i=0;i<p.count;i++){
  const matches=(col:THREE.Color)=>Math.abs(c.getX(i)-col.r)+Math.abs(c.getY(i)-col.g)+Math.abs(c.getZ(i)-col.b)<.001;
  if(matches(lens)&&p.getZ(i)>2.2){c.setXYZ(i,1,1,1);uv.push(Math.max(.001,Math.min(.999,(Math.abs(p.getX(i))-.48)/.385)),.503+Math.max(0,Math.min(.994,(p.getY(i)-.735)/.25))*.494);}
  else {const isMirror=matches(mirror),shiny=matches(chrome)||isMirror,rough=isMirror?.08:shiny?.32:.74,metal=isMirror?1:shiny?.55:0;uv.push(rough,(metal*127+.5)/256);const z=p.getZ(i),y=p.getY(i),road=1-Math.max(0,Math.min(1,(y-.40)/.38)),wave=.5+.5*Math.sin(z*25+y*37);if(!shiny&&road>0){const dirt=road*wave*.30;c.setXYZ(i,c.getX(i)*(1-dirt)+.18*dirt,c.getY(i)*(1-dirt)+.15*dirt,c.getZ(i)*(1-dirt)+.10*dirt);}}
 }
 g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;
}
export function createObjectModel(spec:any={},options:any={}):THREE.Group{
 const v={...DEFAULT,...spec?.vehicleAssembly};const root=new THREE.Group();root.name='isuzu-d-max';
 const cabPaint=batch();
 const paint=batch(),trim=batch(),glass=batch(),interior=batch(),tail=batch(),wheel=batch();
 const green='#49674c',dark='#272b28',grey='#707570',silver='#aaaaa1';
 // Closed hood volume, crown and shoulders sampled across both axes.
 const rings=[];for(let j=0;j<=3;j++){const t=j/3,z=v.hoodFront+(v.hoodRear-v.hoodFront)*t,w=.83+.005*Math.sin(t*Math.PI/2),y=1.005+.035*t;
  const ring=[];for(let i=0;i<=8;i++){const a=-Math.PI/2+i*Math.PI/8;ring.push([Math.sin(a)*w,y+.030*Math.cos(a),z]);}ring.push([w,.70,z],[-w,.70,z]);rings.push(ring);}
 for(let j=0;j<3;j++)for(let i=0;i<11;i++){const k=(i+1)%11;sheet(paint,[rings[j][i],rings[j][k],rings[j+1][k],rings[j+1][i]],green);}
 sheet(paint,[...rings[0]].reverse(),green);sheet(paint,rings[3],green);

 for(const side of [-1,1]){const wing=[[side*.833,1.006,v.hoodFront],[side*.89,1.005,v.hoodFront],[side*.89,1.07,v.hoodRear],[side*.838,1.041,v.hoodRear]];slab(paint,side<0?wing.reverse():wing,green,.010);}
 // Continuous side sill profiles cut around front and rear tires.
 const lower:any[]=[[v.bedRear,.52]];
 for(const axle of [v.rearAxle,v.frontAxle]){
  lower.push([axle-.43,.52]);for(let i=0;i<=12;i++){const a=Math.PI-i*Math.PI/12;lower.push([axle+Math.cos(a)*.43,.38+Math.sin(a)*.43]);}lower.push([axle+.43,.52]);
 }
 lower.push([v.hoodFront,.52],[v.hoodFront,1.005],[v.hoodRear,1.07],[v.cabRear,1.07],[v.cabRear,v.bedRail],[v.bedRear,v.bedRail]);
 for(const side of [-1,1]){
  panel(paint,lower,[],side*v.bodyHalfWidth+(side<0?.045:0),.045,green);
  // Grey arch trim follows the true wheel opening rather than a solid disc.
  for(const axle of [v.rearAxle,v.frontAxle]){const section=[[.433,.897],[.440,.947],[.456,.966],[.497,.970],[.523,.958],[.545,.928],[.555,.897]];const point=(i:number,j:number)=>{const [r,x]=section[i],a=j*Math.PI/12,q=(r-.433)/(.555-.433),exponent=1+(v.fenderArchExponent-1)*q,c=Math.cos(a),sn=Math.max(0,Math.sin(a));return [side*x,.38+r*Math.pow(sn,exponent),axle+r*Math.sign(c)*Math.pow(Math.abs(c),exponent)];};for(let j=0;j<12;j++)for(let i=0;i<section.length;i++){const k=(i+1)%section.length,pts=[point(i,j),point(k,j),point(k,j+1),point(i,j+1)];if(side>0)pts.reverse();sheet(trim,pts,grey);}for(const j of [0,12]){const pts=section.map((_,i)=>point(i,j));if((j===12)===(side>0))pts.reverse();sheet(trim,pts,grey);}}

  const cab=[[v.cabRear,1.081],[v.cabRear,1.62],[-.73,1.72],[.64,1.72],[1.14,1.081]];
  const back=roundedLoop([[-.73,1.13],[-.73,1.64],[-.1,1.64],[-.1,1.13]],.07);
  const front=roundedLoop([[-.01,1.13],[-.01,1.64],[.56,1.64],[.96,1.13]],.07);
  // Cab frame is generated as a connected shell below.
  for(const win of [back,front]){panel(glass,win,[],side*.818,.012,'#59645e');frame(trim,win.map(p=>[side*.843,p[1],p[0]]),dark,.016,.015);}
  tube(trim,[side*.895,.71,-.8],[side*.895,.71,.95],.025,grey);
  for(const z of [.18,-.55]){const h=z>0?.095:.085,outline=[[z-h,1.012],[z-h+.016,.994],[z+h-.016,.994],[z+h,1.012],[z+h-.016,1.030],[z-h+.016,1.030]];panel(trim,outline,[],side>0?.926:-.890,.036,dark);}
  const stepStart=trim.p.length;box(trim,[.15,.035,1.8],[side*.885,.45,.05],silver);const stepRubber=new THREE.Color('#343932');for(let i=stepStart;i<trim.p.length;i+=3)if(trim.n[i+1]>.9){trim.c[i]=stepRubber.r;trim.c[i+1]=stepRubber.g;trim.c[i+2]=stepRubber.b;}
  const mirrorOutline=[[.925,1.05],[1.025,1.05],[1.04,1.065],[1.04,1.17],[1.025,1.185],[.925,1.185],[.91,1.17],[.91,1.065]].map(p=>new THREE.Vector2(side*p[0],p[1]));add(trim,new THREE.ExtrudeGeometry(new THREE.Shape(mirrorOutline),{depth:.14,bevelEnabled:false,steps:1}),dark,[0,0,.82]);
  slab(trim,[[side*.837,1.08,.88],[side*.935,1.073,.88],[side*.935,1.115,.88]],dark,.045);
  const mirrorFace=[[side*.926,1.068,.817],[side*.926,1.166,.817],[side*1.024,1.166,.817],[side*1.024,1.068,.817]];if(side<0)mirrorFace.reverse();sheet(trim,mirrorFace,'#b5bbb8');
  // Narrow door gaps are geometry, with no coplanar overlays.
  // Door seam relief is deferred to form-refinement; no intersecting seam tubes in blockout.
 }
 const cabWindows=cabShell(cabPaint,green),cabSolid=conformEdges(cabPaint);paint.p.push(...cabSolid.p);paint.n.push(...cabSolid.n);paint.c.push(...cabSolid.c);
 slab(glass,cabWindows.front,'#68716b');slab(glass,cabWindows.rear,'#4c5650');
 // Wheel wells and cargo cavity are open, with real interior surfaces.
 cargoTub(interior,dark);
 for(let i=0;i<8;i++)box(interior,[.018,.010,1.14],[-.70+i*.20,.758,-1.54],'#41443c');
 for(const side of [-1,1])for(const z of [-1.15,-1.40,-1.65,-1.90])box(interior,[.012,.28,.024],[side*.791,.98,z],'#363a32');
 // Seats and instrument fascia are independent geometry in the interior batch.
 for(const side of [-1,1]){const shape=new THREE.Shape([[-.08,.75],[.51,.75],[.51,.87],[.07,.87],[.02,1.43],[-.12,1.43]].map(p=>new THREE.Vector2(p[0],p[1])));const g=new THREE.ExtrudeGeometry(shape,{depth:.55,bevelEnabled:false,steps:1});g.rotateY(-Math.PI/2);add(interior,g,'#70756b',[side*.38+.275,0,0]);}
 box(interior,[1.45,.12,.28],[0,1.04,.91],'#2d312c');
 // Front bumper, rounded trapezoid grille, slat rows and swept headlamps.
 const bx=[-.89,-.84,-.66,.66,.84,.89],by=[.405,.44,.52,.675,.72];
 for(let i=0;i<bx.length-1;i++)for(let j=0;j<by.length-1;j++){
 const pts=[[bx[i],by[j],2.43],[bx[i+1],by[j],2.43],[bx[i+1],by[j+1],2.43],[bx[i],by[j+1],2.43]],vent=j===1&&(i===1||i===3);
 if(vent){const back=pts.map(p=>[p[0],p[1],p[2]-.035]);sheet(trim,back,dark);for(let k=0;k<4;k++){const n=(k+1)%4;sheet(trim,[pts[k],pts[n],back[n],back[k]],grey);}}
 else sheet(trim,pts,grey);
 }
 sheet(trim,[[.89,.405,2.21],[-.89,.405,2.21],[-.89,.72,2.21],[.89,.72,2.21]],grey);
 for(let i=0;i<bx.length-1;i++){
 sheet(trim,[[bx[i],.72,2.43],[bx[i+1],.72,2.43],[bx[i+1],.72,2.21],[bx[i],.72,2.21]],grey);
 sheet(trim,[[bx[i],.405,2.21],[bx[i+1],.405,2.21],[bx[i+1],.405,2.43],[bx[i],.405,2.43]],grey);
 }
 for(let j=0;j<by.length-1;j++){
 sheet(trim,[[.89,by[j],2.43],[.89,by[j],2.21],[.89,by[j+1],2.21],[.89,by[j+1],2.43]],grey);
 sheet(trim,[[-.89,by[j],2.21],[-.89,by[j],2.43],[-.89,by[j+1],2.43],[-.89,by[j+1],2.21]],grey);
 }
 const grille=roundedLoop([[-.43,.77,2.455],[.43,.77,2.455],[.58,1.04,2.425],[-.58,1.04,2.425]],.045,3);
 frame(trim,grille,silver,.02,.016);
 const gr=[];for(let j=0;j<=20;j++){const t=j/20,y=.791+.228*t,w=.41+.127*t,z=2.449-.025*t+((j%5===1||j%5===2)?.018:0);gr.push([[-w,y,z],[w,y,z]]);}
 for(let j=0;j<20;j++){const a=gr[j],z=gr[j+1];sheet(trim,[a[0],a[1],z[1],z[0]],j%5===1||j%5===2?silver:dark);sheet(trim,[[a[1][0],a[1][1],2.405],[a[0][0],a[0][1],2.405],[z[0][0],z[0][1],2.405],[z[1][0],z[1][1],2.405]],dark);for(const side of [0,1]){const pts=[a[side],z[side],[z[side][0],z[side][1],2.405],[a[side][0],a[side][1],2.405]];if(side===1)pts.reverse();sheet(trim,pts,dark);}}
 for(const j of [0,20]){const a=gr[j];const pts=[a[0],a[1],[a[1][0],a[1][1],2.405],[a[0][0],a[0][1],2.405]];if(j===0)pts.reverse();sheet(trim,pts,dark);}
 for(const side of [-1,1]){
  const lamp=[[side*.48,.735,2.442],[side*.86,.76,2.38],[side*.865,.93,2.37],[side*.61,.985,2.442]];lensSlab(trim,roundedLoop(side<0?lamp.reverse():lamp,.035,3),'#a4aba5');

  box(trim,[.055,.27,.06],[side*.855,1.0,-2.19],'#982e27');
 }
 box(trim,[1.73,.13,.15],[0,.5,-2.23],grey);
 // Front identity and driver's controls, each built from closed geometry.
 tube(trim,[-.55,1.17,1.084],[-.18,1.20,1.060],.006,dark,6);
 tube(trim,[.12,1.17,1.084],[.50,1.20,1.060],.006,dark,6);
 box(trim,[.43,.16,.015],[0,.51,2.456],'#626762');
 box(trim,[.40,.13,.015],[0,.51,-2.332],'#626762');
 add(trim,new THREE.CylinderGeometry(.05,.05,.012,6),silver,[0,.91,2.487],[Math.PI/2,0,0]);
 const steeringShape=new THREE.Shape(Array.from({length:16},(_,i)=>new THREE.Vector2(.145*Math.cos(i*Math.PI/8),.145*Math.sin(i*Math.PI/8))));
 for(let h=0;h<3;h++){const pts=[];for(let j=0;j<4;j++){const a=h*Math.PI*2/3+.20+j*(Math.PI*2/3-.40)/3;pts.push(new THREE.Vector2(.118*Math.cos(a),.118*Math.sin(a)));}for(let j=3;j>=0;j--){const a=h*Math.PI*2/3+.20+j*(Math.PI*2/3-.40)/3;pts.push(new THREE.Vector2(.045*Math.cos(a),.045*Math.sin(a)));}steeringShape.holes.push(new THREE.Path(pts));}
 add(interior,new THREE.ExtrudeGeometry(steeringShape,{depth:.022,bevelEnabled:false,steps:1}),dark,[-.45,1.20,.62],[-.40,0,0]);
 tube(trim,[-.45,1.20,.632],[-.45,1.04,.87],.025,dark,6);
 // Open tailgate local frame; transform remains at its physical hinge axis.
 ribbedFloor(tail,1.66,.49,-.0275,.0275,-.245,green,12,.014);
 // Pressed-steel wheel and tire share a vertex-coloured geometry and draw submission.
 const profile=[[0,-.12],[.075,-.12],[.105,-.13],[.14,-.105],[.20,-.105],[.235,-.13],[.27,-.14],[.315,-.125],[.36,-.085],[.38,-.035],[.38,.035],[.36,.085],[.315,.125],[.27,.14],[.235,.13],[.20,.105],[.14,.105],[.105,.13],[.075,.12],[0,.12]];
 const wp=(i:number,j:number)=>{const [r,x]=profile[i],a=j*Math.PI/12;return [-x,r*Math.sin(a),r*Math.cos(a)];};
 for(let i=0;i<profile.length-1;i++)for(let j=0;j<24;j++){
  if((i===3||i===15)&&j%4===0)continue;
  if(i>=7&&i<=11){
   const cuts=[0,.40,.60,1];
   const tread=(ring:number,angle:number)=>{const whole=Math.floor(angle),f=angle-whole;if(ring===7||ring===12){const a=wp(ring,whole),b=wp(ring,whole+1);return a.map((v,k)=>v+(b[k]-v)*f);}const q=wp(ring,angle),r=profile[ring][0],cut=f>=.43&&f<=.61?.016:0,scale=(r-cut)/r;return [q[0],q[1]*scale,q[2]*scale];};
   for(let k=0;k<cuts.length-1;k++)sheet(wheel,[tread(i,j+cuts[k]),tread(i,j+cuts[k+1]),tread(i+1,j+cuts[k+1]),tread(i+1,j+cuts[k])],'#282b26');
   continue;
  }
  const pts=[wp(i,j),wp(i,j+1),wp(i+1,j+1),wp(i+1,j)];
  const color=(i<6||i>=13)?(i===0||i===18?'#777b72':silver):'#282b26';
  if(i===0)sheet(wheel,[pts[0],pts[2],pts[3]],color);else if(i===18)sheet(wheel,[pts[0],pts[1],pts[2]],color);else sheet(wheel,pts,color);
 }
 // Six actual rim ventilation openings, with walls through the pressed-steel dish.
 for(let j=0;j<24;j+=4){const f=[wp(3,j),wp(3,j+1),wp(4,j+1),wp(4,j)],b=[wp(16,j),wp(16,j+1),wp(15,j+1),wp(15,j)];for(let k=0;k<4;k++){const n=(k+1)%4;sheet(wheel,[f[k],f[n],b[n],b[k]],'#64685f');}}
 // Round the closed bumper and its vent walls with the same continuous mapping.
 for(let i=0;i<trim.p.length;i+=3){let x=trim.p[i],y=trim.p[i+1],z=trim.p[i+2];if(z<2.209||z>2.431||y<.404||y>.721)continue;const dx=Math.max(0,Math.abs(x)-.66),dz=Math.max(0,z-2.21);if(dx>0&&dz>0){const f=Math.min(1,.22/Math.hypot(dx,dz));x=Math.sign(x)*(.66+dx*f);z=2.21+dz*f;}for(const [cy,sign,r] of [[.675,1,.045],[.44,-1,.035]]){const dy=sign*(y-cy),dz=Math.max(0,z-(2.43-r));if(dy>0&&dz>0){const f=Math.min(1,r/Math.hypot(dy,dz));y=cy+sign*dy*f;z=2.43-r+dz*f;}}trim.p[i]=x;trim.p[i+1]=y;trim.p[i+2]=z;}

 const noseCaps=batch(),otherPaint=batch();for(let i=0;i<paint.p.length;i+=9){const xs=[paint.p[i],paint.p[i+3],paint.p[i+6]],b=Math.max(...xs)-Math.min(...xs)<1e-6&&Math.abs(xs[0])>.84?noseCaps:otherPaint;for(const key of ['p','n','c'] as const)b[key].push(...paint[key].slice(i,i+9));}splitAt(noseCaps,2,2.21);for(const key of ['p','n','c'] as const)paint[key]=[...otherPaint[key],...noseCaps[key]];
 for(let i=0;i<paint.p.length;i+=3){const x=paint.p[i],z=paint.p[i+2],dx=Math.abs(x)-.66,dz=z-2.21;if(dx>0&&dz>0){const f=Math.min(1,.22/Math.hypot(dx,dz));paint.p[i]=Math.sign(x)*(.66+dx*f);paint.p[i+2]=2.21+dz*f;}}
 const closedWheel=conformEdges(wheel);wheel.p=closedWheel.p;wheel.n=closedWheel.n;wheel.c=closedWheel.c;
 for(const b of [paint,trim])for(let i=0;i<b.p.length;i+=3)if(b.p[i+2]>2.15){const t=Math.min(1,(b.p[i+2]-2.15)/.20);b.p[i+2]-=.07*Math.pow(Math.abs(b.p[i])/.89,4)*t;}
 // Round both cab skins through a 100 mm roof shoulder, preserving finite wall thickness.
 for(const b of [paint,trim,glass]){splitAt(b,1,1.62);const high=batch(),low=batch();for(let i=0;i<b.p.length;i+=9){const part=Math.min(b.p[i+1],b.p[i+4],b.p[i+7])>=1.619999?high:low;part.p.push(...b.p.slice(i,i+9));part.n.push(...b.n.slice(i,i+9));part.c.push(...b.c.slice(i,i+9));}for(const cut of [-.75,-.70,.70,.75])splitAt(high,0,cut);splitAt(high,1,1.68);Object.assign(b,{p:[...low.p,...high.p],n:[...low.n,...high.n],c:[...low.c,...high.c]});}
 for(const b of [paint,trim,glass]){const closed=conformEdges(b);Object.assign(b,closed);for(let i=0;i<b.p.length;i+=3){const x=b.p[i],y=b.p[i+1],dx=Math.abs(x)-.70,dy=y-1.62;if(dx<=0||dy<=0)continue;const len=Math.hypot(dx,dy),factor=Math.min(1,(.10+.20*Math.max(0,len-.10))/len);b.p[i]=Math.sign(x)*(.70+dx*factor);b.p[i+1]=1.62+dy*factor;}}
 for(const b of [paint,trim,glass,interior,tail,wheel])b.p=b.p.map(Math.fround);
 weldNormals(interior);weldNormals(glass,Math.PI/12);const wheelOriginalNormals=wheel.n.slice();weldNormals(wheel);for(let i=0;i<wheel.p.length;i+=9){const old=new THREE.Vector3(...wheelOriginalNormals.slice(i,i+3) as [number,number,number]);if(Math.abs(old.x)>.995)for(let j=0;j<9;j+=3){wheel.n[i+j]=old.x;wheel.n[i+j+1]=old.y;wheel.n[i+j+2]=old.z;}}weldNormals(paint,70*Math.PI/180);weldNormals(trim,70*Math.PI/180);
 const mats={paint:new THREE.MeshPhysicalMaterial({clearcoat:.25,clearcoatRoughness:.32,color:0xffffff,vertexColors:true,roughness:.38,metalness:0,side:THREE.DoubleSide}),trim:new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.42,metalness:.35,side:THREE.DoubleSide}),glass:new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.10,metalness:0,side:THREE.DoubleSide,transparent:true,opacity:.46,depthWrite:false}),interior:new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.82,metalness:0,side:THREE.DoubleSide})};
 mats.glass.forceSinglePass=true;mats.paint.map=referenceWearTexture();mats.paint.roughnessMap=referenceWearTexture(true);mats.paint.roughness=1;mats.trim.map=trimAtlas('albedo');mats.trim.roughnessMap=mats.trim.metalnessMap=trimAtlas('orm');mats.trim.normalMap=trimAtlas('normal');mats.trim.normalScale.set(.7,.7);mats.trim.roughness=mats.trim.metalness=1;mats.interior.map=cabinAtlas('albedo');const cabinOrm=cabinAtlas('orm');mats.interior.roughnessMap=mats.interior.metalnessMap=cabinOrm;mats.interior.normalMap=cabinAtlas('normal');mats.interior.roughness=mats.interior.metalness=1;
 const nodes:any={};for(const [id,b,m] of [['body',paint,mats.paint],['trim',trim,mats.trim],['glazing',glass,mats.glass],['interior',interior,mats.interior],['tailgate',tail,mats.paint]] as any[]){const node=new THREE.Group();node.name=id;const mesh=new THREE.Mesh(id==='body'||id==='tailgate'?paintWearUvs(geometry(b),id==='tailgate'?.72:0):id==='trim'?trimUvs(geometry(b)):id==='interior'?cabinUvs(geometry(b)):geometry(b),m);mesh.name=id+'-geometry';node.add(mesh);root.add(node);nodes[id]=node;if(id==='tailgate'){node.position.set(0,.72,-2.15);const a=mesh.geometry.getAttribute('wearPosition');for(let i=0;i<a.count;i++)a.setXYZ(i,a.getX(i),a.getY(i)+.72,a.getZ(i)-2.15);}}
 const wm=new THREE.InstancedMesh(cabinUvs(geometry(wheel),true),mats.interior,4);wm.name='wheels';root.add(wm);const wheelPivots=[];let idx=0;
 for(const [axle,z] of [['front',v.frontAxle],['rear',v.rearAxle]] as any[])for(const [side,x] of [['l',.8],['r',-.8]] as any[]){const pivot=new THREE.Group();pivot.name=`wheel-${axle}-${side}`;pivot.position.set(x,.38,z);root.add(pivot);wheelPivots.push(pivot);pivot.updateMatrix();wm.setMatrixAt(idx++,pivot.matrix);}
 wm.onBeforeRender=()=>{wheelPivots.forEach((pivot,i)=>{pivot.updateMatrix();wm.setMatrixAt(i,pivot.matrix);});wm.instanceMatrix.needsUpdate=true;};
 const socket=new THREE.Group();socket.name='tailgate-mount';socket.position.set(0,.72,-2.15);root.add(socket);
 root.userData.sculptRuntime={nodes:10,pivots:[root.name,'tailgate',...wheelPivots.map(x=>x.name)],sockets:['tailgate-mount'],colliders:[],destructionGroups:[]};
 root.userData.buildPass='blockout';root.userData.qualityStatus='unreviewed';root.userData.vehicleAssembly=v;return root;
}

export interface ProceduralModelOptions { baseUrl?: string; [key: string]: unknown; }
export function createModel(options: ProceduralModelOptions = {}): THREE.Group { return createObjectModel(null, options); }
