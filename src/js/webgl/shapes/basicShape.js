export default class Shape {
    constructor() {
        this.shader = shaders.solid;
        this.colorUniformData = Shape.defaultColor;
        this.textureUniformData = 0;
        this.bindBuffers();
    }

    bindAttrib(attrib) {
        const attribute = this.shader.attributes[attrib];
        if (attribute !== null) {
            const attributeKey = `${attrib}AttributeData`;
            if (!this[attributeKey]) {
                this[attributeKey] = gl.createBuffer();
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, this[attributeKey]);
            switch (attrib) {
            case 'position':
                gl.vertexAttribPointer(attribute, 2, gl.FLOAT, false, 0, 0);
                break;
            case 'textureCoord':
                gl.vertexAttribPointer(attribute, 2, gl.FLOAT, false, 0, 0);
                break;
            default:
                return false;
            }
            gl.enableVertexAttribArray(attribute);
            return true;
        }
        return false;
    }

    setUniform(uni) {
        const uniform = this.shader.uniforms[uni];
        if (uniform !== null) {
            const uniformKey = `${uni}UniformData`;
            switch (uni) {
            case 'color':
                gl.uniform4fv(uniform, this[uniformKey]);
                break;
            case 'sampler':
                for (let i = 0; i < this[uniformKey]; i += 1) {
                    gl.uniform1i(uniform, i);
                }
                break;
            default:
                return false;
            }
            return true;
        }
        return false;
    }

    bindBuffers() {
        gl.useProgram(this.shader.program);
        Object.keys(this.shader.attributes).forEach((key) => {
            this.bindAttrib(key);
        });

        Object.keys(this.shader.uniforms).forEach((key) => {
            this.setUniform(key);
        });
    }

    setShader(shader) {
        this.shader = shader;
        gl.useProgram(this.shader.program);
        this.bindBuffers();
        return this;
    }

    setTexture(texture, uniform) {
        gl.activeTexture(gl[`TEXTURE${this.textureUniformData}`]);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        this.textureUniformData += 1;

        if (this.setUniform(uniform)) {
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(this.textureCoordinates),
                gl.STATIC_DRAW,
            );
        }
        return this;
    }

    setTextures(textures) {
        for (let i = 0; i < textures.length; i += 1) {
            this.setTexture(textures[i].texture, textures[i].key);
        }
    }

    setTextureCoordinates(coordinates) {
        this.textureCoordinates = coordinates;
        if (this.bindAttrib('textureCoord')) {
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(this.textureCoordinates),
                gl.STATIC_DRAW,
            );
        }
        return this;
    }

    setColor(r, g, b, a = 1) {
        this.colorUniformData = [r, g, b, a];
        return this;
    }

    setPosition(x, y) {
        this.x = (x * 2) - 1;
        this.y = (y * 2) - 1;
        this.setVertexPositionData();
        return this;
    }

    setSize(width, height) {
        this.width = width * 2;
        this.height = height * 2;
        this.setVertexPositionData();
        return this;
    }
}
