(window.webpackJsonp = window.webpackJsonp || []).push([[3], [,,,,, function (r, e, o) {
    Object.defineProperty(e, '__esModule', { value: !0 }), e.default = function () { return { solid: (0, a.default)(n.default, t.default) }; }; var t = i(o(13)),
        n = i(o(12)),
        a = i(o(11)); function i(r) { return r && r.__esModule ? r : { default: r }; }
},,,, function (r, e) { r.exports = 'varying lowp vec4 vColor;\r\n\r\nvoid main() {\r\n    gl_FragColor = vColor;\r\n}'; }, function (r, e) { r.exports = 'attribute vec4 aVertexPosition;\r\nuniform mat4   uModelViewMatrix;\r\nuniform mat4   uProjectionMatrix;\r\nuniform vec4   uColor;\r\n\r\nvarying lowp vec4 vColor;\r\n\r\nvoid main() {\r\n    gl_Position = aVertexPosition;\r\n    vColor      = uColor;\r\n}'; }, function (r, e, o) {
        Object.defineProperty(e, '__esModule', { value: !0 }), e.default = function (r, e) {
            let t = e(gl, gl.VERTEX_SHADER, o(10)),
                n = e(gl, gl.FRAGMENT_SHADER, o(9)),
                a = r(gl, t, n),
                i = { position: gl.getAttribLocation(a, 'aVertexPosition') }; return { program: a, uniforms: { color: gl.getUniformLocation(a, 'uColor'), projectionMatrix: gl.getUniformLocation(a, 'uProjectionMatrix'), modelViewMatrix: gl.getUniformLocation(a, 'uModelViewMatrix') }, attributes: i };
        };
    }, function (r, e, o) {
        Object.defineProperty(e, '__esModule', { value: !0 }), e.default = function (r, e, o) { const t = r.createProgram(); return r.attachShader(t, e), r.attachShader(t, o), r.linkProgram(t), r.getProgramParameter(t, r.LINK_STATUS) ? t : (alert(`Unable to initialize the shader program: ${r.getProgramInfoLog(shaderProgram)}`), null); };
    }, function (r, e, o) {
        Object.defineProperty(e, '__esModule', { value: !0 }), e.default = function (r, e, o) { const t = r.createShader(e); return r.shaderSource(t, o), r.compileShader(t), r.getShaderParameter(t, r.COMPILE_STATUS) ? t : (alert(`An error occurred compiling the shaders: ${r.getShaderInfoLog(t)}`), r.deleteShader(t), null); };
    }]]);
