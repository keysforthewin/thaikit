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

// scratch/mall-podium-with-twin-towers/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  default: () => createObjectModel_default
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var WIDTH = 200;
var HEIGHT = 150;
function createObjectModel(_spec, options = {}) {
  const root = new THREE.Group();
  root.name = "mall-podium-with-twin-towers";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTWFsbCBQb2RpdW0gd2l0aCBUd2luIFRvd2VycyBcdTIwMTQgYSBza3lsaW5lIGltcG9zdGVyLlxuICpcbiAqIE9uZSB1cHJpZ2h0IHF1YWQgY2FycnlpbmcgdGhlIGFzc2V0J3Mgc3RyYWlnaHQtb24gZWxldmF0aW9uIHBsYXRlLCBrZXllZCB0b1xuICogYWxwaGEuIFR3byB0cmlhbmdsZXMsIG9uZSBnZW9tZXRyeSwgb25lIG1hdGVyaWFsLiBJdCBzdGFuZHMgMTUwLjAwMCBtIHRhbGwgYW5kXG4gKiAyMDAuMDAwIG0gd2lkZSAoaGVpZ2h0IGlzIHRoZSByZWFsIGJ1aWxkaW5nJ3M7IHdpZHRoIGZvbGxvd3MgdGhlIHBsYXRlJ3Mga2V5ZWRcbiAqIHNpbGhvdWV0dGUgc28gdGhlIHRleHR1cmUgaXMgbmV2ZXIgc3RyZXRjaGVkKSwgYW5kIGl0IHlhd3MgZXZlcnkgZnJhbWUgdG9cbiAqIGZhY2UgdGhlIGNhbWVyYSBzbyBpdCByZWFkcyB0aGUgc2FtZSBmcm9tIGFueSBkaXJlY3Rpb24gb24gdGhlIGhvcml6b24uXG4gKlxuICogVW5saXQgb24gcHVycG9zZTogdGhlIHBsYXRlIHdhcyBzaG90IGFzIGZsYXQgb3ZlcmNhc3QgYWxiZWRvLCBhbmQgYSBsaXQgcXVhZFxuICogZmFjaW5nIHRoZSBjYW1lcmEgd291bGQgYnJpZ2h0ZW4gYW5kIGRhcmtlbiB3aXRoIHRoZSBzdW4ncyBhemltdXRoIGluIGEgd2F5XG4gKiBhIHBob3RvZ3JhcGggb2YgYSBidWlsZGluZyBuZXZlciBkb2VzLiBJdCBzdGlsbCB0YWtlcyBzY2VuZSBmb2csIHdoaWNoIGlzXG4gKiB3aGF0IHNlbGxzIGRpc3RhbmNlLlxuICovXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXAgaXMgcmVjb3JkZWQgYXMgYSBiYXJlIGZpbGVuYW1lIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTC4gQm90aCBob3N0cyBkZXJpdmUgdGhpcyBmcm9tIHRoZSBtb2R1bGUgVVJMLiBXaXRoIG5vXG4gICAqIGJhc2UgKHRoZSBOb2RlLXNpZGUgcHJvYmVzKSB0aGUgcXVhZCBzaGlwcyB1bnRleHR1cmVkIHJhdGhlciB0aGFuIHRocm93aW5nLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIC8qKiBZYXcgdGhlIGNhcmQgdG8gZmFjZSB0aGUgY2FtZXJhIGVhY2ggZnJhbWUuIERlZmF1bHQgdHJ1ZS4gKi9cbiAgYmlsbGJvYXJkPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFdJRFRIID0gMjAwLjAwMDtcbmNvbnN0IEhFSUdIVCA9IDE1MC4wMDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChcbiAgX3NwZWM/OiB1bmtub3duLFxuICBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30sXG4pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ21hbGwtcG9kaXVtLXdpdGgtdHdpbi10b3dlcnMnO1xuXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoV0lEVEgsIEhFSUdIVCwgMSwgMSk7XG4gIGdlb21ldHJ5LnRyYW5zbGF0ZSgwLCBIRUlHSFQgLyAyLCAwKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgIC8vIEFscGhhIHRlc3QsIG5vdCBibGVuZGluZzogYSBjdXQtb3V0IG5lZWRzIG5vIHNvcnRpbmcgYWdhaW5zdCB0aGUgcmVzdCBvZlxuICAgIC8vIHRoZSBza3lsaW5lIGFuZCB3cml0ZXMgZGVwdGggbGlrZSB0aGUgc29saWQgaXQgc3RhbmRzIGluIGZvci5cbiAgICBhbHBoYVRlc3Q6IDAuNSxcbiAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgIGZvZzogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZVVybDtcbiAgaWYgKGJhc2UpIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKG5ldyBVUkwoXCJtYXBzL2FsYmVkby53ZWJwXCIsIGJhc2UpLmhyZWYpO1xuICAgIHRleHR1cmUuY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICAgIHRleHR1cmUud3JhcFMgPSBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nO1xuICAgIHRleHR1cmUud3JhcFQgPSBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nO1xuICAgIHRleHR1cmUuYW5pc290cm9weSA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQob3B0aW9ucy50ZXh0dXJlQW5pc290cm9weSA/PyA4KSk7XG4gICAgbWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcbiAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBjYXJkID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgY2FyZC5uYW1lID0gJ2NhcmQnO1xuICBjYXJkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgY2FyZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG4gIHJvb3QuYWRkKGNhcmQpO1xuXG4gIGlmIChvcHRpb25zLmJpbGxib2FyZCA/PyB0cnVlKSB7XG4gICAgY29uc3QgY2FtUG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICBjb25zdCBzZWxmUG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICBjb25zdCBwYXJlbnRRdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICBjb25zdCB5YXdRdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICBjb25zdCBZID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG4gICAgY2FyZC5vbkJlZm9yZVJlbmRlciA9IChfcmVuZGVyZXIsIF9zY2VuZSwgY2FtZXJhKSA9PiB7XG4gICAgICBjYW1lcmEuZ2V0V29ybGRQb3NpdGlvbihjYW1Qb3MpO1xuICAgICAgY2FyZC5nZXRXb3JsZFBvc2l0aW9uKHNlbGZQb3MpO1xuICAgICAgY29uc3QgeWF3ID0gTWF0aC5hdGFuMihjYW1Qb3MueCAtIHNlbGZQb3MueCwgY2FtUG9zLnogLSBzZWxmUG9zLnopO1xuICAgICAgeWF3UXVhdC5zZXRGcm9tQXhpc0FuZ2xlKFksIHlhdyk7XG4gICAgICBpZiAoY2FyZC5wYXJlbnQpIHtcbiAgICAgICAgY2FyZC5wYXJlbnQuZ2V0V29ybGRRdWF0ZXJuaW9uKHBhcmVudFF1YXQpLmludmVydCgpO1xuICAgICAgICB5YXdRdWF0LnByZW11bHRpcGx5KHBhcmVudFF1YXQpO1xuICAgICAgfVxuICAgICAgY2FyZC5xdWF0ZXJuaW9uLmNvcHkoeWF3UXVhdCk7XG4gICAgICAvLyBvbkJlZm9yZVJlbmRlciBmaXJlcyBhZnRlciB0aGUgZnJhbWUncyBtYXRyaXggcGFzcywgc28gdGhlIG5ldyB5YXcgaGFzXG4gICAgICAvLyB0byBiZSBwdXNoZWQgaW50byBtYXRyaXhXb3JsZCBieSBoYW5kIHRvIGJlIGRyYXduIHRoaXMgZnJhbWUuXG4gICAgICBjYXJkLnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpO1xuICAgIH07XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgbm9kZXM6IDIsXG4gICAgcGl2b3RzOiBbeyBuYW1lOiAncm9vdCcsIG9iamVjdDogJ3Jvb3QnIH1dLFxuICAgIHNvY2tldHM6IFtdLFxuICAgIGNvbGxpZGVyczogW10sXG4gICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFtdLFxuICB9O1xuXG4gIHJldHVybiByb290O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYmplY3RNb2RlbDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUErQnZCLElBQU0sUUFBUTtBQUNkLElBQU0sU0FBUztBQUVSLFNBQVMsa0JBQ2QsT0FDQSxVQUFrQyxDQUFDLEdBQ3RCO0FBQ2IsUUFBTSxPQUFPLElBQVUsWUFBTTtBQUM3QixPQUFLLE9BQU87QUFFWixRQUFNLFdBQVcsSUFBVSxvQkFBYyxPQUFPLFFBQVEsR0FBRyxDQUFDO0FBQzVELFdBQVMsVUFBVSxHQUFHLFNBQVMsR0FBRyxDQUFDO0FBRW5DLFFBQU0sV0FBVyxJQUFVLHdCQUFrQjtBQUFBLElBQzNDLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFHUCxXQUFXO0FBQUEsSUFDWCxNQUFZO0FBQUEsSUFDWixLQUFLO0FBQUEsRUFDUCxDQUFDO0FBRUQsUUFBTSxPQUFPLFFBQVE7QUFDckIsTUFBSSxNQUFNO0FBQ1IsVUFBTSxVQUFVLElBQVUsb0JBQWMsRUFBRSxLQUFLLElBQUksSUFBSSxvQkFBb0IsSUFBSSxFQUFFLElBQUk7QUFDckYsWUFBUSxhQUFtQjtBQUMzQixZQUFRLFFBQWM7QUFDdEIsWUFBUSxRQUFjO0FBQ3RCLFlBQVEsYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sUUFBUSxxQkFBcUIsQ0FBQyxDQUFDO0FBQzNFLGFBQVMsTUFBTTtBQUNmLGFBQVMsY0FBYztBQUFBLEVBQ3pCO0FBRUEsUUFBTSxPQUFPLElBQVUsV0FBSyxVQUFVLFFBQVE7QUFDOUMsT0FBSyxPQUFPO0FBQ1osT0FBSyxhQUFhO0FBQ2xCLE9BQUssZ0JBQWdCO0FBQ3JCLE9BQUssSUFBSSxJQUFJO0FBRWIsTUFBSSxRQUFRLGFBQWEsTUFBTTtBQUM3QixVQUFNLFNBQVMsSUFBVSxjQUFRO0FBQ2pDLFVBQU0sVUFBVSxJQUFVLGNBQVE7QUFDbEMsVUFBTSxhQUFhLElBQVUsaUJBQVc7QUFDeEMsVUFBTSxVQUFVLElBQVUsaUJBQVc7QUFDckMsVUFBTSxJQUFJLElBQVUsY0FBUSxHQUFHLEdBQUcsQ0FBQztBQUNuQyxTQUFLLGlCQUFpQixDQUFDLFdBQVcsUUFBUSxXQUFXO0FBQ25ELGFBQU8saUJBQWlCLE1BQU07QUFDOUIsV0FBSyxpQkFBaUIsT0FBTztBQUM3QixZQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEdBQUcsT0FBTyxJQUFJLFFBQVEsQ0FBQztBQUNqRSxjQUFRLGlCQUFpQixHQUFHLEdBQUc7QUFDL0IsVUFBSSxLQUFLLFFBQVE7QUFDZixhQUFLLE9BQU8sbUJBQW1CLFVBQVUsRUFBRSxPQUFPO0FBQ2xELGdCQUFRLFlBQVksVUFBVTtBQUFBLE1BQ2hDO0FBQ0EsV0FBSyxXQUFXLEtBQUssT0FBTztBQUc1QixXQUFLLGtCQUFrQixJQUFJO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBRUEsT0FBSyxTQUFTLGdCQUFnQjtBQUFBLElBQzVCLE9BQU87QUFBQSxJQUNQLFFBQVEsQ0FBQyxFQUFFLE1BQU0sUUFBUSxRQUFRLE9BQU8sQ0FBQztBQUFBLElBQ3pDLFNBQVMsQ0FBQztBQUFBLElBQ1YsV0FBVyxDQUFDO0FBQUEsSUFDWixtQkFBbUIsQ0FBQztBQUFBLEVBQ3RCO0FBRUEsU0FBTztBQUNUO0FBRUEsSUFBTyw0QkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
