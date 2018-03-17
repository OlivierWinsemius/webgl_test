const loaded = ([
    { default: getShaders },
    { default: shapes },
    { default: App },
    { mat4 },
]) => {
    const canvas = document.getElementById('canvas');
    global.gl = canvas.getContext('webgl');
    global.shapes = shapes;
    global.mat4 = mat4;
    global.shaders = getShaders();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    const app = new App();
    return app;
};

export default function start(callback) {
    return Promise.all([
        import('./webgl/shaders/shaders.js'),
        import('./webgl/shapes/shapes.js'),
        import('./App.js'),
        import('gl-matrix'),
    ]).then(callback);
}

start(loaded);

if (module.hot) {
    module.hot.accept();
}
