(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    3(e, t, i) {
        Object.defineProperty(t, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let i = 0; i < t.length; i++) { const n = t[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n); } } return function (t, i, n) { return i && e(t.prototype, i), n && e(t, n), t; }; }()),
            s = (function () {
                function e() { !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), this.update = this.update.bind(this), this.onMouseMove = this.onMouseMove.bind(this), document.addEventListener('mousemove', this.onMouseMove), this.mouseX = 0, this.mouseY = 0, this.rect = new shapes.Rect(0, 0, 1, 0.5), this.rect.setColor(1, 1, 1), this.ellipse = new shapes.Ellipse(0.8, 0.7, 0.6, 0.4), this.ellipse.setColor(1, 0, 1), this.update(); } return n(e, [{ key: 'update', value() { this.onResize(), this.draw(), requestAnimationFrame(this.update); } }, { key: 'draw', value() { gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), this.rect.draw(), this.ellipse.draw(); } }, { key: 'onMouseMove', value(e) { this.mouseX = e.clientX / gl.canvas.clientWidth, this.mouseY = e.clientY / gl.canvas.clientHeight; } }, {
                    key: 'onResize',
                    value() {
                        let e = gl.canvas.clientWidth,
                            t = gl.canvas.clientHeight; gl.canvas.width == e && gl.canvas.height == t || (gl.canvas.width = e, gl.canvas.height = t, gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight));
                    },
                }]), e;
            }()); t.default = s;
    },
}]);
