import { Shader } from './createShader';

const textureVertex = require('../../../shaders/texture/vertex.glsl');
const textureFragment = require('../../../shaders/texture/fragment.glsl');
const solidVertex = require('../../../shaders/solid/vertex.glsl');
const solidFragment = require('../../../shaders/solid/fragment.glsl');

export default () => ({
    Solid: () => new Shader(
        solidVertex,
        solidFragment,
        {},
        { color: 'uColor' },
    ),
    Texture: () => new Shader(
        textureVertex,
        textureFragment,
        { textureCoord: 'aTextureCoord' },
        { sampler: 'uSampler' },
    ),
    Custom: (
        vertex,
        fragment,
        attributes,
        uniforms,
    ) => new Shader(
        vertex,
        fragment,
        attributes,
        uniforms,
    ),
});
