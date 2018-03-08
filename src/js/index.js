(function() {
    Promise.all([
            import('gl-matrix'),
            import('./webgl/webgl-loader.js'),
            import('./App.js')
        ])
    .then(([
            { mat4 },
            { getShaderProgram, getBuffers },
            App
        ]) => {
            const canvas  = document.getElementById('canvas');
            const gl      = canvas.getContext('webgl');
            const program = getShaderProgram(gl);
            const buffers = getBuffers(gl);
            new App(gl, program, buffers, mat4);
        });
})();

if(module.hot) {
    module.hot.accept();
}