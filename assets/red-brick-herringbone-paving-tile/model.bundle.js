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

// assets/red-brick-herringbone-paving-tile/src/createObjectModel.ts
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
  root.name = "red-brick-herringbone-paving-tile";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUmVkIEJyaWNrIEhlcnJpbmdib25lIFBhdmluZyBUaWxlIFx1MjAxNCBhIGZsYXQgZ3JvdW5kIHRpbGUuXG4gKlxuICogVHdvIHRyaWFuZ2xlcywgb25lIGdlb21ldHJ5LCBvbmUgbWF0ZXJpYWwuIEV2ZXJ5dGhpbmcgYSBwbGF5ZXIgc2VlcyBvbiB0aGlzXG4gKiBwcm9wIGlzIGluIHRoZSBhbGJlZG86IGV2ZXJ5IHN0b25lLCBqb2ludCwgcnV0IGFuZCBzdGFpbiBpcyBwYWludGVkLCBuZXZlclxuICogYnVpbHQuIE5vdGhpbmcgc3RhbmRzIHByb3VkIG9mIHRoZSBncm91bmQgcGxhbmUsIHdoaWNoIGlzIHRoZSBwb2ludCAtLSBhXG4gKiBncm91bmQgdGlsZSBtdXN0IG5vdCBjYXRjaCBhIHBsYXllcidzIGZlZXQuXG4gKi9cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcCBpcyByZWNvcmRlZCBhcyBhIGJhcmUgZmlsZW5hbWUgYmVjYXVzZSB0aGUgYnVuZGxlIGlzIEVWQUxVQVRFRFxuICAgKiByYXRoZXIgdGhhbiBpbXBvcnRlZDogaXQgaGFzIG5vIGltcG9ydC5tZXRhIGFuZCBubyBjdXJyZW50U2NyaXB0LCBzbyBpdFxuICAgKiBjYW5ub3Qgc2VlIGl0cyBvd24gVVJMLCBhbmQgYSByZWxhdGl2ZSBwYXRoIHdvdWxkIHJlc29sdmUgYWdhaW5zdCB3aGF0ZXZlclxuICAgKiBkb2N1bWVudCBpcyBob3N0aW5nIGl0IGluc3RlYWQuIEJvdGggaG9zdHMgZGVyaXZlIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChcbiAgX3NwZWM/OiB1bmtub3duLFxuICBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30sXG4pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ3JlZC1icmljay1oZXJyaW5nYm9uZS1wYXZpbmctdGlsZSc7XG5cbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg4LCA4LCAxLCAxKTtcbiAgZ2VvbWV0cnkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuXG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICByb3VnaG5lc3M6IDEsXG4gICAgbWV0YWxuZXNzOiAwLFxuICAgIC8vIExlZnQgd2hpdGUgb24gcHVycG9zZTogdGhlIGFsYmVkbyBtYXAgY2FycmllcyB0aGUgY29sb3VyLCBhbmQgdGludGluZyBpdFxuICAgIC8vIHdvdWxkIGZpZ2h0IHRoZSB0b25lIHRoZSBwbGF0ZSB3YXMgZ2VuZXJhdGVkIGF0LlxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgfSk7XG5cbiAgLy8gQmVoaW5kIHRoZSBiYXNlVXJsIGd1YXJkIHNvIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgLS0gcHJvbW90ZSdzIGhlYWRsZXNzXG4gIC8vIGNvbnN0cnVjdGlvbiwgZGVyaXZlLWNvbGxpZGVycywgY2hlY2stY29wbGFuYXIgLS0gY2FuIGJ1aWxkIHRoaXMgZmFjdG9yeSBpbiBhXG4gIC8vIHJ1bnRpbWUgd2l0aCBubyBET00sIHdoZXJlIEltYWdlTG9hZGVyIHRocm93cy5cbiAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZVVybDtcbiAgaWYgKGJhc2UpIHtcbiAgICBjb25zdCBhbGJlZG8gPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQobmV3IFVSTCgnbWFwcy9hbGJlZG8ud2VicCcsIGJhc2UpLmhyZWYpO1xuICAgIGFsYmVkby5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgLy8gVGhlIHRpbGUgaXMgYXV0aG9yZWQgYXQgZXhhY3RseSBpdHMgb3duIGZvb3RwcmludCwgc28gaXQgbmV2ZXIgcmVwZWF0c1xuICAgIC8vIHdpdGhpbiBpdHNlbGYuIFJlcGVhdCB3cmFwcGluZyBpcyBzdGlsbCBjb3JyZWN0OiBhIGxldmVsIGJ1aWxkZXIgdGhhdFxuICAgIC8vIHNjYWxlcyBhIHRpbGUgc2hvdWxkIGdldCBtb3JlIGdyb3VuZCwgbm90IGEgc3RyZXRjaGVkIG9uZS5cbiAgICBhbGJlZG8ud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICBhbGJlZG8ud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICBhbGJlZG8uYW5pc290cm9weSA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQob3B0aW9ucy50ZXh0dXJlQW5pc290cm9weSA/PyA4KSk7XG4gICAgbWF0ZXJpYWwubWFwID0gYWxiZWRvO1xuICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlY2sgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBkZWNrLm5hbWUgPSAnZGVjayc7XG4gIGRlY2sucmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuICAvLyBBIGdyb3VuZCBwbGFuZSBjYXN0aW5nIGEgc2hhZG93IG9udG8gbm90aGluZyBpcyBwdXJlIGNvc3QuXG4gIGRlY2suY2FzdFNoYWRvdyA9IGZhbHNlO1xuICByb290LmFkZChkZWNrKTtcblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgbm9kZXM6IDIsXG4gICAgcGl2b3RzOiBbeyBuYW1lOiAncm9vdCcsIG9iamVjdDogJ3Jvb3QnIH1dLFxuICAgIHNvY2tldHM6IFtdLFxuICAgIGNvbGxpZGVyczogW10sXG4gICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFtdLFxuICB9O1xuXG4gIHJldHVybiByb290O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYmplY3RNb2RlbDtcblxuLyoqXG4gKiBUaGUgb25lLWFyZ3VtZW50IGVudHJ5IHBvaW50OiB2aWJlM2QncyBjb250cmFjdCwgYW5kIGltZzJ0aHJlZWpzJ3Mgb3duLlxuICpcbiAqIGBjcmVhdGVPYmplY3RNb2RlbGAgYWJvdmUga2VlcHMgdGhhaWtpdCdzIGhpc3RvcmljYWwgKHNwZWMsIG9wdGlvbnMpIHNoYXBlIHNvXG4gKiB0aGUgaGFybmVzcywgdGhlIGxldmVsIGVkaXRvciBhbmQgdGhlIE5vZGUtc2lkZSBnYXRlcyBjYXJyeSBvbiB1bmNoYW5nZWQuXG4gKiBgc3BlY2AgaGFzIG5ldmVyIGJlZW4gcGFzc2VkIGJ5IGFueSBjYWxsZXIgLS0gaXQgaXMgaW5zcGVjdGlvbiBkYXRhIHRoYXQgaXNcbiAqIGFscmVhZHkgYmFrZWQgaW50byB0aGlzIG1vZHVsZSAtLSBzbyB0aGlzIGlzIHRoZSBob25lc3Qgc2lnbmF0dXJlLCBhbmQgaXQgaXNcbiAqIHdoYXQgYSB2aWJlM2QgY29uc3VtZXIgaW5zdGFsbHMgYW5kIGNhbGxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICByZXR1cm4gY3JlYXRlT2JqZWN0TW9kZWwodW5kZWZpbmVkLCBvcHRpb25zKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXdCaEIsU0FBUyxrQkFDZCxPQUNBLFVBQWtDLENBQUMsR0FDdEI7QUFDYixRQUFNLE9BQU8sSUFBVSxZQUFNO0FBQzdCLE9BQUssT0FBTztBQUVaLFFBQU0sV0FBVyxJQUFVLG9CQUFjLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkQsV0FBUyxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUM7QUFFN0IsUUFBTSxXQUFXLElBQVUsMkJBQXFCO0FBQUEsSUFDOUMsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBO0FBQUE7QUFBQSxJQUdYLE9BQU87QUFBQSxFQUNULENBQUM7QUFLRCxRQUFNLE9BQU8sUUFBUTtBQUNyQixNQUFJLE1BQU07QUFDUixVQUFNLFNBQVMsSUFBVSxvQkFBYyxFQUFFLEtBQUssSUFBSSxJQUFJLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtBQUNwRixXQUFPLGFBQW1CO0FBSTFCLFdBQU8sUUFBYztBQUNyQixXQUFPLFFBQWM7QUFDckIsV0FBTyxhQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxRQUFRLHFCQUFxQixDQUFDLENBQUM7QUFDMUUsYUFBUyxNQUFNO0FBQ2YsYUFBUyxjQUFjO0FBQUEsRUFDekI7QUFFQSxRQUFNLE9BQU8sSUFBVSxXQUFLLFVBQVUsUUFBUTtBQUM5QyxPQUFLLE9BQU87QUFDWixPQUFLLGdCQUFnQixRQUFRLGlCQUFpQjtBQUU5QyxPQUFLLGFBQWE7QUFDbEIsT0FBSyxJQUFJLElBQUk7QUFFYixPQUFLLFNBQVMsZ0JBQWdCO0FBQUEsSUFDNUIsT0FBTztBQUFBLElBQ1AsUUFBUSxDQUFDLEVBQUUsTUFBTSxRQUFRLFFBQVEsT0FBTyxDQUFDO0FBQUEsSUFDekMsU0FBUyxDQUFDO0FBQUEsSUFDVixXQUFXLENBQUM7QUFBQSxJQUNaLG1CQUFtQixDQUFDO0FBQUEsRUFDdEI7QUFFQSxTQUFPO0FBQ1Q7QUFFQSxJQUFPLDRCQUFRO0FBV1IsU0FBUyxZQUFZLFVBQWtDLENBQUMsR0FBZ0I7QUFDN0UsU0FBTyxrQkFBa0IsUUFBVyxPQUFPO0FBQzdDOyIsCiAgIm5hbWVzIjogW10KfQo=
