// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return Math.abs(t)}var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol:void 0,i="function"==typeof f?f.toStringTag:"";n=o&&"symbol"==typeof Symbol.toStringTag?function(t){var n,o,f,u,a;if(null==t)return r.call(t);o=t[i],a=i,n=null!=(u=t)&&e.call(u,a);try{t[i]=void 0}catch(n){return r.call(t)}return f=r.call(t),n?t[i]=o:delete t[i],f}:function(t){return r.call(t)};var u=n,a="function"==typeof Float32Array,c=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null,l="function"==typeof Float32Array?Float32Array:void 0,p=function(){var t,n,o;if("function"!=typeof y)return!1;try{n=new y([1,3.14,-3.14,5e40]),o=n,t=(a&&o instanceof Float32Array||"[object Float32Array]"===u(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===c}catch(n){t=!1}return t}()?l:function(){throw new Error("not implemented")},d="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0,s=function(){var t,n,o;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(d&&o instanceof Uint32Array||"[object Uint32Array]"===u(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?m:function(){throw new Error("not implemented")},A=new p(1);new s(A.buffer)[0]=2139095040;var h=A[0];function v(t){return t!=t}function w(t,n){return v(t)||v(n)?NaN:t===h||n===h?h:t===n&&0===t?function(t){return 0===t&&1/t===h}(t)?t:n:t>n?t:n}var S="function"==typeof Math.fround?Math.fround:null,F=new p(1),g="function"==typeof S?S:function(t){return F[0]=t,F[0]};return function(n,o){return w(t(g(n)),t(g(o)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).maxabsf=n();
//# sourceMappingURL=browser.js.map
