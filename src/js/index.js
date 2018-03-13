(function() {
    Promise.all([
        import('./webgl/shaders.js'),
        import('./webgl/objects.js'),
        import('./App.js'),
        import('gl-matrix')
    ])
    .then(([
        { default: getShaders },
        { Rect },
        { default: App },
        { mat4 },
    ]) => {
        const canvas   = document.getElementById('canvas')
        global.gl      = canvas.getContext('webgl')
        global.Rect    = Rect
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