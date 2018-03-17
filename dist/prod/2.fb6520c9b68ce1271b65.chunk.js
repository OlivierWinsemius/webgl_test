(window.webpackJsonp = window.webpackJsonp || []).push([[2], [,,,, function (t, e, i) {
    Object.defineProperty(e, '__esModule', { value: !0 }); let o = n(i(8)),
        r = n(i(7)); function n(t) { return t && t.__esModule ? t : { default: t }; }e.default = { Rect: o.default, Ellipse: r.default };
},, function (t, e, i) {
        Object.defineProperty(e, '__esModule', { value: !0 }); let o = (function () { function t(t, e) { for (let i = 0; i < e.length; i++) { const o = e[i]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o); } } return function (e, i, o) { return i && t(e.prototype, i), o && t(e, o), e; }; }()),
            r = (function () { function t() { !(function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }(this, t)), this.shader = shaders.solid, this.positionData = gl.createBuffer(), this.colorData = [0, 0, 0, 1], gl.useProgram(this.shader.program); } return o(t, [{ key: 'bindBufferAttribs', value() { gl.bindBuffer(gl.ARRAY_BUFFER, this.positionData), gl.enableVertexAttribArray(this.shader.attributes.position), gl.bindBuffer(gl.ARRAY_BUFFER, this.positionData), gl.uniform4fv(this.shader.uniforms.color, this.colorData), gl.vertexAttribPointer(this.shader.attributes.position, 2, gl.FLOAT, !1, 0, 0); } }, { key: 'buffers', get() { return { color: this.colorData, position: this.positionData }; } }]), t; }()); e.default = r;
    }, function (t, e, i) {
        Object.defineProperty(e, '__esModule', { value: !0 }); let o,
            r = (function () { function t(t, e) { for (let i = 0; i < e.length; i++) { const o = e[i]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o); } } return function (e, i, o) { return i && t(e.prototype, i), o && t(e, o), e; }; }()),
            n = (o = i(6)) && o.__esModule ? o : { default: o },
            a = (function (t) {
                function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.1,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.1; !(function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }(this, e)); const n = (function (t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || typeof e !== 'object' && typeof e !== 'function' ? t : e; }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))); return n.numVertices = 40, n.x = 2 * t - 1, n.y = 2 * i - 1, n.width = o, n.height = r, n.setVertexPositionData(), n.setVertexColorData(), n;
                } return (function (t, e) {
                    if (typeof e !== 'function' && e !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`); t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t, enumerable: !1, writable: !0, configurable: !0,
                        },
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
                }(e, n.default)), r(e, [{ key: 'setVertexPositionData', value() { this.bindBufferAttribs(); for (var t = new Array(this.numVertices), e = 0; e < this.numVertices; e++) { const i = e / this.numVertices * (2 * Math.PI); t[2 * e + 0] = this.x + Math.sin(i) * this.height, t[2 * e + 1] = -this.y + Math.cos(i) * this.width; }gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(t), gl.STATIC_DRAW); } }, { key: 'setVertexColorData', value(t, e, i, o) { gl.uniform4fv(this.shader.uniforms.color, this.colorData); } }, { key: 'setColor', value(t, e, i) { const o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1; this.colorData = [t, e, i, o], this.setVertexColorData(); } }, { key: 'setPosition', value(t, e) { this.x = 2 * t - 1, this.y = 2 * e - 1, this.setVertexPositionData(); } }, { key: 'setSize', value(t, e) { this.width = 2 * t, this.height = 2 * e, this.setVertexPositionData(); } }, { key: 'setResolution', value(t) { this.numVertices = t, this.setVertexPositionData(); } }, { key: 'draw', value() { this.bindBufferAttribs(), gl.drawArrays(gl.TRIANGLE_FAN, 0, this.numVertices); } }]), e;
            }()); e.default = a;
    }, function (t, e, i) {
        Object.defineProperty(e, '__esModule', { value: !0 }); let o,
            r = (function () { function t(t, e) { for (let i = 0; i < e.length; i++) { const o = e[i]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o); } } return function (e, i, o) { return i && t(e.prototype, i), o && t(e, o), e; }; }()),
            n = (o = i(6)) && o.__esModule ? o : { default: o },
            a = (function (t) {
                function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.1,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.1; !(function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }(this, e)); const n = (function (t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || typeof e !== 'object' && typeof e !== 'function' ? t : e; }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))); return n.x = 2 * t - 1, n.y = 2 * i - 1, n.width = 2 * o, n.height = 2 * r, n.setVertexPositionData(), n.setVertexColorData(), n;
                } return (function (t, e) {
                    if (typeof e !== 'function' && e !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`); t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t, enumerable: !1, writable: !0, configurable: !0,
                        },
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
                }(e, n.default)), r(e, [{ key: 'setVertexPositionData', value() { this.bindBufferAttribs(); const t = [this.x + this.width, -this.y - this.height, this.x, -this.y - this.height, this.x + this.width, -this.y, this.x, -this.y]; gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(t), gl.STATIC_DRAW); } }, { key: 'setVertexColorData', value(t, e, i, o) { gl.uniform4fv(this.shader.uniforms.color, this.colorData); } }, { key: 'setColor', value(t, e, i) { const o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1; this.colorData = [t, e, i, o], this.setVertexColorData(); } }, { key: 'setPosition', value(t, e) { this.x = 2 * t - 1, this.y = 2 * e - 1, this.setVertexPositionData(); } }, { key: 'setSize', value(t, e) { this.width = 2 * t, this.height = 2 * e, this.setVertexPositionData(); } }, { key: 'draw', value() { this.bindBufferAttribs(), gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); } }]), e;
            }()); e.default = a;
    }]]);
