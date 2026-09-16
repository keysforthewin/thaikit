import * as THREE from 'three';
export interface ProceduralModelOptions { baseUrl?: string; wireframe?: boolean; castShadow?: boolean; receiveShadow?: boolean; }
function merged(parts: THREE.BufferGeometry[]) { const p:number[]=[],n:number[]=[],uv:number[]=[]; for(const geo of parts){const g=geo.index?geo.toNonIndexed():geo; p.push(...Array.from(g.getAttribute('position').array));n.push(...Array.from(g.getAttribute('normal').array));uv.push(...Array.from(g.getAttribute('uv').array));if(g!==geo)g.dispose();geo.dispose();}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(n,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function box(w:number,h:number,d:number,x:number,y:number,z:number){return new THREE.BoxGeometry(w,h,d).translate(x,y,z);}
function cylinder(r:number,h:number,x:number,y:number,z:number,horizontal=false){const g=new THREE.CylinderGeometry(r,r,h,6,1);if(horizontal)g.rotateZ(Math.PI/2);g.translate(x,y,z);return g;}
function map(options:ProceduralModelOptions,name:string,repeat:number[]=[1,1]){if(!options.baseUrl||typeof document==='undefined')return null;const t=new THREE.TextureLoader().load(new URL('maps/'+name,options.baseUrl).href);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(repeat[0],repeat[1]);t.anisotropy=8;return t;}
function add(root:THREE.Group,name:string,g:THREE.BufferGeometry,m:THREE.Material,options:ProceduralModelOptions){const mesh=new THREE.Mesh(g,m);mesh.name=name;mesh.castShadow=options.castShadow!==false;mesh.receiveShadow=options.receiveShadow!==false;root.add(mesh);return mesh;}
export function createObjectModel(_spec:unknown=null,options:ProceduralModelOptions={}):THREE.Group {
const root=new THREE.Group();root.name='zinc-sheet-hoarding-panel';
const steel=new THREE.MeshStandardMaterial({name:'steel',color:0x777e7c,roughness:.72,metalness:.65,wireframe:!!options.wireframe});
add(root,'frame',merged([box(.08,2.4,.12,-1.46,1.2,0),box(2.96,.045,.045,.02,2.345,.0375),box(2.96,.045,.045,.02,1.43,.0375),box(2.96,.045,.045,.02,.465,.0375)]),steel,options);
const sheet=new THREE.MeshStandardMaterial({name:'sheet',color:0xffffff,map:map(options,'panel-albedo.webp'),roughness:.85,metalness:.15,side:THREE.DoubleSide,wireframe:!!options.wireframe});
add(root,'sheet',new THREE.PlaneGeometry(2.96,1.90).translate(.02,1.41,.012),sheet,options);
root.userData.sculptRuntime={nodes:root.children.length+1,pivots:[{name:'root',object:'root',position:[0,0,0],axis:[0,1,0]}],sockets:[],colliders:[{name:'fence',type:'box',shape:'box',offset:[0,1.2,0],halfExtents:[1.5,1.2,.06]}],destructionGroups:[]};root.updateMatrixWorld(true);return root;
}
export function createModel(options:ProceduralModelOptions={}){return createObjectModel(null,options);}
