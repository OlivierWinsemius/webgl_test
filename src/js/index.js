const loaded = ([
    { default: getShaders },
    { default: shapes },
    { default: Camera },
    { default: textureFiles },
    { default: getTextures },
    { default: App },
    vec,
    mat,
]) => {
    const canvas = document.getElementById('canvas');
    global.vec = vec;
    global.mat = mat;
    global.numShapes = 0;
    global.gl = canvas.getContext('webgl');
    global.shapes = shapes;
    global.Camera = new Camera();
    global.shaders = getShaders();
    global.textures = getTextures(textureFiles);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    const app = new App();
    return app;
};

export default function start(callback) {
    return Promise.all([
        import('./webgl/shaders/'),
        import('./webgl/shapes/'),
        import('./webgl/camera/'),
        import('../images/textureFiles.js'),
        import('./webgl/textures/loadTexture.js'),
        import('./App.js'),
        import('./utils/vector'),
        import('./utils/matrix'),
    ]).then(callback);
}

start(loaded);

if (module.hot) {
    module.hot.accept();
}
