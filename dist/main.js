!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class n{constructor(e){this._currentElement=e}mountComponent(e){const t=document.createElement(this._currentElement.type),r=this._currentElement.props.children,n=document.createTextNode(r);return t.appendChild(n),e.appendChild(t),this._hostNode=t,t}}class o{constructor(e){this._currentElement=e}mountComponent(e){let t=new(0,this._currentElement.type)(this._currentElement.props).render();for(;"function"==typeof t.type;)t=new t.type(t.props).render();return new n(t).mountComponent(e)}}class u{constructor(e){this.props=e}render(){return this.props}}const c={createClass(e){function t(e){this.props=e}return t.prototype.render=e.render,t},createElement(e,t,r){const n={type:e,props:t||{}};return r&&(n.props.children=r),n},render(e,t){const r=this.createElement(u,e);return new o(r).mountComponent(t)}},s=c.createClass({render(){return c.createElement("h1",null,this.props.message)}});c.render(c.createElement(s,{message:"hey there React!!!"}),document.getElementById("root"))}]);