import * as THREE from 'three';
// Procedural geometry utilities; no reference mesh data is embedded.
type Batch={p:number[],n:number[],c:number[]};
type V={p:number[],n:number[],c:number[]};
const dot=(a:number[],b:number[])=>a.reduce((s,x,i)=>s+x*b[i],0);
const sub=(a:number[],b:number[])=>a.map((x,i)=>x-b[i]);

function batch():Batch{return {p:[],n:[],c:[]};}

function add(b:Batch,g:THREE.BufferGeometry,color:string,pos=[0,0,0],rot=[0,0,0]){
 const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot as [number,number,number]));g.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(...pos as [number,number,number]),q,new THREE.Vector3(1,1,1)));
 const flat=g.index?g.toNonIndexed():g;flat.computeVertexNormals();const p=flat.getAttribute('position'),n=flat.getAttribute('normal');const c=new THREE.Color(color);
 for(let i=0;i<p.count;i++){b.p.push(p.getX(i),p.getY(i),p.getZ(i));b.n.push(n.getX(i),n.getY(i),n.getZ(i));b.c.push(c.r,c.g,c.b);}if(flat!==g)flat.dispose();g.dispose();
}

function box(b:Batch,s:number[],p:number[],color:string,r=[0,0,0]){add(b,new THREE.BoxGeometry(...s as [number,number,number]),color,p,r);}

function geometry(b:Batch){const g=new THREE.BufferGeometry();g.setAttribute('wheelClass',new THREE.Float32BufferAttribute(new Float32Array(b.p.length/3),1));g.setAttribute('position',new THREE.Float32BufferAttribute(b.p,3));g.setAttribute('wearPosition',new THREE.Float32BufferAttribute(b.p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(b.n,3));g.setAttribute('color',new THREE.Float32BufferAttribute(b.c,3));g.computeBoundingBox();g.computeBoundingSphere();return g;}

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

function studioEnvironment(){const w=128,h=64,data=new Uint8Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const u=x/w,v=y/h,soft=Math.exp(-Math.pow((u-.20)/.085,8)-Math.pow((v-.25)/.13,8))*.70+Math.exp(-Math.pow((u-.71)/.055,8)-Math.pow((v-.34)/.18,8))*.40,level=Math.min(1,(v<.52?.38:.13)+soft),i=(y*w+x)*4;data[i]=Math.round(level*249);data[i+1]=Math.round(level*252);data[i+2]=Math.round(level*255);data[i+3]=255;}const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.mapping=THREE.EquirectangularReflectionMapping;t.colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;t.name='procedural-neutral-studio';return t;}
function surfaceTexture(){const data=new Uint8Array(256*256*4);for(let y=0;y<256;y++)for(let x=0;x<256;x++){const i=(y*256+x)*4;data[i]=255;data[i+1]=x;data[i+2]=y;data[i+3]=255;}const t=new THREE.DataTexture(data,256,256,THREE.RGBAFormat);t.name='tuk-tuk-metallic-roughness';t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;}
function tukAtlas(kind:'paint'|'inside',slot:'albedo'|'orm'|'normal'){const w=slot==='orm'?128:512,h=w,data=new Uint8Array(w*h*4),hash=(x:number,y:number)=>{const n=Math.sin(x*127.1+y*311.7)*43758.5453;return n-Math.floor(n);},noise=(x:number,y:number)=>{const ix=Math.floor(x),iy=Math.floor(y);let u=x-ix,v=y-iy;u=u*u*(3-2*u);v=v*v*(3-2*v);return (hash(ix,iy)*(1-u)+hash(ix+1,iy)*u)*(1-v)+(hash(ix,iy+1)*(1-u)+hash(ix+1,iy+1)*u)*v;};
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const q=(x>=w/2?1:0)+(y>=h/2?2:0),u=(x%(w/2))/(w/2-1),v=(y%(h/2))/(h/2-1),cloud=.65*noise(u*9,v*13)+.35*noise(u*29,v*37),fine=hash(x,y),i=(y*w+x)*4;let base=[39,113,77],wear=[111,143,106],amount=.04+.27*cloud,rough=.18+.16*cloud,metal=0,nx=0,ny=0;
  if(kind==='paint'){if(q===0){wear=[145,173,136];amount=.12+.30*cloud;rough=.14+.14*cloud;}if(q===1){const roofBlend=THREE.MathUtils.smoothstep(v*2,1.45,1.75);base=[28,91,63].map((c,k)=>c*(1-roofBlend)+[39,113,77][k]*roofBlend);wear=[111,143,106].map((c,k)=>c*(1-roofBlend)+[145,173,136][k]*roofBlend);amount=.04+.19*cloud+roofBlend*(.08+.11*cloud);rough=(.18+.16*cloud)*(1-roofBlend)+(.14+.14*cloud)*roofBlend;}if(q===2){base=[238,187,36];wear=[185,160,76];amount=.05+.12*cloud;}if(q===1||q===2){const road=1-Math.max(0,Math.min(1,(v*2-.30)/.50));amount+=road*.18;rough+=road*.18;}if(q===2){const gx=(u-.5)*1.4,gy=v*2-.73,r=Math.hypot(gx,gy);if(r<.047&&Math.cos(gy*520)>.10){base=[39,44,32];wear=[76,72,48];amount=.12;rough=.85;}}}
  else if(q===0){base=[62,74,62];wear=[124,125,95];const seam=Math.min(Math.abs(u-.25),Math.abs(u-.5),Math.abs(u-.75)),gap=Math.max(0,(.006-seam)/.006),edge=Math.pow(Math.abs(v-.5)*2,8);amount=.12+.27*cloud+.13*edge;rough=.63+.18*cloud;for(let k=0;k<3;k++)base[k]*=1-.30*gap;nx=.04*Math.sin(u*96+cloud*5)*Math.pow(Math.sin(v*27),8);ny=.025*Math.sin(v*110+cloud*4);}
  else if(q===1){base=[42,46,39];wear=[110,106,86];amount=.08+.18*cloud;rough=.88;const a=Math.sin((u*32+v*48)*Math.PI),b=Math.sin((u*32-v*48)*Math.PI);nx=.17*a;ny=.17*b;}
  else if(q===2){base=[30,32,29];wear=[90,82,65];amount=.12+.16*cloud;rough=.91;const tread=Math.max(0,Math.min(1,(.34-Math.abs(v-.5))/.10)),phase=u*40+(v-.5)*2,frac=phase-Math.floor(phase),cut=Math.exp(-Math.pow((frac-.5)/.07,2));amount*=1-.7*tread*cut;for(let k=0;k<3;k++)base[k]*=1-.5*tread*cut;nx=.4*tread*cut*(frac<.5?-1:1);}
  else if(v>.1){base=[179,181,171];wear=[105,96,75];amount=.10+.22*cloud;rough=.40+.18*cloud;metal=.50;const yy=(u-.5)*.6,zz=((v-.15)/.84-.5)*.6,r=Math.hypot(yy,zz);for(let k=0;k<4;k++){const a=k*Math.PI/2,dx=yy-.063*Math.cos(a),dy=zz-.063*Math.sin(a),d=Math.hypot(dx,dy);if(d<.011){nx+=dx/.011*.6;ny+=dy/.011*.6;amount*=.4;}}nx+=.04*Math.sin(r*320)*yy/Math.max(.01,r);ny+=.04*Math.sin(r*320)*zz/Math.max(.01,r);}
  else{base=wear=[255,255,255];amount=0;rough=u;metal=v;}
  for(let k=0;k<3;k++)data[i+k]=Math.round(base[k]*(1-amount)+wear[k]*amount);
  if(slot==='orm'){data[i]=255;data[i+1]=Math.round(Math.min(.98,rough)*255);data[i+2]=Math.round(metal*255);}if(slot==='normal'){const n=new THREE.Vector3(nx,ny,1).normalize();data[i]=Math.round((n.x*.5+.5)*255);data[i+1]=Math.round((n.y*.5+.5)*255);data[i+2]=Math.round((n.z*.5+.5)*255);}data[i+3]=255;
 }const t=new THREE.DataTexture(data,w,h,THREE.RGBAFormat);t.name='tuk-'+kind+'-'+slot;t.colorSpace=slot==='albedo'?THREE.SRGBColorSpace:THREE.NoColorSpace;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;}
