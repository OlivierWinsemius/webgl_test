!(function (e) {
    function t(t) { for (var n, o, a = t[0], u = t[1], c = 0, l = []; c < a.length; c++)o = a[c], r[o] && l.push(r[o][0]), r[o] = 0; for (n in u)Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]); for (i && i(t); l.length;)l.shift()(); } var n = {},
        r = { 4: 0 }; function o(t) { if (n[t]) return n[t].exports; const r = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports; }o.e = function (e) {
        let t = [],
            n = r[e]; if (n !== 0) {
            if (n)t.push(n[2]); else {
                const a = new Promise(((t, o) => { n = r[e] = [t, o]; })); t.push(n[2] = a); let u = document.getElementsByTagName('head')[0],
                    c = document.createElement('script'); c.charset = 'utf-8', c.timeout = 12e4, o.nc && c.setAttribute('nonce', o.nc), c.src = `${o.p}${e}.${{
                    0: 'aa4d9a72fd14736f1868', 1: 'cb87c46d5160e1282866', 2: 'fb6520c9b68ce1271b65', 3: '6b68348b98507d06a2d6',
                }[e]}.chunk.js`; const i = setTimeout(() => { l({ type: 'timeout', target: c }); }, 12e4); function l(t) {
                    c.onerror = c.onload = null, clearTimeout(i); const n = r[e]; if (n !== 0) {
                        if (n) {
                            let o = t && (t.type === 'load' ? 'missing' : t.type),
                                a = t && t.target && t.target.src,
                                u = new Error(`Loading chunk ${e} failed.\n(${o}: ${a})`); u.type = o, u.request = a, n[1](u);
                        }r[e] = void 0;
                    }
                }c.onerror = c.onload = l, u.appendChild(c);
            }
        } return Promise.all(t);
    }, o.m = e, o.c = n, o.d = function (e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n }); }, o.r = function (e) { Object.defineProperty(e, '__esModule', { value: !0 }); }, o.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return o.d(t, 'a', t), t; }, o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, o.p = '', o.oe = function (e) { throw console.error(e), e; }; let a = window.webpackJsonp = window.webpackJsonp || [],
        u = a.push.bind(a); a.push = t, a = a.slice(); for (let c = 0; c < a.length; c++)t(a[c]); var i = u; o(o.s = 1);
}([function (e, t) { let n; n = (function () { return this; }()); try { n = n || Function('return this')() || (0, eval)('this'); } catch (e) { typeof window === 'object' && (n = window); }e.exports = n; }, function (e, t, n) {
    (function (e) {
        const t = function (e, t) {
            if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) {
                return (function (e, t) {
                    let n = [],
                        r = !0,
                        o = !1,
                        a = void 0; try { for (var u, c = e[Symbol.iterator](); !(r = (u = c.next()).done) && (n.push(u.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e; } finally { try { !r && c.return && c.return(); } finally { if (o) throw a; } } return n;
                }(e, t));
            } throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }; Promise.all([n.e(3).then(() => { const e = n(5); return typeof e === 'object' && e && e.__esModule ? e : Object.assign({}, typeof e === 'object' && e, { default: e }); }), n.e(2).then(() => { const e = n(4); return typeof e === 'object' && e && e.__esModule ? e : Object.assign({}, typeof e === 'object' && e, { default: e }); }), n.e(1).then(() => { const e = n(3); return typeof e === 'object' && e && e.__esModule ? e : Object.assign({}, typeof e === 'object' && e, { default: e }); }), n.e(0).then(n.bind(null, 2))]).then((n) => {
            let r = t(n, 4),
                o = r[0].default,
                a = r[1].default,
                u = r[2].default,
                c = r[3].mat4,
                i = document.getElementById('canvas'); e.gl = i.getContext('webgl'), e.shapes = a, e.mat4 = c, e.shaders = o(), gl.clearColor(0, 0, 0, 1), gl.clearDepth(1), gl.enable(gl.DEPTH_TEST), gl.depthFunc(gl.LEQUAL), new u();
        });
    }).call(this, n(0));
}]));
