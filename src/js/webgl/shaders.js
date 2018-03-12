const createShader  = require('./shaders/createShader')
const createProgram = require('./shaders/createProgram')

module.exports = function getShaders() {
        const solidShader = require('./shaders/solidShader/shader')(createProgram, createShader)

        return {
            solid: solidShader
        }
    }