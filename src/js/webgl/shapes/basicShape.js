import ModelMatrix from '../matrices/modelMatrix';

export default class Shape extends ModelMatrix {
    constructor(...rest) {
        super(...rest);

        this.width = 1;
        this.height = 1;
        this.depth = 1;
        this.origin = { x: 0, y: 0, z: 0 };

        this.shader = shaders.Solid();
        this.colorUniformData = [1, 1, 1, 1];
        this.textureUniformData = 0;
        this.projectionUniformData = Camera.Projection.matrix;
        numShapes += 1;
        this.id = numShapes;

        this.setAttributes();
        this.setUniforms();

        Camera.listen(this);
    }

    destroy() {
        Camera.removeListener(this);
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
            gl.useProgram(this.shader.program);
            const attributeKey = `${attrib}AttributeData`;
            if (!this[attributeKey]) {
                this[attributeKey] = gl.createBuffer();
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, this[attributeKey]);
            switch (attrib) {
            case 'position':
                gl.vertexAttribPointer(attribute, 3, gl.FLOAT, false, 0, 0);
                break;
            case 'textureCoord':
                gl.vertexAttribPointer(attribute, 3, gl.FLOAT, false, 0, 0);
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
        if (uniform !== null && uniform !== -1) {
            gl.useProgram(this.shader.program);
            const uniformKey = `${uni}UniformData`;
            switch (uni) {
            case 'color':
                console.log('color', uniform, uniformKey)
                gl.uniform4fv(uniform, this[uniformKey]);
                break;
            case 'sampler':
                for (let i = 0; i < this[uniformKey]; i += 1) {
                    console.log(uniform)
                    gl.uniform1i(uniform, i);
                }
                break;
            case 'modelView':
                gl.uniformMatrix4fv(
                    uniform,
                    false,
                    Camera.View.matrix
                        .duplicate()
                        .multiply(this.translationMatrix)
                        .multiply(this.rotationMatrix)
                        .multiply(this.scaleMatrix)
                        .value,
                );
                break;
            case 'projection':
                gl.uniformMatrix4fv(uniform, false, Camera.Projection.matrix.value);
                break;
            default:
                return false;
            }
            return true;
        }
        return false;
    }

    setAttributes() {
        Object.keys(this.shader.attributes).forEach((key) => {
            this.bindAttrib(key);
        });
    }

    setUniforms() {
        Object.keys(this.shader.uniforms).forEach((key) => {
            this.setUniform(key);
        });
    }

    setShader(shader) {
        this.shader = shader;
        console.log(this.shader)
        gl.useProgram(this.shader.program);
        this.setAttributes();
        this.setUniforms();
        return this;
    }

    setTexture(texture, coordinates) {
        gl.activeTexture(gl[`TEXTURE${this.textureUniformData}`]);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        this.textureUniformData += 1;
        this.textureCoordinates = coordinates || this.getTextureCoordinates();

        if (this.bindAttrib('textureCoord') && this.setUniform('sampler')) {
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(this.textureCoordinates),
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
        this.setUniform('color');
        return this;
    }

    setOrigin(x, y, z = 0) {
        this.origin = {
            x: -x,
            y: -y,
            z: -z,
        };
        this.setPositionAttributeData();
        return this;
    }

    setSize(width, height) {
        this.width = width * 2;
        this.height = height * 2;
        this.setVertexPositionData();
        return this;
    }
}
