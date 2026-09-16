import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Tree } from './vendor/ez-tree/tree.js';
import TreeOptions from './vendor/ez-tree/options.js';
export type ProceduralModelOptions = { baseUrl?: string; textureAnisotropy?: number; representation?: 'mesh'|'billboard'|'cluster'; detail?: 0|1|2; potted?: boolean; lighting?: 'live'|'unlit'; billboard?: boolean; seed?: number };
export type Recipe = { id:string; name:string; species:string; kind:string; tree:boolean; seed:number; width:number; height:number; potted:boolean };
const V=THREE.Vector3;
const clamp=(n:number,a:number,b:number)=>Math.max(a,Math.min(b,n));
function rng(seed:number){let x=seed>>>0;return()=>{x=(Math.imul(x,1664525)+1013904223)>>>0;return x/4294967296;};}
function merge(parts:THREE.BufferGeometry[]){if(!parts.length)return new THREE.BufferGeometry();const copies=parts.map(g=>{const c=g.index?g.toNonIndexed():g.clone();for(const key of Object.keys(c.attributes))if(!['position','normal','uv'].includes(key))c.deleteAttribute(key);return c;});const result=mergeGeometries(copies);for(const g of [...copies,...parts])g.dispose();return result!;}
function tube(points:THREE.Vector3[],radius:number,segments=12,sides=6){return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),segments,radius,sides,false);}
function blade(length:number,width:number,angle:number,origin:THREE.Vector3,yaw:number,segments:number,curve=.6){
 const positions:number[]=[],uv:number[]=[],idx:number[]=[];
 for(let i=0;i<=segments;i++){const t=i/segments;const bend=angle+curve*t;const x=Math.sin(bend)*length*t,y=Math.cos(bend)*length*t;for(const s of [-1,1]){positions.push(x,y,s*width*.5);uv.push((s+1)/2,t);}}
 for(let i=0;i<segments;i++){const n=i*2;idx.push(n,n+2,n+1,n+1,n+2,n+3);}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();g.rotateY(yaw);g.translate(origin.x,origin.y,origin.z);return g;
}
function botanics(a:Recipe,detail:number,random:()=>number){
 const wood:THREE.BufferGeometry[]=[],leaves:THREE.BufferGeometry[]=[];const sections=[8,4,2][detail];
 const isPalm=a.kind==='palm'||a.kind==='palm-clump';const stems=a.kind==='palm-clump'?5:a.kind==='banana'?4:1;
 if(isPalm||a.kind==='banana')for(let s=0;s<stems;s++){
  const theta=s*2.399;const scale=s===0?1:.65+random()*.3;const trunkHeight=(a.kind==='banana'?.38:a.kind==='palm-clump'?.45:.78)*a.height*scale;const ox=stems>1?Math.cos(theta)*a.width*.14:0,oz=stems>1?Math.sin(theta)*a.width*.14:0;const bend=a.id==='coconut-palm'?a.width*.12:.06*a.width;const top=new V(ox+bend,trunkHeight,oz);
  const trunk=new THREE.CylinderGeometry(a.height*.009*scale,a.height*.014*scale,trunkHeight,detail===0?10:6,5);const p=trunk.getAttribute('position');for(let i=0;i<p.count;i++){const t=(p.getY(i)+trunkHeight/2)/trunkHeight;p.setXYZ(i,p.getX(i)+ox+bend*t*t,p.getY(i)+trunkHeight/2,p.getZ(i)+oz);}trunk.computeVertexNormals();wood.push(trunk);
  const count=a.kind==='banana'?7:a.kind==='palm-clump'?14:a.id==='foxtail-palm'?24:18;
  for(let i=0;i<count;i++){if(detail===2&&i%2)continue;const yaw=i*2.399+theta;const len=a.width*(a.kind==='banana'?.52:.52)*scale*(.85+random()*.25);leaves.push(blade(len,len*(isPalm?.34:.38),.3+(i/count)*1.1,top,yaw,sections,isPalm?.8:.4));}
 } else {
  const n=a.kind==='upright'?16:a.id==='birds-nest-fern'?28:a.id==='pandan'?34:a.kind==='broadleaf'?12:20;
  for(let i=0;i<n;i++){if(detail===2&&i%2)continue;const yaw=i*2.399+random()*.2;const mature=i/n;const l=a.height*(.60+random()*.4);const reach=a.kind==='upright'?.35:a.kind==='broadleaf'?1.0:1.5;
   const origin=new V(Math.cos(yaw)*a.width*.07,0,Math.sin(yaw)*a.width*.07);
   let leafBase=origin;
   if(a.kind==='broadleaf'){leafBase=origin.clone().add(new V(Math.cos(yaw)*a.width*.18,l*.45,Math.sin(yaw)*a.width*.18));wood.push(tube([origin,leafBase.clone().multiplyScalar(.5),leafBase],a.height*.006,sections,4));}
   leaves.push(blade(l*(a.kind==='broadleaf'?.9:1),a.id==='snake-plant'?l*.14:a.id==='pandan'?l*.14:a.kind==='broadleaf'?l*.7:l*.4,reach*mature,leafBase,yaw,sections,a.kind==='upright'?.08:.5));
  }
 }
 return {branches:merge(wood),leaves:merge(leaves)};
}
function branching(a:Recipe,detail:number){
 const o=new TreeOptions();o.seed=a.seed;o.bark.textured=false;o.branch.levels=3;
 const small=!a.tree,narrow=a.id==='indian-mast-tree',umbrella=a.id==='rain-tree',tiers=a.id==='tropical-almond';
 o.branch.length={0:small?2.2:umbrella?7:14,1:small?1.5:narrow?2.2:umbrella?11:tiers?9:8,2:small?.7:narrow?1.3:umbrella?5:4,3:small?1.2:2};
 o.branch.radius={0:small?.13:.65,1:.48,2:.5,3:.4};
 o.branch.levels=small?2:3;
 o.branch.children={0:small?5:8,1:small?3:5,2:3};
 o.branch.sections={0:10,1:7,2:5,3:3};o.branch.segments={0:8,1:6,2:4,3:3};
 o.branch.start={1:small?.18:umbrella?.30:.42,2:.22,3:.12};
 o.branch.angle={1:narrow?25:umbrella?77:tiers?83:55,2:52,3:50};
 o.branch.gnarliness={0:umbrella?.035:.012,1:.035,2:.06,3:.03};
 o.branch.force={direction:{x:0,y:1,z:0},strength:narrow?.05:umbrella?.015:.025};
 o.leaves.count=small?4:5;o.leaves.start=.1;o.leaves.size=small?1.25:narrow?1.7:umbrella?4:2.4;o.leaves.sizeVariance=.28;o.leaves.billboard='double';
 const tree=new Tree(o);const g=tree.createGeometry([{sectionStride:2,segmentFactor:.85},{sectionStride:3,segmentFactor:.6,leafStride:2,leafScale:1.12},{sectionStride:5,segmentFactor:.4,leafStride:5,leafScale:1.35,billboard:'single'}][detail]);
 tree.branchesMesh.geometry.dispose();tree.leavesMesh.geometry.dispose();tree.branchesMesh.material.dispose();tree.leavesMesh.material.dispose();return g;
}
function normalisePair(g:{branches:THREE.BufferGeometry;leaves:THREE.BufferGeometry},a:Recipe,potHeight:number){
 const box=new THREE.Box3();for(const geo of Object.values(g))if(geo.getAttribute('position')?.count){geo.computeBoundingBox();box.union(geo.boundingBox!);}
 const size=box.getSize(new V()),center=box.getCenter(new V());const sx=a.width/Math.max(size.x,size.z),sy=(a.height-potHeight)/size.y;
 for(const geo of Object.values(g)){geo.translate(-center.x,-box.min.y,-center.z);geo.scale(sx,sy,sx);geo.translate(0,potHeight,0);}
}
function tintGeometry(g:THREE.BufferGeometry,a:Recipe,leaf:boolean,unlit:boolean){
 const p=g.getAttribute('position');if(!p)return;const colors:number[]=[];const normals=g.getAttribute('normal');
 for(let i=0;i<p.count;i++){const y=p.getY(i)/a.height;const variation=.93+.07*Math.sin(p.getX(i)*13+p.getZ(i)*11);const shade=(unlit?.28+.25*clamp(y,0,1):.70+.30*clamp(y,0,1))*variation;colors.push(shade,shade,shade);if(leaf){const n=new V(p.getX(i)/a.width,.65+Math.max(0,y-.35),p.getZ(i)/a.width).normalize();normals.setXYZ(i,n.x,n.y,n.z);}}
 g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
}
function texture(base:string|undefined,name:string,repeat=false){if(!base||typeof document==='undefined')return null;const map=new THREE.TextureLoader().load(new URL(`maps/${name}`,base).href);map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=repeat?THREE.RepeatWrapping:THREE.ClampToEdgeWrapping;if(repeat)map.repeat.set(2,5);return map;}
function faceCamera(card:THREE.Mesh){const pos=new V(),own=new V(),q=new THREE.Quaternion(),parent=new THREE.Quaternion();card.onBeforeRender=(_r,_s,camera)=>{camera.getWorldPosition(pos);card.getWorldPosition(own);q.setFromAxisAngle(new V(0,1,0),Math.atan2(pos.x-own.x,pos.z-own.z));if(card.parent){card.parent.getWorldQuaternion(parent).invert();q.premultiply(parent);}card.quaternion.copy(q);card.updateMatrixWorld(true);};}
export function makeFoliage(a:Recipe,options:ProceduralModelOptions={}){
 const root=new THREE.Group();root.name=a.id;const detail=clamp(Math.floor(options.detail??0),0,2);const representation=options.representation??'mesh',unlit=options.lighting==='unlit';
 root.userData.foliage={asset:a.id,representation,detail,bakeLighting:false};root.userData.sculptRuntime={nodes:0,pivots:[{name:'root',object:'root'}],sockets:[],colliders:[],destructionGroups:[]};
 if(representation!=='mesh'){
  const material=new THREE.MeshBasicMaterial({name:'foliage-billboard',map:texture(options.baseUrl,'billboard.webp'),color:unlit?0x5a645f:0xffffff,alphaTest:.45,side:THREE.DoubleSide,fog:true});
  const count=representation==='cluster'?6:1;
  for(let i=0;i<count;i++){const g=new THREE.PlaneGeometry(a.width,a.height);g.translate(0,a.height/2,0);const card=new THREE.Mesh(g,material);card.name=`${representation}-${i}`;if(count>1){card.position.set(((i%3)-1)*a.width*.65,0,Math.floor(i/3)*a.width*.3);card.rotation.y=(i%2)*Math.PI/2;}else if(options.billboard!==false)faceCamera(card);root.add(card);}
 }else{
  const potted=options.potted??a.potted,potHeight=potted?Math.min(.45,a.height*.27):0;
  const geometry=(a.kind==='tree'||a.kind==='shrub')?branching({...a,seed:options.seed??a.seed},detail):botanics(a,detail,rng(options.seed??a.seed));normalisePair(geometry,a,potHeight);
  const Material=unlit?THREE.MeshBasicMaterial:THREE.MeshStandardMaterial;
  const bark=new Material({name:'bark',color:0xc8c3b4,map:texture(options.baseUrl,'bark.webp',true),vertexColors:true,...(!unlit?{roughness:.96,metalness:0}:{})});
  const leaf=new Material({name:'leaves',color:0xffffff,map:texture(options.baseUrl,'leaf.webp'),alphaTest:.45,side:THREE.DoubleSide,vertexColors:true,...(!unlit?{roughness:.9,metalness:0}:{})});
  for(const [name,g,m] of [['trunk',geometry.branches,bark],['canopy',geometry.leaves,leaf]] as const){if(!g.getAttribute('position')?.count){g.dispose();continue;}tintGeometry(g,a,name==='canopy',unlit);const mesh=new THREE.Mesh(g,m);mesh.name=name;mesh.castShadow=false;mesh.receiveShadow=!unlit;root.add(mesh);}
  if(potted){const radius=Math.min(a.width*.29,potHeight*.85);const points=[[0,0],[radius*.73,0],[radius,.94*potHeight],[radius, potHeight],[radius*.88,potHeight],[radius*.80,.88*potHeight],[0,.88*potHeight]].map(([x,y])=>new THREE.Vector2(x,y));const g=new THREE.LatheGeometry(points,detail===0?16:10);const material=new Material({name:'planter',color:a.id==='croton'?0x88847c:0x926046,...(!unlit?{roughness:1}:{})});const mesh=new THREE.Mesh(g,material);mesh.name='planter';root.add(mesh);}
 }
 root.userData.sculptRuntime.nodes=1+root.children.length;root.updateMatrixWorld(true);return root;
}
