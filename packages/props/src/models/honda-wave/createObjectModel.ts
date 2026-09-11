import * as THREE from 'three';

// Procedural reconstruction of the supplied plate. Metres, +Y up, +Z forward.
// Hidden-side mechanical detail is approximate, as authorized by the user.
type V = [number, number, number];
type Options = {wireframe?: boolean; castShadow?: boolean; receiveShadow?: boolean};
const C = {paint:0x35425e, rubber:0x353632, metal:0xa7a8a3, white:0xd4d7d4, amber:0xb56c24};

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
function weldedNormals(g:THREE.BufferGeometry){
 const p=g.attributes.position,n=g.attributes.normal,sums=new Map<string,{normal:THREE.Vector3,angle:number}[]>(),keys:string[]=[];
 for(let i=0;i<p.count;i++)keys.push([p.getX(i),p.getY(i),p.getZ(i)].map(x=>x.toFixed(6)).join(','));
 for(let i=0;i<p.count;i+=3){const v=[0,1,2].map(j=>new THREE.Vector3().fromBufferAttribute(p,i+j)),normal=v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0])).normalize();for(let j=0;j<3;j++){const a=v[(j+1)%3].clone().sub(v[j]).normalize(),b=v[(j+2)%3].clone().sub(v[j]).normalize(),angle=Math.acos(THREE.MathUtils.clamp(a.dot(b),-1,1)),key=keys[i+j];if(!sums.has(key))sums.set(key,[]);sums.get(key)!.push({normal,angle});}}
 // A 35-degree crease preserves manufactured panel/bevel boundaries.
 for(let i=0;i<p.count;i++){const base=new THREE.Vector3().fromBufferAttribute(n,i),v=new THREE.Vector3();for(const f of sums.get(keys[i])!)if(base.dot(f.normal)>Math.cos(35*Math.PI/180))v.addScaledVector(f.normal,f.angle);v.normalize();n.setXYZ(i,v.x,v.y,v.z);}return g;
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
function profile(points:number[][],width:number,color:number,rough=.4,curveSegments=2) {
 const shape=new THREE.Shape(),last=points[points.length-1];shape.moveTo(-(last[0]+points[0][0])/2,(last[1]+points[0][1])/2);
 points.forEach(([z,y],i)=>{const next=points[(i+1)%points.length];shape.quadraticCurveTo(-z,y,-(z+next[0])/2,(y+next[1])/2);});shape.closePath();
 const g=new THREE.ExtrudeGeometry(shape,{depth:width,bevelEnabled:true,bevelThickness:.009,bevelSize:.009,bevelSegments:1,curveSegments,steps:1});
 // Extrusion Z becomes transverse X. Profile X becomes longitudinal Z.
 const p=g.attributes.position;for(let i=0;i<p.count;i++){const z=p.getX(i),y=p.getY(i),x=p.getZ(i)-width/2;p.setXYZ(i,x,y,-z);}
 g.computeVertexNormals();return surface(g,color,rough,0);
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
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);const flat=g.toNonIndexed();flat.computeVertexNormals();return surface(weldedNormals(flat),color,.35,0);
}
// A linear lookup map stores roughness in G and metalness in B, the glTF channels.
// UVs encode the original per-vertex surface parameters, including wheel transitions.
function surfaceTexture() {
 const data=new Uint8Array(256*256*4);
 for(let y=0;y<256;y++)for(let x=0;x<256;x++){
  const i=(y*256+x)*4;data[i]=255;data[i+1]=x;data[i+2]=y;data[i+3]=255;
 }
 const texture=new THREE.DataTexture(data,256,256,THREE.RGBAFormat);
 texture.name='honda-wave-metallic-roughness';
 texture.minFilter=texture.magFilter=THREE.LinearFilter;
 texture.generateMipmaps=false;texture.needsUpdate=true;
 return texture;
}
function material(name:string,options:Options,map:THREE.DataTexture) {
 const m=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:1,metalness:1,roughnessMap:map,metalnessMap:map,wireframe:!!options.wireframe});m.name=name;
 return m;
}

