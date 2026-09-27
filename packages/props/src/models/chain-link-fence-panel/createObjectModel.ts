import * as THREE from 'three';
export interface ProceduralModelOptions { baseUrl?: string; wireframe?: boolean; castShadow?: boolean; receiveShadow?: boolean; }
function merged(parts: THREE.BufferGeometry[]) { const p:number[]=[],n:number[]=[],uv:number[]=[]; for(const geo of parts){const g=geo.index?geo.toNonIndexed():geo; p.push(...Array.from(g.getAttribute('position').array));n.push(...Array.from(g.getAttribute('normal').array));uv.push(...Array.from(g.getAttribute('uv').array));if(g!==geo)g.dispose();geo.dispose();}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(n,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function box(w:number,h:number,d:number,x:number,y:number,z:number){return new THREE.BoxGeometry(w,h,d).translate(x,y,z);}
function cylinder(r:number,h:number,x:number,y:number,z:number,horizontal=false){const g=new THREE.CylinderGeometry(r,r,h,12,1);if(horizontal)g.rotateZ(Math.PI/2);g.translate(x,y,z);return g;}
function map(options:ProceduralModelOptions,name:string,repeat:number[]=[1,1]){if(!options.baseUrl||typeof document==='undefined')return null;const t=new THREE.TextureLoader().load(new URL('maps/'+name,options.baseUrl).href);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(repeat[0],repeat[1]);t.anisotropy=8;return t;}
function add(root:THREE.Group,name:string,g:THREE.BufferGeometry,m:THREE.Material,options:ProceduralModelOptions){const mesh=new THREE.Mesh(g,m);mesh.name=name;mesh.castShadow=options.castShadow!==false;mesh.receiveShadow=options.receiveShadow!==false;root.add(mesh);return mesh;}

// Galvanized steel carries fine zinc variation and sparse oxide, with no lighting baked in.
function galvanizedTexture(){const w=128,h=256,data=new Uint8Array(w*h*4);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){let q=Math.imul(x+91,374761393)^Math.imul(y+173,668265263);q=Math.imul(q^(q>>>13),1274126177);const n=(q>>>0)/4294967295,k=(y*w+x)*4;
 const rust=Math.pow(Math.max(0,Math.sin(x*.27+y*.036)*Math.sin(y*.071)-.46),2)*1.9;
 for(let c=0;c<3;c++)data[k+c]=(216+n*32)*(1-rust)+[119,80,48][c]*rust;data[k+3]=255;}
 const t=new THREE.DataTexture(data,w,h);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.needsUpdate=true;return t;}

export function createObjectModel(_spec:unknown=null,options:ProceduralModelOptions={}):THREE.Group {
const root=new THREE.Group();root.name='chain-link-fence-panel';
const steel=new THREE.MeshStandardMaterial({name:'steel',color:0xa6aaa5,map:galvanizedTexture(),roughness:.61,metalness:.42,wireframe:!!options.wireframe});
const posts=[cylinder(.04,2,-1.46,1,0),cylinder(.028,2.96,.02,1.96,0,true)];
 // Sleeve couplers and wire ties occupy the existing support mesh and draw call.
 posts.push(cylinder(.046,.035,-1.46,1.96,0));
 for(const x of [-1.10,-.48,.14,.76,1.38])posts.push(cylinder(.032,.022,x,1.96,0,true));
 for(const y of [.30,.82,1.34,1.82])posts.push(cylinder(.044,.019,-1.46,y,0));
 add(root,'posts',merged(posts),steel,options);
const wire=new THREE.MeshStandardMaterial({name:'mesh',color:0xffffff,map:map(options,'mesh-albedo.webp',[2,1.33]),alphaTest:.25,alphaToCoverage:true,side:THREE.DoubleSide,roughness:.72,metalness:.15,wireframe:!!options.wireframe});
add(root,'mesh',new THREE.PlaneGeometry(2.96,1.80).translate(.02,1.05,0),wire,options);
const concrete=new THREE.MeshStandardMaterial({name:'concrete',color:0x89877b,roughness:1,wireframe:!!options.wireframe});
add(root,'footings',merged([box(.08,.12,.08,-1.46,.06,0)]),concrete,options);
root.userData.sculptRuntime={nodes:root.children.length+1,pivots:[{name:'root',object:'root',position:[0,0,0],axis:[0,1,0]}],sockets:[],colliders:[{name:'fence',type:'box',shape:'box',offset:[0,1,0],halfExtents:[1.5,1,.04]}],destructionGroups:[]};root.updateMatrixWorld(true);return root;
}
export function createModel(options:ProceduralModelOptions={}){return createObjectModel(null,options);}
