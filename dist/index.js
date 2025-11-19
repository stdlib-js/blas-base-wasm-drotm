"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var M=l(function(Q,E){
var L=require("path").resolve,P=require('@stdlib/fs-read-wasm/dist').sync,V=P(L(__dirname,"..","src","main.wasm"));E.exports=V
});var y=l(function(U,b){
var g=require('@stdlib/assert-is-wasm-memory/dist'),_=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),R=require('@stdlib/wasm-module-wrapper/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),D=M();function v(e){if(!(this instanceof v))return new v(e);if(!g(e))throw new TypeError(z('26hH0',e));return R.call(this,D,e,{env:{memory:e}}),this}j(v,R);_(v.prototype,"main",function(r,n,i,a,t,s){return this._instance.exports.c_drotm(r,n,i,a,t,s),a});_(v.prototype,"ndarray",function(r,n,i,a,t,s,p,q){return this._instance.exports.c_drotm_ndarray(r,n,i,a,t,s,p,q),t});b.exports=v
});var A=l(function(Z,W){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=require('@stdlib/utils-inherit/dist'),x=require('@stdlib/strided-base-stride2offset/dist'),T=require('@stdlib/strided-base-read-dataview/dist').ndarray,C=require('@stdlib/wasm-memory/dist'),F=require('@stdlib/wasm-base-arrays2ptrs/dist'),m=require('@stdlib/wasm-base-strided2object/dist'),f=y();function d(){return this instanceof d?(f.call(this,new C({initial:0})),this):new d}k(d,f);S(d.prototype,"main",function(r,n,i,a,t,s){return this.ndarray(r,n,i,x(r,i),a,t,x(r,t),s)});S(d.prototype,"ndarray",function(r,n,i,a,t,s,p,q){var c,u,o,w;return c=F(this,[m(r,n,i,a),m(r,t,s,p),m(5,q,1,0)]),u=c[0],o=c[1],w=c[2],f.prototype.ndarray.call(this,r,u.ptr,u.stride,u.offset,o.ptr,o.stride,o.offset,w.ptr),u.copy&&T(r,this.view,u.stride*u.BYTES_PER_ELEMENT,u.ptr,n,i,a,!0),o.copy&&T(r,this.view,o.stride*o.BYTES_PER_ELEMENT,o.ptr,t,s,p,!0),t});W.exports=d
});var O=l(function($,B){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),H=A(),I=y(),h=new H;h.initializeSync();G(h,"Module",I.bind(null));B.exports=h
});var J=O();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