function underbone(){
 // One continuous closed manufactured body. The profile traces both the step
 // opening and the rear wheel arch; width and crown vary across the leg shield.
 const g=profile([[.36,.855],[.40,.70],[.31,.47],[.20,.17],[.13,.20],[.08,.38],[-.17,.35],[-.36,.49],[-.48,.57],[-.65,.58],[-.80,.50],[-.87,.35],[-.92,.34],[-.88,.53],[-.77,.62],[-.38,.647],[-.10,.64],[-.075,.425],[.02,.405],[.16,.44],[.26,.57],[.29,.80]],.15,C.paint,.38,3);
 const p=g.attributes.position,pos:number[]=[];
 for(let i=0;i<p.count;i+=3){const a=new THREE.Vector3().fromBufferAttribute(p,i),b=new THREE.Vector3().fromBufferAttribute(p,i+1),c=new THREE.Vector3().fromBufferAttribute(p,i+2),ab=a.clone().add(b).multiplyScalar(.5),bc=b.clone().add(c).multiplyScalar(.5),ca=c.clone().add(a).multiplyScalar(.5);for(const v of [a,ab,ca,ab,b,bc,ca,bc,c,ab,bc,ca])pos.push(...v.toArray());}
 // Split at each width-function breakpoint before deformation. A long cap
 // triangle crossing a kink can fold even when the continuous mapping is valid.
 let tris:V[][]=[];for(let i=0;i<pos.length;i+=9)tris.push([pos.slice(i,i+3) as V,pos.slice(i+3,i+6) as V,pos.slice(i+6,i+9) as V]);
 for(const zcut of [-.10,.40]){const next:V[][]=[];for(const tri of tris){const sides=[[],[]] as V[][];for(let i=0;i<3;i++){const a=tri[i],b=tri[(i+1)%3],da=a[2]-zcut,db=b[2]-zcut;if(da<=0)sides[0].push(a);if(da>=0)sides[1].push(a);if(da*db<0){const t=da/(da-db),v=a.map((x,k)=>x+t*(b[k]-x)) as V;sides[0].push(v);sides[1].push(v);}}for(const poly of sides)for(let i=1;i<poly.length-1;i++)next.push([poly[0],poly[i],poly[i+1]]);}tris=next;}
 const out=new THREE.BufferGeometry();out.setAttribute('position',new THREE.Float32BufferAttribute(tris.flat(2),3));const q=out.attributes.position;
 for(let i=0;i<q.count;i++){const x=q.getX(i),y=q.getY(i),z=q.getZ(i),front=THREE.MathUtils.clamp((z+.10)/.50,0,1),w=.075+front*.095; q.setXYZ(i,x*w/.075,y,z-.04*front*(x/.084)**2);}
 out.computeVertexNormals();return surface(weldedNormals(out),C.paint,.38,0);
}
function saddle(){const g=profile([[.025,.71],[.01,.77],[-.08,.79],[-.33,.78],[-.42,.75],[-.42,.70],[-.24,.667],[-.045,.672]],.28,C.rubber,.82),p=g.attributes.position;for(let i=0;i<p.count;i++){p.setX(i,p.getX(i)*(.82+.18*THREE.MathUtils.clamp((.025-p.getZ(i))/.445,0,1)));p.setY(i,.7*p.getY(i)+.197);}g.computeVertexNormals();return g.translate(0,0,-.05);}

