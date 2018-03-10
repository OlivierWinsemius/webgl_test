import { create } from 'gl-matrix/src/gl-matrix/vec3';

(function() {
    Promise.all([
            import('gl-matrix'),
            import('./webgl/webgl-loader.js'),
            import('./webgl/attributes'),
            import('./webgl/uniforms'),
            import('./App.js')
        ])
    .then(([
            { mat4 },
            { createShader, createProgram, createBuffers },
            getAttributes,
            getUniforms,
            App
        ]) => {
            global.mat4 = mat4;
            
            const canvas         = document.getElementById('canvas');
            const gl             = canvas.getContext('webgl');
            const vertexShader   = createShader(gl, gl.VERTEX_SHADER, require('../shaders/vertex.glsl'));
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, require('../shaders/fragment.glsl'));
            
            const program     = createProgram(gl, vertexShader, fragmentShader);
            const buffers     = createBuffers(gl);
            const attributes  = getAttributes(gl, program);
            const uniforms    = getUniforms(gl, program);
            const programInfo = { program, buffers, attributes, uniforms };
            new App(gl, programInfo);
        });
})();

if(module.hot) {
    module.hot.accept();
}