function tukUvs(g:THREE.BufferGeometry,kind:string,isWheel=false){const p=g.getAttribute('position'),c=g.getAttribute('color'),uv:number[]=[],yellow=new THREE.Color('#c9aa3d'),bench=new THREE.Color('#626453'),floor=new THREE.Color('#484f40'),shieldPaint=new THREE.Color('#206d49'),fenderPaint=new THREE.Color('#206d47'),close=(i:number,a:THREE.Color)=>Math.abs(c.getX(i)-a.r)+Math.abs(c.getY(i)-a.g)+Math.abs(c.getZ(i)-a.b)<.001;
 for(let i=0;i<p.count;i++){let q=0,u=0,v=0;const j=i-i%3,a=new THREE.Vector3().fromBufferAttribute(p,j),b=new THREE.Vector3().fromBufferAttribute(p,j+1),d=new THREE.Vector3().fromBufferAttribute(p,j+2),n=b.sub(a).cross(d.sub(a)).normalize();
  if(kind==='paint'){q=close(i,yellow)?2:close(i,shieldPaint)?1:close(i,fenderPaint)?0:Math.abs(n.y)>.55?0:1;u=q===0||Math.abs(n.z)>Math.abs(n.x)?(p.getX(i)+.7)/1.4:(p.getZ(i)+1.45)/2.85;v=q===0?(p.getZ(i)+1.45)/2.85:p.getY(i)/2;c.setXYZ(i,1,1,1);}
  else if(isWheel){const tire=c.getX(i)<.06;q=tire?2:3;if(tire){u=Math.acos(Math.cos(Math.atan2(p.getZ(i),p.getY(i))))/Math.PI;v=(p.getX(i)+.09)/.18;c.setXYZ(i,1,1,1);}else{u=(p.getY(i)+.30)/.60;v=.15+.84*(p.getZ(i)+.30)/.60;c.setXYZ(i,1,1,1);}}
  else if(close(i,bench)){q=0;u=(p.getX(i)+.55)/1.1;v=Math.abs(n.y)>.55?(p.getZ(i)+1.2)/.72:(p.getY(i)-.77)/.75;c.setXYZ(i,1,1,1);}
  else if(close(i,floor)){q=1;u=(p.getX(i)+.60)/1.20;v=(p.getZ(i)+1.265)/1.95;c.setXYZ(i,1,1,1);}
  else{q=3;u=.87;v=0;}
  uv.push((q%2+Math.max(.008,Math.min(.992,u)))*.5,(Math.floor(q/2)+Math.max(.008,Math.min(.992,v)))*.5);
 }g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function lampAtlas(slot:'albedo'|'orm'|'normal'){const w=256,h=512,data=new Uint8Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4,u=x/255,v=(y%256)/255,dx=u*2-1,dy=v*2-1,r=Math.hypot(dx,dy),flute=Math.sin(u*Math.PI*42),ring=Math.cos(r*Math.PI*8);let rgb=slot==='orm'?[255,x,y]:slot==='normal'?[128,128,255]:[255,255,255];if(y>=256){if(slot==='albedo'){const t=.76+.025*ring+.035*flute;rgb=[216*t,225*t,207*t];}if(slot==='orm')rgb=[255,62,30];if(slot==='normal'){const n=new THREE.Vector3(.20*dx+.13*flute,.20*dy+.05*Math.sin(v*Math.PI*32),1).normalize();rgb=[128+127*n.x,128+127*n.y,128+127*n.z];}}for(let k=0;k<3;k++)data[i+k]=Math.round(rgb[k]);data[i+3]=255;}const t=new THREE.DataTexture(data,w,h);t.name='tuk-headlamp-'+slot;t.colorSpace=slot==='albedo'?THREE.SRGBColorSpace:THREE.NoColorSpace;t.needsUpdate=true;return t;}
