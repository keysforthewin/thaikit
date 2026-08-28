/**
 * A stand-in for `three/tsl` on a WebGL host.
 *
 * A vibe3d pack written against three/webgpu may import TSL node functions in a
 * shared library file that every model pulls in, while only one model actually
 * builds a node material. Refusing the whole pack for that is the wrong trade,
 * so the shim answers `three/tsl` with a proxy: every property is a callable
 * that returns the same proxy. Module-level `uniform(1)` runs, a node material
 * built from it degrades to the plain material it was assigned onto (core
 * three ignores `.colorNode`), and a model that genuinely needs TSL renders
 * unlit rather than throwing. The install probe records that the stub was
 * touched, so the picker can say so.
 */
export function makeTslStub(onUse) {
  const handler = {
    get(target, prop) {
      if (prop === Symbol.toPrimitive) return () => 0;
      if (prop === 'then') return undefined;
      if (prop === '__esModule') return true;
      if (prop === 'default') return proxy;
      onUse?.(String(prop));
      return proxy;
    },
    apply() { return proxy; },
    construct() { return proxy; },
    has() { return true; },
  };
  const proxy = new Proxy(function tsl() {}, handler);
  return proxy;
}
