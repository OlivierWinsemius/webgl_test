import createShader from './createShader';
import createProgram from './createProgram';
import solidShader from './solidShader/shader';

export default () => ({
    solid: solidShader(createProgram, createShader),
});
