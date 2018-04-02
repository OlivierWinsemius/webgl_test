import createShader from './createShader';
import createProgram from './createProgram';

import SolidShader from './solid/solidShader';
import TextureShader from './texture/textureShader';

export default () => ({
    Solid: () => new SolidShader(createProgram, createShader),
    Texture: () => new TextureShader(createProgram, createShader),
});
