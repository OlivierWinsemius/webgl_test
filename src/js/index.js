import { create } from 'gl-matrix/src/gl-matrix/vec3';

(function() {
    Promise.all([
            import('gl-matrix'),
            import('./webgl/program.js'),
            import('./webgl/shader.js'),
            import('./webgl/objects.js'),
            import('./webgl/attributes'),
            import('./webgl/uniforms'),
            import('./App.js')
        ])
    .then(([
            { mat4 },
            createProgram,
            createShader,
            { Quad },
            getAttributes,
            getUniforms,
            App
        ]) => {
            const canvas = document.getElementById('canvas');
            global.mat4  = mat4;
            global.gl    = canvas.getContext('webgl');
            global.Quad  = Quad;
            
            const vertexShader   = createShader(gl, gl.VERTEX_SHADER, require('../shaders/vertex.glsl'));
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, require('../shaders/fragment.glsl'));
            const program        = createProgram(gl, vertexShader, fragmentShader);
            const attributes   = getAttributes(gl, program);
            const uniforms     = getUniforms(gl, program);
            const shaders = { 
                    uniform: { program, attributes, uniforms }
                };

            global.programInfo = { program, shaders };
            
            gl.useProgram(programInfo.program);
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clearDepth(1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);

            new App(programInfo);
        });
})();

if(module.hot) {
    module.hot.accept();
}