const { mat4 }  = require('gl-matrix');
class App {
    _loadShader(gl, type, source) {
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
    
    _initShaderProgram(gl) {
        const vShader = this._loadShader(gl, gl.VERTEX_SHADER,   require('../shaders/vertex.glsl'));
        const fShader = this._loadShader(gl, gl.FRAGMENT_SHADER, require('../shaders/fragment.glsl'));
        const program    = gl.createProgram();

        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
            return null;
        }

        return program;
    };
    
    _initBuffers(gl) {
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

        return {
            position: positionBuffer,
            color:    colorBuffer
        };
    };
    
    _getModelViewMatrix() {
        const matrix   = mat4.create();

        mat4.translate(
                matrix,
                matrix,
                [-0.0, 0.0, -6.0]
            );
    
        mat4.rotate(
                matrix,
                matrix,
                this.modelRotation,
                [0, 0, 1]
            );

        return matrix;
    };
    
    _getProjectionMatrix() {
        const fieldOfView = Math.PI * 0.25;
        const aspect      = canvas.width / canvas.height;
        const zNear       = 0.1;
        const zFar        = 100.0;
        const matrix      = mat4.create();
    
        mat4.perspective(
            matrix,
                fieldOfView,
                aspect,
                zNear,
                zFar
            );
        
        return matrix;
    };
    
    _updateGLMatrices(gl, programInfo) {
        const modelViewMatrix  = this._getModelViewMatrix();
        const projectionMatrix = this._getProjectionMatrix();
        gl.useProgram(programInfo.program);
        gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix,  false, modelViewMatrix);
    };
    
    _updateGLBuffers(gl, buffers, programInfo) {
        {
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
            const numComponents = 2;
            const type          = gl.FLOAT;
            const normalize     = false;
            const stride        = 0;
            const offset        = 0;
                
            gl.vertexAttribPointer(
                    programInfo.attribLocations.vertexPosition,
                    numComponents,
                    type,
                    normalize,
                    stride,
                    offset
                );
            gl.bindAttribLocation(programInfo.program, 0, 'vPosition');
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
        }
    
        {
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
            const numComponents = 4;
            const type          = gl.FLOAT;
            const normalize     = false;
            const stride        = 0;
            const offset        = 0;
                
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexColor,
                    numComponents,
                    type,
                    normalize,
                    stride,
                    offset
                );
                
            gl.bindAttribLocation(programInfo.program, 1, 'vColor');
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
        }
    };
    
    _updateDrawSettings(gl, canvas) {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
    };
    
    _draw() {
        const gl      = this.gl;
        const buffers = this.buffers;
        const info    = this.programInfo;

        this._updateGLMatrices(gl, info);
        this._updateGLBuffers(gl, buffers, info);
        const offset      = 0;
        const vertexCount = 4;
        this.gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
    };
    
    _update(now) {
        now                *= 0.001;
        const deltaTime     = now - this.then;
        this.then           = now;
        this.modelRotation -= deltaTime;

        this._draw.call(this);
        window.requestAnimationFrame(this._update.bind(this));
    };
    
    _onResize(gl, canvas) {
        const width = window.innerWidth               ||
                document.documentElement.clientWidth  ||
                document.body.clientWidth
        const height = window.innerHeight             ||
                document.documentElement.clientHeight ||
                document.body.clientHeight;
    
        canvas.width  = width;
        canvas.height = height;
        this._updateDrawSettings(gl, canvas);
    }

    constructor() {
        const canvas     = document.getElementById('canvas');
        this.gl          = canvas.getContext('webgl');
        this.buffers     = this._initBuffers(this.gl);
        const program    = this._initShaderProgram(this.gl);
        this.programInfo = {
                program,
                attribLocations: {
                    vertexPosition:   this.gl.getAttribLocation(program, 'aVertexPosition'),
                    vertexColor:      this.gl.getAttribLocation(program, 'aVertexColor')
                },
                uniformLocations: {
                    projectionMatrix: this.gl.getUniformLocation(program, 'uProjectionMatrix'),
                    modelViewMatrix:  this.gl.getUniformLocation(program, 'uModelViewMatrix')
                }
            };

        this.then          = 0;
        this.modelRotation = 0;
    
        this._onResize(this.gl, canvas);
        window.requestAnimationFrame(this._update.bind(this));
        window.addEventListener('resize', () => this._onResize(this.gl, canvas));
    };
};

document.addEventListener('DOMContentLoaded', function(){ 
    new App();
});