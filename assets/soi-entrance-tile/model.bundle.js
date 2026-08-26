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

// scratch/soi-entrance-tile/src/createObjectModel.ts
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
  root.name = "soi-entrance-tile";
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
  const postGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2.2, 8, 1);
  const postMaterial = new THREE.MeshStandardMaterial({ color: 10132118, roughness: 0.55, metalness: 0.7 });
  const post = new THREE.Mesh(postGeometry, postMaterial);
  post.name = "sign-post";
  post.position.set(0.1, 1.1, 3.35);
  post.castShadow = true;
  root.add(post);
  const boardGeometry = new THREE.BoxGeometry(0.72, 0.3, 0.04);
  const boardMaterial = new THREE.MeshStandardMaterial({ color: 2051983, roughness: 0.35, metalness: 0 });
  const board = new THREE.Mesh(boardGeometry, boardMaterial);
  board.name = "sign-board";
  board.position.set(0.1, 1.9800000000000002, 3.35);
  board.castShadow = true;
  root.add(board);
  root.userData.sculptRuntime = {
    nodes: 4,
    pivots: [{ name: "root", object: "root" }],
    sockets: [],
    colliders: [{ name: "deck", shape: "box" }, { name: "sign-post", shape: "cylinder" }],
    destructionGroups: []
  };
  return root;
}
var createObjectModel_default = createObjectModel;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU29pIEVudHJhbmNlIFRpbGUgXHUyMDE0IGEgZmxhdCBzdHJlZXQgdGlsZS5cbiAqXG4gKiBUd28gdHJpYW5nbGVzLCBvbmUgZ2VvbWV0cnksIG9uZSBtYXRlcmlhbC4gRXZlcnl0aGluZyBhIHBsYXllciBzZWVzIG9uIHRoaXNcbiAqIHByb3AgaXMgaW4gdGhlIG1hcHM6IHRoZSBjYXJyaWFnZXdheSwgdGhlIHNpZGV3YWxrIGJhbmRzLCB0aGUgcGFpbnQsIHRoZSBzbGFiXG4gKiBjb3Vyc2luZyBhbmQgdGhlIGRyYWluIGxpZHMgYXJlIHBhaW50ZWQsIG5ldmVyIGJ1aWx0LiBOb3RoaW5nIHN0YW5kcyBwcm91ZCBvZlxuICogdGhlIGdyb3VuZCBwbGFuZSwgd2hpY2ggaXMgdGhlIHBvaW50IC0tIGEgcm9hZCB0aWxlIG11c3Qgbm90IGNhdGNoIGEgcGxheWVyJ3NcbiAqIGZlZXQsIGFuZCB0aGVyZSBpcyBubyBrZXJiIGhlcmUgdG8gc3RlcCB1cCBvbnRvLlxuICovXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXBzIGFyZSByZWNvcmRlZCBhcyBiYXJlIGZpbGVuYW1lcyBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwsIGFuZCBhIHJlbGF0aXZlIHBhdGggd291bGQgcmVzb2x2ZSBhZ2FpbnN0IHdoYXRldmVyXG4gICAqIGRvY3VtZW50IGlzIGhvc3RpbmcgaXQgaW5zdGVhZC4gQm90aCBob3N0cyBkZXJpdmUgdGhpcyBmcm9tIHRoZSBtb2R1bGUgVVJMLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xufTtcblxuY29uc3QgTUFQUyA9IFtcImFsYmVkb1wiLFwicm91Z2huZXNzXCIsXCJub3JtYWxcIixcImFvXCJdIGFzIGNvbnN0O1xuXG5mdW5jdGlvbiBsb2FkTWFwKFxuICBiYXNlOiBzdHJpbmcsXG4gIGZpbGU6IHN0cmluZyxcbiAgY29sb3JTcGFjZTogVEhSRUUuQ29sb3JTcGFjZSxcbiAgYW5pc290cm9weTogbnVtYmVyLFxuKTogVEhSRUUuVGV4dHVyZSB7XG4gIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQobmV3IFVSTChmaWxlLCBiYXNlKS5ocmVmKTtcbiAgdGV4dHVyZS5jb2xvclNwYWNlID0gY29sb3JTcGFjZTtcbiAgLy8gVGhlIHRpbGUgaXMgYXV0aG9yZWQgYXQgZXhhY3RseSBpdHMgb3duIGZvb3RwcmludCwgc28gaXQgbmV2ZXIgcmVwZWF0c1xuICAvLyB3aXRoaW4gaXRzZWxmLiBSZXBlYXQgd3JhcHBpbmcgaXMgc3RpbGwgY29ycmVjdDogYSBsZXZlbCBidWlsZGVyIHRoYXQgc2NhbGVzXG4gIC8vIGEgdGlsZSBzaG91bGQgZ2V0IG1vcmUgcm9hZCwgbm90IGEgc3RyZXRjaGVkIG9uZS5cbiAgdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICB0ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleHR1cmUuYW5pc290cm9weSA9IGFuaXNvdHJvcHk7XG4gIHJldHVybiB0ZXh0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoXG4gIF9zcGVjPzogdW5rbm93bixcbiAgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9LFxuKTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdzb2ktZW50cmFuY2UtdGlsZSc7XG5cbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg4LCA4LCAxLCAxKTtcbiAgZ2VvbWV0cnkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICAvLyBhb01hcCByZWFkcyB0aGUgU0VDT05EIHV2IHNldC4gQSBQbGFuZUdlb21ldHJ5IG9ubHkgaGFzIG9uZSwgc28gd2l0aG91dCB0aGlzXG4gIC8vIHRoZSBhbWJpZW50IG9jY2x1c2lvbiBpcyBzaWxlbnRseSBpZ25vcmVkIGFuZCB0aGUgZHJhaW4gY2hhbm5lbHMgYW5kIHNsYWJcbiAgLy8gam9pbnRzIGxvc2UgdGhlIG9ubHkgc2hhZGluZyB0aGF0IG1ha2VzIHRoZW0gcmVhZCBhcyByZWNlc3NlZC5cbiAgY29uc3QgdXYgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gIGlmICh1dikgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCd1djEnLCB1dik7XG5cbiAgY29uc3QgYW5pc290cm9weSA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQob3B0aW9ucy50ZXh0dXJlQW5pc290cm9weSA/PyA4KSk7XG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICByb3VnaG5lc3M6IDEsXG4gICAgbWV0YWxuZXNzOiAwLFxuICAgIC8vIExlZnQgd2hpdGUgb24gcHVycG9zZTogdGhlIGFsYmVkbyBtYXAgY2FycmllcyB0aGUgY29sb3VyLCBhbmQgdGludGluZyBpdFxuICAgIC8vIHdvdWxkIGZpZ2h0IHRoZSB0b25lIHRoYXQgd2FzIG1lYXN1cmVkIG9mZiB0aGUgcmVmZXJlbmNlIHBsYXRlLlxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgfSk7XG5cbiAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZVVybDtcbiAgaWYgKGJhc2UpIHtcbiAgICBtYXRlcmlhbC5tYXAgPSBsb2FkTWFwKGJhc2UsICdtYXBzL2FsYmVkby53ZWJwJywgVEhSRUUuU1JHQkNvbG9yU3BhY2UsIGFuaXNvdHJvcHkpO1xuICAgIG1hdGVyaWFsLnJvdWdobmVzc01hcCA9IGxvYWRNYXAoYmFzZSwgJ21hcHMvcm91Z2huZXNzLndlYnAnLCBUSFJFRS5Ob0NvbG9yU3BhY2UsIGFuaXNvdHJvcHkpO1xuICAgIG1hdGVyaWFsLm5vcm1hbE1hcCA9IGxvYWRNYXAoYmFzZSwgJ21hcHMvbm9ybWFsLndlYnAnLCBUSFJFRS5Ob0NvbG9yU3BhY2UsIGFuaXNvdHJvcHkpO1xuICAgIG1hdGVyaWFsLmFvTWFwID0gbG9hZE1hcChiYXNlLCAnbWFwcy9hby53ZWJwJywgVEhSRUUuTm9Db2xvclNwYWNlLCBhbmlzb3Ryb3B5KTtcbiAgICBtYXRlcmlhbC5hb01hcEludGVuc2l0eSA9IDAuODU7XG4gICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgZGVjayA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gIGRlY2submFtZSA9ICdkZWNrJztcbiAgZGVjay5yZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG4gIC8vIEEgZ3JvdW5kIHBsYW5lIGNhc3RpbmcgYSBzaGFkb3cgb250byBub3RoaW5nIGlzIHB1cmUgY29zdC5cbiAgZGVjay5jYXN0U2hhZG93ID0gZmFsc2U7XG4gIHJvb3QuYWRkKGRlY2spO1xuXG4gIC8vIFRoZSBzaWduLiBJdCBzdGFuZHMgb24gdGhlIHNpZGV3YWxrIGNvcm5lciBiZXNpZGUgdGhlIGFsbGV5IG1vdXRoLCBjbGVhciBvZlxuICAvLyBib3RoIHRoZSBjYXJyaWFnZXdheSBhbmQgdGhlIGFsbGV5LCBzbyBub3RoaW5nIHBsYWNlZCBvbiBlaXRoZXIgZm91bHMgaXQuXG4gIGNvbnN0IHBvc3RHZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMDMsIDAuMDMsIDIuMiwgOCwgMSk7XG4gIGNvbnN0IHBvc3RNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweDlhOWE5Niwgcm91Z2huZXNzOiAwLjU1LCBtZXRhbG5lc3M6IDAuNyB9KTtcbiAgY29uc3QgcG9zdCA9IG5ldyBUSFJFRS5NZXNoKHBvc3RHZW9tZXRyeSwgcG9zdE1hdGVyaWFsKTtcbiAgcG9zdC5uYW1lID0gJ3NpZ24tcG9zdCc7XG4gIHBvc3QucG9zaXRpb24uc2V0KDAuMSwgMS4xLCAzLjM1KTtcbiAgcG9zdC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgcm9vdC5hZGQocG9zdCk7XG5cbiAgY29uc3QgYm9hcmRHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjcyLCAwLjMsIDAuMDQpO1xuICBjb25zdCBib2FyZE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4MWY0ZjhmLCByb3VnaG5lc3M6IDAuMzUsIG1ldGFsbmVzczogMCB9KTtcbiAgY29uc3QgYm9hcmQgPSBuZXcgVEhSRUUuTWVzaChib2FyZEdlb21ldHJ5LCBib2FyZE1hdGVyaWFsKTtcbiAgYm9hcmQubmFtZSA9ICdzaWduLWJvYXJkJztcbiAgYm9hcmQucG9zaXRpb24uc2V0KDAuMSwgMS45ODAwMDAwMDAwMDAwMDAyLCAzLjM1KTtcbiAgYm9hcmQuY2FzdFNoYWRvdyA9IHRydWU7XG4gIHJvb3QuYWRkKGJvYXJkKTtcblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgbm9kZXM6IDQsXG4gICAgcGl2b3RzOiBbeyBuYW1lOiAncm9vdCcsIG9iamVjdDogJ3Jvb3QnIH1dLFxuICAgIHNvY2tldHM6IFtdLFxuICAgIGNvbGxpZGVyczogW3sgbmFtZTogJ2RlY2snLCBzaGFwZTogJ2JveCcgfSwgeyBuYW1lOiAnc2lnbi1wb3N0Jywgc2hhcGU6ICdjeWxpbmRlcicgfV0sXG4gICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFtdLFxuICB9O1xuXG4gIHJldHVybiByb290O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYmplY3RNb2RlbDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUEyQnZCLFNBQVMsUUFDUCxNQUNBLE1BQ0EsWUFDQSxZQUNlO0FBQ2YsUUFBTSxVQUFVLElBQVUsb0JBQWMsRUFBRSxLQUFLLElBQUksSUFBSSxNQUFNLElBQUksRUFBRSxJQUFJO0FBQ3ZFLFVBQVEsYUFBYTtBQUlyQixVQUFRLFFBQWM7QUFDdEIsVUFBUSxRQUFjO0FBQ3RCLFVBQVEsYUFBYTtBQUNyQixTQUFPO0FBQ1Q7QUFFTyxTQUFTLGtCQUNkLE9BQ0EsVUFBa0MsQ0FBQyxHQUN0QjtBQUNiLFFBQU0sT0FBTyxJQUFVLFlBQU07QUFDN0IsT0FBSyxPQUFPO0FBRVosUUFBTSxXQUFXLElBQVUsb0JBQWMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuRCxXQUFTLFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQztBQUk3QixRQUFNLEtBQUssU0FBUyxhQUFhLElBQUk7QUFDckMsTUFBSSxHQUFJLFVBQVMsYUFBYSxPQUFPLEVBQUU7QUFFdkMsUUFBTSxhQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxRQUFRLHFCQUFxQixDQUFDLENBQUM7QUFDekUsUUFBTSxXQUFXLElBQVUsMkJBQXFCO0FBQUEsSUFDOUMsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBO0FBQUE7QUFBQSxJQUdYLE9BQU87QUFBQSxFQUNULENBQUM7QUFFRCxRQUFNLE9BQU8sUUFBUTtBQUNyQixNQUFJLE1BQU07QUFDUixhQUFTLE1BQU0sUUFBUSxNQUFNLG9CQUEwQixzQkFBZ0IsVUFBVTtBQUNqRixhQUFTLGVBQWUsUUFBUSxNQUFNLHVCQUE2QixvQkFBYyxVQUFVO0FBQzNGLGFBQVMsWUFBWSxRQUFRLE1BQU0sb0JBQTBCLG9CQUFjLFVBQVU7QUFDckYsYUFBUyxRQUFRLFFBQVEsTUFBTSxnQkFBc0Isb0JBQWMsVUFBVTtBQUM3RSxhQUFTLGlCQUFpQjtBQUMxQixhQUFTLGNBQWM7QUFBQSxFQUN6QjtBQUVBLFFBQU0sT0FBTyxJQUFVLFdBQUssVUFBVSxRQUFRO0FBQzlDLE9BQUssT0FBTztBQUNaLE9BQUssZ0JBQWdCLFFBQVEsaUJBQWlCO0FBRTlDLE9BQUssYUFBYTtBQUNsQixPQUFLLElBQUksSUFBSTtBQUliLFFBQU0sZUFBZSxJQUFVLHVCQUFpQixNQUFNLE1BQU0sS0FBSyxHQUFHLENBQUM7QUFDckUsUUFBTSxlQUFlLElBQVUsMkJBQXFCLEVBQUUsT0FBTyxVQUFVLFdBQVcsTUFBTSxXQUFXLElBQUksQ0FBQztBQUN4RyxRQUFNLE9BQU8sSUFBVSxXQUFLLGNBQWMsWUFBWTtBQUN0RCxPQUFLLE9BQU87QUFDWixPQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSTtBQUNoQyxPQUFLLGFBQWE7QUFDbEIsT0FBSyxJQUFJLElBQUk7QUFFYixRQUFNLGdCQUFnQixJQUFVLGtCQUFZLE1BQU0sS0FBSyxJQUFJO0FBQzNELFFBQU0sZ0JBQWdCLElBQVUsMkJBQXFCLEVBQUUsT0FBTyxTQUFVLFdBQVcsTUFBTSxXQUFXLEVBQUUsQ0FBQztBQUN2RyxRQUFNLFFBQVEsSUFBVSxXQUFLLGVBQWUsYUFBYTtBQUN6RCxRQUFNLE9BQU87QUFDYixRQUFNLFNBQVMsSUFBSSxLQUFLLG9CQUFvQixJQUFJO0FBQ2hELFFBQU0sYUFBYTtBQUNuQixPQUFLLElBQUksS0FBSztBQUVkLE9BQUssU0FBUyxnQkFBZ0I7QUFBQSxJQUM1QixPQUFPO0FBQUEsSUFDUCxRQUFRLENBQUMsRUFBRSxNQUFNLFFBQVEsUUFBUSxPQUFPLENBQUM7QUFBQSxJQUN6QyxTQUFTLENBQUM7QUFBQSxJQUNWLFdBQVcsQ0FBQyxFQUFFLE1BQU0sUUFBUSxPQUFPLE1BQU0sR0FBRyxFQUFFLE1BQU0sYUFBYSxPQUFPLFdBQVcsQ0FBQztBQUFBLElBQ3BGLG1CQUFtQixDQUFDO0FBQUEsRUFDdEI7QUFFQSxTQUFPO0FBQ1Q7QUFFQSxJQUFPLDRCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
