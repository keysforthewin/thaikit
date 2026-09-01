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

// ../repo/scratch/kerbside-storm-drain-grate/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  default: () => createObjectModel_default
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
function createObjectModel(_spec, options = {}) {
  const root = new THREE.Group();
  root.name = "kerbside-storm-drain-grate";
  const geometry = new THREE.PlaneGeometry(0.45, 0.56, 1, 1);
  geometry.rotateX(-Math.PI / 2);
  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone measured off the plate.
    color: 16777215
  });
  const base = options.baseUrl;
  if (base) {
    const albedo = new THREE.TextureLoader().load(new URL("maps/albedo.webp", base).href);
    albedo.colorSpace = THREE.SRGBColorSpace;
    albedo.wrapS = THREE.ClampToEdgeWrapping;
    albedo.wrapT = THREE.ClampToEdgeWrapping;
    albedo.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = albedo;
    material.needsUpdate = true;
  }
  const deck = new THREE.Mesh(geometry, material);
  deck.name = "deck";
  deck.position.y = 5e-3;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogS2VyYnNpZGUgU3Rvcm0gRHJhaW4gR3JhdGUgXHUyMDE0IGEgZmxhdCBncm91bmQgZGVjYWwuXG4gKlxuICogVHdvIHRyaWFuZ2xlcywgb25lIGdlb21ldHJ5LCBvbmUgbWF0ZXJpYWwuIFRoZSB0b3AgZmFjZSBpcyByZWN0aWZpZWQgb3V0IG9mXG4gKiB0aGUgcmVmZXJlbmNlIHBsYXRlIGFuZCBwYWludGVkOyBub3RoaW5nIGlzIGJ1aWx0LiBJdCBzaXRzIDUgbW0gcHJvdWQgb2ZcbiAqIHRoZSBncm91bmQgc28gaXQgZG9lcyBub3Qgei1maWdodCB0aGUgcm9hZCB0aWxlIGl0IGlzIGRyb3BwZWQgb250by5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgcHJvcCdzIHNoaXBwZWQgZmlsZXMgbGl2ZSwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgKlxuICAgKiBUaGUgbWFwIGlzIHJlY29yZGVkIGFzIGEgYmFyZSBmaWxlbmFtZSBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwsIGFuZCBhIHJlbGF0aXZlIHBhdGggd291bGQgcmVzb2x2ZSBhZ2FpbnN0IHdoYXRldmVyXG4gICAqIGRvY3VtZW50IGlzIGhvc3RpbmcgaXQgaW5zdGVhZC4gQm90aCBob3N0cyBkZXJpdmUgdGhpcyBmcm9tIHRoZSBtb2R1bGUgVVJMLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKFxuICBfc3BlYz86IHVua25vd24sXG4gIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSxcbik6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAna2VyYnNpZGUtc3Rvcm0tZHJhaW4tZ3JhdGUnO1xuXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMC40NSwgMC41NiwgMSwgMSk7XG4gIGdlb21ldHJ5LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgcm91Z2huZXNzOiAxLFxuICAgIG1ldGFsbmVzczogMCxcbiAgICAvLyBMZWZ0IHdoaXRlIG9uIHB1cnBvc2U6IHRoZSBhbGJlZG8gbWFwIGNhcnJpZXMgdGhlIGNvbG91ciwgYW5kIHRpbnRpbmcgaXRcbiAgICAvLyB3b3VsZCBmaWdodCB0aGUgdG9uZSBtZWFzdXJlZCBvZmYgdGhlIHBsYXRlLlxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgfSk7XG5cbiAgLy8gQmVoaW5kIHRoZSBiYXNlVXJsIGd1YXJkIHNvIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgLS0gcHJvbW90ZSdzIGhlYWRsZXNzXG4gIC8vIGNvbnN0cnVjdGlvbiwgZGVyaXZlLWNvbGxpZGVycywgY2hlY2stY29wbGFuYXIgLS0gY2FuIGJ1aWxkIHRoaXMgZmFjdG9yeSBpbiBhXG4gIC8vIHJ1bnRpbWUgd2l0aCBubyBET00sIHdoZXJlIEltYWdlTG9hZGVyIHRocm93cy5cbiAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZVVybDtcbiAgaWYgKGJhc2UpIHtcbiAgICBjb25zdCBhbGJlZG8gPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQobmV3IFVSTCgnbWFwcy9hbGJlZG8ud2VicCcsIGJhc2UpLmhyZWYpO1xuICAgIGFsYmVkby5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgLy8gQ2xhbXBlZCwgbm90IHJlcGVhdGVkOiB0aGlzIGlzIG9uZSBmaXR0aW5nIGF0IGEgZml4ZWQgc2l6ZSwgYW5kIGEgZGVjYWxcbiAgICAvLyB0aGF0IHRpbGVzIHdoZW4gYSBsZXZlbCBidWlsZGVyIHNjYWxlcyBpdCB3b3VsZCByZXBlYXQgdGhlIGNvdmVyLlxuICAgIGFsYmVkby53cmFwUyA9IFRIUkVFLkNsYW1wVG9FZGdlV3JhcHBpbmc7XG4gICAgYWxiZWRvLndyYXBUID0gVEhSRUUuQ2xhbXBUb0VkZ2VXcmFwcGluZztcbiAgICBhbGJlZG8uYW5pc290cm9weSA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQob3B0aW9ucy50ZXh0dXJlQW5pc290cm9weSA/PyA4KSk7XG4gICAgbWF0ZXJpYWwubWFwID0gYWxiZWRvO1xuICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlY2sgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBkZWNrLm5hbWUgPSAnZGVjayc7XG4gIGRlY2sucG9zaXRpb24ueSA9IDAuMDA1O1xuICBkZWNrLnJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcbiAgLy8gQSBmbHVzaCBncm91bmQgZml0dGluZyBjYXN0aW5nIGEgc2hhZG93IG9udG8gdGhlIHJvYWQgaXQgbGllcyBpbiBpcyBwdXJlIGNvc3QuXG4gIGRlY2suY2FzdFNoYWRvdyA9IGZhbHNlO1xuICByb290LmFkZChkZWNrKTtcblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgbm9kZXM6IDIsXG4gICAgcGl2b3RzOiBbeyBuYW1lOiAncm9vdCcsIG9iamVjdDogJ3Jvb3QnIH1dLFxuICAgIHNvY2tldHM6IFtdLFxuICAgIGNvbGxpZGVyczogW10sXG4gICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFtdLFxuICB9O1xuXG4gIHJldHVybiByb290O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYmplY3RNb2RlbDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUF1QmhCLFNBQVMsa0JBQ2QsT0FDQSxVQUFrQyxDQUFDLEdBQ3RCO0FBQ2IsUUFBTSxPQUFPLElBQVUsWUFBTTtBQUM3QixPQUFLLE9BQU87QUFFWixRQUFNLFdBQVcsSUFBVSxvQkFBYyxNQUFNLE1BQU0sR0FBRyxDQUFDO0FBQ3pELFdBQVMsUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDO0FBRTdCLFFBQU0sV0FBVyxJQUFVLDJCQUFxQjtBQUFBLElBQzlDLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFHWCxPQUFPO0FBQUEsRUFDVCxDQUFDO0FBS0QsUUFBTSxPQUFPLFFBQVE7QUFDckIsTUFBSSxNQUFNO0FBQ1IsVUFBTSxTQUFTLElBQVUsb0JBQWMsRUFBRSxLQUFLLElBQUksSUFBSSxvQkFBb0IsSUFBSSxFQUFFLElBQUk7QUFDcEYsV0FBTyxhQUFtQjtBQUcxQixXQUFPLFFBQWM7QUFDckIsV0FBTyxRQUFjO0FBQ3JCLFdBQU8sYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sUUFBUSxxQkFBcUIsQ0FBQyxDQUFDO0FBQzFFLGFBQVMsTUFBTTtBQUNmLGFBQVMsY0FBYztBQUFBLEVBQ3pCO0FBRUEsUUFBTSxPQUFPLElBQVUsV0FBSyxVQUFVLFFBQVE7QUFDOUMsT0FBSyxPQUFPO0FBQ1osT0FBSyxTQUFTLElBQUk7QUFDbEIsT0FBSyxnQkFBZ0IsUUFBUSxpQkFBaUI7QUFFOUMsT0FBSyxhQUFhO0FBQ2xCLE9BQUssSUFBSSxJQUFJO0FBRWIsT0FBSyxTQUFTLGdCQUFnQjtBQUFBLElBQzVCLE9BQU87QUFBQSxJQUNQLFFBQVEsQ0FBQyxFQUFFLE1BQU0sUUFBUSxRQUFRLE9BQU8sQ0FBQztBQUFBLElBQ3pDLFNBQVMsQ0FBQztBQUFBLElBQ1YsV0FBVyxDQUFDO0FBQUEsSUFDWixtQkFBbUIsQ0FBQztBQUFBLEVBQ3RCO0FBRUEsU0FBTztBQUNUO0FBRUEsSUFBTyw0QkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
