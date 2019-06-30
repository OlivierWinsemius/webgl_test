require('../style/styles.scss');

const loaded = ([
    { default: getShaders },
    { default: shapes },
    { default: Camera },
    { default: textureFiles },
    { default: getTextures },
    { default: App },
    { default: Vector },
    { default: Matrix },
]) => {
    const canvas = document.getElementById('canvas');
    // @ts-ignore
    global.Vector = Vector;
    // @ts-ignore
    global.Matrix = Matrix;
    // @ts-ignore
    global.numShapes = 0;
    // @ts-ignore
    global.gl = canvas.getContext('webgl');
    // @ts-ignore
    global.shapes = shapes;
    // @ts-ignore
    global.shaders = getShaders();
    // @ts-ignore
    global.textures = getTextures(textureFiles);
    // @ts-ignore
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // @ts-ignore
    gl.clearDepth(1.0);
    // @ts-ignore
    gl.enable(gl.DEPTH_TEST);
    // @ts-ignore
    gl.depthFunc(gl.LEQUAL);
    // @ts-ignore
    global.Camera = new Camera();
    // @ts-ignore
    global.App = new App({ type: 'ortho' });
};

// @ts-ignore
export default function start(callback) {
    return Promise.all([
        import('./webgl/shaders/index.js'),
        import('./webgl/shapes/index.js'),
        import('./webgl/camera/index.js'),
        import('../images/textureFiles.js'),
        import('./webgl/textures/loadTexture.js'),
        import('./App.js'),
        import('./utils/vector'),
        import('./utils/matrix'),
    ]).then(callback);
}

start(loaded);

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}
