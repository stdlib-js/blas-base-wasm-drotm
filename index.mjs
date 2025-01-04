// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import A from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-read-dataview@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-arrays2ptrs@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-strided2object@v0.0.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-wasm-memory@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-module-wrapper@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-base64-to-uint8array@esm/index.mjs";var m=d("AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEYA2AAAGAGf39/f39/AGAIf39/f39/f38AAg8BA2VudgZtZW1vcnkCAAADBAMAAQIHTAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAdjX2Ryb3RtAAEPY19kcm90bV9uZGFycmF5AAIKpQYDAwABCy8AIAAgASACQQEgAGsiACACbEEAIAJBAEwbIAMgBCAAIARsQQAgBEEATBsgBRACC+4FAgZ8An8CQCAAQQBMDQAgBysDACIIRAAAAAAAAADAYQ0AIAIgBUcgAkEATHJFBEAgCEQAAAAAAAAAAGMEQCAHKwMgIQggBysDECEJIAcrAxghCiAHKwMIIQtBACEGA0AgACAGRg0DIAEgA0EDdCIFaiIHIAcrAwAiDCALoiAKIAQgBWoiBSsDACINoqA5AwAgBSAMIAmiIAggDaKgOQMAIAZBAWohBiACIANqIQMMAAsACyAIRAAAAAAAAAAAYQRAIAcrAxAhCCAHKwMYIQlBACEGA0AgACAGRg0DIAEgA0EDdCIFaiIHIAQgBWoiBSsDACIKIAmiIAcrAwAiC6A5AwAgBSAKIAsgCKKgOQMAIAZBAWohBiACIANqIQMMAAsACyAHKwMgIQggBysDCCEJQQAhBgNAIAAgBkYNAiABIANBA3QiBWoiByAHKwMAIgogCaIgBCAFaiIFKwMAIgugOQMAIAUgCyAIoiAKoTkDACAGQQFqIQYgAiADaiEDDAALAAsgCEQAAAAAAAAAAGMEQCAHKwMgIQggBysDECEJIAcrAxghCiAHKwMIIQtBACEHA0AgACAHRg0CIAEgA0EDdGoiDiAOKwMAIgwgC6IgCiAEIAZBA3RqIg4rAwAiDaKgOQMAIA4gDCAJoiAIIA2ioDkDACAHQQFqIQcgBSAGaiEGIAIgA2ohAwwACwALIAhEAAAAAAAAAABhBEAgBysDECEIIAcrAxghCUEAIQcDQCAAIAdGDQIgASADQQN0aiIOIAQgBkEDdGoiDysDACIKIAmiIA4rAwAiC6A5AwAgDyAKIAsgCKKgOQMAIAdBAWohByAFIAZqIQYgAiADaiEDDAALAAsgBysDICEIIAcrAwghCUEAIQcDQCAAIAdGDQEgASADQQN0aiIOIA4rAwAiCiAJoiAEIAZBA3RqIg4rAwAiC6A5AwAgDiALIAiiIAqhOQMAIAdBAWohByAFIAZqIQYgAiADaiEDDAALAAsL");function a(A){if(!(this instanceof a))return new a(A);if(!n(A))throw new TypeError(o("invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.",A));return g.call(this,m,A,{env:{memory:A}}),this}function C(){return this instanceof C?(a.call(this,new r({initial:0})),this):new C}i(a,g),A(a.prototype,"main",(function(A,i,s,t,r,e){return this._instance.exports.c_drotm(A,i,s,t,r,e),t})),A(a.prototype,"ndarray",(function(A,i,s,t,r,e,I,n){return this._instance.exports.c_drotm_ndarray(A,i,s,t,r,e,I,n),r})),i(C,a),A(C.prototype,"main",(function(A,i,t,r,e,I){return this.ndarray(A,i,t,s(A,t),r,e,s(A,e),I)})),A(C.prototype,"ndarray",(function(A,i,s,r,n,g,o,d){var m,C,E,Q;return C=(m=e(this,[I(A,i,s,r),I(A,n,g,o),I(5,d,1,0)]))[0],E=m[1],Q=m[2],a.prototype.ndarray.call(this,A,C.ptr,C.stride,C.offset,E.ptr,E.stride,E.offset,Q.ptr),C.copy&&t(A,this.view,C.stride*C.BYTES_PER_ELEMENT,C.ptr,i,s,r,!0),E.copy&&t(A,this.view,E.stride*E.BYTES_PER_ELEMENT,E.ptr,n,g,o,!0),n}));var E=new C;E.initializeSync(),A(E,"Module",a);export{a as Module,E as default};
//# sourceMappingURL=index.mjs.map
