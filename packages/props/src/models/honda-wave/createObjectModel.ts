import * as THREE from 'three';

// Procedural reconstruction of the supplied plate. Metres, +Y up, +Z forward.
// Hidden-side mechanical detail is approximate, as authorized by the user.
type V = [number, number, number];
export interface ProceduralModelOptions {wireframe?: boolean; castShadow?: boolean; receiveShadow?: boolean}
type Options = ProceduralModelOptions;
const C = {paint:0x25334d, rubber:0x353632, metal:0xa7a8a3, white:0xd4d7d4, amber:0xb56c24};

function surface(g:THREE.BufferGeometry,color:number,rough=.45,metal=0) {
 const p=g.attributes.position,c=new THREE.Color(color),rgb=[],rm=[];
 for(let i=0;i<p.count;i++){rgb.push(c.r,c.g,c.b);rm.push(rough,metal);}
 g.setAttribute('color',new THREE.Float32BufferAttribute(rgb,3));
 g.setAttribute('surface',new THREE.Float32BufferAttribute(rm,2));return g;
}
function merge(gs:THREE.BufferGeometry[]) {
 const out=new THREE.BufferGeometry(),attrs:{[k:string]:number[]}={position:[],normal:[],color:[],surface:[]};
 for(const src of gs){const g=src.index?src.toNonIndexed():src;if(!g.attributes.normal)g.computeVertexNormals();
  for(const k of Object.keys(attrs)){const a=g.getAttribute(k);if(!a)throw new Error('Missing geometry attribute '+k);attrs[k].push(...Array.from(a.array));}
 }
 for(const k of Object.keys(attrs))out.setAttribute(k,new THREE.Float32BufferAttribute(attrs[k],k==='surface'?2:3));
 return out;
}
function weldedNormals(g:THREE.BufferGeometry,creaseDegrees=35){
 const p=g.attributes.position,n=g.attributes.normal,sums=new Map<string,{normal:THREE.Vector3,angle:number}[]>(),keys:string[]=[];
 for(let i=0;i<p.count;i++)keys.push([p.getX(i),p.getY(i),p.getZ(i)].map(x=>x.toFixed(6)).join(','));
 for(let i=0;i<p.count;i+=3){const v=[0,1,2].map(j=>new THREE.Vector3().fromBufferAttribute(p,i+j)),normal=v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0])).normalize();for(let j=0;j<3;j++){const a=v[(j+1)%3].clone().sub(v[j]).normalize(),b=v[(j+2)%3].clone().sub(v[j]).normalize(),angle=Math.acos(THREE.MathUtils.clamp(a.dot(b),-1,1)),key=keys[i+j];if(!sums.has(key))sums.set(key,[]);sums.get(key)!.push({normal,angle});}}
 // A 35-degree crease preserves manufactured panel/bevel boundaries.
 for(let i=0;i<p.count;i++){const base=new THREE.Vector3().fromBufferAttribute(n,i),v=new THREE.Vector3();for(const f of sums.get(keys[i])!)if(base.dot(f.normal)>Math.cos(creaseDegrees*Math.PI/180))v.addScaledVector(f.normal,f.angle);v.normalize();n.setXYZ(i,v.x,v.y,v.z);}return g;
}
function tube(points:V[],radius:number,color:number,rough=.35,metal=1,sides=6) {
 // One welded sweep with mitred bends and end caps, not intersecting cylinders.
 const pts=points.map(p=>new THREE.Vector3(...p)),pos:number[]=[],idx:number[]=[];
 const dirs=pts.slice(1).map((p,i)=>p.clone().sub(pts[i]).normalize());
 let u=new THREE.Vector3(1,0,0);if(Math.abs(u.dot(dirs[0]))>.9)u.set(0,0,1);
 u.addScaledVector(dirs[0],-u.dot(dirs[0])).normalize();
 for(let i=0;i<pts.length;i++){
  const before=dirs[Math.max(0,i-1)],after=dirs[Math.min(i,dirs.length-1)];
  const tangent=before.clone().add(after).normalize();
  u.addScaledVector(tangent,-u.dot(tangent)).normalize();const v=new THREE.Vector3().crossVectors(tangent,u);
  for(let j=0;j<sides;j++){
   const radial=u.clone().multiplyScalar(Math.cos(j*2*Math.PI/sides)).addScaledVector(v,Math.sin(j*2*Math.PI/sides));
   // Miter-plane intersection preserves pipe diameter through a bend.
   const bend=before.clone().sub(after);if(bend.lengthSq()>1e-8){bend.normalize();radial.addScaledVector(bend,radial.dot(bend)*(1/Math.max(.3,before.dot(tangent))-1));}
   pos.push(...pts[i].clone().addScaledVector(radial,radius).toArray());
  }
 }
 for(let i=0;i<pts.length-1;i++)for(let j=0;j<sides;j++){const a=i*sides+j,b=i*sides+(j+1)%sides,c=a+sides,d=b+sides;idx.push(a,b,c,b,d,c);}
 for(let j=1;j<sides-1;j++){idx.push(0,j+1,j);const k=(pts.length-1)*sides;idx.push(k,k+j,k+j+1);}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();return surface(g,color,rough,metal);
}
function oval(at:V,size:V,color:number,rough=.4,metal=0,segments=12,rings=6) {
 const g=new THREE.SphereGeometry(1,segments,rings);g.scale(size[0]/2,size[1]/2,size[2]/2);g.translate(...at);return surface(g,color,rough,metal);
}
function box(at:V,size:V,color:number,rough=.4,metal=0) {return surface(new THREE.BoxGeometry(...size).translate(...at),color,rough,metal);}
function profile(points:number[][],width:number,color:number,rough=.4,curveSegments=2,bevelSegments=1,bevel=.009) {
 const shape=new THREE.Shape(),last=points[points.length-1];shape.moveTo(-(last[0]+points[0][0])/2,(last[1]+points[0][1])/2);
 points.forEach(([z,y],i)=>{const next=points[(i+1)%points.length];shape.quadraticCurveTo(-z,y,-(z+next[0])/2,(y+next[1])/2);});shape.closePath();
 const g=new THREE.ExtrudeGeometry(shape,{depth:width,bevelEnabled:true,bevelThickness:bevel,bevelSize:bevel,bevelSegments,curveSegments,steps:1});
 // Extrusion Z becomes transverse X. Profile X becomes longitudinal Z.
 const p=g.attributes.position;for(let i=0;i<p.count;i++){const z=p.getX(i),y=p.getY(i),x=p.getZ(i)-width/2;p.setXYZ(i,x,y,-z);}
 g.computeVertexNormals();return surface(weldedNormals(g),color,rough,0);
}
// Closed, crowned shell swept around the wheel, not a flat rectangular fender.
function fender(zc:number,r:number,start:number,end:number,width:number,color:number,n=12,across=4) {
 const pos:number[]=[],idx:number[]=[];
 for(let layer=0;layer<2;layer++)for(let i=0;i<=n;i++)for(let j=0;j<=across;j++){
  const a=(start+(end-start)*i/n)*Math.PI/180,t=j/across*2-1;
  const rr=r+.014*(1-t*t)-layer*.007;
  pos.push(t*width/2,.286+rr*Math.sin(a),zc+rr*Math.cos(a));
 }
 const stride=across+1,off=(n+1)*stride;
 for(let i=0;i<n;i++)for(let j=0;j<across;j++){
  const a=i*stride+j,b=a+1,c=a+stride,d=c+1;
  idx.push(a,c,b,b,c,d,a+off,b+off,c+off,b+off,d+off,c+off);
 }
 const quad=(a:number,b:number)=>idx.push(a,a+off,b,b,a+off,b+off);
 for(let i=0;i<n;i++){quad(i*stride,(i+1)*stride);quad((i+1)*stride+across,i*stride+across);}
 for(let j=0;j<across;j++){quad(j+1,j);quad(n*stride+j,n*stride+j+1);}
 for(let i=0;i<idx.length;i+=3)[idx[i+1],idx[i+2]]=[idx[i+2],idx[i+1]];
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);const flat=g.toNonIndexed();flat.computeVertexNormals();surface(weldedNormals(flat),color,.35,0);const fp=flat.getAttribute('position'),fc=flat.getAttribute('color'),white=new THREE.Color(C.white);for(let i=0;i<fp.count;i+=3){let angle=0;for(let k=0;k<3;k++)angle+=Math.atan2(fp.getY(i+k)-.286,fp.getZ(i+k)-zc)*180/Math.PI;angle/=3;if(angle<start+4)for(let k=0;k<3;k++)fc.setXYZ(i+k,white.r,white.g,white.b);}return flat;
}
// A linear lookup map stores roughness in G and metalness in B, the glTF channels.
// UVs encode the original per-vertex surface parameters, including wheel transitions.
function surfaceTexture(kind:'orm'|'albedo'|'normal'='orm') {
 const rimDensity=[36, 41, 15, 14, 22, 40, 37, 1, 0, 2, 28, 49, 18, 53, 46, 65, 63, 108, 98, 223, 184, 180, 158, 123, 118, 111, 77, 63, 35, 45, 48, 56, 180, 196, 154, 115, 92, 119, 123, 35, 35, 35, 35, 48, 61, 61, 61, 61, 98, 134, 129, 125, 122, 114, 106, 82, 58, 66, 75, 87, 82, 82, 82, 82, 103, 124, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 152, 197, 240, 176, 151, 125, 62, 40, 22, 37, 24, 31, 38, 51, 74, 40, 40, 40, 40, 40, 40, 40, 40, 40, 63, 87, 84, 105, 91, 90, 100, 122, 152, 76, 0, 0, 0, 0, 76, 152, 172, 144, 127, 85, 95, 91, 54, 49, 48];
 const data=new Uint8Array(256*1536*4),hash2=(x:number,y:number)=>{const n=Math.sin(x*127.1+y*311.7)*43758.5453;return n-Math.floor(n);},smoothNoise=(x:number,y:number)=>{const ix=Math.floor(x),iy=Math.floor(y);let u=x-ix,v=y-iy;u=u*u*(3-2*u);v=v*v*(3-2*v);return (hash2(ix,iy)*(1-u)+hash2(ix+1,iy)*u)*(1-v)+(hash2(ix,iy+1)*(1-u)+hash2(ix+1,iy+1)*u)*v;};
 const paintStrokes=Array.from({length:19},(_,j)=>{const a=(hash2(j,7)-.5)*.9;return {u:.46+.25*hash2(j,1),v:.25+.31*hash2(j,2),c:Math.cos(a),s:Math.sin(a),l:.008+.028*hash2(j,3),w:.0015+.0015*hash2(j,4)};});
 for(let y=0;y<1536;y++)for(let x=0;x<256;x++){
  const i=(y*256+x)*4;let rgb=kind==='orm'?[255,x,y]:kind==='normal'?[128,128,255]:[255,255,255];
  if(y>=256&&y<512){const amber=x>=128,u=(x%128)/127,v=(y-256)/255,edge=Math.min(u,1-u,v,1-v),dx=(u-.5)*2,dy=(v-.5)*2,flute=Math.sin(u*Math.PI*(amber?24:18));
   if(kind==='albedo'){const intensity=edge<.035?.35:.77+.13*Math.max(0,1-dx*dx-dy*dy)+.025*flute;rgb=(amber?[191,105,30]:[188,196,192]).map(c=>c*intensity);}
   if(kind==='orm')rgb=[255,amber?76:65,amber?0:45];
   if(kind==='normal'){const nx=.11*dx+(amber?.065:.22)*flute,ny=.13*dy,nz=Math.sqrt(1-nx*nx-ny*ny);rgb=[(nx*.5+.5)*255,(ny*.5+.5)*255,(nz*.5+.5)*255];}
  }
  if(y>=512){const region=Math.floor(y/256)-2,u=x/255,v=(y%256)/255,grain=Math.sin(x*127.1+y*311.7)*43758.5453,noise=grain-Math.floor(grain),cloud=.62*smoothNoise(u*11,v*17)+.38*smoothNoise(u*39,v*51);
   let shade=1,rough=.4,metal=0,nx=0,ny=0,paintScuff=0;
   if(region===0){const dust=.08+.12*cloud+.045*noise,scratch=paintStrokes.reduce((value,p)=>{const du=u-p.u,dv=v-p.v,along=du*p.c+dv*p.s,across=-du*p.s+dv*p.c;return Math.max(value,Math.exp(-((across/p.w)**2))*Math.max(0,1-(along/p.l)**2)*(.55+.45*noise));},0);paintScuff=scratch*Math.max(0,1-Math.abs(v-.40)/.19)*THREE.MathUtils.smoothstep(u,.34,.48)*(1-THREE.MathUtils.smoothstep(u,.68,.78));shade=.96-dust+.10*scratch;rough=.23+.12*cloud+.24*paintScuff;nx=.008*(noise-.5);ny=.008*Math.sin(v*321);}
   if(region===1){const edge=Math.min(u,1-u),seam=Math.exp(-Math.pow((edge-.055)/.009,2)),stitch=seam*Math.pow(Math.max(0,Math.sin(v*210)),3),crease=Math.pow(Math.max(0,Math.sin(v*22+1.1*Math.sin(u*7))),14)*Math.pow(1-Math.abs(u*2-1),2);shade=.81+.15*cloud+.10*noise-.08*crease+.10*stitch;rough=.67+.16*cloud;nx=.012*Math.sin(u*91+Math.sin(v*33));ny=.020*Math.sin(v*22+1.1*Math.sin(u*7))+.016*(noise-.5);}
   if(region===2){const axial=Math.abs(v*2-1),phase=u*2*Math.PI*54+Math.abs(v-.5)*14,groove=Math.pow(Math.max(0,Math.cos(phase)),18)*(1-Math.pow(axial,5)),line=Math.exp(-Math.pow((axial-.68)/.03,2));shade=.78+.15*cloud+.06*noise-.28*groove-.07*line;rough=.80+.10*cloud;nx=.18*Math.sin(phase)*Math.pow(Math.max(0,Math.cos(phase)),7);ny=.07*Math.sin(v*30)+.02*(noise-.5);}
   if(region===3){shade=.83+.14*cloud+.035*noise;rough=.32+.22*cloud;metal=.95;nx=.014*Math.sin(u*251);ny=.012*(noise-.5);}
   if(kind==='albedo'){rgb=[255*shade,255*shade,255*shade];if(region===0){const road=Math.max(0,1-v/.5),wear=.025+.07*cloud+road*(.08+.23*cloud);rgb=[26,37,58].map((v,k)=>(v*(1-wear)+[74,78,81][k]*wear)*(1-.65*paintScuff)+[93,99,100][k]*.65*paintScuff);}if(region===2){const dirt=.08+.14*cloud;rgb=[27,28,25].map((v,k)=>(v*(1-dirt)+[127,118,95][k]*dirt)*shade);}if(region===3){const rust=Math.max(0,(cloud-.55)/.45)*.45;rgb=[198,147,83].map(v=>255*shade*(1-rust)+v*rust);}}if(kind==='orm')rgb=[255,255*rough,255*metal];if(kind==='normal')rgb=[128+127*nx,128+127*ny,255*Math.sqrt(1-nx*nx-ny*ny)];if(region===3&&v<.30){const cast=.76+.16*cloud+.04*noise;if(kind==='albedo')rgb=[195*cast,199*cast,188*cast];if(kind==='orm')rgb=[255,255*(.57+.22*cloud),255*(.40+.24*cloud)];if(kind==='normal')rgb=[128+5.7*(noise-.5),128+5.7*(smoothNoise(u*73,v*67)-.5),255];}if(region===3&&v>.70){const phase=u*128,index=Math.floor(phase),f=phase-index,density=(rimDensity[index%128]*(1-f)+rimDensity[(index+1)%128]*f)/255,soil=THREE.MathUtils.clamp(.08+.65*density+.10*cloud,0,1);if(kind==='albedo')rgb=[125,128,120].map((c,k)=>c*(1-soil)+[88,69,44][k]*soil);if(kind==='orm')rgb=[255,255*(.42+.40*soil),255*(.95*(1-soil)**2)];if(kind==='normal'){const t=(v-.72)/.25,a=(t-.18)/.085,b=(t-.84)/.07,nx=.012*(noise-.5),ny=-.48*a*Math.exp(-a*a)-.40*b*Math.exp(-b*b);rgb=[128+127*nx,128+127*ny,255*Math.sqrt(1-nx*nx-ny*ny)];}}
  }
  for(let k=0;k<3;k++)data[i+k]=Math.round(THREE.MathUtils.clamp(rgb[k],0,255));data[i+3]=255;
 }
 const texture=new THREE.DataTexture(data,256,1536,THREE.RGBAFormat);texture.name='honda-wave-'+kind;texture.colorSpace=kind==='albedo'?THREE.SRGBColorSpace:THREE.NoColorSpace;texture.minFilter=texture.magFilter=THREE.LinearFilter;texture.generateMipmaps=false;texture.needsUpdate=true;return texture;
}
// Authored planar/cylindrical UVs occupy atlas regions above the parameter lookup.
function texturedSurface(g:THREE.BufferGeometry,kind:'paint'|'metal'|'wheel'){
 const p=g.attributes.position,c=g.attributes.color,n=g.attributes.normal,rm=g.attributes.surface;
 const blue=new THREE.Color(C.paint),rubber=new THREE.Color(C.rubber);
 for(let i=0;i<p.count;i++){
  if(rm.getX(i)<0)continue;const x=p.getX(i),y=p.getY(i),z=p.getZ(i),isBlue=Math.abs(c.getX(i)-blue.r)<.001&&Math.abs(c.getZ(i)-blue.b)<.001,isRubber=Math.abs(c.getX(i)-rubber.r)<.001&&Math.abs(c.getZ(i)-rubber.b)<.001;
  let region=-1,u=.5,v=.5;
  if(kind==='wheel'){if(rm.getY(i)<.5){region=2;c.setXYZ(i,1,1,1);u=Math.acos(Math.cos(Math.atan2(z,y)))/Math.PI;v=THREE.MathUtils.clamp(x/.08+.5,.02,.98);}else {region=3;const radius=Math.hypot(y,z);if(radius>.20){u=(Math.atan2(z,y)+Math.PI)/(2*Math.PI);v=.72+.25*THREE.MathUtils.clamp((radius-.20)/.04,0,1);c.setXYZ(i,1,1,1);}else{u=y/.60+.5;v=.02+.25*(z/.60+.5);}}}
  else if(isBlue){region=0;c.setXYZ(i,1,1,1);u=(z+1)/2;v=Math.abs(n.getY(i))>.7?x/.4+.5:y/1.2;}
  else if(isRubber&&kind==='paint'&&y<.9&&y>.65){region=1;if(Math.abs(n.getY(i))>.6){u=x/.32+.5;v=(z+.51)/.50;}else if(Math.abs(n.getX(i))>.6){u=(z+.51)/.50;v=(y-.67)/.14;}else{u=x/.32+.5;v=(y-.67)/.14;}}
  else if(kind==='metal'&&rm.getY(i)>.5){region=3;u=(z+1)/2;v=.35+.30*y/1.3;}
  if(region>=0){u=THREE.MathUtils.clamp(u,.01,.99);v=THREE.MathUtils.clamp(v,.01,.99);rm.setXY(i,-3-u,(512+region*256+v*255+.5)/1536);}
 }
 return g;
}
function material(name:string,options:Options,map:THREE.DataTexture) {
 const m=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:1,metalness:1,roughnessMap:map,metalnessMap:map,wireframe:!!options.wireframe});m.name=name;
 return m;
}

