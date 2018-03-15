(function() {
    Promise.all([
        import('./webgl/shaders.js'),
        import('./webgl/shapes.js'),
        import('./App.js'),
        import('gl-matrix')
    ])
    .then(([
        { default: getShaders },
        { default: shapes },
        { default: App },
        { mat4 },
    ]) => {
        const canvas   = document.getElementById('canvas')
        global.gl      = canvas.getContext('webgl')
        global.shapes  = shapes
        global.mat4    = mat4
        global.shaders = getShaders()

        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clearDepth(1.0)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)
        new App()
    })
})()

if(module.hot) {
    module.hot.accept()
}