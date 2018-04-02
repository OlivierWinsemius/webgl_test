import Matrices from './utils/matrices';

export default class Shape extends Matrices {
    constructor(...rest) {
        super(...rest);

        this.width = 1;
        this.height = 1;
        this.origin = { x: 0, y: 0 };

        this.shader = shaders.Solid();
        this.colorUniformData = Shape.defaultColor;
        this.textureUniformData = 0;

        this.updateTranslationMatrix();
        this.updateRotationMatrix();
        this.updateScaleMatrix();
        this.setAttributes();
        this.setUniforms();
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
        if (uniform !== null && uniform !== -1) {
            gl.useProgram(this.shader.program);
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
                gl.uniformMatrix4fv(
                    uniform,
                    false,
                    this.combineMatrices(
                        this.translationMatrix,
                        this.rotationMatrix,
                        this.scaleMatrix,
                    ),
                );
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
        gl.useProgram(this.shader.program);
        this.setAttributes();
        this.setUniforms();
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

    setSize(width, height) {
        this.width = width * 2;
        this.height = height * 2;
        this.setVertexPositionData();
        return this;
    }
}