function underbone(){
 // One continuous closed manufactured body. The profile traces both the step
 // opening and the rear wheel arch; width and crown vary across the leg shield.
 const g=profile([[.36,.855],[.40,.70],[.31,.47],[.20,.245],[.13,.255],[.08,.38],[-.17,.35],[-.36,.49],[-.48,.57],[-.65,.58],[-.80,.50],[-.87,.35],[-.92,.34],[-.88,.53],[-.77,.62],[-.38,.647],[-.055,.65],[-.11,.60],[-.135,.52],[-.105,.445],[.005,.395],[.16,.44],[.20,.59],[.17,.79]],.15,C.paint,.38,3);
 const p=g.attributes.position,pos:number[]=[];
 for(let i=0;i<p.count;i+=3){const a=new THREE.Vector3().fromBufferAttribute(p,i),b=new THREE.Vector3().fromBufferAttribute(p,i+1),c=new THREE.Vector3().fromBufferAttribute(p,i+2),ab=a.clone().add(b).multiplyScalar(.5),bc=b.clone().add(c).multiplyScalar(.5),ca=c.clone().add(a).multiplyScalar(.5);const planarRearCap=[a,b,c].every(v=>v.z<-.10)&&Math.abs(a.x-b.x)<1e-6&&Math.abs(a.x-c.x)<1e-6;for(const v of (planarRearCap?[a,b,c]:[a,ab,ca,ab,b,bc,ca,bc,c,ab,bc,ca]))pos.push(...v.toArray());}
 // Split at each width-function breakpoint before deformation. A long cap
 // triangle crossing a kink can fold even when the continuous mapping is valid.
 let tris:V[][]=[];for(let i=0;i<pos.length;i+=9)tris.push([pos.slice(i,i+3) as V,pos.slice(i+3,i+6) as V,pos.slice(i+6,i+9) as V]);
 for(const zcut of [-.10,.40]){const next:V[][]=[];for(const tri of tris){const sides=[[],[]] as V[][];for(let i=0;i<3;i++){const a=tri[i],b=tri[(i+1)%3],da=a[2]-zcut,db=b[2]-zcut;if(da<=0)sides[0].push(a);if(da>=0)sides[1].push(a);if(da*db<0){const t=da/(da-db),v=a.map((x,k)=>x+t*(b[k]-x)) as V;sides[0].push(v);sides[1].push(v);}}for(const poly of sides)for(let i=1;i<poly.length-1;i++)next.push([poly[0],poly[i],poly[i+1]]);}tris=next;}
 const out=new THREE.BufferGeometry();out.setAttribute('position',new THREE.Float32BufferAttribute(tris.flat(2),3));const q=out.attributes.position;
 const original=q.clone();
 const deform=(x:number,y:number,z:number)=>{const front=THREE.MathUtils.clamp((z+.10)/.50,0,1),w=.075+front*.095,waist=1-.13*front*Math.sin(Math.PI*THREE.MathUtils.clamp((y-.25)/.48,0,1))**2,taper=1-.55*front*(1-THREE.MathUtils.smoothstep(y,.25,.62));return new THREE.Vector3(x*w/.075*waist*taper,y,z-.04*front*(x/.084)**2);};
 for(let i=0;i<q.count;i++){const v=deform(q.getX(i),q.getY(i),q.getZ(i));q.setXYZ(i,v.x,v.y,v.z);}

 out.computeVertexNormals();const smooth=weldedNormals(out.clone(),65).attributes.normal;weldedNormals(out,35);const normal=out.attributes.normal;for(let i=0;i<q.count;i++){const y=q.getY(i),z=q.getZ(i),neckWeight=THREE.MathUtils.smoothstep(z,-.32,-.22)*(1-THREE.MathUtils.smoothstep(z,.03,.13))*THREE.MathUtils.smoothstep(y,.35,.41)*(1-THREE.MathUtils.smoothstep(y,.64,.70)),weight=Math.max(neckWeight,THREE.MathUtils.smoothstep(z,.08,.17)*THREE.MathUtils.smoothstep(y,.29,.42));if(weight){const v=new THREE.Vector3().fromBufferAttribute(normal,i).lerp(new THREE.Vector3().fromBufferAttribute(smooth,i),weight).normalize();normal.setXYZ(i,v.x,v.y,v.z);}}
 // The planar cap becomes a smooth manufactured sheet after deformation.
 // Derive its normal from surface tangents instead of its arbitrary cap diagonals.
 for(let i=0;i<q.count;i+=3){const x=original.getX(i);if(Math.abs(Math.abs(x)-.084)>1e-5||Math.abs(x-original.getX(i+1))>1e-6||Math.abs(x-original.getX(i+2))>1e-6)continue;for(let j=0;j<3;j++){const k=i+j,y=original.getY(k),z=original.getZ(k);if(z<.1)continue;const h=.0001,dy=deform(x,y+h,z).sub(deform(x,y-h,z)),dz=deform(x,y,z+h).sub(deform(x,y,z-h)),n=dy.cross(dz).normalize().multiplyScalar(Math.sign(x));normal.setXYZ(k,n.x,n.y,n.z);}}
 return surface(out,C.paint,.38,0);
}
// Thin closed livery strips follow the authored panel surface; no projected lighting.
function livery(points:V[],side:number){
 const pos:number[]=[],idx:number[]=[],thickness=.0008;
 for(const p of points)pos.push(...p);for(const p of points)pos.push(p[0]-side*thickness,p[1],p[2]);
 idx.push(0,1,2,0,2,3,4,6,5,4,7,6);for(let i=0;i<4;i++){const j=(i+1)%4;idx.push(i,i+4,j,j,i+4,j+4);}
 const nx=(points[1][1]-points[0][1])*(points[2][2]-points[0][2])-(points[1][2]-points[0][2])*(points[2][1]-points[0][1]);
 if(nx*side<0)for(let i=0;i<idx.length;i+=3)[idx[i+1],idx[i+2]]=[idx[i+2],idx[i+1]];
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();return surface(g,C.white,.38,0);
}
function castSurface(g:THREE.BufferGeometry){const p=g.attributes.position,rm=g.attributes.surface;for(let i=0;i<p.count;i++){const u=THREE.MathUtils.clamp((p.getZ(i)+.18)/.33,.01,.99),v=.02+.25*THREE.MathUtils.clamp((p.getY(i)-.18)/.26,0,1);rm.setXY(i,-3-u,(1280+v*255+.5)/1536);}return g;}
function engineCase(){
 const src=profile([[.11,.31],[.07,.39],[-.09,.40],[-.16,.32],[-.11,.22],[.04,.20]],.24,C.metal,.48,3),p=src.getAttribute('position'),positions:number[]=[];
 for(let i=0;i<p.count;i+=3){const a=new THREE.Vector3().fromBufferAttribute(p,i),b=new THREE.Vector3().fromBufferAttribute(p,i+1),c=new THREE.Vector3().fromBufferAttribute(p,i+2),ab=a.clone().add(b).multiplyScalar(.5),bc=b.clone().add(c).multiplyScalar(.5),ca=c.clone().add(a).multiplyScalar(.5);for(const source of [a,ab,ca,ab,b,bc,ca,bc,c,ab,bc,ca]){const v=source.clone(),cap=THREE.MathUtils.clamp((Math.abs(v.x)-.115)/.014,0,1),bulge=Math.max(0,1-((v.y-.30)/.11)**2-((v.z+.025)/.14)**2);v.x+=Math.sign(v.x)*.027*cap*bulge;positions.push(v.x,v.y,v.z);}}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.computeVertexNormals();src.dispose();return castSurface(surface(weldedNormals(g),C.metal,.43,1));
}
function engineRoundCover(side:number){const pts=[[0,0],[.045,0],[.065,.005],[.068,.010],[.064,.017],[.045,.021],[0,.021]],g=new THREE.LatheGeometry(pts.map(p=>new THREE.Vector2(p[0],p[1])),22);g.rotateZ(-side*Math.PI/2);g.translate(side*.151,.305,-.025);return castSurface(surface(g,0x999d96,.52,1));}
function roundedLamp(at:V,size:V,color:number,amber=false){
 const w=size[0]/2,h=size[1]/2,r=Math.min(.015,size[1]*.16),shape=new THREE.Shape();shape.moveTo(-w+r,-h);shape.lineTo(w-r,-h);shape.quadraticCurveTo(w,-h,w,-h+r);shape.lineTo(w,h-r);shape.quadraticCurveTo(w,h,w-r,h);shape.lineTo(-w+r,h);shape.quadraticCurveTo(-w,h,-w,h-r);shape.lineTo(-w,-h+r);shape.quadraticCurveTo(-w,-h,-w+r,-h);
 const g=new THREE.ExtrudeGeometry(shape,{depth:size[2],bevelEnabled:true,bevelSize:.004,bevelThickness:.004,bevelSegments:amber?1:2,curveSegments:4,steps:1});g.translate(at[0],at[1],at[2]-size[2]/2);surface(weldedNormals(g),color,.25,0);const p=g.getAttribute('position'),c=g.getAttribute('color'),rm=g.getAttribute('surface');for(let i=0;i<p.count;i++){const u=THREE.MathUtils.clamp((p.getX(i)-at[0])/size[0]+.5,.01,.99),v=THREE.MathUtils.clamp((p.getY(i)-at[1])/size[1]+.5,.01,.99);rm.setXY(i,-1-(amber?.5:0)-u*.5,v);c.setXYZ(i,1,1,1);}return g;
}
function forkCover(side:number){const outline=[[.52,.60],[.57,.56],[.66,.36],[.72,.28],[.66,.24],[.50,.27],[.51,.33],[.51,.49]],hole=[[.545,.49],[.61,.35],[.653,.29],[.535,.294]],shape=new THREE.Shape(),path=(dst:THREE.Path,pts:number[][])=>{const last=pts[pts.length-1];dst.moveTo(-(last[0]+pts[0][0])/2,(last[1]+pts[0][1])/2);pts.forEach(([z,y],i)=>{const next=pts[(i+1)%pts.length];dst.quadraticCurveTo(-z,y,-(z+next[0])/2,(y+next[1])/2);});dst.closePath();};path(shape,outline);const opening=new THREE.Path();hole.forEach((p,i)=>{const a=hole[(i+hole.length-1)%hole.length],b=hole[(i+1)%hole.length],start=p.map((v,k)=>v+(a[k]-v)*.10),end=p.map((v,k)=>v+(b[k]-v)*.10);if(i===0)opening.moveTo(-start[0],start[1]);else opening.lineTo(-start[0],start[1]);opening.quadraticCurveTo(-p[0],p[1],-end[0],end[1]);});opening.closePath();shape.holes.push(opening);const g=new THREE.ExtrudeGeometry(shape,{depth:.018,bevelEnabled:true,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:3,steps:1}),p=g.attributes.position;for(let i=0;i<p.count;i++){const z=-p.getX(i),y=p.getY(i),x=p.getZ(i)-.009;p.setXYZ(i,x+side*.082,y,z);}g.computeVertexNormals();return surface(weldedNormals(g),C.paint,.35,0);}
function rearShock(x:number){const a=new THREE.Vector3(x,.327,-.612),b=new THREE.Vector3(x,.61,-.53),d=b.clone().sub(a),length=d.length(),profile=[[0,0],[.020,0],[.020,.025],[.012,.035],[.012,.15],[.023,.15],[.023,length-.018],[.018,length],[0,length]],g=new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(p[0],p[1])),12);surface(g,C.metal,.36,1);const p=g.attributes.position,c=g.attributes.color,rm=g.attributes.surface,blue=new THREE.Color(C.paint);for(let i=0;i<p.count;i++){if(p.getY(i)>=.15&&p.getY(i)<length-.009){c.setXYZ(i,blue.r,blue.g,blue.b);rm.setXY(i,.36,0);}}g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize()));g.translate(a.x,a.y,a.z);return g;}
function saddle(){
 // Closed loft: crowned vinyl cushion with a rounded front lip and tapered rear.
 const sections=[[-.492,.035,.724,.737],[-.479,.095,.691,.771],[-.45,.135,.682,.798],[-.39,.147,.677,.807],[-.28,.149,.675,.807],[-.16,.14,.674,.799],[-.075,.125,.679,.786],[-.03,.092,.692,.775],[-.017,.025,.720,.747]],n=16,pos:number[]=[],idx:number[]=[];
 for(const [z,w,bottom,top] of sections)for(let j=0;j<n;j++){const a=j/n*Math.PI*2,c=Math.cos(a),sn=Math.sin(a),base=bottom-.032,x=w*Math.sign(c)*Math.abs(c)**.65,y=(top+base)/2+(top-base)/2*Math.sign(sn)*Math.abs(sn)**.55;pos.push(x,y,z);}
 for(let k=0;k<sections.length-1;k++)for(let j=0;j<n;j++){const a=k*n+j,b=k*n+(j+1)%n,c=a+n,d=b+n;idx.push(a,b,c,b,d,c);}
 for(const end of [0,1]){const k=end?(sections.length-1)*n:0,section=sections[end?sections.length-1:0],center=pos.length/3;pos.push(0,(section[2]-.032+section[3])/2,section[0]);for(let j=0;j<n;j++)if(end)idx.push(center,k+j,k+(j+1)%n);else idx.push(center,k+(j+1)%n,k+j);}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();surface(g,C.rubber,.82,0);
 const seam:V[]=[],a=Math.PI/8;for(const side of [-1,1]){const ordered=side===-1?sections:[...sections].reverse();for(const [z,w,bottom,top] of ordered){const base=bottom-.032;seam.push([side*(w*Math.cos(a)**.65+.0008),(top+base)/2+(top-base)/2*Math.sin(a)**.55,z]);}}seam.push(seam[0]);
 return merge([g,tube(seam,.0021,0x242622,.8,0,4)]);
}

