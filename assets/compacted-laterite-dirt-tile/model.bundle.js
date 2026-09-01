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

// ../repo/scratch/compacted-laterite-dirt-tile/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  default: () => createObjectModel_default
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
function createObjectModel(_spec, options = {}) {
  const root = new THREE.Group();
  root.name = "compacted-laterite-dirt-tile";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQ29tcGFjdGVkIExhdGVyaXRlIERpcnQgVGlsZSBcdTIwMTQgYSBmbGF0IGdyb3VuZCB0aWxlLlxuICpcbiAqIFR3byB0cmlhbmdsZXMsIG9uZSBnZW9tZXRyeSwgb25lIG1hdGVyaWFsLiBFdmVyeXRoaW5nIGEgcGxheWVyIHNlZXMgb24gdGhpc1xuICogcHJvcCBpcyBpbiB0aGUgYWxiZWRvOiBldmVyeSBzdG9uZSwgam9pbnQsIHJ1dCBhbmQgc3RhaW4gaXMgcGFpbnRlZCwgbmV2ZXJcbiAqIGJ1aWx0LiBOb3RoaW5nIHN0YW5kcyBwcm91ZCBvZiB0aGUgZ3JvdW5kIHBsYW5lLCB3aGljaCBpcyB0aGUgcG9pbnQgLS0gYVxuICogZ3JvdW5kIHRpbGUgbXVzdCBub3QgY2F0Y2ggYSBwbGF5ZXIncyBmZWV0LlxuICovXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXAgaXMgcmVjb3JkZWQgYXMgYSBiYXJlIGZpbGVuYW1lIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTCwgYW5kIGEgcmVsYXRpdmUgcGF0aCB3b3VsZCByZXNvbHZlIGFnYWluc3Qgd2hhdGV2ZXJcbiAgICogZG9jdW1lbnQgaXMgaG9zdGluZyBpdCBpbnN0ZWFkLiBCb3RoIGhvc3RzIGRlcml2ZSB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoXG4gIF9zcGVjPzogdW5rbm93bixcbiAgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9LFxuKTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdjb21wYWN0ZWQtbGF0ZXJpdGUtZGlydC10aWxlJztcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDgsIDgsIDEsIDEpO1xuICBnZW9tZXRyeS5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG5cbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgIHJvdWdobmVzczogMSxcbiAgICBtZXRhbG5lc3M6IDAsXG4gICAgLy8gTGVmdCB3aGl0ZSBvbiBwdXJwb3NlOiB0aGUgYWxiZWRvIG1hcCBjYXJyaWVzIHRoZSBjb2xvdXIsIGFuZCB0aW50aW5nIGl0XG4gICAgLy8gd291bGQgZmlnaHQgdGhlIHRvbmUgdGhlIHBsYXRlIHdhcyBnZW5lcmF0ZWQgYXQuXG4gICAgY29sb3I6IDB4ZmZmZmZmLFxuICB9KTtcblxuICAvLyBCZWhpbmQgdGhlIGJhc2VVcmwgZ3VhcmQgc28gdGhlIE5vZGUtc2lkZSBnYXRlcyAtLSBwcm9tb3RlJ3MgaGVhZGxlc3NcbiAgLy8gY29uc3RydWN0aW9uLCBkZXJpdmUtY29sbGlkZXJzLCBjaGVjay1jb3BsYW5hciAtLSBjYW4gYnVpbGQgdGhpcyBmYWN0b3J5IGluIGFcbiAgLy8gcnVudGltZSB3aXRoIG5vIERPTSwgd2hlcmUgSW1hZ2VMb2FkZXIgdGhyb3dzLlxuICBjb25zdCBiYXNlID0gb3B0aW9ucy5iYXNlVXJsO1xuICBpZiAoYmFzZSkge1xuICAgIGNvbnN0IGFsYmVkbyA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChuZXcgVVJMKCdtYXBzL2FsYmVkby53ZWJwJywgYmFzZSkuaHJlZik7XG4gICAgYWxiZWRvLmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgICAvLyBUaGUgdGlsZSBpcyBhdXRob3JlZCBhdCBleGFjdGx5IGl0cyBvd24gZm9vdHByaW50LCBzbyBpdCBuZXZlciByZXBlYXRzXG4gICAgLy8gd2l0aGluIGl0c2VsZi4gUmVwZWF0IHdyYXBwaW5nIGlzIHN0aWxsIGNvcnJlY3Q6IGEgbGV2ZWwgYnVpbGRlciB0aGF0XG4gICAgLy8gc2NhbGVzIGEgdGlsZSBzaG91bGQgZ2V0IG1vcmUgZ3JvdW5kLCBub3QgYSBzdHJldGNoZWQgb25lLlxuICAgIGFsYmVkby53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICAgIGFsYmVkby53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICAgIGFsYmVkby5hbmlzb3Ryb3B5ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDgpKTtcbiAgICBtYXRlcmlhbC5tYXAgPSBhbGJlZG87XG4gICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgZGVjayA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gIGRlY2submFtZSA9ICdkZWNrJztcbiAgZGVjay5yZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG4gIC8vIEEgZ3JvdW5kIHBsYW5lIGNhc3RpbmcgYSBzaGFkb3cgb250byBub3RoaW5nIGlzIHB1cmUgY29zdC5cbiAgZGVjay5jYXN0U2hhZG93ID0gZmFsc2U7XG4gIHJvb3QuYWRkKGRlY2spO1xuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICBub2RlczogMixcbiAgICBwaXZvdHM6IFt7IG5hbWU6ICdyb290Jywgb2JqZWN0OiAncm9vdCcgfV0sXG4gICAgc29ja2V0czogW10sXG4gICAgY29sbGlkZXJzOiBbXSxcbiAgICBkZXN0cnVjdGlvbkdyb3VwczogW10sXG4gIH07XG5cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9iamVjdE1vZGVsO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXdCaEIsU0FBUyxrQkFDZCxPQUNBLFVBQWtDLENBQUMsR0FDdEI7QUFDYixRQUFNLE9BQU8sSUFBVSxZQUFNO0FBQzdCLE9BQUssT0FBTztBQUVaLFFBQU0sV0FBVyxJQUFVLG9CQUFjLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkQsV0FBUyxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUM7QUFFN0IsUUFBTSxXQUFXLElBQVUsMkJBQXFCO0FBQUEsSUFDOUMsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBO0FBQUE7QUFBQSxJQUdYLE9BQU87QUFBQSxFQUNULENBQUM7QUFLRCxRQUFNLE9BQU8sUUFBUTtBQUNyQixNQUFJLE1BQU07QUFDUixVQUFNLFNBQVMsSUFBVSxvQkFBYyxFQUFFLEtBQUssSUFBSSxJQUFJLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtBQUNwRixXQUFPLGFBQW1CO0FBSTFCLFdBQU8sUUFBYztBQUNyQixXQUFPLFFBQWM7QUFDckIsV0FBTyxhQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxRQUFRLHFCQUFxQixDQUFDLENBQUM7QUFDMUUsYUFBUyxNQUFNO0FBQ2YsYUFBUyxjQUFjO0FBQUEsRUFDekI7QUFFQSxRQUFNLE9BQU8sSUFBVSxXQUFLLFVBQVUsUUFBUTtBQUM5QyxPQUFLLE9BQU87QUFDWixPQUFLLGdCQUFnQixRQUFRLGlCQUFpQjtBQUU5QyxPQUFLLGFBQWE7QUFDbEIsT0FBSyxJQUFJLElBQUk7QUFFYixPQUFLLFNBQVMsZ0JBQWdCO0FBQUEsSUFDNUIsT0FBTztBQUFBLElBQ1AsUUFBUSxDQUFDLEVBQUUsTUFBTSxRQUFRLFFBQVEsT0FBTyxDQUFDO0FBQUEsSUFDekMsU0FBUyxDQUFDO0FBQUEsSUFDVixXQUFXLENBQUM7QUFBQSxJQUNaLG1CQUFtQixDQUFDO0FBQUEsRUFDdEI7QUFFQSxTQUFPO0FBQ1Q7QUFFQSxJQUFPLDRCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
