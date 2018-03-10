module.exports = class App {
    constructor(gl, programInfo) {
        this.gl          = gl;
        this.programInfo = programInfo;
        this._update     = this._update.bind(this);
        this._draw       = this._draw.bind(this);
        this._onResize   = this._onResize.bind(this);
        window.requestAnimationFrame(this._update);
    };

    _draw() {
        const gl          = this.gl;
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
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        }
    };
};