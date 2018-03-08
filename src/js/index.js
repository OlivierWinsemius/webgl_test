const start = () => {
    Promise.all([
        import('gl-matrix'),
        import('./webgl/webgl-loader.js'),
        import('./App.js')
    ])
    .then(([
        glMatrix,
        webGlLoader,
        App
    ]) => {
        console.log(App);
        const { mat4 } = glMatrix;
        const { getShaderProgram, getBuffers } = webGlLoader;        
        const canvas  = document.getElementById('canvas');
        const gl      = canvas.getContext('webgl');
        const program = getShaderProgram(gl);
        const buffers = getBuffers(gl);
        
        new App(gl, program, buffers, mat4);
    });
};

document.addEventListener('DOMContentLoaded', start);

if(module.hot) {
    module.hot.accept();
}