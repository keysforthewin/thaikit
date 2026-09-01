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

// assets/interlocking-concrete-paver-tile/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  default: () => createObjectModel_default
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
function createObjectModel(_spec, options = {}) {
  const root = new THREE.Group();
  root.name = "interlocking-concrete-paver-tile";
  const geometry = new THREE.PlaneGeometry(8, 8, 1, 1);
  geometry.rotateX(-Math.PI / 2);
  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone the plate was generated at.
    color: 16777215
  });
  const base = options.baseUrl;
  if (base) {
    const albedo = new THREE.TextureLoader().load(new URL("maps/albedo.webp", base).href);
    albedo.colorSpace = THREE.SRGBColorSpace;
    albedo.wrapS = THREE.RepeatWrapping;
    albedo.wrapT = THREE.RepeatWrapping;
    albedo.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = albedo;
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
    colliders: [],
    destructionGroups: []
  };
  return root;
}
var createObjectModel_default = createObjectModel;
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogSW50ZXJsb2NraW5nIENvbmNyZXRlIFBhdmVyIFRpbGUgXHUyMDE0IGEgZmxhdCBncm91bmQgdGlsZS5cbiAqXG4gKiBUd28gdHJpYW5nbGVzLCBvbmUgZ2VvbWV0cnksIG9uZSBtYXRlcmlhbC4gRXZlcnl0aGluZyBhIHBsYXllciBzZWVzIG9uIHRoaXNcbiAqIHByb3AgaXMgaW4gdGhlIGFsYmVkbzogZXZlcnkgc3RvbmUsIGpvaW50LCBydXQgYW5kIHN0YWluIGlzIHBhaW50ZWQsIG5ldmVyXG4gKiBidWlsdC4gTm90aGluZyBzdGFuZHMgcHJvdWQgb2YgdGhlIGdyb3VuZCBwbGFuZSwgd2hpY2ggaXMgdGhlIHBvaW50IC0tIGFcbiAqIGdyb3VuZCB0aWxlIG11c3Qgbm90IGNhdGNoIGEgcGxheWVyJ3MgZmVldC5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgcHJvcCdzIHNoaXBwZWQgZmlsZXMgbGl2ZSwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgKlxuICAgKiBUaGUgbWFwIGlzIHJlY29yZGVkIGFzIGEgYmFyZSBmaWxlbmFtZSBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwsIGFuZCBhIHJlbGF0aXZlIHBhdGggd291bGQgcmVzb2x2ZSBhZ2FpbnN0IHdoYXRldmVyXG4gICAqIGRvY3VtZW50IGlzIGhvc3RpbmcgaXQgaW5zdGVhZC4gQm90aCBob3N0cyBkZXJpdmUgdGhpcyBmcm9tIHRoZSBtb2R1bGUgVVJMLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKFxuICBfc3BlYz86IHVua25vd24sXG4gIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSxcbik6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnaW50ZXJsb2NraW5nLWNvbmNyZXRlLXBhdmVyLXRpbGUnO1xuXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoOCwgOCwgMSwgMSk7XG4gIGdlb21ldHJ5LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgcm91Z2huZXNzOiAxLFxuICAgIG1ldGFsbmVzczogMCxcbiAgICAvLyBMZWZ0IHdoaXRlIG9uIHB1cnBvc2U6IHRoZSBhbGJlZG8gbWFwIGNhcnJpZXMgdGhlIGNvbG91ciwgYW5kIHRpbnRpbmcgaXRcbiAgICAvLyB3b3VsZCBmaWdodCB0aGUgdG9uZSB0aGUgcGxhdGUgd2FzIGdlbmVyYXRlZCBhdC5cbiAgICBjb2xvcjogMHhmZmZmZmYsXG4gIH0pO1xuXG4gIC8vIEJlaGluZCB0aGUgYmFzZVVybCBndWFyZCBzbyB0aGUgTm9kZS1zaWRlIGdhdGVzIC0tIHByb21vdGUncyBoZWFkbGVzc1xuICAvLyBjb25zdHJ1Y3Rpb24sIGRlcml2ZS1jb2xsaWRlcnMsIGNoZWNrLWNvcGxhbmFyIC0tIGNhbiBidWlsZCB0aGlzIGZhY3RvcnkgaW4gYVxuICAvLyBydW50aW1lIHdpdGggbm8gRE9NLCB3aGVyZSBJbWFnZUxvYWRlciB0aHJvd3MuXG4gIGNvbnN0IGJhc2UgPSBvcHRpb25zLmJhc2VVcmw7XG4gIGlmIChiYXNlKSB7XG4gICAgY29uc3QgYWxiZWRvID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKG5ldyBVUkwoJ21hcHMvYWxiZWRvLndlYnAnLCBiYXNlKS5ocmVmKTtcbiAgICBhbGJlZG8uY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICAgIC8vIFRoZSB0aWxlIGlzIGF1dGhvcmVkIGF0IGV4YWN0bHkgaXRzIG93biBmb290cHJpbnQsIHNvIGl0IG5ldmVyIHJlcGVhdHNcbiAgICAvLyB3aXRoaW4gaXRzZWxmLiBSZXBlYXQgd3JhcHBpbmcgaXMgc3RpbGwgY29ycmVjdDogYSBsZXZlbCBidWlsZGVyIHRoYXRcbiAgICAvLyBzY2FsZXMgYSB0aWxlIHNob3VsZCBnZXQgbW9yZSBncm91bmQsIG5vdCBhIHN0cmV0Y2hlZCBvbmUuXG4gICAgYWxiZWRvLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgYWxiZWRvLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgYWxiZWRvLmFuaXNvdHJvcHkgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKG9wdGlvbnMudGV4dHVyZUFuaXNvdHJvcHkgPz8gOCkpO1xuICAgIG1hdGVyaWFsLm1hcCA9IGFsYmVkbztcbiAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBkZWNrID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgZGVjay5uYW1lID0gJ2RlY2snO1xuICBkZWNrLnJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcbiAgLy8gQSBncm91bmQgcGxhbmUgY2FzdGluZyBhIHNoYWRvdyBvbnRvIG5vdGhpbmcgaXMgcHVyZSBjb3N0LlxuICBkZWNrLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgcm9vdC5hZGQoZGVjayk7XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgIG5vZGVzOiAyLFxuICAgIHBpdm90czogW3sgbmFtZTogJ3Jvb3QnLCBvYmplY3Q6ICdyb290JyB9XSxcbiAgICBzb2NrZXRzOiBbXSxcbiAgICBjb2xsaWRlcnM6IFtdLFxuICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbXSxcbiAgfTtcblxuICByZXR1cm4gcm9vdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT2JqZWN0TW9kZWw7XG5cbi8qKlxuICogVGhlIG9uZS1hcmd1bWVudCBlbnRyeSBwb2ludDogdmliZTNkJ3MgY29udHJhY3QsIGFuZCBpbWcydGhyZWVqcydzIG93bi5cbiAqXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIGFib3ZlIGtlZXBzIHRoYWlraXQncyBoaXN0b3JpY2FsIChzcGVjLCBvcHRpb25zKSBzaGFwZSBzb1xuICogdGhlIGhhcm5lc3MsIHRoZSBsZXZlbCBlZGl0b3IgYW5kIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgY2Fycnkgb24gdW5jaGFuZ2VkLlxuICogYHNwZWNgIGhhcyBuZXZlciBiZWVuIHBhc3NlZCBieSBhbnkgY2FsbGVyIC0tIGl0IGlzIGluc3BlY3Rpb24gZGF0YSB0aGF0IGlzXG4gKiBhbHJlYWR5IGJha2VkIGludG8gdGhpcyBtb2R1bGUgLS0gc28gdGhpcyBpcyB0aGUgaG9uZXN0IHNpZ25hdHVyZSwgYW5kIGl0IGlzXG4gKiB3aGF0IGEgdmliZTNkIGNvbnN1bWVyIGluc3RhbGxzIGFuZCBjYWxscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUF3QmhCLFNBQVMsa0JBQ2QsT0FDQSxVQUFrQyxDQUFDLEdBQ3RCO0FBQ2IsUUFBTSxPQUFPLElBQVUsWUFBTTtBQUM3QixPQUFLLE9BQU87QUFFWixRQUFNLFdBQVcsSUFBVSxvQkFBYyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ25ELFdBQVMsUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDO0FBRTdCLFFBQU0sV0FBVyxJQUFVLDJCQUFxQjtBQUFBLElBQzlDLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFHWCxPQUFPO0FBQUEsRUFDVCxDQUFDO0FBS0QsUUFBTSxPQUFPLFFBQVE7QUFDckIsTUFBSSxNQUFNO0FBQ1IsVUFBTSxTQUFTLElBQVUsb0JBQWMsRUFBRSxLQUFLLElBQUksSUFBSSxvQkFBb0IsSUFBSSxFQUFFLElBQUk7QUFDcEYsV0FBTyxhQUFtQjtBQUkxQixXQUFPLFFBQWM7QUFDckIsV0FBTyxRQUFjO0FBQ3JCLFdBQU8sYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sUUFBUSxxQkFBcUIsQ0FBQyxDQUFDO0FBQzFFLGFBQVMsTUFBTTtBQUNmLGFBQVMsY0FBYztBQUFBLEVBQ3pCO0FBRUEsUUFBTSxPQUFPLElBQVUsV0FBSyxVQUFVLFFBQVE7QUFDOUMsT0FBSyxPQUFPO0FBQ1osT0FBSyxnQkFBZ0IsUUFBUSxpQkFBaUI7QUFFOUMsT0FBSyxhQUFhO0FBQ2xCLE9BQUssSUFBSSxJQUFJO0FBRWIsT0FBSyxTQUFTLGdCQUFnQjtBQUFBLElBQzVCLE9BQU87QUFBQSxJQUNQLFFBQVEsQ0FBQyxFQUFFLE1BQU0sUUFBUSxRQUFRLE9BQU8sQ0FBQztBQUFBLElBQ3pDLFNBQVMsQ0FBQztBQUFBLElBQ1YsV0FBVyxDQUFDO0FBQUEsSUFDWixtQkFBbUIsQ0FBQztBQUFBLEVBQ3RCO0FBRUEsU0FBTztBQUNUO0FBRUEsSUFBTyw0QkFBUTtBQVdSLFNBQVMsWUFBWSxVQUFrQyxDQUFDLEdBQWdCO0FBQzdFLFNBQU8sa0JBQWtCLFFBQVcsT0FBTztBQUM3QzsiLAogICJuYW1lcyI6IFtdCn0K
