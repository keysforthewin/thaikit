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

// scratch/road-crosswalk-tile/src/createObjectModel.ts
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
  root.name = "road-crosswalk-tile";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUm9hZCBDcm9zc3dhbGsgVGlsZSBcdTIwMTQgYSBmbGF0IHN0cmVldCB0aWxlLlxuICpcbiAqIFR3byB0cmlhbmdsZXMsIG9uZSBnZW9tZXRyeSwgb25lIG1hdGVyaWFsLiBFdmVyeXRoaW5nIGEgcGxheWVyIHNlZXMgb24gdGhpc1xuICogcHJvcCBpcyBpbiB0aGUgbWFwczogdGhlIGNhcnJpYWdld2F5LCB0aGUgc2lkZXdhbGsgYmFuZHMsIHRoZSBwYWludCwgdGhlIHNsYWJcbiAqIGNvdXJzaW5nIGFuZCB0aGUgZHJhaW4gbGlkcyBhcmUgcGFpbnRlZCwgbmV2ZXIgYnVpbHQuIE5vdGhpbmcgc3RhbmRzIHByb3VkIG9mXG4gKiB0aGUgZ3JvdW5kIHBsYW5lLCB3aGljaCBpcyB0aGUgcG9pbnQgLS0gYSByb2FkIHRpbGUgbXVzdCBub3QgY2F0Y2ggYSBwbGF5ZXInc1xuICogZmVldCwgYW5kIHRoZXJlIGlzIG5vIGtlcmIgaGVyZSB0byBzdGVwIHVwIG9udG8uXG4gKi9cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcHMgYXJlIHJlY29yZGVkIGFzIGJhcmUgZmlsZW5hbWVzIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTCwgYW5kIGEgcmVsYXRpdmUgcGF0aCB3b3VsZCByZXNvbHZlIGFnYWluc3Qgd2hhdGV2ZXJcbiAgICogZG9jdW1lbnQgaXMgaG9zdGluZyBpdCBpbnN0ZWFkLiBCb3RoIGhvc3RzIGRlcml2ZSB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG59O1xuXG5jb25zdCBNQVBTID0gW1wiYWxiZWRvXCIsXCJyb3VnaG5lc3NcIixcIm5vcm1hbFwiLFwiYW9cIl0gYXMgY29uc3Q7XG5cbmZ1bmN0aW9uIGxvYWRNYXAoXG4gIGJhc2U6IHN0cmluZyxcbiAgZmlsZTogc3RyaW5nLFxuICBjb2xvclNwYWNlOiBUSFJFRS5Db2xvclNwYWNlLFxuICBhbmlzb3Ryb3B5OiBudW1iZXIsXG4pOiBUSFJFRS5UZXh0dXJlIHtcbiAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChuZXcgVVJMKGZpbGUsIGJhc2UpLmhyZWYpO1xuICB0ZXh0dXJlLmNvbG9yU3BhY2UgPSBjb2xvclNwYWNlO1xuICAvLyBUaGUgdGlsZSBpcyBhdXRob3JlZCBhdCBleGFjdGx5IGl0cyBvd24gZm9vdHByaW50LCBzbyBpdCBuZXZlciByZXBlYXRzXG4gIC8vIHdpdGhpbiBpdHNlbGYuIFJlcGVhdCB3cmFwcGluZyBpcyBzdGlsbCBjb3JyZWN0OiBhIGxldmVsIGJ1aWxkZXIgdGhhdCBzY2FsZXNcbiAgLy8gYSB0aWxlIHNob3VsZCBnZXQgbW9yZSByb2FkLCBub3QgYSBzdHJldGNoZWQgb25lLlxuICB0ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4dHVyZS5hbmlzb3Ryb3B5ID0gYW5pc290cm9weTtcbiAgcmV0dXJuIHRleHR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChcbiAgX3NwZWM/OiB1bmtub3duLFxuICBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30sXG4pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ3JvYWQtY3Jvc3N3YWxrLXRpbGUnO1xuXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoOCwgOCwgMSwgMSk7XG4gIGdlb21ldHJ5LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgLy8gYW9NYXAgcmVhZHMgdGhlIFNFQ09ORCB1diBzZXQuIEEgUGxhbmVHZW9tZXRyeSBvbmx5IGhhcyBvbmUsIHNvIHdpdGhvdXQgdGhpc1xuICAvLyB0aGUgYW1iaWVudCBvY2NsdXNpb24gaXMgc2lsZW50bHkgaWdub3JlZCBhbmQgdGhlIGRyYWluIGNoYW5uZWxzIGFuZCBzbGFiXG4gIC8vIGpvaW50cyBsb3NlIHRoZSBvbmx5IHNoYWRpbmcgdGhhdCBtYWtlcyB0aGVtIHJlYWQgYXMgcmVjZXNzZWQuXG4gIGNvbnN0IHV2ID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCd1dicpO1xuICBpZiAodXYpIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgndXYxJywgdXYpO1xuXG4gIGNvbnN0IGFuaXNvdHJvcHkgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKG9wdGlvbnMudGV4dHVyZUFuaXNvdHJvcHkgPz8gOCkpO1xuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgcm91Z2huZXNzOiAxLFxuICAgIG1ldGFsbmVzczogMCxcbiAgICAvLyBMZWZ0IHdoaXRlIG9uIHB1cnBvc2U6IHRoZSBhbGJlZG8gbWFwIGNhcnJpZXMgdGhlIGNvbG91ciwgYW5kIHRpbnRpbmcgaXRcbiAgICAvLyB3b3VsZCBmaWdodCB0aGUgdG9uZSB0aGF0IHdhcyBtZWFzdXJlZCBvZmYgdGhlIHJlZmVyZW5jZSBwbGF0ZS5cbiAgICBjb2xvcjogMHhmZmZmZmYsXG4gIH0pO1xuXG4gIGNvbnN0IGJhc2UgPSBvcHRpb25zLmJhc2VVcmw7XG4gIGlmIChiYXNlKSB7XG4gICAgbWF0ZXJpYWwubWFwID0gbG9hZE1hcChiYXNlLCAnbWFwcy9hbGJlZG8ud2VicCcsIFRIUkVFLlNSR0JDb2xvclNwYWNlLCBhbmlzb3Ryb3B5KTtcbiAgICBtYXRlcmlhbC5yb3VnaG5lc3NNYXAgPSBsb2FkTWFwKGJhc2UsICdtYXBzL3JvdWdobmVzcy53ZWJwJywgVEhSRUUuTm9Db2xvclNwYWNlLCBhbmlzb3Ryb3B5KTtcbiAgICBtYXRlcmlhbC5ub3JtYWxNYXAgPSBsb2FkTWFwKGJhc2UsICdtYXBzL25vcm1hbC53ZWJwJywgVEhSRUUuTm9Db2xvclNwYWNlLCBhbmlzb3Ryb3B5KTtcbiAgICBtYXRlcmlhbC5hb01hcCA9IGxvYWRNYXAoYmFzZSwgJ21hcHMvYW8ud2VicCcsIFRIUkVFLk5vQ29sb3JTcGFjZSwgYW5pc290cm9weSk7XG4gICAgbWF0ZXJpYWwuYW9NYXBJbnRlbnNpdHkgPSAwLjg1O1xuICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlY2sgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBkZWNrLm5hbWUgPSAnZGVjayc7XG4gIGRlY2sucmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuICAvLyBBIGdyb3VuZCBwbGFuZSBjYXN0aW5nIGEgc2hhZG93IG9udG8gbm90aGluZyBpcyBwdXJlIGNvc3QuXG4gIGRlY2suY2FzdFNoYWRvdyA9IGZhbHNlO1xuICByb290LmFkZChkZWNrKTtcblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgbm9kZXM6IDIsXG4gICAgcGl2b3RzOiBbeyBuYW1lOiAncm9vdCcsIG9iamVjdDogJ3Jvb3QnIH1dLFxuICAgIHNvY2tldHM6IFtdLFxuICAgIGNvbGxpZGVyczogW3sgbmFtZTogJ2RlY2snLCBzaGFwZTogJ2JveCcgfV0sXG4gICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFtdLFxuICB9O1xuXG4gIHJldHVybiByb290O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYmplY3RNb2RlbDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUEyQnZCLFNBQVMsUUFDUCxNQUNBLE1BQ0EsWUFDQSxZQUNlO0FBQ2YsUUFBTSxVQUFVLElBQVUsb0JBQWMsRUFBRSxLQUFLLElBQUksSUFBSSxNQUFNLElBQUksRUFBRSxJQUFJO0FBQ3ZFLFVBQVEsYUFBYTtBQUlyQixVQUFRLFFBQWM7QUFDdEIsVUFBUSxRQUFjO0FBQ3RCLFVBQVEsYUFBYTtBQUNyQixTQUFPO0FBQ1Q7QUFFTyxTQUFTLGtCQUNkLE9BQ0EsVUFBa0MsQ0FBQyxHQUN0QjtBQUNiLFFBQU0sT0FBTyxJQUFVLFlBQU07QUFDN0IsT0FBSyxPQUFPO0FBRVosUUFBTSxXQUFXLElBQVUsb0JBQWMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuRCxXQUFTLFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQztBQUk3QixRQUFNLEtBQUssU0FBUyxhQUFhLElBQUk7QUFDckMsTUFBSSxHQUFJLFVBQVMsYUFBYSxPQUFPLEVBQUU7QUFFdkMsUUFBTSxhQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxRQUFRLHFCQUFxQixDQUFDLENBQUM7QUFDekUsUUFBTSxXQUFXLElBQVUsMkJBQXFCO0FBQUEsSUFDOUMsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBO0FBQUE7QUFBQSxJQUdYLE9BQU87QUFBQSxFQUNULENBQUM7QUFFRCxRQUFNLE9BQU8sUUFBUTtBQUNyQixNQUFJLE1BQU07QUFDUixhQUFTLE1BQU0sUUFBUSxNQUFNLG9CQUEwQixzQkFBZ0IsVUFBVTtBQUNqRixhQUFTLGVBQWUsUUFBUSxNQUFNLHVCQUE2QixvQkFBYyxVQUFVO0FBQzNGLGFBQVMsWUFBWSxRQUFRLE1BQU0sb0JBQTBCLG9CQUFjLFVBQVU7QUFDckYsYUFBUyxRQUFRLFFBQVEsTUFBTSxnQkFBc0Isb0JBQWMsVUFBVTtBQUM3RSxhQUFTLGlCQUFpQjtBQUMxQixhQUFTLGNBQWM7QUFBQSxFQUN6QjtBQUVBLFFBQU0sT0FBTyxJQUFVLFdBQUssVUFBVSxRQUFRO0FBQzlDLE9BQUssT0FBTztBQUNaLE9BQUssZ0JBQWdCLFFBQVEsaUJBQWlCO0FBRTlDLE9BQUssYUFBYTtBQUNsQixPQUFLLElBQUksSUFBSTtBQUViLE9BQUssU0FBUyxnQkFBZ0I7QUFBQSxJQUM1QixPQUFPO0FBQUEsSUFDUCxRQUFRLENBQUMsRUFBRSxNQUFNLFFBQVEsUUFBUSxPQUFPLENBQUM7QUFBQSxJQUN6QyxTQUFTLENBQUM7QUFBQSxJQUNWLFdBQVcsQ0FBQyxFQUFFLE1BQU0sUUFBUSxPQUFPLE1BQU0sQ0FBQztBQUFBLElBQzFDLG1CQUFtQixDQUFDO0FBQUEsRUFDdEI7QUFFQSxTQUFPO0FBQ1Q7QUFFQSxJQUFPLDRCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
