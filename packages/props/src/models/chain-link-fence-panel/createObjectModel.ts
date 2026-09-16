import * as THREE from 'three';
export interface ProceduralModelOptions { baseUrl?: string; wireframe?: boolean; castShadow?: boolean; receiveShadow?: boolean; }
function merged(parts: THREE.BufferGeometry[]) { const p:number[]=[],n:number[]=[],uv:number[]=[]; for(const geo of parts){const g=geo.index?geo.toNonIndexed():geo; p.push(...Array.from(g.getAttribute('position').array));n.push(...Array.from(g.getAttribute('normal').array));uv.push(...Array.from(g.getAttribute('uv').array));if(g!==geo)g.dispose();geo.dispose();}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(n,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function box(w:number,h:number,d:number,x:number,y:number,z:number){return new THREE.BoxGeometry(w,h,d).translate(x,y,z);}
function cylinder(r:number,h:number,x:number,y:number,z:number,horizontal=false){const g=new THREE.CylinderGeometry(r,r,h,6,1);if(horizontal)g.rotateZ(Math.PI/2);g.translate(x,y,z);return g;}
function map(options:ProceduralModelOptions,name:string,repeat:number[]=[1,1]){if(!options.baseUrl||typeof document==='undefined')return null;const t=new THREE.TextureLoader().load(new URL('maps/'+name,options.baseUrl).href);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(repeat[0],repeat[1]);t.anisotropy=8;return t;}
function add(root:THREE.Group,name:string,g:THREE.BufferGeometry,m:THREE.Material,options:ProceduralModelOptions){const mesh=new THREE.Mesh(g,m);mesh.name=name;mesh.castShadow=options.castShadow!==false;mesh.receiveShadow=options.receiveShadow!==false;root.add(mesh);return mesh;}
export function createObjectModel(_spec:unknown=null,options:ProceduralModelOptions={}):THREE.Group {
const root=new THREE.Group();root.name='chain-link-fence-panel';
const steel=new THREE.MeshStandardMaterial({name:'steel',color:0x777e7c,roughness:.72,metalness:.65,wireframe:!!options.wireframe});
add(root,'posts',merged([cylinder(.04,2,-1.46,1,0),cylinder(.028,2.96,.02,1.96,0,true)]),steel,options);
const wire=new THREE.MeshStandardMaterial({name:'mesh',color:0xffffff,map:map(options,'mesh-albedo.webp',[2,1.33]),alphaTest:.25,side:THREE.DoubleSide,roughness:.72,metalness:.15,wireframe:!!options.wireframe});
add(root,'mesh',new THREE.PlaneGeometry(2.96,1.80).translate(.02,1.05,0),wire,options);
const concrete=new THREE.MeshStandardMaterial({name:'concrete',color:0x89877b,roughness:1,wireframe:!!options.wireframe});
add(root,'footings',merged([box(.08,.12,.08,-1.46,.06,0)]),concrete,options);
root.userData.sculptRuntime={nodes:root.children.length+1,pivots:[{name:'root',object:'root',position:[0,0,0],axis:[0,1,0]}],sockets:[],colliders:[{name:'fence',type:'box',shape:'box',offset:[0,1,0],halfExtents:[1.5,1,.04]}],destructionGroups:[]};root.updateMatrixWorld(true);return root;
}
export function createModel(options:ProceduralModelOptions={}){return createObjectModel(null,options);}
