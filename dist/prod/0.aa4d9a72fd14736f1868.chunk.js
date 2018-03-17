(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    2(t, n, r) {
        r.r(n); const u = {}; r.d(u, 'EPSILON', () => s), r.d(u, 'ARRAY_TYPE', () => M), r.d(u, 'RANDOM', () => l), r.d(u, 'setMatrixArrayType', () => b), r.d(u, 'toRadian', () => p), r.d(u, 'equals', () => x); const e = {}; r.d(e, 'create', () => w), r.d(e, 'clone', () => q), r.d(e, 'copy', () => v), r.d(e, 'identity', () => g), r.d(e, 'fromValues', () => y), r.d(e, 'set', () => A), r.d(e, 'transpose', () => S), r.d(e, 'invert', () => R), r.d(e, 'adjoint', () => E), r.d(e, 'determinant', () => D), r.d(e, 'multiply', () => P), r.d(e, 'rotate', () => I), r.d(e, 'scale', () => T), r.d(e, 'fromRotation', () => L), r.d(e, 'fromScaling', () => V), r.d(e, 'str', () => Y), r.d(e, 'frob', () => j), r.d(e, 'LDU', () => z), r.d(e, 'add', () => F), r.d(e, 'subtract', () => O), r.d(e, 'exactEquals', () => Q), r.d(e, 'equals', () => X), r.d(e, 'multiplyScalar', () => Z), r.d(e, 'multiplyScalarAndAdd', () => k), r.d(e, 'mul', () => J), r.d(e, 'sub', () => N); const a = {}; r.d(a, 'create', () => U), r.d(a, 'clone', () => W), r.d(a, 'copy', () => _), r.d(a, 'identity', () => B), r.d(a, 'fromValues', () => C), r.d(a, 'set', () => G), r.d(a, 'invert', () => H), r.d(a, 'determinant', () => K), r.d(a, 'multiply', () => $), r.d(a, 'rotate', () => tt), r.d(a, 'scale', () => nt), r.d(a, 'translate', () => rt), r.d(a, 'fromRotation', () => ut), r.d(a, 'fromScaling', () => et), r.d(a, 'fromTranslation', () => at), r.d(a, 'str', () => ot), r.d(a, 'frob', () => it), r.d(a, 'add', () => ct), r.d(a, 'subtract', () => ft), r.d(a, 'multiplyScalar', () => dt), r.d(a, 'multiplyScalarAndAdd', () => ht), r.d(a, 'exactEquals', () => st), r.d(a, 'equals', () => Mt), r.d(a, 'mul', () => lt), r.d(a, 'sub', () => bt); const o = {}; r.d(o, 'create', () => mt), r.d(o, 'fromMat4', () => pt), r.d(o, 'clone', () => xt), r.d(o, 'copy', () => wt), r.d(o, 'fromValues', () => qt), r.d(o, 'set', () => vt), r.d(o, 'identity', () => gt), r.d(o, 'transpose', () => yt), r.d(o, 'invert', () => At), r.d(o, 'adjoint', () => St), r.d(o, 'determinant', () => Rt), r.d(o, 'multiply', () => Et), r.d(o, 'translate', () => Dt), r.d(o, 'rotate', () => Pt), r.d(o, 'scale', () => It), r.d(o, 'fromTranslation', () => Tt), r.d(o, 'fromRotation', () => Lt), r.d(o, 'fromScaling', () => Vt), r.d(o, 'fromMat2d', () => Yt), r.d(o, 'fromQuat', () => jt), r.d(o, 'normalFromMat4', () => zt), r.d(o, 'projection', () => Ft), r.d(o, 'str', () => Ot), r.d(o, 'frob', () => Qt), r.d(o, 'add', () => Xt), r.d(o, 'subtract', () => Zt), r.d(o, 'multiplyScalar', () => kt), r.d(o, 'multiplyScalarAndAdd', () => Jt), r.d(o, 'exactEquals', () => Nt), r.d(o, 'equals', () => Ut), r.d(o, 'mul', () => Wt), r.d(o, 'sub', () => _t); const i = {}; r.d(i, 'create', () => Bt), r.d(i, 'clone', () => Ct), r.d(i, 'copy', () => Gt), r.d(i, 'fromValues', () => Ht), r.d(i, 'set', () => Kt), r.d(i, 'identity', () => $t), r.d(i, 'transpose', () => tn), r.d(i, 'invert', () => nn), r.d(i, 'adjoint', () => rn), r.d(i, 'determinant', () => un), r.d(i, 'multiply', () => en), r.d(i, 'translate', () => an), r.d(i, 'scale', () => on), r.d(i, 'rotate', () => cn), r.d(i, 'rotateX', () => fn), r.d(i, 'rotateY', () => dn), r.d(i, 'rotateZ', () => hn), r.d(i, 'fromTranslation', () => sn), r.d(i, 'fromScaling', () => Mn), r.d(i, 'fromRotation', () => ln), r.d(i, 'fromXRotation', () => bn), r.d(i, 'fromYRotation', () => mn), r.d(i, 'fromZRotation', () => pn), r.d(i, 'fromRotationTranslation', () => xn), r.d(i, 'getTranslation', () => wn), r.d(i, 'getScaling', () => qn), r.d(i, 'getRotation', () => vn), r.d(i, 'fromRotationTranslationScale', () => gn), r.d(i, 'fromRotationTranslationScaleOrigin', () => yn), r.d(i, 'fromQuat', () => An), r.d(i, 'frustum', () => Sn), r.d(i, 'perspective', () => Rn), r.d(i, 'perspectiveFromFieldOfView', () => En), r.d(i, 'ortho', () => Dn), r.d(i, 'lookAt', () => Pn), r.d(i, 'targetTo', () => In), r.d(i, 'str', () => Tn), r.d(i, 'frob', () => Ln), r.d(i, 'add', () => Vn), r.d(i, 'subtract', () => Yn), r.d(i, 'multiplyScalar', () => jn), r.d(i, 'multiplyScalarAndAdd', () => zn), r.d(i, 'exactEquals', () => Fn), r.d(i, 'equals', () => On), r.d(i, 'mul', () => Qn), r.d(i, 'sub', () => Xn); const c = {}; r.d(c, 'create', () => Zn), r.d(c, 'clone', () => kn), r.d(c, 'length', () => Jn), r.d(c, 'fromValues', () => Nn), r.d(c, 'copy', () => Un), r.d(c, 'set', () => Wn), r.d(c, 'add', () => _n), r.d(c, 'subtract', () => Bn), r.d(c, 'multiply', () => Cn), r.d(c, 'divide', () => Gn), r.d(c, 'ceil', () => Hn), r.d(c, 'floor', () => Kn), r.d(c, 'min', () => $n), r.d(c, 'max', () => tr), r.d(c, 'round', () => nr), r.d(c, 'scale', () => rr), r.d(c, 'scaleAndAdd', () => ur), r.d(c, 'distance', () => er), r.d(c, 'squaredDistance', () => ar), r.d(c, 'squaredLength', () => or), r.d(c, 'negate', () => ir), r.d(c, 'inverse', () => cr), r.d(c, 'normalize', () => fr), r.d(c, 'dot', () => dr), r.d(c, 'cross', () => hr), r.d(c, 'lerp', () => sr), r.d(c, 'hermite', () => Mr), r.d(c, 'bezier', () => lr), r.d(c, 'random', () => br), r.d(c, 'transformMat4', () => mr), r.d(c, 'transformMat3', () => pr), r.d(c, 'transformQuat', () => xr), r.d(c, 'rotateX', () => wr), r.d(c, 'rotateY', () => qr), r.d(c, 'rotateZ', () => vr), r.d(c, 'angle', () => gr), r.d(c, 'str', () => yr), r.d(c, 'exactEquals', () => Ar), r.d(c, 'equals', () => Sr), r.d(c, 'sub', () => Rr), r.d(c, 'mul', () => Er), r.d(c, 'div', () => Dr), r.d(c, 'dist', () => Pr), r.d(c, 'sqrDist', () => Ir), r.d(c, 'len', () => Tr), r.d(c, 'sqrLen', () => Lr), r.d(c, 'forEach', () => Vr); const f = {}; r.d(f, 'create', () => Yr), r.d(f, 'clone', () => jr), r.d(f, 'fromValues', () => zr), r.d(f, 'copy', () => Fr), r.d(f, 'set', () => Or), r.d(f, 'add', () => Qr), r.d(f, 'subtract', () => Xr), r.d(f, 'multiply', () => Zr), r.d(f, 'divide', () => kr), r.d(f, 'ceil', () => Jr), r.d(f, 'floor', () => Nr), r.d(f, 'min', () => Ur), r.d(f, 'max', () => Wr), r.d(f, 'round', () => _r), r.d(f, 'scale', () => Br), r.d(f, 'scaleAndAdd', () => Cr), r.d(f, 'distance', () => Gr), r.d(f, 'squaredDistance', () => Hr), r.d(f, 'length', () => Kr), r.d(f, 'squaredLength', () => $r), r.d(f, 'negate', () => tu), r.d(f, 'inverse', () => nu), r.d(f, 'normalize', () => ru), r.d(f, 'dot', () => uu), r.d(f, 'lerp', () => eu), r.d(f, 'random', () => au), r.d(f, 'transformMat4', () => ou), r.d(f, 'transformQuat', () => iu), r.d(f, 'str', () => cu), r.d(f, 'exactEquals', () => fu), r.d(f, 'equals', () => du), r.d(f, 'sub', () => hu), r.d(f, 'mul', () => su), r.d(f, 'div', () => Mu), r.d(f, 'dist', () => lu), r.d(f, 'sqrDist', () => bu), r.d(f, 'len', () => mu), r.d(f, 'sqrLen', () => pu), r.d(f, 'forEach', () => xu); const d = {}; r.d(d, 'create', () => wu), r.d(d, 'identity', () => qu), r.d(d, 'setAxisAngle', () => vu), r.d(d, 'getAxisAngle', () => gu), r.d(d, 'multiply', () => yu), r.d(d, 'rotateX', () => Au), r.d(d, 'rotateY', () => Su), r.d(d, 'rotateZ', () => Ru), r.d(d, 'calculateW', () => Eu), r.d(d, 'slerp', () => Du), r.d(d, 'invert', () => Pu), r.d(d, 'conjugate', () => Iu), r.d(d, 'fromMat3', () => Tu), r.d(d, 'fromEuler', () => Lu), r.d(d, 'str', () => Vu), r.d(d, 'clone', () => Yu), r.d(d, 'fromValues', () => ju), r.d(d, 'copy', () => zu), r.d(d, 'set', () => Fu), r.d(d, 'add', () => Ou), r.d(d, 'mul', () => Qu), r.d(d, 'scale', () => Xu), r.d(d, 'dot', () => Zu), r.d(d, 'lerp', () => ku), r.d(d, 'length', () => Ju), r.d(d, 'len', () => Nu), r.d(d, 'squaredLength', () => Uu), r.d(d, 'sqrLen', () => Wu), r.d(d, 'normalize', () => _u), r.d(d, 'exactEquals', () => Bu), r.d(d, 'equals', () => Cu), r.d(d, 'rotationTo', () => Gu), r.d(d, 'sqlerp', () => Hu), r.d(d, 'setAxes', () => Ku); const h = {}; r.d(h, 'create', () => $u), r.d(h, 'clone', () => te), r.d(h, 'fromValues', () => ne), r.d(h, 'copy', () => re), r.d(h, 'set', () => ue), r.d(h, 'add', () => ee), r.d(h, 'subtract', () => ae), r.d(h, 'multiply', () => oe), r.d(h, 'divide', () => ie), r.d(h, 'ceil', () => ce), r.d(h, 'floor', () => fe), r.d(h, 'min', () => de), r.d(h, 'max', () => he), r.d(h, 'round', () => se), r.d(h, 'scale', () => Me), r.d(h, 'scaleAndAdd', () => le), r.d(h, 'distance', () => be), r.d(h, 'squaredDistance', () => me), r.d(h, 'length', () => pe), r.d(h, 'squaredLength', () => xe), r.d(h, 'negate', () => we), r.d(h, 'inverse', () => qe), r.d(h, 'normalize', () => ve), r.d(h, 'dot', () => ge), r.d(h, 'cross', () => ye), r.d(h, 'lerp', () => Ae), r.d(h, 'random', () => Se), r.d(h, 'transformMat2', () => Re), r.d(h, 'transformMat2d', () => Ee), r.d(h, 'transformMat3', () => De), r.d(h, 'transformMat4', () => Pe), r.d(h, 'str', () => Ie), r.d(h, 'exactEquals', () => Te), r.d(h, 'equals', () => Le), r.d(h, 'len', () => Ve), r.d(h, 'sub', () => Ye), r.d(h, 'mul', () => je), r.d(h, 'div', () => ze), r.d(h, 'dist', () => Fe), r.d(h, 'sqrDist', () => Oe), r.d(h, 'sqrLen', () => Qe), r.d(h, 'forEach', () => Xe); const s = 1e-6; let M = typeof Float32Array !== 'undefined' ? Float32Array : Array; const l = Math.random; function b(t) { M = t; } const m = Math.PI / 180; function p(t) { return t * m; } function x(t, n) { return Math.abs(t - n) <= s * Math.max(1, Math.abs(t), Math.abs(n)); } function w() { const t = new M(4); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t; } function q(t) { const n = new M(4); return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n; } function v(t, n) { return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t; } function g(t) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t; } function y(t, n, r, u) { const e = new M(4); return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e; } function A(t, n, r, u, e) { return t[0] = n, t[1] = r, t[2] = u, t[3] = e, t; } function S(t, n) { if (t === n) { const r = n[1]; t[1] = n[2], t[2] = r; } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3]; return t; } function R(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = r * a - e * u; return o ? (o = 1 / o, t[0] = a * o, t[1] = -u * o, t[2] = -e * o, t[3] = r * o, t) : null;
        } function E(t, n) { const r = n[0]; return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = r, t; } function D(t) { return t[0] * t[3] - t[2] * t[1]; } function P(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = r[0],
                c = r[1],
                f = r[2],
                d = r[3]; return t[0] = u * i + a * c, t[1] = e * i + o * c, t[2] = u * f + a * d, t[3] = e * f + o * d, t;
        } function I(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = Math.sin(r),
                c = Math.cos(r); return t[0] = u * c + a * i, t[1] = e * c + o * i, t[2] = u * -i + a * c, t[3] = e * -i + o * c, t;
        } function T(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = r[0],
                c = r[1]; return t[0] = u * i, t[1] = e * i, t[2] = a * c, t[3] = o * c, t;
        } function L(t, n) {
            let r = Math.sin(n),
                u = Math.cos(n); return t[0] = u, t[1] = r, t[2] = -r, t[3] = u, t;
        } function V(t, n) { return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t; } function Y(t) { return `mat2(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`; } function j(t) { return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2)); } function z(t, n, r, u) { return t[2] = u[2] / u[0], r[0] = u[0], r[1] = u[1], r[3] = u[3] - t[2] * r[1], [t, n, r]; } function F(t, n, r) { return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t; } function O(t, n, r) { return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t; } function Q(t, n) { return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]; } function X(t, n) {
            let r = t[0],
                u = t[1],
                e = t[2],
                a = t[3],
                o = n[0],
                i = n[1],
                c = n[2],
                f = n[3]; return Math.abs(r - o) <= s * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(u - i) <= s * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(e - c) <= s * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(a - f) <= s * Math.max(1, Math.abs(a), Math.abs(f));
        } function Z(t, n, r) { return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t; } function k(t, n, r, u) { return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t[2] = n[2] + r[2] * u, t[3] = n[3] + r[3] * u, t; } const J = P,
            N = O; function U() { const t = new M(6); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t; } function W(t) { const n = new M(6); return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n; } function _(t, n) { return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t; } function B(t) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t; } function C(t, n, r, u, e, a) { const o = new M(6); return o[0] = t, o[1] = n, o[2] = r, o[3] = u, o[4] = e, o[5] = a, o; } function G(t, n, r, u, e, a, o) { return t[0] = n, t[1] = r, t[2] = u, t[3] = e, t[4] = a, t[5] = o, t; } function H(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = n[4],
                i = n[5],
                c = r * a - u * e; return c ? (c = 1 / c, t[0] = a * c, t[1] = -u * c, t[2] = -e * c, t[3] = r * c, t[4] = (e * i - a * o) * c, t[5] = (u * o - r * i) * c, t) : null;
        } function K(t) { return t[0] * t[3] - t[1] * t[2]; } function $(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                f = r[0],
                d = r[1],
                h = r[2],
                s = r[3],
                M = r[4],
                l = r[5]; return t[0] = u * f + a * d, t[1] = e * f + o * d, t[2] = u * h + a * s, t[3] = e * h + o * s, t[4] = u * M + a * l + i, t[5] = e * M + o * l + c, t;
        } function tt(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                f = Math.sin(r),
                d = Math.cos(r); return t[0] = u * d + a * f, t[1] = e * d + o * f, t[2] = u * -f + a * d, t[3] = e * -f + o * d, t[4] = i, t[5] = c, t;
        } function nt(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                f = r[0],
                d = r[1]; return t[0] = u * f, t[1] = e * f, t[2] = a * d, t[3] = o * d, t[4] = i, t[5] = c, t;
        } function rt(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                f = r[0],
                d = r[1]; return t[0] = u, t[1] = e, t[2] = a, t[3] = o, t[4] = u * f + a * d + i, t[5] = e * f + o * d + c, t;
        } function ut(t, n) {
            let r = Math.sin(n),
                u = Math.cos(n); return t[0] = u, t[1] = r, t[2] = -r, t[3] = u, t[4] = 0, t[5] = 0, t;
        } function et(t, n) { return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t; } function at(t, n) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t; } function ot(t) { return `mat2d(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]}, ${t[4]}, ${t[5]})`; } function it(t) { return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1); } function ct(t, n, r) { return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t; } function ft(t, n, r) { return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t; } function dt(t, n, r) { return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t; } function ht(t, n, r, u) { return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t[2] = n[2] + r[2] * u, t[3] = n[3] + r[3] * u, t[4] = n[4] + r[4] * u, t[5] = n[5] + r[5] * u, t; } function st(t, n) { return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]; } function Mt(t, n) {
            let r = t[0],
                u = t[1],
                e = t[2],
                a = t[3],
                o = t[4],
                i = t[5],
                c = n[0],
                f = n[1],
                d = n[2],
                h = n[3],
                M = n[4],
                l = n[5]; return Math.abs(r - c) <= s * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(u - f) <= s * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(e - d) <= s * Math.max(1, Math.abs(e), Math.abs(d)) && Math.abs(a - h) <= s * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(o - M) <= s * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(i - l) <= s * Math.max(1, Math.abs(i), Math.abs(l));
        } const lt = $,
            bt = ft; function mt() { const t = new M(9); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t; } function pt(t, n) { return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t; } function xt(t) { const n = new M(9); return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n; } function wt(t, n) { return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t; } function qt(t, n, r, u, e, a, o, i, c) { const f = new M(9); return f[0] = t, f[1] = n, f[2] = r, f[3] = u, f[4] = e, f[5] = a, f[6] = o, f[7] = i, f[8] = c, f; } function vt(t, n, r, u, e, a, o, i, c, f) { return t[0] = n, t[1] = r, t[2] = u, t[3] = e, t[4] = a, t[5] = o, t[6] = i, t[7] = c, t[8] = f, t; } function gt(t) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t; } function yt(t, n) {
            if (t === n) {
                let r = n[1],
                    u = n[2],
                    e = n[5]; t[1] = n[3], t[2] = n[6], t[3] = r, t[5] = n[7], t[6] = u, t[7] = e;
            } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8]; return t;
        } function At(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = n[4],
                i = n[5],
                c = n[6],
                f = n[7],
                d = n[8],
                h = d * o - i * f,
                s = -d * a + i * c,
                M = f * a - o * c,
                l = r * h + u * s + e * M; return l ? (l = 1 / l, t[0] = h * l, t[1] = (-d * u + e * f) * l, t[2] = (i * u - e * o) * l, t[3] = s * l, t[4] = (d * r - e * c) * l, t[5] = (-i * r + e * a) * l, t[6] = M * l, t[7] = (-f * r + u * c) * l, t[8] = (o * r - u * a) * l, t) : null;
        } function St(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = n[4],
                i = n[5],
                c = n[6],
                f = n[7],
                d = n[8]; return t[0] = o * d - i * f, t[1] = e * f - u * d, t[2] = u * i - e * o, t[3] = i * c - a * d, t[4] = r * d - e * c, t[5] = e * a - r * i, t[6] = a * f - o * c, t[7] = u * c - r * f, t[8] = r * o - u * a, t;
        } function Rt(t) {
            let n = t[0],
                r = t[1],
                u = t[2],
                e = t[3],
                a = t[4],
                o = t[5],
                i = t[6],
                c = t[7],
                f = t[8]; return n * (f * a - o * c) + r * (-f * e + o * i) + u * (c * e - a * i);
        } function Et(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                f = n[6],
                d = n[7],
                h = n[8],
                s = r[0],
                M = r[1],
                l = r[2],
                b = r[3],
                m = r[4],
                p = r[5],
                x = r[6],
                w = r[7],
                q = r[8]; return t[0] = s * u + M * o + l * f, t[1] = s * e + M * i + l * d, t[2] = s * a + M * c + l * h, t[3] = b * u + m * o + p * f, t[4] = b * e + m * i + p * d, t[5] = b * a + m * c + p * h, t[6] = x * u + w * o + q * f, t[7] = x * e + w * i + q * d, t[8] = x * a + w * c + q * h, t;
        } function Dt(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                f = n[6],
                d = n[7],
                h = n[8],
                s = r[0],
                M = r[1]; return t[0] = u, t[1] = e, t[2] = a, t[3] = o, t[4] = i, t[5] = c, t[6] = s * u + M * o + f, t[7] = s * e + M * i + d, t[8] = s * a + M * c + h, t;
        } function Pt(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                f = n[6],
                d = n[7],
                h = n[8],
                s = Math.sin(r),
                M = Math.cos(r); return t[0] = M * u + s * o, t[1] = M * e + s * i, t[2] = M * a + s * c, t[3] = M * o - s * u, t[4] = M * i - s * e, t[5] = M * c - s * a, t[6] = f, t[7] = d, t[8] = h, t;
        } function It(t, n, r) {
            let u = r[0],
                e = r[1]; return t[0] = u * n[0], t[1] = u * n[1], t[2] = u * n[2], t[3] = e * n[3], t[4] = e * n[4], t[5] = e * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
        } function Tt(t, n) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t; } function Lt(t, n) {
            let r = Math.sin(n),
                u = Math.cos(n); return t[0] = u, t[1] = r, t[2] = 0, t[3] = -r, t[4] = u, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
        } function Vt(t, n) { return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t; } function Yt(t, n) { return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t; } function jt(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = r + r,
                i = u + u,
                c = e + e,
                f = r * o,
                d = u * o,
                h = u * i,
                s = e * o,
                M = e * i,
                l = e * c,
                b = a * o,
                m = a * i,
                p = a * c; return t[0] = 1 - h - l, t[3] = d - p, t[6] = s + m, t[1] = d + p, t[4] = 1 - f - l, t[7] = M - b, t[2] = s - m, t[5] = M + b, t[8] = 1 - f - h, t;
        } function zt(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = n[4],
                i = n[5],
                c = n[6],
                f = n[7],
                d = n[8],
                h = n[9],
                s = n[10],
                M = n[11],
                l = n[12],
                b = n[13],
                m = n[14],
                p = n[15],
                x = r * i - u * o,
                w = r * c - e * o,
                q = r * f - a * o,
                v = u * c - e * i,
                g = u * f - a * i,
                y = e * f - a * c,
                A = d * b - h * l,
                S = d * m - s * l,
                R = d * p - M * l,
                E = h * m - s * b,
                D = h * p - M * b,
                P = s * p - M * m,
                I = x * P - w * D + q * E + v * R - g * S + y * A; return I ? (I = 1 / I, t[0] = (i * P - c * D + f * E) * I, t[1] = (c * R - o * P - f * S) * I, t[2] = (o * D - i * R + f * A) * I, t[3] = (e * D - u * P - a * E) * I, t[4] = (r * P - e * R + a * S) * I, t[5] = (u * R - r * D - a * A) * I, t[6] = (b * y - m * g + p * v) * I, t[7] = (m * q - l * y - p * w) * I, t[8] = (l * g - b * q + p * x) * I, t) : null;
        } function Ft(t, n, r) { return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / r, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t; } function Ot(t) { return `mat3(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]}, ${t[4]}, ${t[5]}, ${t[6]}, ${t[7]}, ${t[8]})`; } function Qt(t) { return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2)); } function Xt(t, n, r) { return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], t[8] = n[8] + r[8], t; } function Zt(t, n, r) { return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], t[8] = n[8] - r[8], t; } function kt(t, n, r) { return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t; } function Jt(t, n, r, u) { return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t[2] = n[2] + r[2] * u, t[3] = n[3] + r[3] * u, t[4] = n[4] + r[4] * u, t[5] = n[5] + r[5] * u, t[6] = n[6] + r[6] * u, t[7] = n[7] + r[7] * u, t[8] = n[8] + r[8] * u, t; } function Nt(t, n) { return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]; } function Ut(t, n) {
            let r = t[0],
                u = t[1],
                e = t[2],
                a = t[3],
                o = t[4],
                i = t[5],
                c = t[6],
                f = t[7],
                d = t[8],
                h = n[0],
                M = n[1],
                l = n[2],
                b = n[3],
                m = n[4],
                p = n[5],
                x = n[6],
                w = n[7],
                q = n[8]; return Math.abs(r - h) <= s * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(u - M) <= s * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(e - l) <= s * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(a - b) <= s * Math.max(1, Math.abs(a), Math.abs(b)) && Math.abs(o - m) <= s * Math.max(1, Math.abs(o), Math.abs(m)) && Math.abs(i - p) <= s * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(c - x) <= s * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(f - w) <= s * Math.max(1, Math.abs(f), Math.abs(w)) && Math.abs(d - q) <= s * Math.max(1, Math.abs(d), Math.abs(q));
        } const Wt = Et,
            _t = Zt; function Bt() { const t = new M(16); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t; } function Ct(t) { const n = new M(16); return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n; } function Gt(t, n) { return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t; } function Ht(t, n, r, u, e, a, o, i, c, f, d, h, s, l, b, m) { const p = new M(16); return p[0] = t, p[1] = n, p[2] = r, p[3] = u, p[4] = e, p[5] = a, p[6] = o, p[7] = i, p[8] = c, p[9] = f, p[10] = d, p[11] = h, p[12] = s, p[13] = l, p[14] = b, p[15] = m, p; } function Kt(t, n, r, u, e, a, o, i, c, f, d, h, s, M, l, b, m) { return t[0] = n, t[1] = r, t[2] = u, t[3] = e, t[4] = a, t[5] = o, t[6] = i, t[7] = c, t[8] = f, t[9] = d, t[10] = h, t[11] = s, t[12] = M, t[13] = l, t[14] = b, t[15] = m, t; } function $t(t) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t; } function tn(t, n) {
            if (t === n) {
                let r = n[1],
                    u = n[2],
                    e = n[3],
                    a = n[6],
                    o = n[7],
                    i = n[11]; t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = r, t[6] = n[9], t[7] = n[13], t[8] = u, t[9] = a, t[11] = n[14], t[12] = e, t[13] = o, t[14] = i;
            } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15]; return t;
        } function nn(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = n[4],
                i = n[5],
                c = n[6],
                f = n[7],
                d = n[8],
                h = n[9],
                s = n[10],
                M = n[11],
                l = n[12],
                b = n[13],
                m = n[14],
                p = n[15],
                x = r * i - u * o,
                w = r * c - e * o,
                q = r * f - a * o,
                v = u * c - e * i,
                g = u * f - a * i,
                y = e * f - a * c,
                A = d * b - h * l,
                S = d * m - s * l,
                R = d * p - M * l,
                E = h * m - s * b,
                D = h * p - M * b,
                P = s * p - M * m,
                I = x * P - w * D + q * E + v * R - g * S + y * A; return I ? (I = 1 / I, t[0] = (i * P - c * D + f * E) * I, t[1] = (e * D - u * P - a * E) * I, t[2] = (b * y - m * g + p * v) * I, t[3] = (s * g - h * y - M * v) * I, t[4] = (c * R - o * P - f * S) * I, t[5] = (r * P - e * R + a * S) * I, t[6] = (m * q - l * y - p * w) * I, t[7] = (d * y - s * q + M * w) * I, t[8] = (o * D - i * R + f * A) * I, t[9] = (u * R - r * D - a * A) * I, t[10] = (l * g - b * q + p * x) * I, t[11] = (h * q - d * g - M * x) * I, t[12] = (i * S - o * E - c * A) * I, t[13] = (r * E - u * S + e * A) * I, t[14] = (b * w - l * v - m * x) * I, t[15] = (d * v - h * w + s * x) * I, t) : null;
        } function rn(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = n[4],
                i = n[5],
                c = n[6],
                f = n[7],
                d = n[8],
                h = n[9],
                s = n[10],
                M = n[11],
                l = n[12],
                b = n[13],
                m = n[14],
                p = n[15]; return t[0] = i * (s * p - M * m) - h * (c * p - f * m) + b * (c * M - f * s), t[1] = -(u * (s * p - M * m) - h * (e * p - a * m) + b * (e * M - a * s)), t[2] = u * (c * p - f * m) - i * (e * p - a * m) + b * (e * f - a * c), t[3] = -(u * (c * M - f * s) - i * (e * M - a * s) + h * (e * f - a * c)), t[4] = -(o * (s * p - M * m) - d * (c * p - f * m) + l * (c * M - f * s)), t[5] = r * (s * p - M * m) - d * (e * p - a * m) + l * (e * M - a * s), t[6] = -(r * (c * p - f * m) - o * (e * p - a * m) + l * (e * f - a * c)), t[7] = r * (c * M - f * s) - o * (e * M - a * s) + d * (e * f - a * c), t[8] = o * (h * p - M * b) - d * (i * p - f * b) + l * (i * M - f * h), t[9] = -(r * (h * p - M * b) - d * (u * p - a * b) + l * (u * M - a * h)), t[10] = r * (i * p - f * b) - o * (u * p - a * b) + l * (u * f - a * i), t[11] = -(r * (i * M - f * h) - o * (u * M - a * h) + d * (u * f - a * i)), t[12] = -(o * (h * m - s * b) - d * (i * m - c * b) + l * (i * s - c * h)), t[13] = r * (h * m - s * b) - d * (u * m - e * b) + l * (u * s - e * h), t[14] = -(r * (i * m - c * b) - o * (u * m - e * b) + l * (u * c - e * i)), t[15] = r * (i * s - c * h) - o * (u * s - e * h) + d * (u * c - e * i), t;
        } function un(t) {
            let n = t[0],
                r = t[1],
                u = t[2],
                e = t[3],
                a = t[4],
                o = t[5],
                i = t[6],
                c = t[7],
                f = t[8],
                d = t[9],
                h = t[10],
                s = t[11],
                M = t[12],
                l = t[13],
                b = t[14],
                m = t[15]; return (n * o - r * a) * (h * m - s * b) - (n * i - u * a) * (d * m - s * l) + (n * c - e * a) * (d * b - h * l) + (r * i - u * o) * (f * m - s * M) - (r * c - e * o) * (f * b - h * M) + (u * c - e * i) * (f * l - d * M);
        } function en(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                f = n[6],
                d = n[7],
                h = n[8],
                s = n[9],
                M = n[10],
                l = n[11],
                b = n[12],
                m = n[13],
                p = n[14],
                x = n[15],
                w = r[0],
                q = r[1],
                v = r[2],
                g = r[3]; return t[0] = w * u + q * i + v * h + g * b, t[1] = w * e + q * c + v * s + g * m, t[2] = w * a + q * f + v * M + g * p, t[3] = w * o + q * d + v * l + g * x, w = r[4], q = r[5], v = r[6], g = r[7], t[4] = w * u + q * i + v * h + g * b, t[5] = w * e + q * c + v * s + g * m, t[6] = w * a + q * f + v * M + g * p, t[7] = w * o + q * d + v * l + g * x, w = r[8], q = r[9], v = r[10], g = r[11], t[8] = w * u + q * i + v * h + g * b, t[9] = w * e + q * c + v * s + g * m, t[10] = w * a + q * f + v * M + g * p, t[11] = w * o + q * d + v * l + g * x, w = r[12], q = r[13], v = r[14], g = r[15], t[12] = w * u + q * i + v * h + g * b, t[13] = w * e + q * c + v * s + g * m, t[14] = w * a + q * f + v * M + g * p, t[15] = w * o + q * d + v * l + g * x, t;
        } function an(t, n, r) {
            let u,
                e,
                a,
                o,
                i,
                c,
                f,
                d,
                h,
                s,
                M,
                l,
                b = r[0],
                m = r[1],
                p = r[2]; return n === t ? (t[12] = n[0] * b + n[4] * m + n[8] * p + n[12], t[13] = n[1] * b + n[5] * m + n[9] * p + n[13], t[14] = n[2] * b + n[6] * m + n[10] * p + n[14], t[15] = n[3] * b + n[7] * m + n[11] * p + n[15]) : (u = n[0], e = n[1], a = n[2], o = n[3], i = n[4], c = n[5], f = n[6], d = n[7], h = n[8], s = n[9], M = n[10], l = n[11], t[0] = u, t[1] = e, t[2] = a, t[3] = o, t[4] = i, t[5] = c, t[6] = f, t[7] = d, t[8] = h, t[9] = s, t[10] = M, t[11] = l, t[12] = u * b + i * m + h * p + n[12], t[13] = e * b + c * m + s * p + n[13], t[14] = a * b + f * m + M * p + n[14], t[15] = o * b + d * m + l * p + n[15]), t;
        } function on(t, n, r) {
            let u = r[0],
                e = r[1],
                a = r[2]; return t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u, t[3] = n[3] * u, t[4] = n[4] * e, t[5] = n[5] * e, t[6] = n[6] * e, t[7] = n[7] * e, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = n[11] * a, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
        } function cn(t, n, r, u) {
            let e,
                a,
                o,
                i,
                c,
                f,
                d,
                h,
                M,
                l,
                b,
                m,
                p,
                x,
                w,
                q,
                v,
                g,
                y,
                A,
                S,
                R,
                E,
                D,
                P = u[0],
                I = u[1],
                T = u[2],
                L = Math.sqrt(P * P + I * I + T * T); return Math.abs(L) < s ? null : (P *= L = 1 / L, I *= L, T *= L, e = Math.sin(r), o = 1 - (a = Math.cos(r)), i = n[0], c = n[1], f = n[2], d = n[3], h = n[4], M = n[5], l = n[6], b = n[7], m = n[8], p = n[9], x = n[10], w = n[11], q = P * P * o + a, v = I * P * o + T * e, g = T * P * o - I * e, y = P * I * o - T * e, A = I * I * o + a, S = T * I * o + P * e, R = P * T * o + I * e, E = I * T * o - P * e, D = T * T * o + a, t[0] = i * q + h * v + m * g, t[1] = c * q + M * v + p * g, t[2] = f * q + l * v + x * g, t[3] = d * q + b * v + w * g, t[4] = i * y + h * A + m * S, t[5] = c * y + M * A + p * S, t[6] = f * y + l * A + x * S, t[7] = d * y + b * A + w * S, t[8] = i * R + h * E + m * D, t[9] = c * R + M * E + p * D, t[10] = f * R + l * E + x * D, t[11] = d * R + b * E + w * D, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t);
        } function fn(t, n, r) {
            let u = Math.sin(r),
                e = Math.cos(r),
                a = n[4],
                o = n[5],
                i = n[6],
                c = n[7],
                f = n[8],
                d = n[9],
                h = n[10],
                s = n[11]; return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = a * e + f * u, t[5] = o * e + d * u, t[6] = i * e + h * u, t[7] = c * e + s * u, t[8] = f * e - a * u, t[9] = d * e - o * u, t[10] = h * e - i * u, t[11] = s * e - c * u, t;
        } function dn(t, n, r) {
            let u = Math.sin(r),
                e = Math.cos(r),
                a = n[0],
                o = n[1],
                i = n[2],
                c = n[3],
                f = n[8],
                d = n[9],
                h = n[10],
                s = n[11]; return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = a * e - f * u, t[1] = o * e - d * u, t[2] = i * e - h * u, t[3] = c * e - s * u, t[8] = a * u + f * e, t[9] = o * u + d * e, t[10] = i * u + h * e, t[11] = c * u + s * e, t;
        } function hn(t, n, r) {
            let u = Math.sin(r),
                e = Math.cos(r),
                a = n[0],
                o = n[1],
                i = n[2],
                c = n[3],
                f = n[4],
                d = n[5],
                h = n[6],
                s = n[7]; return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = a * e + f * u, t[1] = o * e + d * u, t[2] = i * e + h * u, t[3] = c * e + s * u, t[4] = f * e - a * u, t[5] = d * e - o * u, t[6] = h * e - i * u, t[7] = s * e - c * u, t;
        } function sn(t, n) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t; } function Mn(t, n) { return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t; } function ln(t, n, r) {
            let u,
                e,
                a,
                o = r[0],
                i = r[1],
                c = r[2],
                f = Math.sqrt(o * o + i * i + c * c); return Math.abs(f) < s ? null : (o *= f = 1 / f, i *= f, c *= f, u = Math.sin(n), a = 1 - (e = Math.cos(n)), t[0] = o * o * a + e, t[1] = i * o * a + c * u, t[2] = c * o * a - i * u, t[3] = 0, t[4] = o * i * a - c * u, t[5] = i * i * a + e, t[6] = c * i * a + o * u, t[7] = 0, t[8] = o * c * a + i * u, t[9] = i * c * a - o * u, t[10] = c * c * a + e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
        } function bn(t, n) {
            let r = Math.sin(n),
                u = Math.cos(n); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = u, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        } function mn(t, n) {
            let r = Math.sin(n),
                u = Math.cos(n); return t[0] = u, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = u, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        } function pn(t, n) {
            let r = Math.sin(n),
                u = Math.cos(n); return t[0] = u, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        } function xn(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = u + u,
                c = e + e,
                f = a + a,
                d = u * i,
                h = u * c,
                s = u * f,
                M = e * c,
                l = e * f,
                b = a * f,
                m = o * i,
                p = o * c,
                x = o * f; return t[0] = 1 - (M + b), t[1] = h + x, t[2] = s - p, t[3] = 0, t[4] = h - x, t[5] = 1 - (d + b), t[6] = l + m, t[7] = 0, t[8] = s + p, t[9] = l - m, t[10] = 1 - (d + M), t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
        } function wn(t, n) { return t[0] = n[12], t[1] = n[13], t[2] = n[14], t; } function qn(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[4],
                o = n[5],
                i = n[6],
                c = n[8],
                f = n[9],
                d = n[10]; return t[0] = Math.sqrt(r * r + u * u + e * e), t[1] = Math.sqrt(a * a + o * o + i * i), t[2] = Math.sqrt(c * c + f * f + d * d), t;
        } function vn(t, n) {
            let r = n[0] + n[5] + n[10],
                u = 0; return r > 0 ? (u = 2 * Math.sqrt(r + 1), t[3] = 0.25 * u, t[0] = (n[6] - n[9]) / u, t[1] = (n[8] - n[2]) / u, t[2] = (n[1] - n[4]) / u) : n[0] > n[5] & n[0] > n[10] ? (u = 2 * Math.sqrt(1 + n[0] - n[5] - n[10]), t[3] = (n[6] - n[9]) / u, t[0] = 0.25 * u, t[1] = (n[1] + n[4]) / u, t[2] = (n[8] + n[2]) / u) : n[5] > n[10] ? (u = 2 * Math.sqrt(1 + n[5] - n[0] - n[10]), t[3] = (n[8] - n[2]) / u, t[0] = (n[1] + n[4]) / u, t[1] = 0.25 * u, t[2] = (n[6] + n[9]) / u) : (u = 2 * Math.sqrt(1 + n[10] - n[0] - n[5]), t[3] = (n[1] - n[4]) / u, t[0] = (n[8] + n[2]) / u, t[1] = (n[6] + n[9]) / u, t[2] = 0.25 * u), t;
        } function gn(t, n, r, u) {
            let e = n[0],
                a = n[1],
                o = n[2],
                i = n[3],
                c = e + e,
                f = a + a,
                d = o + o,
                h = e * c,
                s = e * f,
                M = e * d,
                l = a * f,
                b = a * d,
                m = o * d,
                p = i * c,
                x = i * f,
                w = i * d,
                q = u[0],
                v = u[1],
                g = u[2]; return t[0] = (1 - (l + m)) * q, t[1] = (s + w) * q, t[2] = (M - x) * q, t[3] = 0, t[4] = (s - w) * v, t[5] = (1 - (h + m)) * v, t[6] = (b + p) * v, t[7] = 0, t[8] = (M + x) * g, t[9] = (b - p) * g, t[10] = (1 - (h + l)) * g, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
        } function yn(t, n, r, u, e) {
            let a = n[0],
                o = n[1],
                i = n[2],
                c = n[3],
                f = a + a,
                d = o + o,
                h = i + i,
                s = a * f,
                M = a * d,
                l = a * h,
                b = o * d,
                m = o * h,
                p = i * h,
                x = c * f,
                w = c * d,
                q = c * h,
                v = u[0],
                g = u[1],
                y = u[2],
                A = e[0],
                S = e[1],
                R = e[2]; return t[0] = (1 - (b + p)) * v, t[1] = (M + q) * v, t[2] = (l - w) * v, t[3] = 0, t[4] = (M - q) * g, t[5] = (1 - (s + p)) * g, t[6] = (m + x) * g, t[7] = 0, t[8] = (l + w) * y, t[9] = (m - x) * y, t[10] = (1 - (s + b)) * y, t[11] = 0, t[12] = r[0] + A - (t[0] * A + t[4] * S + t[8] * R), t[13] = r[1] + S - (t[1] * A + t[5] * S + t[9] * R), t[14] = r[2] + R - (t[2] * A + t[6] * S + t[10] * R), t[15] = 1, t;
        } function An(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = r + r,
                i = u + u,
                c = e + e,
                f = r * o,
                d = u * o,
                h = u * i,
                s = e * o,
                M = e * i,
                l = e * c,
                b = a * o,
                m = a * i,
                p = a * c; return t[0] = 1 - h - l, t[1] = d + p, t[2] = s - m, t[3] = 0, t[4] = d - p, t[5] = 1 - f - l, t[6] = M + b, t[7] = 0, t[8] = s + m, t[9] = M - b, t[10] = 1 - f - h, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        } function Sn(t, n, r, u, e, a, o) {
            let i = 1 / (r - n),
                c = 1 / (e - u),
                f = 1 / (a - o); return t[0] = 2 * a * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * a * c, t[6] = 0, t[7] = 0, t[8] = (r + n) * i, t[9] = (e + u) * c, t[10] = (o + a) * f, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * a * 2 * f, t[15] = 0, t;
        } function Rn(t, n, r, u, e) {
            let a = 1 / Math.tan(n / 2),
                o = 1 / (u - e); return t[0] = a / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (e + u) * o, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * e * u * o, t[15] = 0, t;
        } function En(t, n, r, u) {
            let e = Math.tan(n.upDegrees * Math.PI / 180),
                a = Math.tan(n.downDegrees * Math.PI / 180),
                o = Math.tan(n.leftDegrees * Math.PI / 180),
                i = Math.tan(n.rightDegrees * Math.PI / 180),
                c = 2 / (o + i),
                f = 2 / (e + a); return t[0] = c, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = f, t[6] = 0, t[7] = 0, t[8] = -(o - i) * c * 0.5, t[9] = (e - a) * f * 0.5, t[10] = u / (r - u), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * r / (r - u), t[15] = 0, t;
        } function Dn(t, n, r, u, e, a, o) {
            let i = 1 / (n - r),
                c = 1 / (u - e),
                f = 1 / (a - o); return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * f, t[11] = 0, t[12] = (n + r) * i, t[13] = (e + u) * c, t[14] = (o + a) * f, t[15] = 1, t;
        } function Pn(t, n, r, u) {
            let e,
                a,
                o,
                i,
                c,
                f,
                d,
                h,
                M,
                l,
                b = n[0],
                m = n[1],
                p = n[2],
                x = u[0],
                w = u[1],
                q = u[2],
                v = r[0],
                g = r[1],
                y = r[2]; return Math.abs(b - v) < s && Math.abs(m - g) < s && Math.abs(p - y) < s ? mat4.identity(t) : (d = b - v, h = m - g, M = p - y, e = w * (M *= l = 1 / Math.sqrt(d * d + h * h + M * M)) - q * (h *= l), a = q * (d *= l) - x * M, o = x * h - w * d, (l = Math.sqrt(e * e + a * a + o * o)) ? (e *= l = 1 / l, a *= l, o *= l) : (e = 0, a = 0, o = 0), i = h * o - M * a, c = M * e - d * o, f = d * a - h * e, (l = Math.sqrt(i * i + c * c + f * f)) ? (i *= l = 1 / l, c *= l, f *= l) : (i = 0, c = 0, f = 0), t[0] = e, t[1] = i, t[2] = d, t[3] = 0, t[4] = a, t[5] = c, t[6] = h, t[7] = 0, t[8] = o, t[9] = f, t[10] = M, t[11] = 0, t[12] = -(e * b + a * m + o * p), t[13] = -(i * b + c * m + f * p), t[14] = -(d * b + h * m + M * p), t[15] = 1, t);
        } function In(t, n, r, u) {
            let e = n[0],
                a = n[1],
                o = n[2],
                i = u[0],
                c = u[1],
                f = u[2],
                d = e - r[0],
                h = a - r[1],
                s = o - r[2],
                M = d * d + h * h + s * s; M > 0 && (d *= M = 1 / Math.sqrt(M), h *= M, s *= M); let l = c * s - f * h,
                b = f * d - i * s,
                m = i * h - c * d; return t[0] = l, t[1] = b, t[2] = m, t[3] = 0, t[4] = h * m - s * b, t[5] = s * l - d * m, t[6] = d * b - h * l, t[7] = 0, t[8] = d, t[9] = h, t[10] = s, t[11] = 0, t[12] = e, t[13] = a, t[14] = o, t[15] = 1, t;
        } function Tn(t) { return `mat4(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]}, ${t[4]}, ${t[5]}, ${t[6]}, ${t[7]}, ${t[8]}, ${t[9]}, ${t[10]}, ${t[11]}, ${t[12]}, ${t[13]}, ${t[14]}, ${t[15]})`; } function Ln(t) { return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2)); } function Vn(t, n, r) { return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], t[8] = n[8] + r[8], t[9] = n[9] + r[9], t[10] = n[10] + r[10], t[11] = n[11] + r[11], t[12] = n[12] + r[12], t[13] = n[13] + r[13], t[14] = n[14] + r[14], t[15] = n[15] + r[15], t; } function Yn(t, n, r) { return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], t[8] = n[8] - r[8], t[9] = n[9] - r[9], t[10] = n[10] - r[10], t[11] = n[11] - r[11], t[12] = n[12] - r[12], t[13] = n[13] - r[13], t[14] = n[14] - r[14], t[15] = n[15] - r[15], t; } function jn(t, n, r) { return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = n[11] * r, t[12] = n[12] * r, t[13] = n[13] * r, t[14] = n[14] * r, t[15] = n[15] * r, t; } function zn(t, n, r, u) { return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t[2] = n[2] + r[2] * u, t[3] = n[3] + r[3] * u, t[4] = n[4] + r[4] * u, t[5] = n[5] + r[5] * u, t[6] = n[6] + r[6] * u, t[7] = n[7] + r[7] * u, t[8] = n[8] + r[8] * u, t[9] = n[9] + r[9] * u, t[10] = n[10] + r[10] * u, t[11] = n[11] + r[11] * u, t[12] = n[12] + r[12] * u, t[13] = n[13] + r[13] * u, t[14] = n[14] + r[14] * u, t[15] = n[15] + r[15] * u, t; } function Fn(t, n) { return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15]; } function On(t, n) {
            let r = t[0],
                u = t[1],
                e = t[2],
                a = t[3],
                o = t[4],
                i = t[5],
                c = t[6],
                f = t[7],
                d = t[8],
                h = t[9],
                M = t[10],
                l = t[11],
                b = t[12],
                m = t[13],
                p = t[14],
                x = t[15],
                w = n[0],
                q = n[1],
                v = n[2],
                g = n[3],
                y = n[4],
                A = n[5],
                S = n[6],
                R = n[7],
                E = n[8],
                D = n[9],
                P = n[10],
                I = n[11],
                T = n[12],
                L = n[13],
                V = n[14],
                Y = n[15]; return Math.abs(r - w) <= s * Math.max(1, Math.abs(r), Math.abs(w)) && Math.abs(u - q) <= s * Math.max(1, Math.abs(u), Math.abs(q)) && Math.abs(e - v) <= s * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(a - g) <= s * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(o - y) <= s * Math.max(1, Math.abs(o), Math.abs(y)) && Math.abs(i - A) <= s * Math.max(1, Math.abs(i), Math.abs(A)) && Math.abs(c - S) <= s * Math.max(1, Math.abs(c), Math.abs(S)) && Math.abs(f - R) <= s * Math.max(1, Math.abs(f), Math.abs(R)) && Math.abs(d - E) <= s * Math.max(1, Math.abs(d), Math.abs(E)) && Math.abs(h - D) <= s * Math.max(1, Math.abs(h), Math.abs(D)) && Math.abs(M - P) <= s * Math.max(1, Math.abs(M), Math.abs(P)) && Math.abs(l - I) <= s * Math.max(1, Math.abs(l), Math.abs(I)) && Math.abs(b - T) <= s * Math.max(1, Math.abs(b), Math.abs(T)) && Math.abs(m - L) <= s * Math.max(1, Math.abs(m), Math.abs(L)) && Math.abs(p - V) <= s * Math.max(1, Math.abs(p), Math.abs(V)) && Math.abs(x - Y) <= s * Math.max(1, Math.abs(x), Math.abs(Y));
        } const Qn = en,
            Xn = Yn; function Zn() { const t = new M(3); return t[0] = 0, t[1] = 0, t[2] = 0, t; } function kn(t) { const n = new M(3); return n[0] = t[0], n[1] = t[1], n[2] = t[2], n; } function Jn(t) {
            let n = t[0],
                r = t[1],
                u = t[2]; return Math.sqrt(n * n + r * r + u * u);
        } function Nn(t, n, r) { const u = new M(3); return u[0] = t, u[1] = n, u[2] = r, u; } function Un(t, n) { return t[0] = n[0], t[1] = n[1], t[2] = n[2], t; } function Wn(t, n, r, u) { return t[0] = n, t[1] = r, t[2] = u, t; } function _n(t, n, r) { return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t; } function Bn(t, n, r) { return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t; } function Cn(t, n, r) { return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t; } function Gn(t, n, r) { return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t; } function Hn(t, n) { return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t; } function Kn(t, n) { return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t; } function $n(t, n, r) { return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t; } function tr(t, n, r) { return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t; } function nr(t, n) { return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t; } function rr(t, n, r) { return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t; } function ur(t, n, r, u) { return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t[2] = n[2] + r[2] * u, t; } function er(t, n) {
            let r = n[0] - t[0],
                u = n[1] - t[1],
                e = n[2] - t[2]; return Math.sqrt(r * r + u * u + e * e);
        } function ar(t, n) {
            let r = n[0] - t[0],
                u = n[1] - t[1],
                e = n[2] - t[2]; return r * r + u * u + e * e;
        } function or(t) {
            let n = t[0],
                r = t[1],
                u = t[2]; return n * n + r * r + u * u;
        } function ir(t, n) { return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t; } function cr(t, n) { return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t; } function fr(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = r * r + u * u + e * e; return a > 0 && (a = 1 / Math.sqrt(a), t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a), t;
        } function dr(t, n) { return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]; } function hr(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = r[0],
                i = r[1],
                c = r[2]; return t[0] = e * c - a * i, t[1] = a * o - u * c, t[2] = u * i - e * o, t;
        } function sr(t, n, r, u) {
            let e = n[0],
                a = n[1],
                o = n[2]; return t[0] = e + u * (r[0] - e), t[1] = a + u * (r[1] - a), t[2] = o + u * (r[2] - o), t;
        } function Mr(t, n, r, u, e, a) {
            let o = a * a,
                i = o * (2 * a - 3) + 1,
                c = o * (a - 2) + a,
                f = o * (a - 1),
                d = o * (3 - 2 * a); return t[0] = n[0] * i + r[0] * c + u[0] * f + e[0] * d, t[1] = n[1] * i + r[1] * c + u[1] * f + e[1] * d, t[2] = n[2] * i + r[2] * c + u[2] * f + e[2] * d, t;
        } function lr(t, n, r, u, e, a) {
            let o = 1 - a,
                i = o * o,
                c = a * a,
                f = i * o,
                d = 3 * a * i,
                h = 3 * c * o,
                s = c * a; return t[0] = n[0] * f + r[0] * d + u[0] * h + e[0] * s, t[1] = n[1] * f + r[1] * d + u[1] * h + e[1] * s, t[2] = n[2] * f + r[2] * d + u[2] * h + e[2] * s, t;
        } function br(t, n) {
            n = n || 1; let r = 2 * l() * Math.PI,
                u = 2 * l() - 1,
                e = Math.sqrt(1 - u * u) * n; return t[0] = Math.cos(r) * e, t[1] = Math.sin(r) * e, t[2] = u * n, t;
        } function mr(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = r[3] * u + r[7] * e + r[11] * a + r[15]; return o = o || 1, t[0] = (r[0] * u + r[4] * e + r[8] * a + r[12]) / o, t[1] = (r[1] * u + r[5] * e + r[9] * a + r[13]) / o, t[2] = (r[2] * u + r[6] * e + r[10] * a + r[14]) / o, t;
        } function pr(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2]; return t[0] = u * r[0] + e * r[3] + a * r[6], t[1] = u * r[1] + e * r[4] + a * r[7], t[2] = u * r[2] + e * r[5] + a * r[8], t;
        } function xr(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = r[0],
                i = r[1],
                c = r[2],
                f = r[3],
                d = f * u + i * a - c * e,
                h = f * e + c * u - o * a,
                s = f * a + o * e - i * u,
                M = -o * u - i * e - c * a; return t[0] = d * f + M * -o + h * -c - s * -i, t[1] = h * f + M * -i + s * -o - d * -c, t[2] = s * f + M * -c + d * -i - h * -o, t;
        } function wr(t, n, r, u) {
            let e = [],
                a = []; return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], a[0] = e[0], a[1] = e[1] * Math.cos(u) - e[2] * Math.sin(u), a[2] = e[1] * Math.sin(u) + e[2] * Math.cos(u), t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t;
        } function qr(t, n, r, u) {
            let e = [],
                a = []; return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], a[0] = e[2] * Math.sin(u) + e[0] * Math.cos(u), a[1] = e[1], a[2] = e[2] * Math.cos(u) - e[0] * Math.sin(u), t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t;
        } function vr(t, n, r, u) {
            let e = [],
                a = []; return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], a[0] = e[0] * Math.cos(u) - e[1] * Math.sin(u), a[1] = e[0] * Math.sin(u) + e[1] * Math.cos(u), a[2] = e[2], t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t;
        } function gr(t, n) {
            let r = Nn(t[0], t[1], t[2]),
                u = Nn(n[0], n[1], n[2]); fr(r, r), fr(u, u); const e = dr(r, u); return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e);
        } function yr(t) { return `vec3(${t[0]}, ${t[1]}, ${t[2]})`; } function Ar(t, n) { return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]; } function Sr(t, n) {
            let r = t[0],
                u = t[1],
                e = t[2],
                a = n[0],
                o = n[1],
                i = n[2]; return Math.abs(r - a) <= s * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(u - o) <= s * Math.max(1, Math.abs(u), Math.abs(o)) && Math.abs(e - i) <= s * Math.max(1, Math.abs(e), Math.abs(i));
        } const Rr = Bn,
            Er = Cn,
            Dr = Gn,
            Pr = er,
            Ir = ar,
            Tr = Jn,
            Lr = or,
            Vr = (function () {
                const t = Zn(); return function (n, r, u, e, a, o) {
                    let i,
                        c; for (r || (r = 3), u || (u = 0), c = e ? Math.min(e * r + u, n.length) : n.length, i = u; i < c; i += r)t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], a(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2]; return n;
                };
            }()); function Yr() { const t = new M(4); return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t; } function jr(t) { const n = new M(4); return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n; } function zr(t, n, r, u) { const e = new M(4); return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e; } function Fr(t, n) { return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t; } function Or(t, n, r, u, e) { return t[0] = n, t[1] = r, t[2] = u, t[3] = e, t; } function Qr(t, n, r) { return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t; } function Xr(t, n, r) { return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t; } function Zr(t, n, r) { return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t[3] = n[3] * r[3], t; } function kr(t, n, r) { return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t[3] = n[3] / r[3], t; } function Jr(t, n) { return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t; } function Nr(t, n) { return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t; } function Ur(t, n, r) { return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t[3] = Math.min(n[3], r[3]), t; } function Wr(t, n, r) { return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t[3] = Math.max(n[3], r[3]), t; } function _r(t, n) { return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t; } function Br(t, n, r) { return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t; } function Cr(t, n, r, u) { return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t[2] = n[2] + r[2] * u, t[3] = n[3] + r[3] * u, t; } function Gr(t, n) {
            let r = n[0] - t[0],
                u = n[1] - t[1],
                e = n[2] - t[2],
                a = n[3] - t[3]; return Math.sqrt(r * r + u * u + e * e + a * a);
        } function Hr(t, n) {
            let r = n[0] - t[0],
                u = n[1] - t[1],
                e = n[2] - t[2],
                a = n[3] - t[3]; return r * r + u * u + e * e + a * a;
        } function Kr(t) {
            let n = t[0],
                r = t[1],
                u = t[2],
                e = t[3]; return Math.sqrt(n * n + r * r + u * u + e * e);
        } function $r(t) {
            let n = t[0],
                r = t[1],
                u = t[2],
                e = t[3]; return n * n + r * r + u * u + e * e;
        } function tu(t, n) { return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t; } function nu(t, n) { return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t; } function ru(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = r * r + u * u + e * e + a * a; return o > 0 && (o = 1 / Math.sqrt(o), t[0] = r * o, t[1] = u * o, t[2] = e * o, t[3] = a * o), t;
        } function uu(t, n) { return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]; } function eu(t, n, r, u) {
            let e = n[0],
                a = n[1],
                o = n[2],
                i = n[3]; return t[0] = e + u * (r[0] - e), t[1] = a + u * (r[1] - a), t[2] = o + u * (r[2] - o), t[3] = i + u * (r[3] - i), t;
        } function au(t, n) { return n = n || 1, t[0] = l(), t[1] = l(), t[2] = l(), t[3] = l(), ru(t, t), Br(t, t, n), t; } function ou(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3]; return t[0] = r[0] * u + r[4] * e + r[8] * a + r[12] * o, t[1] = r[1] * u + r[5] * e + r[9] * a + r[13] * o, t[2] = r[2] * u + r[6] * e + r[10] * a + r[14] * o, t[3] = r[3] * u + r[7] * e + r[11] * a + r[15] * o, t;
        } function iu(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = r[0],
                i = r[1],
                c = r[2],
                f = r[3],
                d = f * u + i * a - c * e,
                h = f * e + c * u - o * a,
                s = f * a + o * e - i * u,
                M = -o * u - i * e - c * a; return t[0] = d * f + M * -o + h * -c - s * -i, t[1] = h * f + M * -i + s * -o - d * -c, t[2] = s * f + M * -c + d * -i - h * -o, t[3] = n[3], t;
        } function cu(t) { return `vec4(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`; } function fu(t, n) { return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]; } function du(t, n) {
            let r = t[0],
                u = t[1],
                e = t[2],
                a = t[3],
                o = n[0],
                i = n[1],
                c = n[2],
                f = n[3]; return Math.abs(r - o) <= s * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(u - i) <= s * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(e - c) <= s * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(a - f) <= s * Math.max(1, Math.abs(a), Math.abs(f));
        } const hu = Xr,
            su = Zr,
            Mu = kr,
            lu = Gr,
            bu = Hr,
            mu = Kr,
            pu = $r,
            xu = (function () {
                const t = Yr(); return function (n, r, u, e, a, o) {
                    let i,
                        c; for (r || (r = 4), u || (u = 0), c = e ? Math.min(e * r + u, n.length) : n.length, i = u; i < c; i += r)t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], a(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3]; return n;
                };
            }()); function wu() { const t = new M(4); return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t; } function qu(t) { return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t; } function vu(t, n, r) { r *= 0.5; const u = Math.sin(r); return t[0] = u * n[0], t[1] = u * n[1], t[2] = u * n[2], t[3] = Math.cos(r), t; } function gu(t, n) {
            let r = 2 * Math.acos(n[3]),
                u = Math.sin(r / 2); return u != 0 ? (t[0] = n[0] / u, t[1] = n[1] / u, t[2] = n[2] / u) : (t[0] = 1, t[1] = 0, t[2] = 0), r;
        } function yu(t, n, r) {
            let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = r[0],
                c = r[1],
                f = r[2],
                d = r[3]; return t[0] = u * d + o * i + e * f - a * c, t[1] = e * d + o * c + a * i - u * f, t[2] = a * d + o * f + u * c - e * i, t[3] = o * d - u * i - e * c - a * f, t;
        } function Au(t, n, r) {
            r *= 0.5; let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = Math.sin(r),
                c = Math.cos(r); return t[0] = u * c + o * i, t[1] = e * c + a * i, t[2] = a * c - e * i, t[3] = o * c - u * i, t;
        } function Su(t, n, r) {
            r *= 0.5; let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = Math.sin(r),
                c = Math.cos(r); return t[0] = u * c - a * i, t[1] = e * c + o * i, t[2] = a * c + u * i, t[3] = o * c - e * i, t;
        } function Ru(t, n, r) {
            r *= 0.5; let u = n[0],
                e = n[1],
                a = n[2],
                o = n[3],
                i = Math.sin(r),
                c = Math.cos(r); return t[0] = u * c + e * i, t[1] = e * c - u * i, t[2] = a * c + o * i, t[3] = o * c - a * i, t;
        } function Eu(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2]; return t[0] = r, t[1] = u, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - r * r - u * u - e * e)), t;
        } function Du(t, n, r, u) {
            let e,
                a,
                o,
                i,
                c,
                f = n[0],
                d = n[1],
                h = n[2],
                s = n[3],
                M = r[0],
                l = r[1],
                b = r[2],
                m = r[3]; return (a = f * M + d * l + h * b + s * m) < 0 && (a = -a, M = -M, l = -l, b = -b, m = -m), 1 - a > 1e-6 ? (e = Math.acos(a), o = Math.sin(e), i = Math.sin((1 - u) * e) / o, c = Math.sin(u * e) / o) : (i = 1 - u, c = u), t[0] = i * f + c * M, t[1] = i * d + c * l, t[2] = i * h + c * b, t[3] = i * s + c * m, t;
        } function Pu(t, n) {
            let r = n[0],
                u = n[1],
                e = n[2],
                a = n[3],
                o = r * r + u * u + e * e + a * a,
                i = o ? 1 / o : 0; return t[0] = -r * i, t[1] = -u * i, t[2] = -e * i, t[3] = a * i, t;
        } function Iu(t, n) { return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t; } function Tu(t, n) {
            let r,
                u = n[0] + n[4] + n[8]; if (u > 0)r = Math.sqrt(u + 1), t[3] = 0.5 * r, r = 0.5 / r, t[0] = (n[5] - n[7]) * r, t[1] = (n[6] - n[2]) * r, t[2] = (n[1] - n[3]) * r; else {
                let u = 0; n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2); let e = (u + 1) % 3,
                    a = (u + 2) % 3; r = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * a + a] + 1), t[u] = 0.5 * r, r = 0.5 / r, t[3] = (n[3 * e + a] - n[3 * a + e]) * r, t[e] = (n[3 * e + u] + n[3 * u + e]) * r, t[a] = (n[3 * a + u] + n[3 * u + a]) * r;
            } return t;
        } function Lu(t, n, r, u) {
            const e = 0.5 * Math.PI / 180; n *= e, r *= e, u *= e; let a = Math.sin(n),
                o = Math.cos(n),
                i = Math.sin(r),
                c = Math.cos(r),
                f = Math.sin(u),
                d = Math.cos(u); return t[0] = a * c * d - o * i * f, t[1] = o * i * d + a * c * f, t[2] = o * c * f - a * i * d, t[3] = o * c * d + a * i * f, t;
        } function Vu(t) { return `quat(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`; } const Yu = jr,
            ju = zr,
            zu = Fr,
            Fu = Or,
            Ou = Qr,
            Qu = yu,
            Xu = Br,
            Zu = uu,
            ku = eu,
            Ju = Kr,
            Nu = Ju,
            Uu = $r,
            Wu = Uu,
            _u = ru,
            Bu = fu,
            Cu = du,
            Gu = (function () {
                let t = Zn(),
                    n = Nn(1, 0, 0),
                    r = Nn(0, 1, 0); return function (u, e, a) { const o = dr(e, a); return o < -0.999999 ? (hr(t, n, e), Tr(t) < 1e-6 && hr(t, r, e), fr(t, t), vu(u, t, Math.PI), u) : o > 0.999999 ? (u[0] = 0, u[1] = 0, u[2] = 0, u[3] = 1, u) : (hr(t, e, a), u[0] = t[0], u[1] = t[1], u[2] = t[2], u[3] = 1 + o, _u(u, u)); };
            }()),
            Hu = (function () {
                let t = wu(),
                    n = wu(); return function (r, u, e, a, o, i) { return Du(t, u, o, i), Du(n, e, a, i), Du(r, t, n, 2 * i * (1 - i)), r; };
            }()),
            Ku = (function () { const t = mt(); return function (n, r, u, e) { return t[0] = u[0], t[3] = u[1], t[6] = u[2], t[1] = e[0], t[4] = e[1], t[7] = e[2], t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], _u(n, Tu(n, t)); }; }()); function $u() { const t = new M(2); return t[0] = 0, t[1] = 0, t; } function te(t) { const n = new M(2); return n[0] = t[0], n[1] = t[1], n; } function ne(t, n) { const r = new M(2); return r[0] = t, r[1] = n, r; } function re(t, n) { return t[0] = n[0], t[1] = n[1], t; } function ue(t, n, r) { return t[0] = n, t[1] = r, t; } function ee(t, n, r) { return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t; } function ae(t, n, r) { return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t; } function oe(t, n, r) { return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t; } function ie(t, n, r) { return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t; } function ce(t, n) { return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t; } function fe(t, n) { return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t; } function de(t, n, r) { return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t; } function he(t, n, r) { return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t; } function se(t, n) { return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t; } function Me(t, n, r) { return t[0] = n[0] * r, t[1] = n[1] * r, t; } function le(t, n, r, u) { return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t; } function be(t, n) {
            let r = n[0] - t[0],
                u = n[1] - t[1]; return Math.sqrt(r * r + u * u);
        } function me(t, n) {
            let r = n[0] - t[0],
                u = n[1] - t[1]; return r * r + u * u;
        } function pe(t) {
            let n = t[0],
                r = t[1]; return Math.sqrt(n * n + r * r);
        } function xe(t) {
            let n = t[0],
                r = t[1]; return n * n + r * r;
        } function we(t, n) { return t[0] = -n[0], t[1] = -n[1], t; } function qe(t, n) { return t[0] = 1 / n[0], t[1] = 1 / n[1], t; } function ve(t, n) {
            let r = n[0],
                u = n[1],
                e = r * r + u * u; return e > 0 && (e = 1 / Math.sqrt(e), t[0] = n[0] * e, t[1] = n[1] * e), t;
        } function ge(t, n) { return t[0] * n[0] + t[1] * n[1]; } function ye(t, n, r) { const u = n[0] * r[1] - n[1] * r[0]; return t[0] = t[1] = 0, t[2] = u, t; } function Ae(t, n, r, u) {
            let e = n[0],
                a = n[1]; return t[0] = e + u * (r[0] - e), t[1] = a + u * (r[1] - a), t;
        } function Se(t, n) { n = n || 1; const r = 2 * l() * Math.PI; return t[0] = Math.cos(r) * n, t[1] = Math.sin(r) * n, t; } function Re(t, n, r) {
            let u = n[0],
                e = n[1]; return t[0] = r[0] * u + r[2] * e, t[1] = r[1] * u + r[3] * e, t;
        } function Ee(t, n, r) {
            let u = n[0],
                e = n[1]; return t[0] = r[0] * u + r[2] * e + r[4], t[1] = r[1] * u + r[3] * e + r[5], t;
        } function De(t, n, r) {
            let u = n[0],
                e = n[1]; return t[0] = r[0] * u + r[3] * e + r[6], t[1] = r[1] * u + r[4] * e + r[7], t;
        } function Pe(t, n, r) {
            let u = n[0],
                e = n[1]; return t[0] = r[0] * u + r[4] * e + r[12], t[1] = r[1] * u + r[5] * e + r[13], t;
        } function Ie(t) { return `vec2(${t[0]}, ${t[1]})`; } function Te(t, n) { return t[0] === n[0] && t[1] === n[1]; } function Le(t, n) {
            let r = t[0],
                u = t[1],
                e = n[0],
                a = n[1]; return Math.abs(r - e) <= s * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(u - a) <= s * Math.max(1, Math.abs(u), Math.abs(a));
        } const Ve = pe,
            Ye = ae,
            je = oe,
            ze = ie,
            Fe = be,
            Oe = me,
            Qe = xe,
            Xe = (function () {
                const t = $u(); return function (n, r, u, e, a, o) {
                    let i,
                        c; for (r || (r = 2), u || (u = 0), c = e ? Math.min(e * r + u, n.length) : n.length, i = u; i < c; i += r)t[0] = n[i], t[1] = n[i + 1], a(t, t, o), n[i] = t[0], n[i + 1] = t[1]; return n;
                };
            }()); r.d(n, 'glMatrix', () => u), r.d(n, 'mat2', () => e), r.d(n, 'mat2d', () => a), r.d(n, 'mat3', () => o), r.d(n, 'mat4', () => i), r.d(n, 'quat', () => d), r.d(n, 'vec2', () => h), r.d(n, 'vec3', () => c), r.d(n, 'vec4', () => f);
    },
}]);
