import * as THREE from 'three';
import { makeFoliage } from './factory';
import { FOLIAGE } from './catalog.mjs';
import { flattenPrototype, assetName, prepareExportTextures } from '../../web/client/src/unreal/propGlb.js';
import { namedMeshPlugin } from '../../web/client/src/unreal/namedMeshPlugin.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { applyBillboard } from '../../packages/level-runtime/src/billboard.js';
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
renderer.setSize(800,800);renderer.setPixelRatio(1);renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;
document.body.style.cssText='margin:0;background:#a6adb0;color:white;font:16px sans-serif';document.body.append(renderer.domElement);
const scene=new THREE.Scene();scene.add(new THREE.HemisphereLight(0xeaf3ff,0x647154,2));const sun=new THREE.DirectionalLight(0xfff5df,2.5);sun.position.set(5,10,6);scene.add(sun);
let root:THREE.Group;
function dispose(){if(!root)return;const mats=new Set<THREE.Material>(),maps=new Set<THREE.Texture>();root.traverse((n:any)=>{if(n.isMesh){n.geometry.dispose();mats.add(n.material);for(const key of ['map','normalMap','roughnessMap'])if(n.material[key])maps.add(n.material[key]);}});for(const m of mats)m.dispose();for(const m of maps)m.dispose();scene.remove(root);}
async function load(id:string,options:any={}){dispose();const a=FOLIAGE.find(a=>a.id===id)!;if(!a)throw new Error(id);let done:()=>void;let failed='';const ready=new Promise<void>(resolve=>done=resolve);THREE.DefaultLoadingManager.onLoad=()=>done();THREE.DefaultLoadingManager.onError=url=>{failed=url;done();};root=makeFoliage(a,{baseUrl:new URL(`/scratch/foliage-20260915/prepared/${id}/`,location.href).href,...options});scene.add(root);await ready;if(failed)throw new Error(`Texture failed ${failed}`);return a;}
async function render(id:string,detail=0,azimuth=.35){const a=await load(id,{detail});const box=new THREE.Box3().setFromObject(root);const size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());const span=Math.max(size.x,size.y,size.z)*1.12;const camera=new THREE.OrthographicCamera(-span/2,span/2,span/2,-span/2,.01,span*10);camera.position.copy(center).add(new THREE.Vector3(Math.sin(azimuth)*span,span*.10,Math.cos(azimuth)*span));camera.lookAt(center);renderer.render(scene,camera);return {id,triangles:renderer.info.render.triangles,png:renderer.domElement.toDataURL('image/png')};}
async function save(name:string,body:Blob|ArrayBuffer){const r=await fetch(`/save/${name}`,{method:'POST',body});if(!r.ok)throw new Error(await r.text());}
async function renderAll(){const report=[];for(const a of FOLIAGE){const r=await render(a.id);await save(`${a.id}/preview.png`,await(await fetch(r.png)).blob());report.push({id:a.id,triangles:r.triangles});}return report;}
async function billboards(){for(const a of FOLIAGE){await load(a.id);const size=new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());const w=size.x,h=size.y;renderer.setSize(Math.round(1024*w/Math.max(w,h)),Math.round(1024*h/Math.max(w,h)));const camera=new THREE.OrthographicCamera(-w/2,w/2,h/2,-h/2,.01,Math.max(w,h)*10);camera.position.set(0,h/2,Math.max(w,h)*3);camera.lookAt(0,h/2,0);renderer.render(scene,camera);await save(`${a.id}/billboard.png`,await(await fetch(renderer.domElement.toDataURL('image/png'))).blob());}renderer.setSize(800,800);return '20 billboards rendered from geometry';}
async function exportVariant(id:string,options:any,name:string){await load(id,{...options,billboard:false});const asset=assetName(`@thai-kit/${id}${name==='mesh-lod0'?'':`-${name}`}`);const mesh=flattenPrototype(root,asset,{category:'vegetation'});prepareExportTextures(mesh.material);const exportScene=new THREE.Scene();exportScene.name=asset;exportScene.add(mesh);mesh.userData.tk={bakeLighting:false,asset:`@thai-kit/${id}`,representation:name,billboard:options.representation==='billboard'?'yaw':'none'};const exporter=new GLTFExporter();exporter.register(namedMeshPlugin);const glb=await exporter.parseAsync(exportScene,{binary:true,onlyVisible:false,maxTextureSize:1024,trs:false});await save(`${id}/${name}.glb`,glb as ArrayBuffer);const report={id,name,asset,bytes:(glb as ArrayBuffer).byteLength,triangles:(mesh.geometry.index?.count??mesh.geometry.attributes.position.count)/3,materials:mesh.material.length};mesh.geometry.dispose();for(const m of mesh.material)m.dispose();return report;}
async function exportAll(){const reports=[];for(const a of FOLIAGE){for(const detail of [0,1,2])reports.push(await exportVariant(a.id,{detail},`mesh-lod${detail}`));reports.push(await exportVariant(a.id,{detail:1,lighting:'unlit'},'exterior'));reports.push(await exportVariant(a.id,{representation:'billboard',lighting:'unlit'},'billboard'));reports.push(await exportVariant(a.id,{representation:'cluster',lighting:'unlit'},'cluster'));if(a.potted)reports.push(await exportVariant(a.id,{potted:false},'unpotted'));}await save('exports.json',new Blob([JSON.stringify(reports,null,2)]));return reports;}
async function roundtrip(){
 dispose();
 const gltf=await new GLTFLoader().loadAsync('/scratch/foliage-20260915/roundtrip.glb');
 root=gltf.scene;scene.add(root);
 const results=[];
 for(const item of root.children){
  for(const other of root.children)other.visible=other===item;
  const box=new THREE.Box3().setFromObject(item),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3()),span=Math.max(size.x,size.y,size.z)*1.2;
  const camera=new THREE.OrthographicCamera(-span/2,span/2,span/2,-span/2,.01,span*10);
  camera.position.copy(center).add(new THREE.Vector3(span*.4,span*.1,span));camera.lookAt(center);
  if(item.name.startsWith('bb_'))applyBillboard(item,'yaw',camera);
  renderer.render(scene,camera);
  const materials:any[]=[];item.traverse((n:any)=>{if(n.isMesh)for(const m of (Array.isArray(n.material)?n.material:[n.material]))materials.push({type:m.type,alphaTest:m.alphaTest,doubleSided:m.side===THREE.DoubleSide,texture:!!m.map,lightMap:!!m.lightMap});});
  results.push({name:item.name,size:size.toArray(),triangles:renderer.info.render.triangles,materials});
  await save(`roundtrip-${item.name}.png`,await(await fetch(renderer.domElement.toDataURL('image/png'))).blob());
 }
 await save('roundtrip-browser.json',new Blob([JSON.stringify(results,null,2)]));return results;
}
(window as any).foliage={render,renderAll,load,save,billboards,exportAll,exportVariant,roundtrip,renderer,scene,get root(){return root;},FOLIAGE};
(window as any).ready=true;