function lampUvs(g:THREE.BufferGeometry){const p=g.attributes.position,c=g.attributes.color,uv:number[]=[],lens=new THREE.Color('#b9cabd');for(let i=0;i<p.count;i++){if(Math.abs(c.getX(i)-lens.r)+Math.abs(c.getY(i)-lens.g)+Math.abs(c.getZ(i)-lens.b)<.001){uv.push(THREE.MathUtils.clamp(.5+p.getX(i)/.21,.004,.996),.502+.496*THREE.MathUtils.clamp(.5+(p.getY(i)-1.005)/.21,0,1));c.setXYZ(i,1,1,1);}else uv.push(.12,.00098);}g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function material(roughness:number,metalness=0,opacity=1){const m=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:1,metalness:1,side:THREE.DoubleSide,transparent:opacity<1,opacity,depthWrite:opacity===1});m.userData.nominal={roughness,metalness};m.forceSinglePass=true;return m;}
function vehicleFinish(m:THREE.Material,kind:string){m.userData.finishKind=kind;}
function applySurface(g:THREE.BufferGeometry,m:THREE.Material,isWheel=false){if(m.userData.lensAtlas)return lampUvs(g);if(m.userData.atlas)return tukUvs(g,m.userData.atlas,isWheel);const p=g.getAttribute('position'),c=g.getAttribute('color'),uv:number[]=[],base=m.userData.nominal;
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i);let rough=base.roughness,metal=base.metalness;
 if(isWheel){const start=Math.floor(i/3)*3;let radius=0;for(let k=0;k<3;k++)radius+=Math.hypot(p.getY(start+k),p.getZ(start+k))/3;const tire=radius>.18;rough=tire?.94:.40;metal=tire?0:.65;}
 else if(m.userData.finishKind){const h=Math.max(0,Math.min(1,(1.05-y)/.7)),cloud=.5+.25*Math.sin(x*17+z*11)+.25*Math.sin(y*29-z*9),dirt=(.025+.22*h)*cloud;const col=[c.getX(i),c.getY(i),c.getZ(i)],dust=[.10,.085,.06];c.setXYZ(i,...col.map((v,k)=>v*(1-dirt)+dust[k]*dirt) as [number,number,number]);rough=Math.min(1,rough+.16*h*cloud);}
 uv.push((rough*255+.5)/256,(metal*255+.5)/256);
 }g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function emit(root:THREE.Group,id:string,b:Batch,m:THREE.Material){b.p=b.p.map(Math.fround);weldNormals(b);const g=new THREE.Group();g.name=id;const mesh=new THREE.Mesh(applySurface(geometry(b),m),m);mesh.name=id+'-geometry';g.add(mesh);root.add(g);return g;}
