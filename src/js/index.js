import { create } from 'gl-matrix/src/gl-matrix/vec3';

(function() {
    Promise.all([
            import('gl-matrix'),
            import('./webgl/program.js'),
            import('./webgl/shader.js'),
            import('./webgl/buffers.js'),
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
            
            const vertexShader   = createShader(gl, gl.VERTEX_SHADER, require('../shaders/vertex.glsl'));
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, require('../shaders/fragment.glsl'));
            const program     = createProgram(gl, vertexShader, fragmentShader);

            const quad = new Quad(-0.25, -0.25, 0.5, 0.5);
            quad.setColor(1.0, 0.0, 1.0);
            const objects = { quad };

            const attributes  = getAttributes(gl, program);
            const uniforms    = getUniforms(gl, program);
            const programInfo = { program, objects, attributes, uniforms };

            gl.useProgram(programInfo.program);
            gl.enableVertexAttribArray(attributes.position);
            gl.bindBuffer(gl.ARRAY_BUFFER, quad.buffers.position);
            gl.vertexAttribPointer(programInfo.attributes.position, 2, gl.FLOAT, false, 0, 0);
            
            gl.enableVertexAttribArray(programInfo.attributes.color);
            gl.bindBuffer(gl.ARRAY_BUFFER, quad.buffers.color);
            gl.vertexAttribPointer(programInfo.attributes.color, 4, gl.FLOAT, false, 0, 0);
            
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