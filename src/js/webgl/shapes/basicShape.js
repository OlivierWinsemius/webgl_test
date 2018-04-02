export default class Shape {
    constructor(x = 0, y = 0, z = 0, scaleX = 1, scaleY = 1, scaleZ = 1) {
        this.width = 1;
        this.height = 1;
        this.origin = { x: 0, y: 0 };

        this.shader = shaders.solid;
        this.colorUniformData = Shape.defaultColor;
        this.textureUniformData = 0;
        this.modelViewUniformData = [
            scaleX, 0, 0, 0,
            0, scaleY, 0, 0,
            0, 0, scaleZ, 0,
            x, y, z, 1,
        ];

        this.bindBuffers();
    }

    setPositionAttributeData() {
        if (this.bindAttrib('position')) {
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(this.getVertexCoordinates()),
                gl.STATIC_DRAW,
            );
        }
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
            case 'modelView':
                gl.uniformMatrix4fv(uniform, false, this[uniformKey]);
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

        const textureCoordinates = this.getTextureCoordinates();

        if (this.setUniform(uniform)) {
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(textureCoordinates),
                gl.STATIC_DRAW,
            );
        }
        return this;
    }

    setTextures(...textures) {
        for (let i = 0; i < textures.length; i += 1) {
            this.setTexture(textures[i].texture, textures[i].key);
        }
        return this;
    }

    setColor(r, g, b, a = 1) {
        this.colorUniformData = [r, g, b, a];
        return this;
    }

    setOrigin(x, y) {
        this.origin = {
            x: -x,
            y: -y,
        };
        this.setPositionAttributeData();
        return this;
    }

    rotateZ(angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);

        this.applyModelViewMatrix([
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);

        return this;
    }

    rotateY(angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);

        this.applyModelViewMatrix([
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1,
        ]);

        return this;
    }

    rotateX(angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);

        this.applyModelViewMatrix([
            1, 0, 0, 0,
            0, c, -s, 0,
            0, s, c, 0,
            0, 0, 0, 1,
        ]);

        return this;
    }

    rotate(degX, degY, degZ) {
        this.rotateX(degX);
        if (degY !== undefined) {
            this.rotateY(degY);
            if (degZ !== undefined) {
                this.rotateZ(degZ);
            }
        }

        return this;
    }

    scaleX(value) {
        this.applyModelViewMatrix([
            value, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);

        return this;
    }

    scaleY(value) {
        this.applyModelViewMatrix([
            1, 0, 0, 0,
            0, value, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);

        return this;
    }

    scaleZ(value) {
        this.applyModelViewMatrix([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, value, 0,
            0, 0, 0, 1,
        ]);

        return this;
    }

    scale(x, y = 1, z = 1) {
        this.applyModelViewMatrix([
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1,
        ]);

        return this;
    }

    applyModelViewMatrix(newMatrix) {
        const oldMatrix = this.modelViewUniformData;
        const matrix = new Array(16);
        for (let row = 0; row < 4; row += 1) {
            for (let col = 0; col < 4; col += 1) {
                matrix[(row * 4) + col] = 0;
                for (let i = 0; i < 4; i += 1) {
                    matrix[(row * 4) + col] += (
                        oldMatrix[(i * 4) + col] *
                        newMatrix[(row * 4) + i]
                    );
                }
            }
        }

        this.modelViewUniformData = matrix;

        return this;
    }

    setSize(width, height) {
        this.width = width * 2;
        this.height = height * 2;
        this.setVertexPositionData();
        return this;
    }
}
