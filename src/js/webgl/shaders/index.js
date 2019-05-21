import { Shader } from './createShader';

const textureVertex = require('../../../shaders/texture/vertex.glsl');
const textureFragment = require('../../../shaders/texture/fragment.glsl');
const solidVertex = require('../../../shaders/solid/vertex.glsl');
const solidFragment = require('../../../shaders/solid/fragment.glsl');
// import createProgram from './createProgram';

// import SolidShader from './solid/solidShader';
// import TextureShader from './texture/textureShader';

export default () => ({
    Solid: () => new Shader(
        solidVertex,
        solidFragment,
        {
            position: 'aVertexPosition',
        },
        {
            color: 'uColor',
            modelView: 'uModelViewMatrix',
            projection: 'uProjectionMatrix',
        },
    ),
    Texture: () => new Shader(
        textureVertex,
        textureFragment,
        {
            position: 'aVertexPosition',
            textureCoord: 'aTextureCoord',
        },
        {
            sampler: 'uSampler',
            modelView: 'uModelViewMatrix',
            projection: 'uProjectionMatrix',
        },
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
