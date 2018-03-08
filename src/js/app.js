module.exports = class App {
    constructor(gl, program, buffers, mat4) {
        this.gl      = gl;
        this.mat4    = mat4;
        this.buffers = buffers;
        this.programInfo = {
                program: program,
                attribLocations: {
                    vertexPosition:   this.gl.getAttribLocation(program, 'aVertexPosition'),
                    vertexColor:      this.gl.getAttribLocation(program, 'aVertexColor')
                },
                uniformLocations: {
                    projectionMatrix: this.gl.getUniformLocation(program, 'uProjectionMatrix'),
                    modelViewMatrix:  this.gl.getUniformLocation(program, 'uModelViewMatrix')
                }
            };

        this._update   = this._update.bind(this);
        this._draw     = this._draw.bind(this);
        this._onResize = this._onResize.bind(this);
        window.requestAnimationFrame(this._update);
    };

    _getModelViewMatrix() {
        const mat4   = this.mat4;
        const matrix = mat4.create();
        mat4.translate(
                matrix,
                matrix,
                [-0.0, 0.0, -6.0]
            );
        return matrix;
    };

    _getProjectionMatrix() {
        const gl          = this.gl;
        const mat4        = this.mat4;
        const fieldOfView = Math.PI * 0.25;
        const aspect      = gl.canvas.width / gl.canvas.height;
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

    _updateGLMatrices() {
        const gl               = this.gl;
        const mat4             = this.mat4;
        const programInfo      = this.programInfo;
        const modelViewMatrix  = this._getModelViewMatrix(mat4);
        const projectionMatrix = this._getProjectionMatrix(gl, mat4);
        
        gl.useProgram(programInfo.program);
        gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix,  false, modelViewMatrix);
    };
    
    _updateGLBuffers() {
        const gl          = this.gl;
        const buffers     = this.buffers;
        const programInfo = this.programInfo;
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
    
    _updateDrawSettings() {
        const gl   = this.gl;
        const mat4 = this.mat4;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
    };

    _draw() {
        const gl      = this.gl;
        this._updateGLMatrices();
        this._updateGLBuffers();
        const offset      = 0;
        const vertexCount = 4;
        
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
    };
    
    _update(now) {
        this._onResize();
        this._draw();
        window.requestAnimationFrame(this._update);
    };
    
    _onResize() {
        const gl     = this.gl;
        const width  = gl.canvas.clientWidth;
        const height = gl.canvas.clientHeight;
        if (gl.canvas.width != width || gl.canvas.height != height) {
            gl.canvas.width = width;
            gl.canvas.height = height;
            this._updateDrawSettings(gl);
        }
    };
};