export function createObjectModel(_spec?:unknown,options:Options={}):THREE.Group {
 const root=new THREE.Group();root.name='honda-wave';
 const surfaceMap=surfaceTexture();
 const mats={paint:material('paint and dielectric fittings',options,surfaceMap),metal:material('metal fittings',options,surfaceMap),wheel:material('tyre, rim and hub',options,surfaceMap)};
 const albedoMap=surfaceTexture('albedo'),normalMap=surfaceTexture('normal');for(const mat of Object.values(mats)){mat.map=albedoMap;mat.normalMap=normalMap;mat.normalScale.set(.6,.6);}
 const nodes:Record<string,THREE.Object3D>={},meshes:Record<string,THREE.Mesh>={};
 const add=(id:string,gs:THREE.BufferGeometry[],mat:keyof typeof mats,parent:THREE.Object3D=root,origin:V=[0,0,0])=>{
  const g=texturedSurface(merge(gs),mat);g.translate(-origin[0],-origin[1],-origin[2]);const mesh=new THREE.Mesh(g,mats[mat]);mesh.name=id;mesh.castShadow=options.castShadow!==false;mesh.receiveShadow=options.receiveShadow!==false;
  parent.add(mesh);nodes[id]=mesh;meshes[id]=mesh;return mesh;
 };
 const steering=new THREE.Group();steering.name='steering';steering.position.set(0,.83,.43);root.add(steering);
 const front=new THREE.Group();front.name='wheel-front';front.position.set(0,.286-.83,.675-.43);steering.add(front);
 const rear=new THREE.Group();rear.name='wheel-rear';rear.position.set(0,.286,-.58);root.add(rear);
 const body=[underbone(),
  ...[-1,1].map(s=>profile([[-.13,.405],[-.23,.49],[-.38,.515],[-.47,.455],[-.30,.36],[-.12,.36]],.014,C.paint).translate(s*.125,0,0)),
  saddle(),
  profile([[-.13,.355],[-.60,.34],[-.66,.31],[-.63,.275],[-.14,.285]],.022,C.paint).translate(.143,-.017,0),
  box([0,.25,-.915],[.115,.075,.014],0x252723,.9),
  roundedLamp([0,0,0],[.12,.063,.037],C.amber,true).rotateY(Math.PI).translate(0,.62,-.865),
 ...[-1,1].map(s=>roundedLamp([0,0,0],[.057,.044,.045],C.amber,true).rotateY(Math.PI).translate(s*.15,.565,-.852)),
 ];
 const rearLamp=body[body.length-3],red=new THREE.Color(0xff827b),rearColors=rearLamp.attributes.color;for(let i=0;i<rearColors.count;i++)rearColors.setXYZ(i,red.r,red.g,red.b);
 for(const side of [-1,1]){
  body.push(livery([[side*.142,.377,-.13],[side*.142,.390,-.29],[side*.142,.402,-.29],[side*.142,.389,-.13]],side));body.push(livery([[side*.142,.390,-.29],[side*.142,.448,-.42],[side*.142,.460,-.42],[side*.142,.402,-.29]],side));
  for(const [dy,thickness] of [[0,.014],[.022,.004]]){const zs=[-.11,-.23,-.38,-.52],ys=[.602,.603,.612,.618];for(let j=0;j<3;j++)body.push(livery([[side*.087,ys[j]+dy,zs[j]],[side*.087,ys[j+1]+dy,zs[j+1]],[side*.087,ys[j+1]+dy+thickness,zs[j+1]],[side*.087,ys[j]+dy+thickness,zs[j]]],side));}
  const shieldPoint=(z:number,y:number):V=>{const p=body[0].attributes.position,ray=new THREE.Ray(new THREE.Vector3(side*.5,y,z),new THREE.Vector3(-side,0,0)),hit=new THREE.Vector3();let best:number|null=null;for(let i=0;i<p.count;i+=3){if(ray.intersectTriangle(new THREE.Vector3().fromBufferAttribute(p,i),new THREE.Vector3().fromBufferAttribute(p,i+1),new THREE.Vector3().fromBufferAttribute(p,i+2),false,hit)&& (best===null||side*hit.x>side*best))best=hit.x;}if(best===null)throw new Error('Shield livery lies outside panel');return [best+side*.0018,y,z];};
  for(const dy of [0,.021])body.push(livery([shieldPoint(.195,.728+dy),shieldPoint(.32,.739+dy),shieldPoint(.32,.747+dy),shieldPoint(.195,.736+dy)],side));
 }
 add('body',body,'paint');
 const metal:THREE.BufferGeometry[]=[];
 for(const x of [-.095,.095]){
  metal.push(tube([[x,.324,-.19],[x,.30,-.61]],.016,C.metal,.42,1));
  metal.push(rearShock(x));
 }
 for(const s of [-1,1])metal.push(tube([[s*.065,.565,-.852],[s*.122,.565,-.852]],.009,C.metal,.5,1));
 for(const side of [-1,1]){const screw=new THREE.CylinderGeometry(.006,.006,.004,6);screw.rotateZ(Math.PI/2);screw.translate(side*.143,.468,-.32);metal.push(surface(screw,0x9b9d91,.42,.8));}
 metal.push(engineCase());for(const side of [-1,1])metal.push(engineRoundCover(side));
 for(const side of [-1,1])for(let j=0;j<6;j++){const a=j*Math.PI/3,y=.30+.075*Math.sin(a),z=-.025+.095*Math.cos(a),bulge=Math.max(0,1-((y-.30)/.11)**2-((z+.025)/.14)**2),x=side*(.129+.027*bulge+.003);const bolt=new THREE.CylinderGeometry(.0045,.0045,.005,6);bolt.rotateZ(Math.PI/2);bolt.translate(x,y,z);metal.push(surface(bolt,0x737870,.5,.75));}

 metal.push(tube([[0,.329,.13],[0,.36,.22]],.057,0x777975,.58,1,10));
 // Open rack outline and cross rails: daylight between members is part of the silhouette.
 for(const s of [-1,1])metal.push(tube([[s*.145,.64,-.48],[s*.145,.69,-.53],[s*.13,.69,-.80],[s*.105,.69,-.90]],.008,C.metal,.28,1));
 for(const [z,w] of [[-.53,.134],[-.66,.125],[-.80,.119],[-.90,.094]])metal.push(tube([[-w,.69,z],[w,.69,z]],.007,C.metal,.3,1));
 for(const x of [-.09,0,.09]){const sh=new THREE.Shape([new THREE.Vector2(-.019,-.1575),new THREE.Vector2(.019,-.1575),new THREE.Vector2(.019,.1575),new THREE.Vector2(-.019,.1575)]);for(const z of [-.079,.079]){const a=.009,b=.052,r=.003;sh.holes.push(new THREE.Path([[-a+r,-b], [a-r,-b],[a,-b+r],[a,b-r],[a-r,b],[-a+r,b],[-a,b-r],[-a,-b+r]].map(p=>new THREE.Vector2(p[0],p[1]+z))));}const g=new THREE.ExtrudeGeometry(sh,{depth:.008,bevelEnabled:false,steps:1});g.rotateX(-Math.PI/2);g.translate(x,.700,-.70);metal.push(surface(g,C.metal,.38,1));}
 metal.push(tube([[-.13,.70,-.48],[-.13,.78,-.46],[.13,.78,-.46],[.13,.70,-.48]],.009,C.metal,.3,1));
 metal.push(tube([[-.135,.28,.17],[-.17,.20,.02],[-.17,.23,-.63]],.022,0x8f908b,.4,1));
 metal.push(tube([[.143,.285,-.15],[.143,.345,-.57],[.143,.325,-.65],[.143,.235,-.65],[.143,.21,-.57],[.143,.24,-.15]],.006,0x393a35,.75,.55,5));
 metal.push(tube([[-.165,.25,.01],[-.24,.25,.01]],.018,0x393a35,.85,0));
 metal.push(tube([[.165,.25,.01],[.24,.25,.01]],.018,0x393a35,.85,0));
 metal.push(tube([[.166,.29,-.10],[.19,.35,-.16],[.19,.42,-.21]],.008,C.metal,.45,1));metal.push(tube([[.19,.42,-.21],[.26,.42,-.21]],.012,C.rubber,.8,0));metal.push(tube([[.17,.24,.015],[.18,.23,.15],[.235,.23,.15]],.008,C.metal,.5,1));
 add('static-metal',metal,'metal');
 const sp=[fender(.675,.336,55,150,.105,C.paint,24,5),
  profile([[.54,.595],[.39,.82],[.34,.86],[.31,.82],[.475,.59]],.145,C.paint),
  ...[-1,1].map(s=>forkCover(s)),
  profile([[.44,.92],[.42,1.01],[.28,1.025],[.22,.99],[.26,.89],[.37,.885]],.205,C.paint,.38,5,3,.009),
  roundedLamp([0,.965,.449],[.152,.124,.024],0xbfc6c3),
  roundedLamp([-.153,.967,.38],[.062,.048,.050],C.amber,true),roundedLamp([.153,.967,.38],[.062,.048,.050],C.amber,true),
  tube([[-.225,.972,.26],[-.350,.966,.25]],.017,0x181a17,.68,0,8),tube([[.225,.972,.26],[.350,.966,.25]],.017,0x181a17,.68,0,8)
 ];
 // The lamp, bars and mirrors sit aft of the steering neck, as in the plate.
 for(const g of sp.slice(4))g.translate(0,-.01,-.06);
 const coverNormal=new THREE.Vector3(0,.607,.795);
 for(const [size,offset,color,metal] of [[[.070,.105,.006],0,C.metal,.7],[[.050,.074,.006],.004,0xa5aaa2,.3]] as [V,number,number,number][]){const g=box([0,0,0],size,color,.35,metal);g.rotateX(-.652);g.translate(0,.755+coverNormal.y*offset,.453+coverNormal.z*offset);sp.push(g);}
 for(let j=0;j<3;j++){const y=.732+j*.022,z=.453-(y-.755)*.763+.008,g=box([0,0,0],[.050,.003,.002],0x636960,.5,.6);g.rotateX(-.652);g.translate(0,y,z);sp.push(g);}
 for(const center of [[0,.681,.510],[0,.633,.547]] as V[]){const g=new THREE.CylinderGeometry(.0045,.0045,.003,6);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),coverNormal));g.translate(...center);sp.push(surface(g,C.metal,.38,.7));}

 for(const side of [-1,1])sp.push(tube([[side*.071,.575,.543],[side*.049,.599,.562]],.006,C.paint,.42,0,5));
 sp.push(box([0,1.025,.27],[.092,.013,.063],0x292c29,.58,0));
 const mark=(x:number,z:number,w:number,d:number,angle:number,color:number,y=1.0325)=>{const g=new THREE.PlaneGeometry(w,d);g.rotateX(-Math.PI/2);g.rotateY(angle);g.translate(x,y,z);return surface(g,color,.6,0);};
 sp.push(mark(0,.27,.077,.048,0,0x424b43));for(let j=0;j<7;j++){const a=(-150+j*25)*Math.PI/180;sp.push(mark(.029*Math.cos(a),.273+.017*Math.sin(a),.0018,.006,-a,0xc8cfc0,1.0332));}sp.push(mark(-.006,.271,.022,.0017,-.45,0xd7a86e,1.0334));sp.push(mark(.018,.284,.008,.004,0,0x657a5a,1.0332));
 sp.splice(5,1); // Replace the opaque headlamp slab with a separate glass lens below.
 add('steering-paint',sp,'paint',steering,[0,.83,.43]);
 const sm=[tube([[-.30,.97,.25],[0,.98,.29],[.30,.97,.25]],.012,C.metal,.3,1)];
 for(const side of [-1,1]){
  sm.push(tube([[side*.17,.99,.28],[side*.19,1.08,.28],[side*.283,1.16,.296]],.0045,C.metal,.25,1));
  const mirror=new THREE.CylinderGeometry(.049,.049,.009,14);mirror.rotateX(Math.PI/2);mirror.scale(.84,1,1);mirror.rotateY(side*.3);mirror.translate(side*.315,1.198,.305);sm.push(surface(mirror,C.metal,.19,1));
  sm.push(tube([[side*.07,.32,.675],[side*.07,.60,.535]],.012,C.metal,.32,1));
 }
 sm[0].translate(0,-.01,-.06);for(const i of [1,2,4,5])sm[i].translate(0,-.01,-.06);
 for(const i of [1,2,4,5])sm[i].translate(0,-.98,0).scale(1,1.05,1).translate(0,.98,0);
 for(const side of [-1,1]){sm.push(tube([[side*.225,.961,.225],[side*.245,.965,.285],[side*.32,.954,.292],[side*.355,.948,.273]],.004,C.metal,.3,1));const nut=new THREE.CylinderGeometry(.012,.012,.012,6);nut.rotateZ(Math.PI/2);nut.translate(side*.102,.286,.675);sm.push(surface(nut,C.metal,.5,1));const reflector=new THREE.CylinderGeometry(.016,.016,.004,12);reflector.rotateZ(Math.PI/2);reflector.translate(side*.099,.47,.565);sm.push(surface(reflector,C.amber,.4,0));}
 sm.push(tube([[.14,.94,.22],[.12,.78,.35],[.105,.54,.53],[.065,.33,.65]],.0035,0x272a24,.8,0,5));
 sm.push(tube([[0,.852,.326],[0,.89,.285]],.047,0x30322d,.8,0,8));
 const bezel=new THREE.Shape(),rounded=(path:THREE.Path,w:number,h:number,r:number)=>{path.moveTo(-w+r,-h);path.lineTo(w-r,-h);path.quadraticCurveTo(w,-h,w,-h+r);path.lineTo(w,h-r);path.quadraticCurveTo(w,h,w-r,h);path.lineTo(-w+r,h);path.quadraticCurveTo(-w,h,-w,h-r);path.lineTo(-w,-h+r);path.quadraticCurveTo(-w,-h,-w+r,-h);path.closePath();};rounded(bezel,.083,.069,.011);const aperture=new THREE.Path();rounded(aperture,.074,.060,.006);bezel.holes.push(aperture);const trim=new THREE.ExtrudeGeometry(bezel,{depth:.006,bevelEnabled:false,curveSegments:2,steps:1});trim.translate(0,.955,.399);sm.push(surface(trim,0xb5b7ae,.28,1));
 const bowlOutline=new THREE.Shape();rounded(bowlOutline,.071,.057,.008);const outline=bowlOutline.getPoints(2);if(outline[0].distanceTo(outline[outline.length-1])<1e-7)outline.pop();const count=outline.length,bowlPositions:number[]=[],bowlIndices:number[]=[];
 for(const [scale,z] of [[1,.397],[.7,.382],[.25,.374],[1,.370]])for(const p of outline)bowlPositions.push(p.x*scale,p.y*scale+.955,z);
 for(let ring=0;ring<2;ring++)for(let j=0;j<count;j++){const a=ring*count+j,b=ring*count+(j+1)%count,c=a+count,d=b+count;bowlIndices.push(a,b,c,b,d,c);}
 const frontCenter=bowlPositions.length/3;bowlPositions.push(0,.955,.373);const backCenter=bowlPositions.length/3;bowlPositions.push(0,.955,.370);for(let j=0;j<count;j++){const next=(j+1)%count;bowlIndices.push(2*count+j,2*count+next,frontCenter,backCenter,3*count+next,3*count+j,j,3*count+j,next,next,3*count+j,3*count+next);}
 const bowl=new THREE.BufferGeometry();bowl.setAttribute('position',new THREE.Float32BufferAttribute(bowlPositions,3));bowl.setIndex(bowlIndices);bowl.computeVertexNormals();sm.push(surface(bowl,0xb4b8b0,.24,1));sm.push(oval([0,.955,.381],[.016,.012,.012],0xd7d5bf,.2,.15,8,4));
 const lensOutline=new THREE.Shape();rounded(lensOutline,.074,.060,.006);const lensBoundary=lensOutline.getPoints(3);if(lensBoundary[0].distanceTo(lensBoundary[lensBoundary.length-1])<1e-7)lensBoundary.pop();const lensVertices=[0,0,.005],lensIndices:number[]=[];for(const p of lensBoundary)lensVertices.push(p.x,p.y,0);for(let j=0;j<lensBoundary.length;j++)lensIndices.push(0,1+j,1+(j+1)%lensBoundary.length);const lensGeometry=new THREE.BufferGeometry();lensGeometry.setAttribute('position',new THREE.Float32BufferAttribute(lensVertices,3));lensGeometry.setIndex(lensIndices);lensGeometry.computeVertexNormals();lensGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(new Float32Array(lensVertices.length/3*2),2));const lensPosition=lensGeometry.attributes.position,lensUV=lensGeometry.attributes.uv;for(let i=0;i<lensPosition.count;i++)lensUV.setXY(i,.005+.49*(lensPosition.getX(i)/.148+.5),(256.5+255*(lensPosition.getY(i)/.12+.5))/1536);lensGeometry.setAttribute('color',new THREE.Float32BufferAttribute(Array(lensPosition.count*3).fill(1),3));lensGeometry.translate(0,.955-.83,.408-.43);
 const glass=new THREE.MeshStandardMaterial({name:'headlamp glass',vertexColors:true,color:0xffffff,roughness:.22,metalness:0,transparent:true,opacity:.70,map:albedoMap,depthWrite:false,side:THREE.FrontSide,normalMap:normalMap});glass.normalScale.set(.85,.85);const lens=new THREE.Mesh(lensGeometry,glass);lens.name='headlamp-lens';steering.add(lens);nodes[lens.name]=lens;meshes[lens.name]=lens;const instrumentGeometry=new THREE.PlaneGeometry(.077,.048);instrumentGeometry.rotateX(-Math.PI/2);instrumentGeometry.translate(0,1.035-.83,.27-.43);const instrumentTint=new THREE.Color(0x485b44),instrumentColors=[];for(let i=0;i<instrumentGeometry.attributes.position.count;i++)instrumentColors.push(instrumentTint.r,instrumentTint.g,instrumentTint.b);instrumentGeometry.setAttribute('color',new THREE.Float32BufferAttribute(instrumentColors,3));const instrumentUV=instrumentGeometry.attributes.uv;for(let i=0;i<instrumentUV.count;i++)instrumentUV.setXY(i,.5,.05);const instrument=new THREE.Mesh(instrumentGeometry,glass);instrument.name='instrument-glass';steering.add(instrument);nodes[instrument.name]=instrument;meshes[instrument.name]=instrument;

 add('steering-metal',sm,'metal',steering,[0,.83,.43]);
 const wheelParts:THREE.BufferGeometry[]=[];
 const rings=[[.232,-.022],[.248,-.028],[.274,-.034],[.282,-.022],[.286,0],[.282,.022],[.274,.034],[.248,.028],[.232,.022],[.232,-.022]];
 const ring=new THREE.LatheGeometry(rings.map(([r,x])=>new THREE.Vector2(r,x)),32).toNonIndexed();ring.rotateZ(Math.PI/2);
 surface(ring,C.rubber,.87,0);const rp=ring.attributes.position,rc=ring.attributes.color,rs=ring.attributes.surface;
 // Assign each lathed strip face wholly to tyre or rim; atlas regions must never interpolate across a material boundary.
 const rimUv=ring.getAttribute('uv');for(let i=0;i<rp.count;i+=3){let radius=0;for(let j=0;j<3;j++)radius+=Math.hypot(rp.getY(i+j),rp.getZ(i+j))/3;const isMetal=radius<.252;for(let j=0;j<3;j++){const k=i+j,c=new THREE.Color(isMetal?0xffffff:C.rubber);rc.setXYZ(k,c.r,c.g,c.b);if(isMetal){const u=.01+.98*rimUv.getX(k),v=.72+.25*THREE.MathUtils.clamp((Math.hypot(rp.getY(k),rp.getZ(k))-.232)/.016,0,1);rs.setXY(k,-3-u,(1280+v*255+.5)/1536);}else rs.setXY(k,.87,0);}}

 wheelParts.push(ring);
 const hub=new THREE.CylinderGeometry(.069,.069,.083,16);hub.rotateZ(Math.PI/2);wheelParts.push(surface(hub,0x93958e,.5,1));for(const side of [-1,1])for(let j=0;j<5;j++){const a=j*Math.PI*2/5,nut=new THREE.CylinderGeometry(.005,.005,.006,6);nut.rotateZ(Math.PI/2);nut.translate(side*.044,.048*Math.sin(a),.048*Math.cos(a));wheelParts.push(surface(nut,0x858b82,.52,1));}
 const spokeGeo=surface(new THREE.CylinderGeometry(.0017,.0017,1,3,1,true),C.metal,.35,1),assembled=[texturedSurface(merge(wheelParts),'wheel')];
 // Spokes move only with their wheel; bake their transforms once and share the
 // complete wheel geometry between both pivots, saving two submissions.
 for(let i=0;i<36;i++){const a=i*Math.PI/18,b=a+(i%2?.34:-.34),side=i%2?1:-1,p=new THREE.Vector3(side*.041,.065*Math.cos(a),.065*Math.sin(a)),q=new THREE.Vector3(side*.018,.238*Math.cos(b),.238*Math.sin(b)),d=q.clone().sub(p),matrix=new THREE.Matrix4().compose(p.clone().add(q).multiplyScalar(.5),new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),d.clone().normalize()),new THREE.Vector3(1,d.length(),1));assembled.push(spokeGeo.clone().applyMatrix4(matrix));}
 const wheel=merge(assembled);
 for(const [id,pivot]of [['front',front],['rear',rear]] as const){const m=new THREE.Mesh(wheel,mats.wheel);m.name=id+'-wheel';pivot.add(m);nodes[m.name]=m;meshes[m.name]=m;}
 for(const [p,axis]of [[root,[0,1,0]],[steering,[0,.93,-.37]],[front,[1,0,0]],[rear,[1,0,0]]] as const){p.userData.actionProfile={pivot:{name:p===root?'root':p.name,mode:'custom',axis:Array.from(axis),localPosition:[0,0,0]},destruction:{breakable:false}};}
 root.userData.sculptRuntime={nodes:Object.keys(nodes).length,pivots:[root,steering,front,rear],sockets:[],colliders:[],destructionGroups:[],byId:{nodes,meshes,sockets:{}}};
 // Base-center means the measured envelope center in X/Z and its lowest Y.
 // Translate the root's children, so the root pivot remains at (0,0,0).
 root.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(root),center=bounds.getCenter(new THREE.Vector3()),offset=new THREE.Vector3(-center.x,-bounds.min.y,-center.z);
 for(const child of root.children)child.position.add(offset);root.updateMatrixWorld(true);
 const mapped=new Set<THREE.BufferGeometry>();
 root.traverse(object=>{
  const g=(object as THREE.Mesh).geometry;if(!g||mapped.has(g))return;mapped.add(g);
  const parameters=g.getAttribute('surface');if(!parameters)return;
  const uv=new Float32Array(parameters.count*2);
  for(let i=0;i<parameters.count;i++){
   if(parameters.getX(i)<=-3){uv[2*i]=-parameters.getX(i)-3;uv[2*i+1]=parameters.getY(i);}else if(parameters.getX(i)<0){uv[2*i]=-parameters.getX(i)-1;uv[2*i+1]=(256.5+parameters.getY(i)*255)/1536;}else {uv[2*i]=(THREE.MathUtils.clamp(parameters.getX(i),0,1)*255+.5)/256;uv[2*i+1]=(THREE.MathUtils.clamp(parameters.getY(i),0,1)*255+.5)/1536;}
  }
  g.setAttribute('uv',new THREE.BufferAttribute(uv,2));g.deleteAttribute('surface');
 });
 return root;
}
export function createModel(options:Options={}){return createObjectModel(undefined,options);}
