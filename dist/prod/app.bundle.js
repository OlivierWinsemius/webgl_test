!function(e){function n(n){for(var t,o,i=n[0],a=n[1],u=0,l=[];u<i.length;u++)o=i[u],r[o]&&l.push(r[o][0]),r[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(c&&c(n);l.length;)l.shift()()}var t={},r={3:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=i);var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=12e4,o.nc&&u.setAttribute("nonce",o.nc),u.src=o.p+""+({}[e]||e)+".bundle.js";var c=setTimeout(function(){l({type:"timeout",target:u})},12e4);function l(n){u.onerror=u.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,t[1](a)}r[e]=void 0}}u.onerror=u.onload=l,a.appendChild(u)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var c=a;o(o.s=0)}([function(e,n,t){"use strict";var r=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};document.addEventListener("DOMContentLoaded",function(){Promise.all([new Promise(function(e){t.e(1).then(function(n){e(t(2))}.bind(null,t)).catch(t.oe)}),new Promise(function(e){t.e(0).then(function(n){e(t(1))}.bind(null,t)).catch(t.oe)})]).then(function(e){var n=r(e,2),t=n[0],o=n[1];console.log(o);var i=t.initShaderProgram,a=t.initBuffers,u=document.getElementById("canvas").getContext("webgl");o.initShaderProgram=i,o.initBuffers=a,o.initShaderProgram(u),o.initBuffers(u),new o(u)})})}]);