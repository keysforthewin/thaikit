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

// scratch/glass-fin-condo-tower/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  default: () => createObjectModel_default
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var WIDTH = 58.8;
var HEIGHT = 150;
function createObjectModel(_spec, options = {}) {
  const root = new THREE.Group();
  root.name = "glass-fin-condo-tower";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogR2xhc3MtRmluIENvbmRvIFRvd2VyIFx1MjAxNCBhIHNreWxpbmUgaW1wb3N0ZXIuXG4gKlxuICogT25lIHVwcmlnaHQgcXVhZCBjYXJyeWluZyB0aGUgYXNzZXQncyBzdHJhaWdodC1vbiBlbGV2YXRpb24gcGxhdGUsIGtleWVkIHRvXG4gKiBhbHBoYS4gVHdvIHRyaWFuZ2xlcywgb25lIGdlb21ldHJ5LCBvbmUgbWF0ZXJpYWwuIEl0IHN0YW5kcyAxNTAuMDAwIG0gdGFsbCBhbmRcbiAqIDU4LjgwMCBtIHdpZGUgKGhlaWdodCBpcyB0aGUgcmVhbCBidWlsZGluZydzOyB3aWR0aCBmb2xsb3dzIHRoZSBwbGF0ZSdzIGtleWVkXG4gKiBzaWxob3VldHRlIHNvIHRoZSB0ZXh0dXJlIGlzIG5ldmVyIHN0cmV0Y2hlZCksIGFuZCBpdCB5YXdzIGV2ZXJ5IGZyYW1lIHRvXG4gKiBmYWNlIHRoZSBjYW1lcmEgc28gaXQgcmVhZHMgdGhlIHNhbWUgZnJvbSBhbnkgZGlyZWN0aW9uIG9uIHRoZSBob3Jpem9uLlxuICpcbiAqIFVubGl0IG9uIHB1cnBvc2U6IHRoZSBwbGF0ZSB3YXMgc2hvdCBhcyBmbGF0IG92ZXJjYXN0IGFsYmVkbywgYW5kIGEgbGl0IHF1YWRcbiAqIGZhY2luZyB0aGUgY2FtZXJhIHdvdWxkIGJyaWdodGVuIGFuZCBkYXJrZW4gd2l0aCB0aGUgc3VuJ3MgYXppbXV0aCBpbiBhIHdheVxuICogYSBwaG90b2dyYXBoIG9mIGEgYnVpbGRpbmcgbmV2ZXIgZG9lcy4gSXQgc3RpbGwgdGFrZXMgc2NlbmUgZm9nLCB3aGljaCBpc1xuICogd2hhdCBzZWxscyBkaXN0YW5jZS5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgcHJvcCdzIHNoaXBwZWQgZmlsZXMgbGl2ZSwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgKlxuICAgKiBUaGUgbWFwIGlzIHJlY29yZGVkIGFzIGEgYmFyZSBmaWxlbmFtZSBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwuIEJvdGggaG9zdHMgZGVyaXZlIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC4gV2l0aCBub1xuICAgKiBiYXNlICh0aGUgTm9kZS1zaWRlIHByb2JlcykgdGhlIHF1YWQgc2hpcHMgdW50ZXh0dXJlZCByYXRoZXIgdGhhbiB0aHJvd2luZy5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICAvKiogWWF3IHRoZSBjYXJkIHRvIGZhY2UgdGhlIGNhbWVyYSBlYWNoIGZyYW1lLiBEZWZhdWx0IHRydWUuICovXG4gIGJpbGxib2FyZD86IGJvb2xlYW47XG59O1xuXG5jb25zdCBXSURUSCA9IDU4LjgwMDtcbmNvbnN0IEhFSUdIVCA9IDE1MC4wMDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChcbiAgX3NwZWM/OiB1bmtub3duLFxuICBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30sXG4pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ2dsYXNzLWZpbi1jb25kby10b3dlcic7XG5cbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShXSURUSCwgSEVJR0hULCAxLCAxKTtcbiAgZ2VvbWV0cnkudHJhbnNsYXRlKDAsIEhFSUdIVCAvIDIsIDApO1xuXG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgLy8gQWxwaGEgdGVzdCwgbm90IGJsZW5kaW5nOiBhIGN1dC1vdXQgbmVlZHMgbm8gc29ydGluZyBhZ2FpbnN0IHRoZSByZXN0IG9mXG4gICAgLy8gdGhlIHNreWxpbmUgYW5kIHdyaXRlcyBkZXB0aCBsaWtlIHRoZSBzb2xpZCBpdCBzdGFuZHMgaW4gZm9yLlxuICAgIGFscGhhVGVzdDogMC41LFxuICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXG4gICAgZm9nOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBiYXNlID0gb3B0aW9ucy5iYXNlVXJsO1xuICBpZiAoYmFzZSkge1xuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQobmV3IFVSTChcIm1hcHMvYWxiZWRvLndlYnBcIiwgYmFzZSkuaHJlZik7XG4gICAgdGV4dHVyZS5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgdGV4dHVyZS53cmFwUyA9IFRIUkVFLkNsYW1wVG9FZGdlV3JhcHBpbmc7XG4gICAgdGV4dHVyZS53cmFwVCA9IFRIUkVFLkNsYW1wVG9FZGdlV3JhcHBpbmc7XG4gICAgdGV4dHVyZS5hbmlzb3Ryb3B5ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDgpKTtcbiAgICBtYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xuICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGNhcmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBjYXJkLm5hbWUgPSAnY2FyZCc7XG4gIGNhcmQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICBjYXJkLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcbiAgcm9vdC5hZGQoY2FyZCk7XG5cbiAgaWYgKG9wdGlvbnMuYmlsbGJvYXJkID8/IHRydWUpIHtcbiAgICBjb25zdCBjYW1Qb3MgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIGNvbnN0IHNlbGZQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIGNvbnN0IHBhcmVudFF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIGNvbnN0IHlhd1F1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIGNvbnN0IFkgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKTtcbiAgICBjYXJkLm9uQmVmb3JlUmVuZGVyID0gKF9yZW5kZXJlciwgX3NjZW5lLCBjYW1lcmEpID0+IHtcbiAgICAgIGNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKGNhbVBvcyk7XG4gICAgICBjYXJkLmdldFdvcmxkUG9zaXRpb24oc2VsZlBvcyk7XG4gICAgICBjb25zdCB5YXcgPSBNYXRoLmF0YW4yKGNhbVBvcy54IC0gc2VsZlBvcy54LCBjYW1Qb3MueiAtIHNlbGZQb3Mueik7XG4gICAgICB5YXdRdWF0LnNldEZyb21BeGlzQW5nbGUoWSwgeWF3KTtcbiAgICAgIGlmIChjYXJkLnBhcmVudCkge1xuICAgICAgICBjYXJkLnBhcmVudC5nZXRXb3JsZFF1YXRlcm5pb24ocGFyZW50UXVhdCkuaW52ZXJ0KCk7XG4gICAgICAgIHlhd1F1YXQucHJlbXVsdGlwbHkocGFyZW50UXVhdCk7XG4gICAgICB9XG4gICAgICBjYXJkLnF1YXRlcm5pb24uY29weSh5YXdRdWF0KTtcbiAgICAgIC8vIG9uQmVmb3JlUmVuZGVyIGZpcmVzIGFmdGVyIHRoZSBmcmFtZSdzIG1hdHJpeCBwYXNzLCBzbyB0aGUgbmV3IHlhdyBoYXNcbiAgICAgIC8vIHRvIGJlIHB1c2hlZCBpbnRvIG1hdHJpeFdvcmxkIGJ5IGhhbmQgdG8gYmUgZHJhd24gdGhpcyBmcmFtZS5cbiAgICAgIGNhcmQudXBkYXRlTWF0cml4V29ybGQodHJ1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICBub2RlczogMixcbiAgICBwaXZvdHM6IFt7IG5hbWU6ICdyb290Jywgb2JqZWN0OiAncm9vdCcgfV0sXG4gICAgc29ja2V0czogW10sXG4gICAgY29sbGlkZXJzOiBbXSxcbiAgICBkZXN0cnVjdGlvbkdyb3VwczogW10sXG4gIH07XG5cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9iamVjdE1vZGVsO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQStCdkIsSUFBTSxRQUFRO0FBQ2QsSUFBTSxTQUFTO0FBRVIsU0FBUyxrQkFDZCxPQUNBLFVBQWtDLENBQUMsR0FDdEI7QUFDYixRQUFNLE9BQU8sSUFBVSxZQUFNO0FBQzdCLE9BQUssT0FBTztBQUVaLFFBQU0sV0FBVyxJQUFVLG9CQUFjLE9BQU8sUUFBUSxHQUFHLENBQUM7QUFDNUQsV0FBUyxVQUFVLEdBQUcsU0FBUyxHQUFHLENBQUM7QUFFbkMsUUFBTSxXQUFXLElBQVUsd0JBQWtCO0FBQUEsSUFDM0MsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUdQLFdBQVc7QUFBQSxJQUNYLE1BQVk7QUFBQSxJQUNaLEtBQUs7QUFBQSxFQUNQLENBQUM7QUFFRCxRQUFNLE9BQU8sUUFBUTtBQUNyQixNQUFJLE1BQU07QUFDUixVQUFNLFVBQVUsSUFBVSxvQkFBYyxFQUFFLEtBQUssSUFBSSxJQUFJLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtBQUNyRixZQUFRLGFBQW1CO0FBQzNCLFlBQVEsUUFBYztBQUN0QixZQUFRLFFBQWM7QUFDdEIsWUFBUSxhQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxRQUFRLHFCQUFxQixDQUFDLENBQUM7QUFDM0UsYUFBUyxNQUFNO0FBQ2YsYUFBUyxjQUFjO0FBQUEsRUFDekI7QUFFQSxRQUFNLE9BQU8sSUFBVSxXQUFLLFVBQVUsUUFBUTtBQUM5QyxPQUFLLE9BQU87QUFDWixPQUFLLGFBQWE7QUFDbEIsT0FBSyxnQkFBZ0I7QUFDckIsT0FBSyxJQUFJLElBQUk7QUFFYixNQUFJLFFBQVEsYUFBYSxNQUFNO0FBQzdCLFVBQU0sU0FBUyxJQUFVLGNBQVE7QUFDakMsVUFBTSxVQUFVLElBQVUsY0FBUTtBQUNsQyxVQUFNLGFBQWEsSUFBVSxpQkFBVztBQUN4QyxVQUFNLFVBQVUsSUFBVSxpQkFBVztBQUNyQyxVQUFNLElBQUksSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ25DLFNBQUssaUJBQWlCLENBQUMsV0FBVyxRQUFRLFdBQVc7QUFDbkQsYUFBTyxpQkFBaUIsTUFBTTtBQUM5QixXQUFLLGlCQUFpQixPQUFPO0FBQzdCLFlBQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDO0FBQ2pFLGNBQVEsaUJBQWlCLEdBQUcsR0FBRztBQUMvQixVQUFJLEtBQUssUUFBUTtBQUNmLGFBQUssT0FBTyxtQkFBbUIsVUFBVSxFQUFFLE9BQU87QUFDbEQsZ0JBQVEsWUFBWSxVQUFVO0FBQUEsTUFDaEM7QUFDQSxXQUFLLFdBQVcsS0FBSyxPQUFPO0FBRzVCLFdBQUssa0JBQWtCLElBQUk7QUFBQSxJQUM3QjtBQUFBLEVBQ0Y7QUFFQSxPQUFLLFNBQVMsZ0JBQWdCO0FBQUEsSUFDNUIsT0FBTztBQUFBLElBQ1AsUUFBUSxDQUFDLEVBQUUsTUFBTSxRQUFRLFFBQVEsT0FBTyxDQUFDO0FBQUEsSUFDekMsU0FBUyxDQUFDO0FBQUEsSUFDVixXQUFXLENBQUM7QUFBQSxJQUNaLG1CQUFtQixDQUFDO0FBQUEsRUFDdEI7QUFFQSxTQUFPO0FBQ1Q7QUFFQSxJQUFPLDRCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
