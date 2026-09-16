/**
 * Smoke harness for a baked level: bundled by scripts/level/smoke-level.mjs
 * with everything inside (this page has no host three to share), so it is
 * self-contained. Loads the level through the runtime package, renders one
 * frame per LOD tier from the first spawn, and reports what the renderer drew.
 */
import * as THREE from 'three';
import { loadLevel } from '@thai-kit/level-runtime';

const params = new URLSearchParams(location.search);
const url = params.get('level');
const size = Number(params.get('size') ?? 768);
// Keep the default IBL probe small for runtime checks. Use iblSize when
// reviewing reflection quality at a production resolution.
const iblSize = Number(params.get('iblSize') ?? 64);

const canvas = document.getElementById('c');
canvas.width = size;
canvas.height = size;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(size, size, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0d16);
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 2000);
// Measure the actual clear colour after output colour conversion and tone
// mapping; estimating gamma from scene.background misclassified empty frames.
renderer.render(scene,camera);
const backdrop=new Uint8Array(4);
renderer.getContext().readPixels(0,0,1,1,renderer.getContext().RGBA,renderer.getContext().UNSIGNED_BYTE,backdrop);

/** Mean luma, and the share of pixels that are not the backdrop -- the honest test for a night scene. */
function frameStats() {
  const gl = renderer.getContext();
  const px = new Uint8Array(size * size * 4);
  gl.readPixels(0, 0, size, size, gl.RGBA, gl.UNSIGNED_BYTE, px);
  const [br,bgg,bb]=backdrop;
  let sum = 0;
  let fg = 0;
  for (let i = 0; i < px.length; i += 4) {
    sum += 0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2];
    if (Math.abs(px[i] - br) + Math.abs(px[i + 1] - bgg) + Math.abs(px[i + 2] - bb) > 12) fg += 1;
  }
  return { luma: +(sum / (px.length / 4)).toFixed(1), coverage: +(fg / (px.length / 4)).toFixed(4) };
}

