var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// scratch/road-drain-and-utility-tile/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  default: () => createObjectModel_default
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
function loadMap(base, file, colorSpace, anisotropy) {
  const texture = new THREE.TextureLoader().load(new URL(file, base).href);
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = anisotropy;
  return texture;
}
function createObjectModel(_spec, options = {}) {
  const root = new THREE.Group();
  root.name = "road-drain-and-utility-tile";
  const geometry = new THREE.PlaneGeometry(8, 8, 1, 1);
  geometry.rotateX(-Math.PI / 2);
  const uv = geometry.getAttribute("uv");
  if (uv) geometry.setAttribute("uv1", uv);
  const anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone that was measured off the reference plate.
    color: 16777215
  });
  const base = options.baseUrl;
  if (base) {
    material.map = loadMap(base, "maps/albedo.webp", THREE.SRGBColorSpace, anisotropy);
    material.roughnessMap = loadMap(base, "maps/roughness.webp", THREE.NoColorSpace, anisotropy);
    material.normalMap = loadMap(base, "maps/normal.webp", THREE.NoColorSpace, anisotropy);
    material.aoMap = loadMap(base, "maps/ao.webp", THREE.NoColorSpace, anisotropy);
    material.aoMapIntensity = 0.85;
    material.needsUpdate = true;
  }
  const deck = new THREE.Mesh(geometry, material);
  deck.name = "deck";
  deck.receiveShadow = options.receiveShadow ?? true;
  deck.castShadow = false;
  root.add(deck);
  root.userData.sculptRuntime = {
    nodes: 2,
    pivots: [{ name: "root", object: "root" }],
    sockets: [],
    colliders: [{ name: "deck", shape: "box" }],
    destructionGroups: []
  };
  return root;
}
var createObjectModel_default = createObjectModel;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUm9hZCBEcmFpbiBhbmQgVXRpbGl0eSBUaWxlIFx1MjAxNCBhIGZsYXQgc3RyZWV0IHRpbGUuXG4gKlxuICogVHdvIHRyaWFuZ2xlcywgb25lIGdlb21ldHJ5LCBvbmUgbWF0ZXJpYWwuIEV2ZXJ5dGhpbmcgYSBwbGF5ZXIgc2VlcyBvbiB0aGlzXG4gKiBwcm9wIGlzIGluIHRoZSBtYXBzOiB0aGUgY2FycmlhZ2V3YXksIHRoZSBzaWRld2FsayBiYW5kcywgdGhlIHBhaW50LCB0aGUgc2xhYlxuICogY291cnNpbmcgYW5kIHRoZSBkcmFpbiBsaWRzIGFyZSBwYWludGVkLCBuZXZlciBidWlsdC4gTm90aGluZyBzdGFuZHMgcHJvdWQgb2ZcbiAqIHRoZSBncm91bmQgcGxhbmUsIHdoaWNoIGlzIHRoZSBwb2ludCAtLSBhIHJvYWQgdGlsZSBtdXN0IG5vdCBjYXRjaCBhIHBsYXllcidzXG4gKiBmZWV0LCBhbmQgdGhlcmUgaXMgbm8ga2VyYiBoZXJlIHRvIHN0ZXAgdXAgb250by5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgcHJvcCdzIHNoaXBwZWQgZmlsZXMgbGl2ZSwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgKlxuICAgKiBUaGUgbWFwcyBhcmUgcmVjb3JkZWQgYXMgYmFyZSBmaWxlbmFtZXMgYmVjYXVzZSB0aGUgYnVuZGxlIGlzIEVWQUxVQVRFRFxuICAgKiByYXRoZXIgdGhhbiBpbXBvcnRlZDogaXQgaGFzIG5vIGltcG9ydC5tZXRhIGFuZCBubyBjdXJyZW50U2NyaXB0LCBzbyBpdFxuICAgKiBjYW5ub3Qgc2VlIGl0cyBvd24gVVJMLCBhbmQgYSByZWxhdGl2ZSBwYXRoIHdvdWxkIHJlc29sdmUgYWdhaW5zdCB3aGF0ZXZlclxuICAgKiBkb2N1bWVudCBpcyBob3N0aW5nIGl0IGluc3RlYWQuIEJvdGggaG9zdHMgZGVyaXZlIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IE1BUFMgPSBbXCJhbGJlZG9cIixcInJvdWdobmVzc1wiLFwibm9ybWFsXCIsXCJhb1wiXSBhcyBjb25zdDtcblxuZnVuY3Rpb24gbG9hZE1hcChcbiAgYmFzZTogc3RyaW5nLFxuICBmaWxlOiBzdHJpbmcsXG4gIGNvbG9yU3BhY2U6IFRIUkVFLkNvbG9yU3BhY2UsXG4gIGFuaXNvdHJvcHk6IG51bWJlcixcbik6IFRIUkVFLlRleHR1cmUge1xuICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKG5ldyBVUkwoZmlsZSwgYmFzZSkuaHJlZik7XG4gIHRleHR1cmUuY29sb3JTcGFjZSA9IGNvbG9yU3BhY2U7XG4gIC8vIFRoZSB0aWxlIGlzIGF1dGhvcmVkIGF0IGV4YWN0bHkgaXRzIG93biBmb290cHJpbnQsIHNvIGl0IG5ldmVyIHJlcGVhdHNcbiAgLy8gd2l0aGluIGl0c2VsZi4gUmVwZWF0IHdyYXBwaW5nIGlzIHN0aWxsIGNvcnJlY3Q6IGEgbGV2ZWwgYnVpbGRlciB0aGF0IHNjYWxlc1xuICAvLyBhIHRpbGUgc2hvdWxkIGdldCBtb3JlIHJvYWQsIG5vdCBhIHN0cmV0Y2hlZCBvbmUuXG4gIHRleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICB0ZXh0dXJlLmFuaXNvdHJvcHkgPSBhbmlzb3Ryb3B5O1xuICByZXR1cm4gdGV4dHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKFxuICBfc3BlYz86IHVua25vd24sXG4gIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSxcbik6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAncm9hZC1kcmFpbi1hbmQtdXRpbGl0eS10aWxlJztcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDgsIDgsIDEsIDEpO1xuICBnZW9tZXRyeS5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIC8vIGFvTWFwIHJlYWRzIHRoZSBTRUNPTkQgdXYgc2V0LiBBIFBsYW5lR2VvbWV0cnkgb25seSBoYXMgb25lLCBzbyB3aXRob3V0IHRoaXNcbiAgLy8gdGhlIGFtYmllbnQgb2NjbHVzaW9uIGlzIHNpbGVudGx5IGlnbm9yZWQgYW5kIHRoZSBkcmFpbiBjaGFubmVscyBhbmQgc2xhYlxuICAvLyBqb2ludHMgbG9zZSB0aGUgb25seSBzaGFkaW5nIHRoYXQgbWFrZXMgdGhlbSByZWFkIGFzIHJlY2Vzc2VkLlxuICBjb25zdCB1diA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgaWYgKHV2KSBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3V2MScsIHV2KTtcblxuICBjb25zdCBhbmlzb3Ryb3B5ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDgpKTtcbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgIHJvdWdobmVzczogMSxcbiAgICBtZXRhbG5lc3M6IDAsXG4gICAgLy8gTGVmdCB3aGl0ZSBvbiBwdXJwb3NlOiB0aGUgYWxiZWRvIG1hcCBjYXJyaWVzIHRoZSBjb2xvdXIsIGFuZCB0aW50aW5nIGl0XG4gICAgLy8gd291bGQgZmlnaHQgdGhlIHRvbmUgdGhhdCB3YXMgbWVhc3VyZWQgb2ZmIHRoZSByZWZlcmVuY2UgcGxhdGUuXG4gICAgY29sb3I6IDB4ZmZmZmZmLFxuICB9KTtcblxuICBjb25zdCBiYXNlID0gb3B0aW9ucy5iYXNlVXJsO1xuICBpZiAoYmFzZSkge1xuICAgIG1hdGVyaWFsLm1hcCA9IGxvYWRNYXAoYmFzZSwgJ21hcHMvYWxiZWRvLndlYnAnLCBUSFJFRS5TUkdCQ29sb3JTcGFjZSwgYW5pc290cm9weSk7XG4gICAgbWF0ZXJpYWwucm91Z2huZXNzTWFwID0gbG9hZE1hcChiYXNlLCAnbWFwcy9yb3VnaG5lc3Mud2VicCcsIFRIUkVFLk5vQ29sb3JTcGFjZSwgYW5pc290cm9weSk7XG4gICAgbWF0ZXJpYWwubm9ybWFsTWFwID0gbG9hZE1hcChiYXNlLCAnbWFwcy9ub3JtYWwud2VicCcsIFRIUkVFLk5vQ29sb3JTcGFjZSwgYW5pc290cm9weSk7XG4gICAgbWF0ZXJpYWwuYW9NYXAgPSBsb2FkTWFwKGJhc2UsICdtYXBzL2FvLndlYnAnLCBUSFJFRS5Ob0NvbG9yU3BhY2UsIGFuaXNvdHJvcHkpO1xuICAgIG1hdGVyaWFsLmFvTWFwSW50ZW5zaXR5ID0gMC44NTtcbiAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBkZWNrID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgZGVjay5uYW1lID0gJ2RlY2snO1xuICBkZWNrLnJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcbiAgLy8gQSBncm91bmQgcGxhbmUgY2FzdGluZyBhIHNoYWRvdyBvbnRvIG5vdGhpbmcgaXMgcHVyZSBjb3N0LlxuICBkZWNrLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgcm9vdC5hZGQoZGVjayk7XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgIG5vZGVzOiAyLFxuICAgIHBpdm90czogW3sgbmFtZTogJ3Jvb3QnLCBvYmplY3Q6ICdyb290JyB9XSxcbiAgICBzb2NrZXRzOiBbXSxcbiAgICBjb2xsaWRlcnM6IFt7IG5hbWU6ICdkZWNrJywgc2hhcGU6ICdib3gnIH1dLFxuICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbXSxcbiAgfTtcblxuICByZXR1cm4gcm9vdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT2JqZWN0TW9kZWw7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBMkJ2QixTQUFTLFFBQ1AsTUFDQSxNQUNBLFlBQ0EsWUFDZTtBQUNmLFFBQU0sVUFBVSxJQUFVLG9CQUFjLEVBQUUsS0FBSyxJQUFJLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSTtBQUN2RSxVQUFRLGFBQWE7QUFJckIsVUFBUSxRQUFjO0FBQ3RCLFVBQVEsUUFBYztBQUN0QixVQUFRLGFBQWE7QUFDckIsU0FBTztBQUNUO0FBRU8sU0FBUyxrQkFDZCxPQUNBLFVBQWtDLENBQUMsR0FDdEI7QUFDYixRQUFNLE9BQU8sSUFBVSxZQUFNO0FBQzdCLE9BQUssT0FBTztBQUVaLFFBQU0sV0FBVyxJQUFVLG9CQUFjLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkQsV0FBUyxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUM7QUFJN0IsUUFBTSxLQUFLLFNBQVMsYUFBYSxJQUFJO0FBQ3JDLE1BQUksR0FBSSxVQUFTLGFBQWEsT0FBTyxFQUFFO0FBRXZDLFFBQU0sYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sUUFBUSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pFLFFBQU0sV0FBVyxJQUFVLDJCQUFxQjtBQUFBLElBQzlDLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFHWCxPQUFPO0FBQUEsRUFDVCxDQUFDO0FBRUQsUUFBTSxPQUFPLFFBQVE7QUFDckIsTUFBSSxNQUFNO0FBQ1IsYUFBUyxNQUFNLFFBQVEsTUFBTSxvQkFBMEIsc0JBQWdCLFVBQVU7QUFDakYsYUFBUyxlQUFlLFFBQVEsTUFBTSx1QkFBNkIsb0JBQWMsVUFBVTtBQUMzRixhQUFTLFlBQVksUUFBUSxNQUFNLG9CQUEwQixvQkFBYyxVQUFVO0FBQ3JGLGFBQVMsUUFBUSxRQUFRLE1BQU0sZ0JBQXNCLG9CQUFjLFVBQVU7QUFDN0UsYUFBUyxpQkFBaUI7QUFDMUIsYUFBUyxjQUFjO0FBQUEsRUFDekI7QUFFQSxRQUFNLE9BQU8sSUFBVSxXQUFLLFVBQVUsUUFBUTtBQUM5QyxPQUFLLE9BQU87QUFDWixPQUFLLGdCQUFnQixRQUFRLGlCQUFpQjtBQUU5QyxPQUFLLGFBQWE7QUFDbEIsT0FBSyxJQUFJLElBQUk7QUFFYixPQUFLLFNBQVMsZ0JBQWdCO0FBQUEsSUFDNUIsT0FBTztBQUFBLElBQ1AsUUFBUSxDQUFDLEVBQUUsTUFBTSxRQUFRLFFBQVEsT0FBTyxDQUFDO0FBQUEsSUFDekMsU0FBUyxDQUFDO0FBQUEsSUFDVixXQUFXLENBQUMsRUFBRSxNQUFNLFFBQVEsT0FBTyxNQUFNLENBQUM7QUFBQSxJQUMxQyxtQkFBbUIsQ0FBQztBQUFBLEVBQ3RCO0FBRUEsU0FBTztBQUNUO0FBRUEsSUFBTyw0QkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
