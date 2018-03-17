import createShader from './createShader';
import createProgram from './createProgram';
import solidShader from './solidShader/shader';

export default function () {
    return {
        solid: solidShader(createProgram, createShader),
    };
}
