import * as THREE from 'three';
export interface ProceduralModelOptions { baseUrl?: string; wireframe?: boolean; castShadow?: boolean; receiveShadow?: boolean; }
function merged(parts: THREE.BufferGeometry[]) { const p:number[]=[],n:number[]=[],uv:number[]=[]; for(const geo of parts){const g=geo.index?geo.toNonIndexed():geo; p.push(...Array.from(g.getAttribute('position').array));n.push(...Array.from(g.getAttribute('normal').array));uv.push(...Array.from(g.getAttribute('uv').array));if(g!==geo)g.dispose();geo.dispose();}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(n,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return g;}
function box(w:number,h:number,d:number,x:number,y:number,z:number){return new THREE.BoxGeometry(w,h,d).translate(x,y,z);}
function cylinder(r:number,h:number,x:number,y:number,z:number,horizontal=false){const g=new THREE.CylinderGeometry(r,r,h,6,1);if(horizontal)g.rotateZ(Math.PI/2);g.translate(x,y,z);return g;}
function map(options:ProceduralModelOptions,name:string,repeat:number[]=[1,1]){if(!options.baseUrl||typeof document==='undefined')return null;const t=new THREE.TextureLoader().load(new URL('maps/'+name,options.baseUrl).href);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(repeat[0],repeat[1]);t.anisotropy=8;return t;}
function add(root:THREE.Group,name:string,g:THREE.BufferGeometry,m:THREE.Material,options:ProceduralModelOptions){const mesh=new THREE.Mesh(g,m);mesh.name=name;mesh.castShadow=options.castShadow!==false;mesh.receiveShadow=options.receiveShadow!==false;root.add(mesh);return mesh;}

// Galvanized steel carries fine zinc variation and sparse oxide, with no lighting baked in.
function galvanizedTexture(){const w=128,h=256,data=new Uint8Array(w*h*4);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){let q=Math.imul(x+91,374761393)^Math.imul(y+173,668265263);q=Math.imul(q^(q>>>13),1274126177);const n=(q>>>0)/4294967295,k=(y*w+x)*4;
 const rust=Math.pow(Math.max(0,Math.sin(x*.27+y*.036)*Math.sin(y*.071)-.46),2)*1.9;
 for(let c=0;c<3;c++)data[k+c]=(216+n*32)*(1-rust)+[119,80,48][c]*rust;data[k+3]=255;}
 const t=new THREE.DataTexture(data,w,h);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.minFilter=THREE.LinearMipmapLinearFilter;t.magFilter=THREE.LinearFilter;t.generateMipmaps=true;t.needsUpdate=true;return t;}

function corrugationNormal(){const w=1024,data=new Uint8Array(w*4);
 // Sixteen standing ribs align with the existing albedo plate, about 64 pixels apart.
 for(let x=0;x<w;x++){const phase=((x-15)/64)%1,t=phase-Math.round(phase),slope=1.4*Math.sin(t*Math.PI*2)*Math.exp(-t*t/0.012),n=new THREE.Vector3(-slope,0,1).normalize();data[x*4]=128+127*n.x;data[x*4+1]=128;data[x*4+2]=128+127*n.z;data[x*4+3]=255;}
 const t=new THREE.DataTexture(data,w,1);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.minFilter=THREE.LinearMipmapLinearFilter;t.magFilter=THREE.LinearFilter;t.generateMipmaps=true;t.needsUpdate=true;return t;}

export function createObjectModel(_spec:unknown=null,options:ProceduralModelOptions={}):THREE.Group {
const root=new THREE.Group();root.name='zinc-sheet-hoarding-panel';
const steel=new THREE.MeshStandardMaterial({name:'steel',color:0xa6aaa5,map:galvanizedTexture(),roughness:.61,metalness:.42,wireframe:!!options.wireframe});
const fasteners:THREE.BufferGeometry[]=[];for(const y of [.49,1.43,2.32])for(const x of [-1.30,-.66,-.02,.62,1.26]){const g=new THREE.CylinderGeometry(.009,.009,.007,6).rotateX(Math.PI/2).translate(x,y,.016);fasteners.push(g);}
add(root,'frame',merged([...fasteners,box(.08,2.4,.12,-1.46,1.2,0),box(2.96,.045,.045,.02,2.345,.0375),box(2.96,.045,.045,.02,1.43,.0375),box(2.96,.045,.045,.02,.465,.0375)]),steel,options);
const sheet=new THREE.MeshStandardMaterial({name:'sheet',color:0xffffff,map:map(options,'panel-albedo.webp'),roughness:.62,metalness:.32,normalMap:corrugationNormal(),normalScale:new THREE.Vector2(.7,.7),side:THREE.DoubleSide,wireframe:!!options.wireframe});
add(root,'sheet',new THREE.PlaneGeometry(2.96,1.90).translate(.02,1.41,.012),sheet,options);
root.userData.sculptRuntime={nodes:root.children.length+1,pivots:[{name:'root',object:'root',position:[0,0,0],axis:[0,1,0]}],sockets:[],colliders:[{name:'fence',type:'box',shape:'box',offset:[0,1.2,0],halfExtents:[1.5,1.2,.06]}],destructionGroups:[]};root.updateMatrixWorld(true);return root;
}
export function createModel(options:ProceduralModelOptions={}){return createObjectModel(null,options);}
