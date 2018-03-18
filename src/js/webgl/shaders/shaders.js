import createShader from './createShader';
import createProgram from './createProgram';

import solidShader from './solid/solidShader';
import textureShader from './texture/textureShader';

export default () => ({
    solid: solidShader(createProgram, createShader),
    texture: textureShader(createProgram, createShader),
});