window.__smoke = { ready: false };
(async () => {
  try {
    // No sky. `frameStats` measures the share of the frame that is NOT the
    // backdrop, and a sky makes every pixel foreground -- the coverage gate
    // would read 100% on an empty level. The smoke test is about geometry.
    const t0 = performance.now();
    // `sky: false` but IBL still on: the environment is prefiltered from the
    // sky's own texture, which loadLevel reads whether or not a dome is built,
    // so the geometry here is lit the way the shipped level lights it.
    const level = await loadLevel(url, { scene, renderer, camera, sky: params.has('showSky'), iblSize, transcoderPath: '/node_modules/three/examples/jsm/libs/basis/' });
    const loadMs = Math.round(performance.now() - t0);
    if (params.has('onlyCell')) {
      const chosen = params.get('onlyCell');
      if (!level.cells.cells.some(c => c.node.name === chosen || c.key === chosen)) throw new Error(`Unknown comparison cell ${chosen}`);
      for (const cell of level.cells.cells) cell.node.visible = cell.node.name === chosen || cell.key === chosen;
      for (const node of level.dynamicNodes.values()) node.visible = false;
    }
    if (params.has('uvDebug')) {
      const debugMaterials=new Map();
      const debugMaterial=source=>{
        if(!source.lightMap)return source;
        if(!debugMaterials.has(source))debugMaterials.set(source,new THREE.MeshBasicMaterial({map:source.lightMap,side:source.side,toneMapped:false}));
        return debugMaterials.get(source);
      };
      scene.traverse(o=>{if(o.isMesh)o.material=Array.isArray(o.material)?o.material.map(debugMaterial):debugMaterial(o.material);});
    }
    const spawn = level.spawns.list[0] ?? { position: [0, 0, 0], yawDeg: 0 };
    const b = level.manifest.bounds;
    const center = new THREE.Vector3((b.min[0] + b.max[0]) / 2, 0, (b.min[2] + b.max[2]) / 2);
    // `cam=x,y,z&look=x,y,z` (metres) frames a chosen spot instead -- a shopfront, say --
    // so a bake can be judged from the street and not only from the first spawn.
    const vec = (key) => { const v = (params.get(key) ?? '').split(',').map(Number); return v.length === 3 && v.every(Number.isFinite) ? new THREE.Vector3(...v) : null; };
    const camAt = vec('cam'); const lookAt = vec('look');
    if (camAt) camera.position.copy(camAt);
    else camera.position.set(spawn.position[0], spawn.position[1] + 1.7, spawn.position[2]).add(new THREE.Vector3(0, 6, 14));
    camera.lookAt(lookAt ?? center);
    const frames = {};
    window.__tierImages = {};
    for (const tier of [0, 1, 2]) {
      level.cells.forceTier(tier);
      level.update(1 / 60, camera.position);
      renderer.info.reset();
      renderer.render(scene, camera);
      frames[`tier${tier}`] = { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, ...frameStats() };
      if (params.has('captureTiers')) window.__tierImages[`tier${tier}`] = renderer.domElement.toDataURL('image/png');
    }
    level.cells.forceTier(0);
    renderer.render(scene, camera);
    let shadowProbe = null;
    if (params.has('shadowProbe')) {
      // A temporary player-sized caster above the map isolates the live moon
      // from already-baked occlusion. Compare the same frame with casting off/on.
      const savedPosition = camera.position.clone();
      const savedQuaternion = camera.quaternion.clone();
      const at = new THREE.Vector3(0, b.max[1] + 20, 0);
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 1 }));
      floor.rotation.x = -Math.PI / 2; floor.position.copy(at); floor.receiveShadow = true;
      const player = new THREE.Mesh(new THREE.CapsuleGeometry(.4, 1.1, 4, 12), new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 1 }));
      player.position.copy(at).add(new THREE.Vector3(0, .95, 0));
      scene.add(floor, player);
      camera.position.copy(at).add(new THREE.Vector3(5, 5, 7)); camera.lookAt(at);
      level.update(1 / 60, at);
      const gl = renderer.getContext();
      const before = new Uint8Array(size * size * 4), after = new Uint8Array(before.length);
      renderer.render(scene, camera); gl.readPixels(0, 0, size, size, gl.RGBA, gl.UNSIGNED_BYTE, before);
      player.castShadow = true;
      renderer.render(scene, camera); gl.readPixels(0, 0, size, size, gl.RGBA, gl.UNSIGNED_BYTE, after);
      let darkerPixels = 0;
      for (let i = 0; i < before.length; i += 4) if (before[i] + before[i+1] + before[i+2] - after[i] - after[i+1] - after[i+2] > 6) darkerPixels++;
      shadowProbe = { darkerPixels, moonMapSize: level.lights.moon?.shadow.mapSize.x, liveLights: level.lights.list.length };
      scene.remove(floor, player); floor.geometry.dispose(); floor.material.dispose(); player.geometry.dispose(); player.material.dispose();
      camera.position.copy(savedPosition); camera.quaternion.copy(savedQuaternion);
      level.update(1 / 60, camera.position); renderer.render(scene, camera);
      if (darkerPixels < 32) throw new Error(`player shadow probe failed: only ${darkerPixels} darker pixels`);
    }
    const gl = renderer.getContext();
    const debug = gl.getExtension('WEBGL_debug_renderer_info');
    const gpu = debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    let benchmark = null;
    if (params.has('benchmark')) {
      const saved = camera.position.clone(), rotation = camera.quaternion.clone();
      const times = [], calls = [];
      // Fixed player-height route, fixed resolution, warmed shaders. finish()
      // includes submitted GPU work; these are synchronous render times,
      // not a promise about end-user FPS or display refresh rate.
      for (let i = -24; i < 120; i++) {
        const step = Math.max(0, i) / 119;
        camera.position.set(14, 1.7, -36 + step * 56);
        camera.lookAt(14, 1.7, camera.position.z + 12);
        const start = performance.now();
        level.update(1/60, camera.position);
        renderer.render(scene, camera); gl.finish();
        if (i >= 0) { times.push(performance.now()-start); calls.push(renderer.info.render.calls); }
        await new Promise(resolve => requestAnimationFrame(resolve));
      }
      times.sort((a,b)=>a-b);
      benchmark = { method:'synchronous-render-wall-ms', frames:120, medianMs:times[60], p95Ms:times[114], meanDrawCalls:calls.reduce((a,b)=>a+b,0)/calls.length };
      camera.position.copy(saved); camera.quaternion.copy(rotation);
      level.cells.forceTier(0); renderer.render(scene,camera);
    }
    const atlasProbes = [], atlasCoverage = [];
    const coverageMasks=params.get('coverageMasks');
    if (params.has('atlasProbe') || coverageMasks) {
      const probeScene = new THREE.Scene();
      const probeCamera = new THREE.OrthographicCamera(-1,1,1,-1,.1,10);
      probeCamera.position.z=1;
      const geometry=new THREE.PlaneGeometry(2,2);
      geometry.setAttribute('uv1',geometry.getAttribute('uv').clone());
      const material=new THREE.MeshBasicMaterial({toneMapped:false});
      probeScene.add(new THREE.Mesh(geometry,material));
      for(const [atlas,texture] of (level.lightmaps??[]).entries()) {
        material.map=texture;material.needsUpdate=true;
        if(params.has('atlasProbe')) {
          renderer.render(probeScene,probeCamera);
          atlasProbes.push({atlas,...frameStats()});
        }
        if(coverageMasks) {
          const width=texture.image.width,height=texture.image.height;
          const response=await fetch(`${coverageMasks.replace(/\/$/,'')}/atlas-${String(atlas).padStart(3,'0')}/owner.bin.gz`);
          if(!response.ok)throw Error(`missing coverage mask for atlas ${atlas}`);
          const decoded=await new Response(response.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
          const owner=new Int32Array(decoded);
          if(owner.length!==width*height)throw Error(`invalid coverage dimensions for atlas ${atlas}`);
          const target=new THREE.WebGLRenderTarget(width,height,{depthBuffer:false,stencilBuffer:false});
          target.texture.colorSpace=THREE.SRGBColorSpace;
          const pixels=new Uint8Array(width*height*4);
          renderer.setRenderTarget(target);renderer.render(probeScene,probeCamera);
          renderer.readRenderTargetPixels(target,0,0,width,height,pixels);
          renderer.setRenderTarget(null);target.dispose();
          let checkedTexels=0,missingTexels=0;
          for(let y=0;y<height;y++)for(let x=0;x<width;x++) {
            if(owner[(height-1-y)*width+x]<0)continue;
            checkedTexels++;
            const p=(y*width+x)*4;
            if(Math.max(pixels[p],pixels[p+1],pixels[p+2])<32)missingTexels++;
          }
          atlasCoverage.push({atlas,checkedTexels,missingTexels});
          window.__smoke={ready:false,phase:'GPU atlas readback',atlas:atlas+1,total:level.lightmaps.length};
        }
      }
      geometry.dispose();material.dispose();
      renderer.render(scene,camera);
    }
    const atlasTextures = (level.lightmaps ?? (level.lightmap ? [level.lightmap] : [])).map(t => ({
      width:t.image?.width, height:t.image?.height, format:t.format,
      bytes:(t.mipmaps ?? []).reduce((n,m)=>n+(m.data?.byteLength ?? 0),0) || t.image?.data?.byteLength || null,
    }));
    window.__smoke = {
      ready: true, ok: true, uvDebug: params.has('uvDebug'), camera: camera.position.toArray(), onlyCell: params.get('onlyCell'), frames, shadowProbe, gpu, benchmark, atlasTextures, atlasProbes, atlasCoverage, cells: level.cells.cells.length, lightmap: Boolean(level.lightmap),
      environment: level.environment
        ? { size: level.environment.size, source: level.environment.source, ms: level.environment.ms, mb: +(level.environment.bytes / 1048576).toFixed(2) }
        : null,
      loadMs,
      lights: level.lights.list.map((l) => l.entry.node), textures: renderer.info.memory.textures, geometries: renderer.info.memory.geometries,
      colliders: level.colliders.staticShapes.length, dynamic: level.colliders.dynamic.length,
      // What each dynamic placement is actually wearing, so a black prop can be
      // told apart from an unlit one: a lightmap or the lightmap patch on a
      // dynamic material means the loader shared it with a static cell.
      dynamicMaterials: level.manifest.dynamic.map((d) => {
        const node = level.dynamicNodes.get(d.node);
        const materials = [];
        node?.traverse((o) => { if (o.isMesh) for (const m of Array.isArray(o.material) ? o.material : [o.material]) materials.push({ name: m.name, lightMap: Boolean(m.lightMap), patched: Boolean(m.userData?.thaikitLightmap), vertexColors: m.vertexColors, map: Boolean(m.map), color: m.color?.getHexString(), visible: o.visible, layers: o.layers.mask }); });
        return { node: d.node, found: Boolean(node), materials };
      }),
    };
  } catch (err) {
    window.__smoke = { ready: true, ok: false, error: err.message, stack: err.stack };
  }
})();
