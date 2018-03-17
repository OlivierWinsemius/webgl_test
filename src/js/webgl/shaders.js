import createShader from './shaders/createShader';
import createProgram from './shaders/createProgram';
import solidShader from './shaders/solidShader/shader';

export default function () {
    return {
        solid: solidShader(createProgram, createShader),
    };
}
