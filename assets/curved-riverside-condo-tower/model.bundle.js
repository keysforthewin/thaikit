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

// scratch/curved-riverside-condo-tower/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  default: () => createObjectModel_default
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var WIDTH = 93.5;
var HEIGHT = 180;
function createObjectModel(_spec, options = {}) {
  const root = new THREE.Group();
  root.name = "curved-riverside-condo-tower";
  const geometry = new THREE.PlaneGeometry(WIDTH, HEIGHT, 1, 1);
  geometry.translate(0, HEIGHT / 2, 0);
  const material = new THREE.MeshBasicMaterial({
    color: 16777215,
    // Alpha test, not blending: a cut-out needs no sorting against the rest of
    // the skyline and writes depth like the solid it stands in for.
    alphaTest: 0.5,
    side: THREE.DoubleSide,
    fog: true
  });
  const base = options.baseUrl;
  if (base) {
    const texture = new THREE.TextureLoader().load(new URL("maps/albedo.webp", base).href);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = texture;
    material.needsUpdate = true;
  }
  const card = new THREE.Mesh(geometry, material);
  card.name = "card";
  card.castShadow = false;
  card.receiveShadow = false;
  root.add(card);
  if (options.billboard ?? true) {
    const camPos = new THREE.Vector3();
    const selfPos = new THREE.Vector3();
    const parentQuat = new THREE.Quaternion();
    const yawQuat = new THREE.Quaternion();
    const Y = new THREE.Vector3(0, 1, 0);
    card.onBeforeRender = (_renderer, _scene, camera) => {
      camera.getWorldPosition(camPos);
      card.getWorldPosition(selfPos);
      const yaw = Math.atan2(camPos.x - selfPos.x, camPos.z - selfPos.z);
      yawQuat.setFromAxisAngle(Y, yaw);
      if (card.parent) {
        card.parent.getWorldQuaternion(parentQuat).invert();
        yawQuat.premultiply(parentQuat);
      }
      card.quaternion.copy(yawQuat);
      card.updateMatrixWorld(true);
    };
  }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQ3VydmVkIFJpdmVyc2lkZSBDb25kbyBUb3dlciBcdTIwMTQgYSBza3lsaW5lIGltcG9zdGVyLlxuICpcbiAqIE9uZSB1cHJpZ2h0IHF1YWQgY2FycnlpbmcgdGhlIGFzc2V0J3Mgc3RyYWlnaHQtb24gZWxldmF0aW9uIHBsYXRlLCBrZXllZCB0b1xuICogYWxwaGEuIFR3byB0cmlhbmdsZXMsIG9uZSBnZW9tZXRyeSwgb25lIG1hdGVyaWFsLiBJdCBzdGFuZHMgMTgwLjAwMCBtIHRhbGwgYW5kXG4gKiA5My41MDAgbSB3aWRlIChoZWlnaHQgaXMgdGhlIHJlYWwgYnVpbGRpbmcnczsgd2lkdGggZm9sbG93cyB0aGUgcGxhdGUncyBrZXllZFxuICogc2lsaG91ZXR0ZSBzbyB0aGUgdGV4dHVyZSBpcyBuZXZlciBzdHJldGNoZWQpLCBhbmQgaXQgeWF3cyBldmVyeSBmcmFtZSB0b1xuICogZmFjZSB0aGUgY2FtZXJhIHNvIGl0IHJlYWRzIHRoZSBzYW1lIGZyb20gYW55IGRpcmVjdGlvbiBvbiB0aGUgaG9yaXpvbi5cbiAqXG4gKiBVbmxpdCBvbiBwdXJwb3NlOiB0aGUgcGxhdGUgd2FzIHNob3QgYXMgZmxhdCBvdmVyY2FzdCBhbGJlZG8sIGFuZCBhIGxpdCBxdWFkXG4gKiBmYWNpbmcgdGhlIGNhbWVyYSB3b3VsZCBicmlnaHRlbiBhbmQgZGFya2VuIHdpdGggdGhlIHN1bidzIGF6aW11dGggaW4gYSB3YXlcbiAqIGEgcGhvdG9ncmFwaCBvZiBhIGJ1aWxkaW5nIG5ldmVyIGRvZXMuIEl0IHN0aWxsIHRha2VzIHNjZW5lIGZvZywgd2hpY2ggaXNcbiAqIHdoYXQgc2VsbHMgZGlzdGFuY2UuXG4gKi9cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcCBpcyByZWNvcmRlZCBhcyBhIGJhcmUgZmlsZW5hbWUgYmVjYXVzZSB0aGUgYnVuZGxlIGlzIEVWQUxVQVRFRFxuICAgKiByYXRoZXIgdGhhbiBpbXBvcnRlZDogaXQgaGFzIG5vIGltcG9ydC5tZXRhIGFuZCBubyBjdXJyZW50U2NyaXB0LCBzbyBpdFxuICAgKiBjYW5ub3Qgc2VlIGl0cyBvd24gVVJMLiBCb3RoIGhvc3RzIGRlcml2ZSB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuIFdpdGggbm9cbiAgICogYmFzZSAodGhlIE5vZGUtc2lkZSBwcm9iZXMpIHRoZSBxdWFkIHNoaXBzIHVudGV4dHVyZWQgcmF0aGVyIHRoYW4gdGhyb3dpbmcuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgLyoqIFlhdyB0aGUgY2FyZCB0byBmYWNlIHRoZSBjYW1lcmEgZWFjaCBmcmFtZS4gRGVmYXVsdCB0cnVlLiAqL1xuICBiaWxsYm9hcmQ/OiBib29sZWFuO1xufTtcblxuY29uc3QgV0lEVEggPSA5My41MDA7XG5jb25zdCBIRUlHSFQgPSAxODAuMDAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoXG4gIF9zcGVjPzogdW5rbm93bixcbiAgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9LFxuKTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdjdXJ2ZWQtcml2ZXJzaWRlLWNvbmRvLXRvd2VyJztcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KFdJRFRILCBIRUlHSFQsIDEsIDEpO1xuICBnZW9tZXRyeS50cmFuc2xhdGUoMCwgSEVJR0hUIC8gMiwgMCk7XG5cbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAvLyBBbHBoYSB0ZXN0LCBub3QgYmxlbmRpbmc6IGEgY3V0LW91dCBuZWVkcyBubyBzb3J0aW5nIGFnYWluc3QgdGhlIHJlc3Qgb2ZcbiAgICAvLyB0aGUgc2t5bGluZSBhbmQgd3JpdGVzIGRlcHRoIGxpa2UgdGhlIHNvbGlkIGl0IHN0YW5kcyBpbiBmb3IuXG4gICAgYWxwaGFUZXN0OiAwLjUsXG4gICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICBmb2c6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IGJhc2UgPSBvcHRpb25zLmJhc2VVcmw7XG4gIGlmIChiYXNlKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChuZXcgVVJMKFwibWFwcy9hbGJlZG8ud2VicFwiLCBiYXNlKS5ocmVmKTtcbiAgICB0ZXh0dXJlLmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgICB0ZXh0dXJlLndyYXBTID0gVEhSRUUuQ2xhbXBUb0VkZ2VXcmFwcGluZztcbiAgICB0ZXh0dXJlLndyYXBUID0gVEhSRUUuQ2xhbXBUb0VkZ2VXcmFwcGluZztcbiAgICB0ZXh0dXJlLmFuaXNvdHJvcHkgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKG9wdGlvbnMudGV4dHVyZUFuaXNvdHJvcHkgPz8gOCkpO1xuICAgIG1hdGVyaWFsLm1hcCA9IHRleHR1cmU7XG4gICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgY2FyZCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gIGNhcmQubmFtZSA9ICdjYXJkJztcbiAgY2FyZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gIGNhcmQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuICByb290LmFkZChjYXJkKTtcblxuICBpZiAob3B0aW9ucy5iaWxsYm9hcmQgPz8gdHJ1ZSkge1xuICAgIGNvbnN0IGNhbVBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgY29uc3Qgc2VsZlBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgY29uc3QgcGFyZW50UXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgY29uc3QgeWF3UXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgY29uc3QgWSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuICAgIGNhcmQub25CZWZvcmVSZW5kZXIgPSAoX3JlbmRlcmVyLCBfc2NlbmUsIGNhbWVyYSkgPT4ge1xuICAgICAgY2FtZXJhLmdldFdvcmxkUG9zaXRpb24oY2FtUG9zKTtcbiAgICAgIGNhcmQuZ2V0V29ybGRQb3NpdGlvbihzZWxmUG9zKTtcbiAgICAgIGNvbnN0IHlhdyA9IE1hdGguYXRhbjIoY2FtUG9zLnggLSBzZWxmUG9zLngsIGNhbVBvcy56IC0gc2VsZlBvcy56KTtcbiAgICAgIHlhd1F1YXQuc2V0RnJvbUF4aXNBbmdsZShZLCB5YXcpO1xuICAgICAgaWYgKGNhcmQucGFyZW50KSB7XG4gICAgICAgIGNhcmQucGFyZW50LmdldFdvcmxkUXVhdGVybmlvbihwYXJlbnRRdWF0KS5pbnZlcnQoKTtcbiAgICAgICAgeWF3UXVhdC5wcmVtdWx0aXBseShwYXJlbnRRdWF0KTtcbiAgICAgIH1cbiAgICAgIGNhcmQucXVhdGVybmlvbi5jb3B5KHlhd1F1YXQpO1xuICAgICAgLy8gb25CZWZvcmVSZW5kZXIgZmlyZXMgYWZ0ZXIgdGhlIGZyYW1lJ3MgbWF0cml4IHBhc3MsIHNvIHRoZSBuZXcgeWF3IGhhc1xuICAgICAgLy8gdG8gYmUgcHVzaGVkIGludG8gbWF0cml4V29ybGQgYnkgaGFuZCB0byBiZSBkcmF3biB0aGlzIGZyYW1lLlxuICAgICAgY2FyZC51cGRhdGVNYXRyaXhXb3JsZCh0cnVlKTtcbiAgICB9O1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgIG5vZGVzOiAyLFxuICAgIHBpdm90czogW3sgbmFtZTogJ3Jvb3QnLCBvYmplY3Q6ICdyb290JyB9XSxcbiAgICBzb2NrZXRzOiBbXSxcbiAgICBjb2xsaWRlcnM6IFtdLFxuICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbXSxcbiAgfTtcblxuICByZXR1cm4gcm9vdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT2JqZWN0TW9kZWw7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBK0J2QixJQUFNLFFBQVE7QUFDZCxJQUFNLFNBQVM7QUFFUixTQUFTLGtCQUNkLE9BQ0EsVUFBa0MsQ0FBQyxHQUN0QjtBQUNiLFFBQU0sT0FBTyxJQUFVLFlBQU07QUFDN0IsT0FBSyxPQUFPO0FBRVosUUFBTSxXQUFXLElBQVUsb0JBQWMsT0FBTyxRQUFRLEdBQUcsQ0FBQztBQUM1RCxXQUFTLFVBQVUsR0FBRyxTQUFTLEdBQUcsQ0FBQztBQUVuQyxRQUFNLFdBQVcsSUFBVSx3QkFBa0I7QUFBQSxJQUMzQyxPQUFPO0FBQUE7QUFBQTtBQUFBLElBR1AsV0FBVztBQUFBLElBQ1gsTUFBWTtBQUFBLElBQ1osS0FBSztBQUFBLEVBQ1AsQ0FBQztBQUVELFFBQU0sT0FBTyxRQUFRO0FBQ3JCLE1BQUksTUFBTTtBQUNSLFVBQU0sVUFBVSxJQUFVLG9CQUFjLEVBQUUsS0FBSyxJQUFJLElBQUksb0JBQW9CLElBQUksRUFBRSxJQUFJO0FBQ3JGLFlBQVEsYUFBbUI7QUFDM0IsWUFBUSxRQUFjO0FBQ3RCLFlBQVEsUUFBYztBQUN0QixZQUFRLGFBQWEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLFFBQVEscUJBQXFCLENBQUMsQ0FBQztBQUMzRSxhQUFTLE1BQU07QUFDZixhQUFTLGNBQWM7QUFBQSxFQUN6QjtBQUVBLFFBQU0sT0FBTyxJQUFVLFdBQUssVUFBVSxRQUFRO0FBQzlDLE9BQUssT0FBTztBQUNaLE9BQUssYUFBYTtBQUNsQixPQUFLLGdCQUFnQjtBQUNyQixPQUFLLElBQUksSUFBSTtBQUViLE1BQUksUUFBUSxhQUFhLE1BQU07QUFDN0IsVUFBTSxTQUFTLElBQVUsY0FBUTtBQUNqQyxVQUFNLFVBQVUsSUFBVSxjQUFRO0FBQ2xDLFVBQU0sYUFBYSxJQUFVLGlCQUFXO0FBQ3hDLFVBQU0sVUFBVSxJQUFVLGlCQUFXO0FBQ3JDLFVBQU0sSUFBSSxJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUM7QUFDbkMsU0FBSyxpQkFBaUIsQ0FBQyxXQUFXLFFBQVEsV0FBVztBQUNuRCxhQUFPLGlCQUFpQixNQUFNO0FBQzlCLFdBQUssaUJBQWlCLE9BQU87QUFDN0IsWUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUM7QUFDakUsY0FBUSxpQkFBaUIsR0FBRyxHQUFHO0FBQy9CLFVBQUksS0FBSyxRQUFRO0FBQ2YsYUFBSyxPQUFPLG1CQUFtQixVQUFVLEVBQUUsT0FBTztBQUNsRCxnQkFBUSxZQUFZLFVBQVU7QUFBQSxNQUNoQztBQUNBLFdBQUssV0FBVyxLQUFLLE9BQU87QUFHNUIsV0FBSyxrQkFBa0IsSUFBSTtBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUVBLE9BQUssU0FBUyxnQkFBZ0I7QUFBQSxJQUM1QixPQUFPO0FBQUEsSUFDUCxRQUFRLENBQUMsRUFBRSxNQUFNLFFBQVEsUUFBUSxPQUFPLENBQUM7QUFBQSxJQUN6QyxTQUFTLENBQUM7QUFBQSxJQUNWLFdBQVcsQ0FBQztBQUFBLElBQ1osbUJBQW1CLENBQUM7QUFBQSxFQUN0QjtBQUVBLFNBQU87QUFDVDtBQUVBLElBQU8sNEJBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
