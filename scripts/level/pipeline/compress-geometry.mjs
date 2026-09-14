import { reorder, quantize } from '@gltf-transform/functions';
import { EXTMeshoptCompression } from '@gltf-transform/extensions';

/** Meshopt's medium route, retaining exact lightmap atlas coordinates.
 * Its default 12-bit UV quantization moves samples by up to a texel on an
 * 8192 atlas and collapses narrow islands into the gutter. Texture UV0 can
 * tolerate that rounding; baked UV1 must still address the texels we baked.
 * Float32 UV1 remains losslessly compressed by EXT_meshopt_compression.
 */
export function compressLevelGeometry({ encoder }) {
  return async (doc) => {
    await doc.transform(
      reorder({ encoder, target: 'size' }),
      quantize({ pattern: /^(?!TEXCOORD_1$).*/, patternTargets: /^(?!TEXCOORD_1$).*/ }),
    );
    doc.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({
      method: EXTMeshoptCompression.EncoderMethod.QUANTIZE,
    });
  };
}
