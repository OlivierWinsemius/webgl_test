(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,function(r,e,o){"use strict";function a(r,e,o){var a=r.createShader(e);return r.shaderSource(a,o),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(alert("An error occurred compiling the shaders: "+r.getShaderInfoLog(a)),r.deleteShader(a),null)}Object.defineProperty(e,"__esModule",{value:!0}),e.getShaderProgram=function(r){var e=a(r,r.VERTEX_SHADER,o(5)),t=a(r,r.FRAGMENT_SHADER,o(4)),n=r.createProgram();return r.attachShader(n,e),r.attachShader(n,t),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS)?n:(alert("Unable to initialize the shader program: "+r.getProgramInfoLog(shaderProgram)),null)},e.getBuffers=function(r){var e=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,e),r.bufferData(r.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),r.STATIC_DRAW);var o=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,o),r.bufferData(r.ARRAY_BUFFER,new Float32Array([1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1]),r.STATIC_DRAW),{position:e,color:o}}},function(r,e){r.exports="varying lowp vec4 vColor;\r\n\r\nvoid main() {\r\n    gl_FragColor = vColor;\r\n}"},function(r,e){r.exports="attribute vec4 aVertexPosition;\r\nattribute vec4 aVertexColor;\r\n\r\nuniform mat4   uModelViewMatrix;\r\nuniform mat4   uProjectionMatrix;\r\n\r\nvarying lowp vec4 vColor;\r\n\r\nvoid main() {\r\n    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\r\n    vColor      = aVertexColor;\r\n}"}]]);