export function createObjectModel(_spec?:unknown,options:Options={}):THREE.Group {
 const root=new THREE.Group();root.name='honda-wave';
 const surfaceMap=surfaceTexture();
 const mats={paint:material('paint and dielectric fittings',options,surfaceMap),metal:material('metal fittings',options,surfaceMap),wheel:material('tyre, rim and hub',options,surfaceMap)};
 const nodes:Record<string,THREE.Object3D>={},meshes:Record<string,THREE.Mesh>={};
 const add=(id:string,gs:THREE.BufferGeometry[],mat:keyof typeof mats,parent:THREE.Object3D=root,origin:V=[0,0,0])=>{
  const g=merge(gs);g.translate(-origin[0],-origin[1],-origin[2]);const mesh=new THREE.Mesh(g,mats[mat]);mesh.name=id;mesh.castShadow=options.castShadow!==false;mesh.receiveShadow=options.receiveShadow!==false;
  parent.add(mesh);nodes[id]=mesh;meshes[id]=mesh;return mesh;
 };
 const steering=new THREE.Group();steering.name='steering';steering.position.set(0,.83,.43);root.add(steering);
 const front=new THREE.Group();front.name='wheel-front';front.position.set(0,.286-.83,.675-.43);steering.add(front);
 const rear=new THREE.Group();rear.name='wheel-rear';rear.position.set(0,.286,-.58);root.add(rear);
 const body=[underbone(),
  ...[-1,1].map(s=>profile([[-.06,.405],[-.15,.49],[-.38,.515],[-.47,.455],[-.30,.36],[-.12,.36]],.014,C.paint).translate(s*.125,0,0)),
  saddle(),
  profile([[-.13,.355],[-.60,.34],[-.66,.31],[-.63,.275],[-.14,.285]],.022,C.paint).translate(.143,-.017,0),
  box([0,.25,-.915],[.115,.075,.014],0x252723,.9),
  box([0,.62,-.865],[.12,.063,.037],0xa62f24,.3),
 ];
 add('body',body,'paint');
 const metal:THREE.BufferGeometry[]=[];
 for(const x of [-.095,.095]){
  metal.push(tube([[x,.324,-.19],[x,.30,-.61]],.016,C.metal,.42,1));
  metal.push(tube([[x,.327,-.612],[x,.61,-.53]],.015,C.metal,.4,1));
 }
 metal.push(surface(profile([[.11,.31],[.07,.39],[-.09,.40],[-.16,.32],[-.11,.22],[.04,.20]],.18,C.metal,.48,3),C.metal,.48,1));
 metal.push(tube([[0,.329,.13],[0,.36,.22]],.057,0x777975,.58,1,10));
 // Open rack outline and cross rails: daylight between members is part of the silhouette.
 for(const s of [-1,1])metal.push(tube([[s*.145,.64,-.48],[s*.145,.69,-.53],[s*.13,.69,-.80],[s*.105,.69,-.90]],.008,C.metal,.28,1));
 for(const [z,w] of [[-.53,.134],[-.66,.125],[-.80,.119],[-.90,.094]])metal.push(tube([[-w,.69,z],[w,.69,z]],.007,C.metal,.3,1));
 for(const x of [-.09,0,.09])metal.push(box([x,.704,-.70],[.038,.008,.315],C.metal,.38,1));
 metal.push(tube([[-.13,.70,-.48],[-.13,.78,-.46],[.13,.78,-.46],[.13,.70,-.48]],.009,C.metal,.3,1));
 metal.push(tube([[-.135,.28,.17],[-.17,.20,.02],[-.17,.23,-.63]],.022,0x8f908b,.4,1));
 metal.push(tube([[.143,.285,-.15],[.143,.345,-.57],[.143,.325,-.65],[.143,.235,-.65],[.143,.21,-.57],[.143,.24,-.15]],.006,0x393a35,.75,.55,5));
 metal.push(tube([[-.135,.25,.01],[-.22,.25,.01]],.018,0x393a35,.85,0));
 metal.push(tube([[.135,.25,.01],[.22,.25,.01]],.018,0x393a35,.85,0));
 add('static-metal',metal,'metal');
 const sp=[fender(.675,.336,55,150,.105,C.paint,24,6),
  profile([[.535,.63],[.39,.82],[.34,.86],[.31,.82],[.465,.62]],.145,C.paint),
  ...[-1,1].map(s=>profile([[.535,.59],[.565,.55],[.645,.355],[.71,.28],[.655,.24],[.43,.27],[.58,.32],[.50,.53]],.018,C.paint).translate(s*.082,0,0)),
  profile([[.44,.92],[.42,1.01],[.28,1.025],[.22,.99],[.26,.89],[.37,.885]],.245,C.paint),
  box([0,.965,.449],[.152,.124,.024],0xd3d4c9,.25),
  box([-.172,.967,.38],[.062,.048,.050],C.amber,.35),box([.172,.967,.38],[.062,.048,.050],C.amber,.35),
  tube([[-.225,.972,.26],[-.350,.966,.25]],.017,C.rubber,.82,0,8),tube([[.225,.972,.26],[.350,.966,.25]],.017,C.rubber,.82,0,8)
 ];
 // The lamp, bars and mirrors sit aft of the steering neck, as in the plate.
 for(const g of sp.slice(4))g.translate(0,-.01,-.06);
 add('steering-paint',sp,'paint',steering,[0,.83,.43]);
 const sm=[tube([[-.30,.97,.25],[0,.98,.29],[.30,.97,.25]],.012,C.metal,.3,1)];
 for(const side of [-1,1]){
  sm.push(tube([[side*.17,.99,.28],[side*.19,1.08,.28],[side*.283,1.16,.296]],.0045,C.metal,.25,1));
  const mirror=new THREE.CylinderGeometry(.049,.049,.009,12);mirror.rotateX(Math.PI/2);mirror.scale(.84,1,1);mirror.rotateY(side*.3);mirror.translate(side*.315,1.198,.305);sm.push(surface(mirror,C.metal,.19,1));
  sm.push(tube([[side*.07,.32,.675],[side*.07,.60,.535]],.012,C.metal,.32,1));
 }
 sm[0].translate(0,-.01,-.06);for(const i of [1,2,4,5])sm[i].translate(0,-.01,-.06);
 for(const i of [1,2,4,5])sm[i].translate(0,-.98,0).scale(1,1.05,1).translate(0,.98,0);
 sm.push(tube([[0,.852,.326],[0,.89,.285]],.047,0x30322d,.8,0,8));
 add('steering-metal',sm,'metal',steering,[0,.83,.43]);
 const wheelParts:THREE.BufferGeometry[]=[];
 const rings=[[.213,-.022],[.238,-.034],[.266,-.040],[.286,0],[.266,.040],[.238,.034],[.213,.022],[.213,-.022]];
 const ring=new THREE.LatheGeometry(rings.map(([r,x])=>new THREE.Vector2(r,x)),24);ring.rotateZ(Math.PI/2);
 surface(ring,C.rubber,.87,0);const rp=ring.attributes.position,rc=ring.attributes.color,rs=ring.attributes.surface;
 for(let i=0;i<rp.count;i++){const isMetal=Math.hypot(rp.getY(i),rp.getZ(i))<.23,c=new THREE.Color(isMetal?C.metal:C.rubber);rc.setXYZ(i,c.r,c.g,c.b);rs.setXY(i,isMetal?.35:.87,isMetal?1:0);}
 wheelParts.push(ring);
 const hub=new THREE.CylinderGeometry(.069,.069,.083,12);hub.rotateZ(Math.PI/2);wheelParts.push(surface(hub,0x93958e,.5,1));
 const wheel=merge(wheelParts),spokeGeo=surface(new THREE.CylinderGeometry(.0017,.0017,1,3,1,true),C.metal,.35,1);
 for(const [id,pivot]of [['front',front],['rear',rear]] as const){
  const m=new THREE.Mesh(wheel,mats.wheel);m.name=id+'-wheel';pivot.add(m);nodes[m.name]=m;meshes[m.name]=m;
  const inst=new THREE.InstancedMesh(spokeGeo,mats.metal,32);inst.name='spokes-'+id;pivot.add(inst);
  for(let i=0;i<32;i++){
   const a=i*Math.PI/16,b=a+(i%2?.34:-.34),side=i%2?1:-1;
   const p=new THREE.Vector3(side*.041,.065*Math.cos(a),.065*Math.sin(a)),q=new THREE.Vector3(side*.018,.228*Math.cos(b),.228*Math.sin(b)),d=q.clone().sub(p);
   inst.setMatrixAt(i,new THREE.Matrix4().compose(p.clone().add(q).multiplyScalar(.5),new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),d.clone().normalize()),new THREE.Vector3(1,d.length(),1)));
  }
  inst.instanceMatrix.needsUpdate=true;nodes[inst.name]=inst;meshes[inst.name]=inst;
 }
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
   uv[2*i]=(THREE.MathUtils.clamp(parameters.getX(i),0,1)*255+.5)/256;
   uv[2*i+1]=(THREE.MathUtils.clamp(parameters.getY(i),0,1)*255+.5)/256;
  }
  g.setAttribute('uv',new THREE.BufferAttribute(uv,2));g.deleteAttribute('surface');
 });
 return root;
}
export function createModel(options:Options={}){return createObjectModel(undefined,options);}
