export function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        alert(info);
    }

    return shader;
}

export function createProgram(gl, vertexShader, fragmentSader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentSader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program));
    }

    return program;
}

export class Shader {
    constructor(vertexShaderFile, fragmentShaderFile, attributes, uniforms) {
        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderFile);
        const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderFile);
        this.program = createProgram(gl, vertexShader, fragmentShader);
        this.attributes = Object.entries(attributes).reduce((attr, [key, name]) => ({
            ...attr,
            [key]: gl.getAttribLocation(this.program, name),
        }), {
            position: gl.getAttribLocation(this.program, 'aVertexPosition'),
        });
        this.uniforms = Object.entries(uniforms).reduce((attr, [key, name]) => ({
            ...attr,
            [key]: gl.getUniformLocation(this.program, name),
        }), {
            modelView: gl.getUniformLocation(this.program, 'uModelViewMatrix'),
            projection: gl.getUniformLocation(this.program, 'uProjectionMatrix'),
        });
    }
}
