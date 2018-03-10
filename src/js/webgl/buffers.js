module.exports = function createBuffers(gl) {
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