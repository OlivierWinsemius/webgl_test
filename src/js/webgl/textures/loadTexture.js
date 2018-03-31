const loadTexture = (source) => {
    const isPowerOf2 = value => (value & (value - 1)) === 0;
    const texture = gl.createTexture();
    texture.image = new Image();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // filling with single black pixel while loading image
    gl.texImage2D(
        gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA,
        gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]),
    );
    texture.image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);

        if (isPowerOf2(texture.image.width) && isPowerOf2(texture.image.height)) {
            gl.generateMipmap(gl.TEXTURE_2D);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }
    };

    texture.image.src = source;
    return texture;
};

export default textures => (
    Object.assign(
        {},
        ...Object.keys(textures).map(key => ({
            [key]: loadTexture(textures[key]),
        })),
    )
);
