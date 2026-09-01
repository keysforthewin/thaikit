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

// ../repo/scratch/patchy-grass-ground-tile/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  default: () => createObjectModel_default
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
function createObjectModel(_spec, options = {}) {
  const root = new THREE.Group();
  root.name = "patchy-grass-ground-tile";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUGF0Y2h5IEdyYXNzIEdyb3VuZCBUaWxlIFx1MjAxNCBhIGZsYXQgZ3JvdW5kIHRpbGUuXG4gKlxuICogVHdvIHRyaWFuZ2xlcywgb25lIGdlb21ldHJ5LCBvbmUgbWF0ZXJpYWwuIEV2ZXJ5dGhpbmcgYSBwbGF5ZXIgc2VlcyBvbiB0aGlzXG4gKiBwcm9wIGlzIGluIHRoZSBhbGJlZG86IGV2ZXJ5IHN0b25lLCBqb2ludCwgcnV0IGFuZCBzdGFpbiBpcyBwYWludGVkLCBuZXZlclxuICogYnVpbHQuIE5vdGhpbmcgc3RhbmRzIHByb3VkIG9mIHRoZSBncm91bmQgcGxhbmUsIHdoaWNoIGlzIHRoZSBwb2ludCAtLSBhXG4gKiBncm91bmQgdGlsZSBtdXN0IG5vdCBjYXRjaCBhIHBsYXllcidzIGZlZXQuXG4gKi9cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcCBpcyByZWNvcmRlZCBhcyBhIGJhcmUgZmlsZW5hbWUgYmVjYXVzZSB0aGUgYnVuZGxlIGlzIEVWQUxVQVRFRFxuICAgKiByYXRoZXIgdGhhbiBpbXBvcnRlZDogaXQgaGFzIG5vIGltcG9ydC5tZXRhIGFuZCBubyBjdXJyZW50U2NyaXB0LCBzbyBpdFxuICAgKiBjYW5ub3Qgc2VlIGl0cyBvd24gVVJMLCBhbmQgYSByZWxhdGl2ZSBwYXRoIHdvdWxkIHJlc29sdmUgYWdhaW5zdCB3aGF0ZXZlclxuICAgKiBkb2N1bWVudCBpcyBob3N0aW5nIGl0IGluc3RlYWQuIEJvdGggaG9zdHMgZGVyaXZlIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChcbiAgX3NwZWM/OiB1bmtub3duLFxuICBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30sXG4pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ3BhdGNoeS1ncmFzcy1ncm91bmQtdGlsZSc7XG5cbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg4LCA4LCAxLCAxKTtcbiAgZ2VvbWV0cnkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuXG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICByb3VnaG5lc3M6IDEsXG4gICAgbWV0YWxuZXNzOiAwLFxuICAgIC8vIExlZnQgd2hpdGUgb24gcHVycG9zZTogdGhlIGFsYmVkbyBtYXAgY2FycmllcyB0aGUgY29sb3VyLCBhbmQgdGludGluZyBpdFxuICAgIC8vIHdvdWxkIGZpZ2h0IHRoZSB0b25lIHRoZSBwbGF0ZSB3YXMgZ2VuZXJhdGVkIGF0LlxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgfSk7XG5cbiAgLy8gQmVoaW5kIHRoZSBiYXNlVXJsIGd1YXJkIHNvIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgLS0gcHJvbW90ZSdzIGhlYWRsZXNzXG4gIC8vIGNvbnN0cnVjdGlvbiwgZGVyaXZlLWNvbGxpZGVycywgY2hlY2stY29wbGFuYXIgLS0gY2FuIGJ1aWxkIHRoaXMgZmFjdG9yeSBpbiBhXG4gIC8vIHJ1bnRpbWUgd2l0aCBubyBET00sIHdoZXJlIEltYWdlTG9hZGVyIHRocm93cy5cbiAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZVVybDtcbiAgaWYgKGJhc2UpIHtcbiAgICBjb25zdCBhbGJlZG8gPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQobmV3IFVSTCgnbWFwcy9hbGJlZG8ud2VicCcsIGJhc2UpLmhyZWYpO1xuICAgIGFsYmVkby5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgLy8gVGhlIHRpbGUgaXMgYXV0aG9yZWQgYXQgZXhhY3RseSBpdHMgb3duIGZvb3RwcmludCwgc28gaXQgbmV2ZXIgcmVwZWF0c1xuICAgIC8vIHdpdGhpbiBpdHNlbGYuIFJlcGVhdCB3cmFwcGluZyBpcyBzdGlsbCBjb3JyZWN0OiBhIGxldmVsIGJ1aWxkZXIgdGhhdFxuICAgIC8vIHNjYWxlcyBhIHRpbGUgc2hvdWxkIGdldCBtb3JlIGdyb3VuZCwgbm90IGEgc3RyZXRjaGVkIG9uZS5cbiAgICBhbGJlZG8ud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICBhbGJlZG8ud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICBhbGJlZG8uYW5pc290cm9weSA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQob3B0aW9ucy50ZXh0dXJlQW5pc290cm9weSA/PyA4KSk7XG4gICAgbWF0ZXJpYWwubWFwID0gYWxiZWRvO1xuICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlY2sgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBkZWNrLm5hbWUgPSAnZGVjayc7XG4gIGRlY2sucmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuICAvLyBBIGdyb3VuZCBwbGFuZSBjYXN0aW5nIGEgc2hhZG93IG9udG8gbm90aGluZyBpcyBwdXJlIGNvc3QuXG4gIGRlY2suY2FzdFNoYWRvdyA9IGZhbHNlO1xuICByb290LmFkZChkZWNrKTtcblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgbm9kZXM6IDIsXG4gICAgcGl2b3RzOiBbeyBuYW1lOiAncm9vdCcsIG9iamVjdDogJ3Jvb3QnIH1dLFxuICAgIHNvY2tldHM6IFtdLFxuICAgIGNvbGxpZGVyczogW10sXG4gICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFtdLFxuICB9O1xuXG4gIHJldHVybiByb290O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYmplY3RNb2RlbDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUF3QmhCLFNBQVMsa0JBQ2QsT0FDQSxVQUFrQyxDQUFDLEdBQ3RCO0FBQ2IsUUFBTSxPQUFPLElBQVUsWUFBTTtBQUM3QixPQUFLLE9BQU87QUFFWixRQUFNLFdBQVcsSUFBVSxvQkFBYyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ25ELFdBQVMsUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDO0FBRTdCLFFBQU0sV0FBVyxJQUFVLDJCQUFxQjtBQUFBLElBQzlDLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFHWCxPQUFPO0FBQUEsRUFDVCxDQUFDO0FBS0QsUUFBTSxPQUFPLFFBQVE7QUFDckIsTUFBSSxNQUFNO0FBQ1IsVUFBTSxTQUFTLElBQVUsb0JBQWMsRUFBRSxLQUFLLElBQUksSUFBSSxvQkFBb0IsSUFBSSxFQUFFLElBQUk7QUFDcEYsV0FBTyxhQUFtQjtBQUkxQixXQUFPLFFBQWM7QUFDckIsV0FBTyxRQUFjO0FBQ3JCLFdBQU8sYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sUUFBUSxxQkFBcUIsQ0FBQyxDQUFDO0FBQzFFLGFBQVMsTUFBTTtBQUNmLGFBQVMsY0FBYztBQUFBLEVBQ3pCO0FBRUEsUUFBTSxPQUFPLElBQVUsV0FBSyxVQUFVLFFBQVE7QUFDOUMsT0FBSyxPQUFPO0FBQ1osT0FBSyxnQkFBZ0IsUUFBUSxpQkFBaUI7QUFFOUMsT0FBSyxhQUFhO0FBQ2xCLE9BQUssSUFBSSxJQUFJO0FBRWIsT0FBSyxTQUFTLGdCQUFnQjtBQUFBLElBQzVCLE9BQU87QUFBQSxJQUNQLFFBQVEsQ0FBQyxFQUFFLE1BQU0sUUFBUSxRQUFRLE9BQU8sQ0FBQztBQUFBLElBQ3pDLFNBQVMsQ0FBQztBQUFBLElBQ1YsV0FBVyxDQUFDO0FBQUEsSUFDWixtQkFBbUIsQ0FBQztBQUFBLEVBQ3RCO0FBRUEsU0FBTztBQUNUO0FBRUEsSUFBTyw0QkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