function wheelShape(radius=.36,width=.22,alloy=false,segments=24){const b=batch(),profile=alloy?[[0,-.10],[.065,-.105],[.245,-.105],[.27,-.12],[.32,-.10],[.36,-.04],[.36,.04],[.32,.10],[.27,.12],[.245,.105],[.065,.105],[0,.10]]:[[0,-.12],[.065,-.12],[.155,-.09],[.205,-.09],[.23,-.12],[.285,-.10],[.36,-.035],[.36,.035],[.285,.10],[.23,.12],[.205,.09],[.155,.09],[.065,.12],[0,.12]];
 const inner=alloy?1:2,outer=inner+1,backInner=profile.length-1-inner,backOuter=backInner-1,period=alloy?4:4,span=alloy?3:1,wp=(i:number,j:number)=>{const [r,x]=profile[i],a=j*2*Math.PI/segments;return [-x*width/.24,r*radius/.36*Math.sin(a),r*radius/.36*Math.cos(a)];};
 for(let i=0;i<profile.length-1;i++)for(let j=0;j<segments;j++){if((i===inner||i===backOuter)&&j%period<span)continue;const pts=[wp(i,j),wp(i,j+1),wp(i+1,j+1),wp(i+1,j)],color=(i< (alloy?3:4)||i>=(alloy?8:9))?'#a0a093':'#35372f';if(i===0)sheet(b,[pts[0],pts[2],pts[3]],color);else if(i===profile.length-2)sheet(b,[pts[0],pts[1],pts[2]],color);else sheet(b,pts,color);}
 for(let j=0;j<segments;j+=period){const f=[],back=[];for(let k=0;k<=span;k++){f.push(wp(inner,j+k));back.push(wp(backInner,j+k));}for(let k=span;k>=0;k--){f.push(wp(outer,j+k));back.push(wp(backOuter,j+k));}for(let k=0;k<f.length;k++){const n=(k+1)%f.length;sheet(b,[f[k],f[n],back[n],back[k]],'#565c50');}}
 b.p=b.p.map(Math.fround);weldNormals(b);return geometry(b);
}
function wheels(root:THREE.Group,g:THREE.BufferGeometry,m:THREE.Material,positions:{name:string,pos:number[]}[]){g.setAttribute('wheelClass',new THREE.Float32BufferAttribute(new Float32Array(g.getAttribute('position').count).fill(1),1));applySurface(g,m,true);const mesh=new THREE.InstancedMesh(g,m,positions.length);mesh.name='wheels';root.add(mesh);const pivots=positions.map((v,i)=>{const p=new THREE.Group();p.name=v.name;p.position.fromArray(v.pos);root.add(p);p.updateMatrix();mesh.setMatrixAt(i,p.matrix);return p;});mesh.onBeforeRender=()=>{pivots.forEach((p,i)=>{p.updateMatrix();mesh.setMatrixAt(i,p.matrix);});mesh.instanceMatrix.needsUpdate=true;};return pivots;}
type Rod={a:number[],b:number[],r:number,color?:string};
function rods(root:THREE.Group,list:Rod[],m:THREE.Material){const g=new THREE.CylinderGeometry(1,1,1,8,1);g.setAttribute('color',new THREE.Float32BufferAttribute(new Float32Array(g.getAttribute('position').count*3).fill(1),3));const mesh=new THREE.InstancedMesh(g,m,list.length);mesh.name='rails';const up=new THREE.Vector3(0,1,0);list.forEach((r,i)=>{const a=new THREE.Vector3(...r.a as [number,number,number]),b=new THREE.Vector3(...r.b as [number,number,number]),d=b.clone().sub(a),q=new THREE.Quaternion().setFromUnitVectors(up,d.clone().normalize());mesh.setMatrixAt(i,new THREE.Matrix4().compose(a.add(b).multiplyScalar(.5),q,new THREE.Vector3(r.r,d.length(),r.r)));mesh.setColorAt(i,new THREE.Color(r.color||'#77766d'));});root.add(mesh);return mesh;}
function shell(paint:Batch,glass:Batch,trim:Batch,outer:number[][],holes:number[][][],faceWindows:Record<number,number[][]>,halfWidth:number,crowns:number[],paintColor:string,glassColor='#404742'){
 const inner=outer.map((p,i)=>{const a=outer[(i+outer.length-1)%outer.length],z=outer[(i+1)%outer.length],d1=[p[0]-a[0],p[1]-a[1]],d2=[z[0]-p[0],z[1]-p[1]],l1=Math.hypot(...d1),l2=Math.hypot(...d2),n1=[d1[1]/l1,-d1[0]/l1],n2=[d2[1]/l2,-d2[0]/l2],den=1+n1[0]*n2[0]+n1[1]*n2[1];return p.map((v,k)=>v+.03*(n1[k]+n2[k])/den);});const local=batch();
 for(const side of [-1,1]){mappedFace(local,outer,holes,p=>[side*halfWidth,p[1],p[0]],paintColor,side>0);mappedFace(local,inner,holes,p=>[side*(halfWidth-.035),p[1],p[0]],'#5a6056',side<0);for(const h of holes){for(let i=0;i<h.length;i++){const a=h[i],z=h[(i+1)%h.length],pts=[[side*halfWidth,a[1],a[0]],[side*(halfWidth-.035),a[1],a[0]],[side*(halfWidth-.035),z[1],z[0]],[side*halfWidth,z[1],z[0]]];if(side>0)pts.reverse();sheet(local,pts,paintColor);}const pts=h.map(p=>[side*(halfWidth-.006),p[1],p[0]]);if(side>0)pts.reverse();slab(glass,pts,glassColor,.008);frame(trim,h.map(p=>[side*(halfWidth+.010),p[1],p[0]]),'#30362e',.013,.018);}}
 for(let e=0;e<outer.length;e++){const next=(e+1)%outer.length,c0=crowns[e]||0,c1=crowns[next]||0,map=(inside:boolean,p:number[])=>{const pr=inside?inner:outer,a=pr[e],z=pr[next],u=p[0],t=p[1],c=faceWindows[e]&&c0?c0*Math.max(0,1-t/.13):c0*(1-t)+c1*t;return [(halfWidth-(inside?.035:0))*u,a[1]+(z[1]-a[1])*t+c*Math.cos(u*Math.PI/2),a[0]+(z[0]-a[0])*t];};const win=faceWindows[e];
 if(win){const start=c0?.13:0,outline=[[-1,start],[1,start],[1,1],[-1,1]];mappedFace(local,outline,[win],p=>map(false,p),paintColor,true);mappedFace(local,outline,[win],p=>map(true,p),'#5a6056');if(start)for(let j=0;j<8;j++){const u=-1+j/4,z=u+.25,pts=[[u,0],[z,0],[z,start],[u,start]];sheet(local,pts.map(p=>map(false,p)).reverse(),paintColor);sheet(local,pts.map(p=>map(true,p)),'#5a6056');}for(let j=0;j<win.length;j++){const a=win[j],z=win[(j+1)%win.length];sheet(local,[map(false,a),map(true,a),map(true,z),map(false,z)],paintColor);}const pts=win.map(p=>map(false,p)).reverse(),center=[0,1,2].map(k=>pts.reduce((a,p)=>a+p[k],0)/pts.length);slab(glass,pts.map(p=>p.map((v,k)=>center[k]+(v-center[k])*.985)),glassColor,.008);frame(trim,pts,'#30362e',.014,.02);
 }else{const count=c0||c1?8:1;for(let j=0;j<count;j++){const u=-1+2*j/count,z=u+2/count,pts=[[u,0],[z,0],[z,1],[u,1]];sheet(local,pts.map(p=>map(false,p)).reverse(),paintColor);sheet(local,pts.map(p=>map(true,p)),'#5a6056');}}}
 const solid=conformEdges(local);paint.p.push(...solid.p);paint.n.push(...solid.n);paint.c.push(...solid.c);
}
function hood(b:Batch,zFront:number,zBack:number,frontY:number,backY:number,halfWidth:number,color:string){const rings=[];for(let j=0;j<=4;j++){const t=j/4,z=zFront+(zBack-zFront)*t,y=frontY+(backY-frontY)*t,ring=[];for(let i=0;i<=8;i++){const u=-1+i/4;ring.push([u*halfWidth,y+.04*Math.cos(u*Math.PI/2),z]);}ring.push([halfWidth,.78,z],[-halfWidth,.78,z]);rings.push(ring);}for(let j=0;j<4;j++)for(let i=0;i<11;i++){const k=(i+1)%11;sheet(b,[rings[j][i],rings[j][k],rings[j+1][k],rings[j+1][i]],color);}sheet(b,[...rings[0]].reverse(),color);sheet(b,rings[4],color);}
function bedTub(b:Batch,halfWidth:number,front:number,rear:number,floor:number,rail:number,color:string){const wo=halfWidth,wi=wo-.04,yb=floor-.04,yi=floor+.02,yt=rail,zr=rear,zf=front,zi=front-.04;
 sheet(b,[[-wo,yb,zr],[wo,yb,zr],[wo,yb,zf],[-wo,yb,zf]],color);sheet(b,[[-wo,yb,zf],[wo,yb,zf],[wo,yt,zf],[-wo,yt,zf]],color);sheet(b,[[-wi,yi,zi],[-wi,yt,zi],[wi,yt,zi],[wi,yi,zi]],color);sheet(b,[[-wi,yi,zr],[-wi,yi,zi],[wi,yi,zi],[wi,yi,zr]],color);
 for(const side of [-1,1]){let outer=[[side*wo,yb,zr],[side*wo,yt,zr],[side*wo,yt,zf],[side*wo,yb,zf]],inner=[[side*wi,yi,zr],[side*wi,yi,zi],[side*wi,yt,zi],[side*wi,yt,zr]];if(side<0){outer.reverse();inner.reverse();}sheet(b,outer,color);sheet(b,inner,color);let rim=[[side*wi,yt,zr],[side*wi,yt,zi],[side*wo,yt,zi],[side*wo,yt,zr]];if(side<0)rim.reverse();sheet(b,rim,color);const xa=Math.min(side*wi,side*wo),xb=Math.max(side*wi,side*wo);sheet(b,[[xa,yi,zr],[xa,yt,zr],[xb,yt,zr],[xb,yi,zr]],color);}
 sheet(b,[[-wo,yt,zi],[-wo,yt,zf],[wo,yt,zf],[wo,yt,zi]],color);sheet(b,[[-wo,yb,zr],[-wo,yi,zr],[wo,yi,zr],[wo,yb,zr]],color);
}

