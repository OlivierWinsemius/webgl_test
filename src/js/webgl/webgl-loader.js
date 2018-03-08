function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    
    return shader;
};

export function initShaderProgram(gl) {
    const vShader = loadShader(gl, gl.VERTEX_SHADER,   require('./../../shaders/vertex.glsl'));
    const fShader = loadShader(gl, gl.FRAGMENT_SHADER, require('./../../shaders/fragment.glsl'));
    const program = gl.createProgram();

    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    this.program = program;
};

export function initBuffers(gl) {
    const positionBuffer = gl.createBuffer();
    {
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        const positions = [
                1.0,  1.0,
                -1.0,  1.0,
                1.0, -1.0,
                -1.0, -1.0
            ];

        gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(positions),
                gl.STATIC_DRAW
            );
    }
    
    const colorBuffer = gl.createBuffer();
    {
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);

        const colors = [
                1.0,  1.0,  1.0,  1.0,
                1.0,  0.0,  0.0,  1.0,
                0.0,  1.0,  0.0,  1.0,
                0.0,  0.0,  1.0,  1.0,
            ];

        gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(colors),
                gl.STATIC_DRAW
            );
    }

    this.buffers = {
            position: positionBuffer,
            color:    colorBuffer
        };
};