function bentTube(b:Batch,points:number[][],radius:number,color:string,radial=6){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p as [number,number,number])));const g=new THREE.TubeGeometry(curve,points.length*3,radius,radial,false);add(b,g,color);for(const t of [0,1]){const at=curve.getPointAt(t),n=curve.getTangentAt(t).multiplyScalar(t===0?-1:1);const cap=new THREE.CircleGeometry(radius,radial);cap.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,0,1),n));add(b,cap,color,at.toArray());}}
function roundOpen(points:number[][],r=.055){const out=[points[0]];for(let i=1;i<points.length-1;i++){const p=points[i],a=points[i-1],b=points[i+1],la=Math.hypot(...p.map((v,k)=>v-a[k])),lb=Math.hypot(...p.map((v,k)=>v-b[k])),d=Math.min(r,la*.22,lb*.22),start=p.map((v,k)=>v+(a[k]-v)*d/la),end=p.map((v,k)=>v+(b[k]-v)*d/lb);out.push(start,p.map((v,k)=>(start[k]+2*v+end[k])/4),end);}out.push(points[points.length-1]);return out;}
function edgeTube(b:Batch,points:number[][],radius:number,color:string,radial=5){
 const pts=points.map(p=>new THREE.Vector3(...p as [number,number,number]));
 const rings=pts.map((p,i)=>{const tangent=pts[Math.min(i+1,pts.length-1)].clone().sub(pts[Math.max(0,i-1)]).normalize(),u=new THREE.Vector3(0,1,0);if(Math.abs(tangent.dot(u))>.95)u.set(1,0,0);u.addScaledVector(tangent,-u.dot(tangent)).normalize();const v=new THREE.Vector3().crossVectors(tangent,u);return Array.from({length:radial},(_,j)=>p.clone().addScaledVector(u,radius*Math.cos(j*2*Math.PI/radial)).addScaledVector(v,radius*Math.sin(j*2*Math.PI/radial)).toArray());});
 for(let i=0;i<rings.length-1;i++)for(let j=0;j<radial;j++){const k=(j+1)%radial;sheet(b,[rings[i][j],rings[i][k],rings[i+1][k],rings[i+1][j]],color);}
 sheet(b,[...rings[0]].reverse(),color);sheet(b,rings[rings.length-1],color);
}
function mergePlanar(b:Batch,color:string):Batch{const src=conformEdges(b),groups=new Map<string,{n:THREE.Vector3,faces:number[][][]}>(),key=(p:number[])=>p.map(x=>x.toFixed(6)).join(',');
 for(let i=0;i<src.p.length;i+=9){const ps=[0,3,6].map(j=>src.p.slice(i+j,i+j+3)),a=new THREE.Vector3(...ps[0] as [number,number,number]),n=new THREE.Vector3(...ps[1] as [number,number,number]).sub(a).cross(new THREE.Vector3(...ps[2] as [number,number,number]).sub(a));if(n.lengthSq()<1e-18)continue;n.normalize();const k=[n.x.toFixed(3),n.y.toFixed(3),n.z.toFixed(3),n.dot(a).toFixed(4)].join(','),g=groups.get(k)||{n,faces:[]};g.faces.push(ps);groups.set(k,g);}
 const out=batch();for(const {n,faces} of groups.values()){const edges=new Map<string,[string,string]>(),points=new Map<string,number[]>();for(const ps of faces)for(let i=0;i<3;i++){const a=key(ps[i]),b=key(ps[(i+1)%3]);points.set(a,ps[i]);points.set(b,ps[(i+1)%3]);if(a===b)continue;if(edges.has(b+'|'+a))edges.delete(b+'|'+a);else edges.set(a+'|'+b,[a,b]);}
  const next=new Map<string,string>();let bad=false;for(const [a,b] of edges.values()){if(next.has(a)){bad=true;break;}next.set(a,b);}if(bad){for(const f of faces)sheet(out,f,color);continue;}
  const loops:number[][][]=[];while(next.size){const start=next.keys().next().value as string,loop:number[][]=[];let at=start;for(let guard=0;guard<=edges.size;guard++){loop.push(points.get(at)!);const to=next.get(at);if(!to){bad=true;break;}next.delete(at);at=to;if(at===start)break;}if(at!==start){bad=true;break;}if(loop.length>=3)loops.push(loop);}if(bad){for(const f of faces)sheet(out,f,color);continue;}
  const u=new THREE.Vector3(Math.abs(n.y)<.9?0:1,Math.abs(n.y)<.9?1:0,0).cross(n).normalize(),v=n.clone().cross(u),project=(p:number[])=>{const q=new THREE.Vector3(...p as [number,number,number]);return new THREE.Vector2(q.dot(u),q.dot(v));},clean=(ps:number[][])=>{let changed=true;while(changed&&ps.length>3){changed=false;for(let i=0;i<ps.length;i++){const a=project(ps[(i+ps.length-1)%ps.length]),b=project(ps[i]),c=project(ps[(i+1)%ps.length]);if(Math.abs((b.x-a.x)*(c.y-b.y)-(b.y-a.y)*(c.x-b.x))<1e-10){ps.splice(i,1);changed=true;break;}}}return ps;};
  const ls=loops.map(clean).map(ps=>({ps,uv:ps.map(project)})),area=(ps:THREE.Vector2[])=>ps.reduce((s,p,i)=>s+p.x*ps[(i+1)%ps.length].y-ps[(i+1)%ps.length].x*p.y,0),contains=(ps:THREE.Vector2[],p:THREE.Vector2)=>{let yes=false;for(let i=0,j=ps.length-1;i<ps.length;j=i++){const a=ps[i],b=ps[j];if((a.y>p.y)!==(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)yes=!yes;}return yes;};
  for(const outer of ls.filter(l=>area(l.uv)>0)){const holes=ls.filter(l=>area(l.uv)<0&&contains(outer.uv,l.uv[0])),all=outer.ps.concat(...holes.map(l=>l.ps)),tris=THREE.ShapeUtils.triangulateShape(outer.uv,holes.map(l=>l.uv));for(const tri of tris)sheet(out,tri.map(i=>all[i]),color);}
 }return conformEdges(out);}
// BSP union removes internal faces at welded cage junctions; all operands are authored tubes.
function unionSolids(parts:Batch[],color:string):Batch{
 type P={v:THREE.Vector3[],n:THREE.Vector3,w:number};const eps=1e-6;
 const poly=(v:THREE.Vector3[]):P=>{const n=v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0])).normalize();return {v,n,w:n.dot(v[0])};};
 const flip=(p:P)=>{p.v.reverse();p.n.negate();p.w=-p.w;};
 function split(plane:P,p:P,cf:P[],cb:P[],front:P[],back:P[]){const types=p.v.map(v=>{const t=plane.n.dot(v)-plane.w;return t< -eps?2:t>eps?1:0;}),type=types.reduce((a,b)=>a|b,0);
  if(type===0){(plane.n.dot(p.n)>0?cf:cb).push(p);return;}if(type===1){front.push(p);return;}if(type===2){back.push(p);return;}
  const f:THREE.Vector3[]=[],b:THREE.Vector3[]=[];for(let i=0;i<p.v.length;i++){const j=(i+1)%p.v.length,ti=types[i],tj=types[j],vi=p.v[i],vj=p.v[j];if(ti!==2)f.push(vi.clone());if(ti!==1)b.push(vi.clone());if((ti|tj)===3){const t=(plane.w-plane.n.dot(vi))/plane.n.dot(vj.clone().sub(vi)),v=vi.clone().lerp(vj,t);f.push(v);b.push(v.clone());}}
  if(f.length>=3)front.push({v:f,n:p.n.clone(),w:p.w});if(b.length>=3)back.push({v:b,n:p.n.clone(),w:p.w});
 }
 class Node{bounds=new THREE.Box3();plane:P|null=null;polygons:P[]=[];front:Node|null=null;back:Node|null=null;
  constructor(ps:P[]=[]){this.build(ps);}
  invert(){for(const p of this.polygons)flip(p);if(this.plane)flip(this.plane);this.front?.invert();this.back?.invert();[this.front,this.back]=[this.back,this.front];}
  clip(ps:P[]):P[]{if(!this.plane)return ps.slice();let f:P[]=[],b:P[]=[];for(const p of ps)split(this.plane,p,f,b,f,b);if(this.front)f=this.front.clip(f);b=this.back?this.back.clip(b):[];return f.concat(b);}
  clipTo(n:Node){const keep:P[]=[],near:P[]=[];for(const p of this.polygons){const outside=[0,1,2].some(k=>p.v.every(v=>v.getComponent(k)<n.bounds.min.getComponent(k)-eps)||p.v.every(v=>v.getComponent(k)>n.bounds.max.getComponent(k)+eps));(outside?keep:near).push(p);}this.polygons=keep.concat(n.clip(near));this.front?.clipTo(n);this.back?.clipTo(n);}
  all():P[]{return this.polygons.concat(this.front?.all()||[],this.back?.all()||[]);}
  build(ps:P[]){if(!ps.length)return;for(const p of ps)for(const v of p.v)this.bounds.expandByPoint(v);if(!this.plane){const p=ps[0];this.plane={v:p.v.map(v=>v.clone()),n:p.n.clone(),w:p.w};}const f:P[]=[],b:P[]=[];for(const p of ps)split(this.plane,p,this.polygons,this.polygons,f,b);if(f.length){this.front??=new Node();this.front.build(f);}if(b.length){this.back??=new Node();this.back.build(b);}}
 }
 let result:P[]=[];for(const part of parts){const ps:P[]=[];for(let i=0;i<part.p.length;i+=9){const p=poly([0,3,6].map(j=>new THREE.Vector3(...part.p.slice(i+j,i+j+3) as [number,number,number])));if(p.n.lengthSq()>.5)ps.push(p);}if(!result.length){result=ps;continue;}const a=new Node(result),b=new Node(ps);a.clipTo(b);b.clipTo(a);b.invert();b.clipTo(a);b.invert();a.build(b.all());result=a.all();}
 const out=batch();for(const p of result)sheet(out,p.v.map(v=>v.toArray()),color);return mergePlanar(out,color);
}
export function createObjectModel(spec:any,options:any={}):THREE.Group{
 const root=new THREE.Group();root.name='tuk-tuk';const body=batch(),canopy=batch(),trim=batch(),inside=batch(),lamp=batch(),green='#206d48',shieldPaint='#206d49',fenderPaint='#206d47',yellow='#c9aa3d',silver='#a9b5a8',dark='#334b37';
 // Curved rear canopy continues down to the passenger shell as a thick extruded section.
 const profile:number[][]=[[-1.30,.65],[-1.30,1.47]];for(let j=1;j<=8;j++){const a=j*Math.PI/16;profile.push([-1.30+.36*(1-Math.cos(a)),1.47+.47*Math.sin(a)]);}profile.push([.44,1.95],[.60,1.935],[.69,1.915],[.728,1.88],[.70,1.865],[.44,1.90],[-.92,1.89]);for(let j=7;j>=0;j--){const a=j*Math.PI/16;profile.push([-1.25+.33*(1-Math.cos(a)),1.46+.43*Math.sin(a)]);}profile.push([-1.25,.65]);
 const section=profile,cw=.64,canopyPoint=(x:number,p:number[])=>{const high=Math.max(0,Math.min(1,(p[1]-1.45)/.40));return [x,p[1]+.055*Math.cos(x/cw*Math.PI/2)*high-.055*high,p[0]-.20*Math.pow(Math.abs(x)/cw,4)*Math.max(0,Math.min(1,(p[0]-.20)/.4))];};
 for(let j=0;j<14;j++){const x=-cw+2*cw*j/14,z=-cw+2*cw*(j+1)/14;for(let i=0;i<section.length;i++){const k=(i+1)%section.length;if(j>=4&&j<10&&[2,3,4,20,21,22].includes(i))continue;sheet(canopy,[canopyPoint(x,section[i]),canopyPoint(z,section[i]),canopyPoint(z,section[k]),canopyPoint(x,section[k])].reverse(),green);}}
 for(const side of [-1,1])mappedFace(canopy,section,[],p=>canopyPoint(side*cw,p),green,side>0);

 // The rear window is an actual opening through both skins of the curved canopy.
 const windowX=.64*3/7;for(const side of [-1,1])for(let i=2;i<5;i++){const a=canopyPoint(side*windowX,section[i]),b=canopyPoint(side*windowX,section[i+1]),c=canopyPoint(side*windowX,section[25-(i+1)]),d=canopyPoint(side*windowX,section[25-i]);const pts=[a,b,c,d];if(side>0)pts.reverse();sheet(canopy,pts,green);}
 for(const i of [2,5])for(let j=4;j<10;j++){const x=-cw+2*cw*j/14,z=-cw+2*cw*(j+1)/14,pts=[canopyPoint(x,section[i]),canopyPoint(x,section[25-i]),canopyPoint(z,section[25-i]),canopyPoint(z,section[i])];if(i===5)pts.reverse();sheet(canopy,pts,green);}
 const wp=(side:number,j:number,back=false)=>{const a=(12.5+(44-12.5)*j/4)*Math.PI/180,z=-1.275+.345*(1-Math.cos(a)),y=1.465+.45*Math.sin(a);return canopyPoint(side*(windowX-.009),[z+(back?.006:0),y]);};
 for(let j=0;j<4;j++){sheet(lamp,[wp(-1,j),wp(1,j),wp(1,j+1),wp(-1,j+1)],'#283a32');sheet(lamp,[wp(-1,j+1,true),wp(1,j+1,true),wp(1,j,true),wp(-1,j,true)],'#283a32');for(const side of [-1,1]){const pts=[wp(side,j),wp(side,j+1),wp(side,j+1,true),wp(side,j,true)];if(side>0)pts.reverse();sheet(lamp,pts,'#283a32');}}
 for(const j of [0,4]){const pts=[wp(-1,j),wp(-1,j,true),wp(1,j,true),wp(1,j)];if(j===4)pts.reverse();sheet(lamp,pts,'#283a32');}

 for(let i=0;i<lamp.p.length;i+=9)for(const values of [lamp.p,lamp.n,lamp.c]){const a=values.slice(i,i+3);values.splice(i,3,...values.slice(i+6,i+9));values.splice(i+6,3,...a);}
 // The full-width top/rear cross-section above is solid only in its thin bent band.
 ribbedFloor(inside,1.18,1.95,.47,.51,-.29,'#484f40',12,.011);
 // Closed convex leg shield with a continuous central yellow pressing.
 const shieldCurve=new THREE.SplineCurve([[.53,.48],[.60,.51],[.74,.52],[1.05,.43],[1.18,.34],[1.26,.22],[1.30,.18]].map(([y,w])=>new THREE.Vector2(w,y))),shieldRows=Array.from({length:9},(_,i)=>{const p=shieldCurve.getPoint(i/8);return [p.y,p.x];}),shieldU=[-1,-.66,-.32,0,.32,.66,1];
 const sp=(i:number,j:number,back=false)=>{const [y,w]=shieldRows[i],u=shieldU[j];const sweep=THREE.MathUtils.smoothstep(y,.53,.78);return [w*u,y,.475+.20*(1-sweep)+.115*sweep+.13*(1-u*u)*sweep+.04*(y-.53)/.77-(back?.027:0)];};
 for(let i=0;i<8;i++)for(let j=0;j<6;j++){const color=j===2||j===3?yellow:shieldPaint;sheet(body,[sp(i,j),sp(i,j+1),sp(i+1,j+1),sp(i+1,j)],color);sheet(body,[sp(i+1,j,true),sp(i+1,j+1,true),sp(i,j+1,true),sp(i,j,true)],shieldPaint);}
 for(let j=0;j<6;j++){sheet(body,[sp(0,j,true),sp(0,j+1,true),sp(0,j+1),sp(0,j)],shieldPaint);sheet(body,[sp(8,j),sp(8,j+1),sp(8,j+1,true),sp(8,j,true)],shieldPaint);}
 for(let i=0;i<8;i++){sheet(body,[sp(i,0),sp(i+1,0),sp(i+1,0,true),sp(i,0,true)],shieldPaint);sheet(body,[sp(i,6,true),sp(i+1,6,true),sp(i+1,6),sp(i,6)],shieldPaint);}
 for(const side of [-1,1]){
  box(body,[.055,.63,1.03],[side*.60,.83,-.76],green);box(body,[.006,.21,1.01],[side*.635,1.025,-.76],yellow);
  panel(body,[[-1.26,1.145],[-1.26,1.53],[-1.09,1.78],[-.93,1.78],[-.95,1.145]],[],side>0?.65:-.63,.02,green);
  const arch:number[][]=[];for(let i=0;i<=14;i++){const t=Math.PI*i/14;arch.push([-.85+.35*Math.cos(t),.28+.35*Math.sin(t)]);}for(let i=14;i>=0;i--){const t=Math.PI*i/14;arch.push([-.85+.315*Math.cos(t),.28+.315*Math.sin(t)]);}panel(body,arch,[],side>0?.665:-.635,.03,green);

  edgeTube(trim,shieldRows.map((_,i)=>{const p=sp(i,side<0?0:6);return [p[0]+side*.008,p[1],p[2]+.004];}),.010,silver,5);
 }
 // Closed under-seat engine cover supports the raised passenger bench.
 box(body,[1.00,.248,.61],[0,.646,-.865],green);
 for(let j=0;j<5;j++)box(inside,[.36,.008,.005],[0,.565+j*.035,-.555],'#25352b');
 // Connected bench cushion/back cross-section, extruded across cabin width.
 const benchShape=new THREE.Shape(roundedLoop([[-1.18,.77],[-.50,.77],[-.50,.94],[-1.00,.94],[-1.06,1.49],[-1.18,1.49]],.055,2).map(p=>new THREE.Vector2(p[0],p[1])));const benchGeometry=new THREE.ExtrudeGeometry(benchShape,{depth:1.06,bevelEnabled:true,bevelSize:.018,bevelThickness:.018,bevelSegments:2,steps:1});benchGeometry.rotateY(-Math.PI/2);add(inside,benchGeometry,'#626453',[.53,0,0]);
 panel(body,roundedLoop([[.13,.55],[.41,.55],[.41,.69],[.20,.69],[.17,1.08],[.10,1.08]],.028,2),[],.38,.76,green);edgeTube(trim,[[-.38,.60,.11],[-.38,1.09,.11],[.38,1.09,.11],[.38,.60,.11]],.012,silver,6);
 // Front fender is a closed shallow arched ribbon spanning the centered wheel.
 const fp=(i:number,j:number,inner=false)=>{const u=-1+i/4,a=.10+(Math.PI-.20)*j/16,r=inner?.322:.347;return [.205*u*(.85+.15*Math.sin(a)),.28+r*Math.sin(a)*Math.sqrt(1-.48*u*u),.98+r*Math.cos(a)*(1-.25*u*u)];};
 for(let i=0;i<8;i++)for(let j=0;j<16;j++){sheet(body,[fp(i,j),fp(i+1,j),fp(i+1,j+1),fp(i,j+1)],fenderPaint);sheet(body,[fp(i,j+1,true),fp(i+1,j+1,true),fp(i+1,j,true),fp(i,j,true)],fenderPaint);}
 for(let i=0;i<8;i++){sheet(body,[fp(i,0,true),fp(i+1,0,true),fp(i+1,0),fp(i,0)],fenderPaint);sheet(body,[fp(i,16),fp(i+1,16),fp(i+1,16,true),fp(i,16,true)],fenderPaint);}
 for(let j=0;j<16;j++){sheet(body,[fp(0,j),fp(0,j+1),fp(0,j+1,true),fp(0,j,true)],fenderPaint);sheet(body,[fp(8,j,true),fp(8,j+1,true),fp(8,j+1),fp(8,j)],fenderPaint);}
 const fenderEdge:number[][]=[];for(let j=16;j>=0;j--)fenderEdge.push(fp(0,j));for(let i=1;i<=8;i++)fenderEdge.push(fp(i,0));for(let j=1;j<=16;j++)fenderEdge.push(fp(8,j));edgeTube(trim,fenderEdge.map(p=>[p[0]*1.01,p[1]-.004,p[2]]),.007,silver,5);
 for(const x of [-.11,.11])tube(trim,[x,.28,.98],[x,1.14,.43],.026,silver);
 bentTube(trim,[[-.39,1.26,.48],[-.20,1.28,.51],[0,1.28,.53],[.20,1.28,.51],[.39,1.26,.48]],.02,silver);
 for(const side of [-1,1])tube(inside,[side*.28,1.28,.49],[side*.41,1.25,.47],.029,dark);
 const pod=new THREE.SphereGeometry(1,12,6);pod.scale(.12,.055,.075);add(body,pod,green,[0,1.28,.53]);const gauge=new THREE.CylinderGeometry(.032,.032,.008,16,1);add(inside,gauge,'#23392d',[0,1.337,.53]);
 for(const side of [-1,1])edgeTube(trim,[[side*.26,1.28,.515],[side*.29,1.285,.57],[side*.39,1.27,.58],[side*.44,1.26,.565]],.006,silver,5);box(inside,[.004,.001,.039],[0,1.342,.53],'#bac3ad',[0,.45,0]);
 const lens=new THREE.SphereGeometry(.105,16,8,0,Math.PI*2,0,Math.PI);lens.scale(1,1,.35);add(lamp,lens,'#b9cabd',[0,1.005,.808]);
 const ring=new THREE.TorusGeometry(.116,.014,6,20);add(trim,ring,silver,[0,1.005,.788]);
 box(body,[1.14,.18,.07],[0,.57,-1.315],green);
 const cageParts:Batch[]=[];const cageTube=(a:number[],b:number[],r:number)=>{const part=batch();tube(part,a,b,r,green,4);cageParts.push(part);};
 for(const y of [.75,.96,1.17]){for(const side of [-1,1])cageTube([side*.57,y,-1.335],[side*.57,y,-1.595],.009);cageTube([-.57,y,-1.595],[.57,y,-1.595],.009);}
 for(const x of [-.57,0,.57])cageTube([x,.75,-1.595],[x,1.17,-1.595],.009);
 for(const x of [-.38,0,.38])cageTube([x,.745,-1.33],[x,.745,-1.595],.008);
 const cage=unionSolids(cageParts,green);body.p.push(...cage.p);body.n.push(...cage.n);body.c.push(...cage.c);
 tube(trim,[.43,.33,-1.06],[.43,.33,-1.42],.038,'#616f60');
 const sideRail=(side:number)=>[[side*.62,.53,.67],[side*.62,.53,-.20],[side*.64,.62,-.24],[side*.655,1.17,-.24],[side*.665,1.18,-.94],[side*.665,1.62,-.95],canopyPoint(side*cw,[-.88,1.885]),canopyPoint(side*cw,[.41,1.895]),canopyPoint(side*cw,[.72,1.845])];
 const lip=[];for(let i=1;i<6;i++){const x=-cw+2*cw*i/6;lip.push(canopyPoint(x,[.72,1.845]));}edgeTube(trim,[...roundOpen(sideRail(-1)),...lip,...roundOpen(sideRail(1)).reverse()],.012,silver,5);
 const paint=material(.26),metal=material(.25,.80),interior=material(.87),glazing=material(.12);vehicleFinish(paint,'paint');vehicleFinish(interior,'interior');const surfaceMap=surfaceTexture();for(const m of [paint,metal,interior,glazing]){m.roughnessMap=surfaceMap;m.metalnessMap=surfaceMap;}for(const [m,kind] of [[paint,'paint'],[interior,'inside']] as [THREE.MeshStandardMaterial,'paint'|'inside'][]){m.userData.atlas=kind;m.map=tukAtlas(kind,'albedo');const orm=tukAtlas(kind,'orm');m.roughnessMap=m.metalnessMap=orm;if(kind==='inside')m.normalMap=tukAtlas(kind,'normal');}glazing.userData.lensAtlas=true;glazing.map=lampAtlas('albedo');glazing.roughnessMap=glazing.metalnessMap=lampAtlas('orm');glazing.normalMap=lampAtlas('normal');const env=studioEnvironment();for(const m of [paint,metal,interior,glazing]){m.envMap=env;m.envMapIntensity=.75;}
 emit(root,'body',body,paint);emit(root,'canopy',canopy,paint);emit(root,'trim',trim,metal);emit(root,'interior',inside,interior);emit(root,'lamp',lamp,glazing);
 const pivots=wheels(root,wheelShape(.28,.17,false,24),interior,[{name:'wheel-front',pos:[0,.28,.98]},{name:'wheel-rear-l',pos:[.585,.28,-.85]},{name:'wheel-rear-r',pos:[-.585,.28,-.85]}]);
 root.userData.sculptRuntime={nodes:root.children.length,pivots:[root.name,...pivots.map(p=>p.name)],sockets:[],colliders:[],destructionGroups:[]};root.userData.buildPass='blockout';root.userData.qualityStatus='unreviewed';return root;
}

export interface ProceduralModelOptions { baseUrl?: string; [key: string]: unknown; }
export function createModel(options: ProceduralModelOptions = {}): THREE.Group { return createObjectModel(null, options); }
