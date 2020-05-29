/*! gp-boilerplate */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(t,n,i){"use strict";i(174),i(175),i(176),i(163),i(39),i(177),i(178);function e(t,n,i){if(!(this instanceof e))return new e(t,n,i);this.x=t||0,this.y=n||0,this.z=i||0}function o(t,n,i,e,o){return o.resetValues(t.x+n,t.y+i,t.z+e)}function r(t,n,i,e,o){return o.resetValues(t.x-n,t.y-i,t.z-e)}function s(t,n,i,e,o){return o.resetValues(t.x*n,t.y*i,t.z*e)}function u(t,n,i,e,o){return o.resetValues(t.x/n||0,t.y/i||0,t.z/e||0)}function a(t,n){var i=t.length();return i>1&&n.setX(t.x/i).setY(t.y/i).setZ(t.z/i),n}function h(t,n,i,e){return e.setX(Math.min(Math.max(t.x,n),i)).setY(Math.min(Math.max(t.y,n),i)).setZ(Math.min(Math.max(t.z,n),i))}function p(t,n){return n.setX(t.x>>31|-t.x>>>31).setY(t.y>>31|-t.y>>>31).setZ(t.z>>31|-t.z>>>31)}function y(t,n){return n.setX(t.x+(t.x>>31)^t.x>>31).setY(t.y+(t.y>>31)^t.y>>31).setZ(t.z+(t.z>>31)^t.z>>31)}e.prototype.x=0,e.prototype.y=0,e.prototype.z=0,e.prototype.setX=function(t){return this.x=t,this},e.prototype.setY=function(t){return this.y=t,this},e.prototype.setZ=function(t){return this.z=t,this},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.prototype.reset=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},e.prototype.resetValues=function(t,n,i){return this.x=t,this.y=n,this.z=i,this},e.prototype.resetByRad=function(t){return this.x=Math.cos(t),this.y=Math.sin(t),this.z=Math.tan(t),this},e.prototype.add=function(t){return o(this,t.x,t.y,t.z,new e)},e.prototype.addValue=function(t){return o(this,t,t,t,new e)},e.prototype.addValues=function(t,n,i){return o(this,t,n,i,new e)},e.prototype.addLocal=function(t){return o(this,t.x,t.y,t.z,this)},e.prototype.addValueLocal=function(t){return o(this,t,t,t,this)},e.prototype.addValuesLocal=function(t,n,i){return o(this,t,n,i,this)},e.prototype.subtract=function(t){return r(this,t.x,t.y,t.z,new e)},e.prototype.subtractValue=function(t){return r(this,t,t,t,new e)},e.prototype.subtractValues=function(t,n,i){return r(this,t,n,i,new e)},e.prototype.subtractLocal=function(t){return r(this,t.x,t.y,t.z,this)},e.prototype.subtractValueLocal=function(t){return r(this,t,t,t,this)},e.prototype.subtractValuesLocal=function(t,n,i){return r(this,t,n,i,this)},e.prototype.multiply=function(t){return s(this,t.x,t.y,t.z,new e)},e.prototype.multiplyValue=function(t){return s(this,t,t,t,new e)},e.prototype.multiplyValues=function(t,n,i){return s(this,t,n,i,new e)},e.prototype.multiplyLocal=function(t){return s(this,t.x,t.y,t.z,this)},e.prototype.multiplyValueLocal=function(t){return s(this,t,t,t,this)},e.prototype.multiplyValuesLocal=function(t,n,i){return s(this,t,n,i,this)},e.prototype.divide=function(t){return u(this,t.x,t.y,t.z,new e)},e.prototype.divideValue=function(t){return u(this,t,t,t,new e)},e.prototype.divideValues=function(t,n,i){return u(this,t,n,i,new e)},e.prototype.divideLocal=function(t){return u(this,t.x,t.y,t.z,this)},e.prototype.divideValueLocal=function(t){return u(this,t,t,t,this)},e.prototype.divideValuesLocal=function(t,n,i){return u(this,t,n,i,this)},e.prototype.normalize=function(){return a(this,new e)},e.prototype.normalizeLocal=function(){return a(this,this)},e.prototype.clamp=function(t,n){return h(this,t,n,new e)},e.prototype.clampLocal=function(t,n){return h(this,t,n,this)},e.prototype.sign=function(){return p(this,new e)},e.prototype.signLocal=function(){return p(this,this)},e.prototype.abs=function(){return y(this,new e)},e.prototype.absLocal=function(){return y(this,this)},e.prototype.rad=function(){return Math.atan2(this.y,this.x)},e.prototype.radBetween=function(t){return Math.atan2(t.y,t.x)-Math.atan2(this.y,this.x)};var c=e;function m(t,n){if(!(this instanceof m))return new m(t,n);this.min=t||new c,this.max=n||new c,this.intersectionInfo=new c}m.prototype.min=new c,m.prototype.max=new c,m.prototype.intersectionInfo=new c,m.prototype.setMin=function(t){return this.min=t,this},m.prototype.setMax=function(t){return this.max=t,this},m.prototype.reset=function(t,n){return this.min.reset(t),this.max.reset(n),this},m.prototype.getDimension=function(t){return t.resetValues(this.max.x-this.min.x,this.max.y-this.min.y,this.max.z-this.min.z)},m.prototype.getCenter=function(){return new c((this.max.x+this.min.x)/2,(this.max.y+this.min.y)/2,(this.max.z+this.min.z)/2)},m.prototype.getIntersectionInfo=function(t){return this.intersectionInfo.x=t.max.x-this.min.x-(this.max.x-t.min.x),this.intersectionInfo.y=t.max.y-this.min.y-(this.max.y-t.min.y),this.intersectionInfo.z=t.max.z-this.min.z-(this.max.z-t.min.z),this.intersectionInfo},m.prototype.contains=function(t){return t.constructor===c?t.x>=this.min.x&&t.y>=this.min.y&&t.z>=this.min.z&&t.x<=this.max.x&&t.y<=this.max.y&&t.z<=this.max.z:t.constructor===m&&(t.min.x>=this.min.x&&t.min.y>=this.min.y&&t.min.z>=this.min.z&&t.max.x<=this.max.x&&t.max.y<=this.max.y&&t.max.z<=this.max.z)},m.prototype.intersects=function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},m.prototype.intersectsX=function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x)},m.prototype.intersectsY=function(t){return!(t.max.y<this.min.y||t.min.y>this.max.y)},m.prototype.intersectsZ=function(t){return!(t.max.z<this.min.z||t.min.z>this.max.z)};var f=m,l=i(179),x=i.n(l);function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a={dataTypes:{function:d("function",Function),Vector:d("Vector",c),Bounds:d("Bounds",f),HTMLElement:d("HTMLElement",HTMLElement),AmpersandCollection:d("AmpersandCollection",x.a)}};function d(t,n){return{set:function(i){return i instanceof n?{val:i,type:t}:i instanceof Object?{val:new n(i),type:t}:{val:i,type:z(i)}},compare:function(t,n){return t===n},default:function(){return new n}}}},152:function(t,n,i){"use strict";(function(t){var e=i(165),o=i.n(e),r=i(148);function s(){this.unset("model"),this.remove()}n.a=o.a.extend(r.a,{initialize:function(n){o.a.prototype.initialize.apply(this,arguments),t(this.el).data("controller",this);var i=this.modelConstructor;if(i&&(this.model=new i(t(this.el).data()),this.listenTo(this.model,"destroy",s.bind(this))),n.target&&t(n.target).length){var e=t(n.target).data("controller").model;e&&(this.targetModel=e)}},destroy:function(){this.model.destroy()}})}).call(this,i(3))},154:function(t,n,i){"use strict";var e=i(180),o=i.n(e),r=i(148);n.a=o.a.extend(r.a,{initialize:function(){o.a.prototype.initialize.apply(this,arguments)}})},164:function(t,n,i){"use strict";i.r(n);var e=i(152),o=i(154);n.default=e.a.extend({modelConstructor:o.a.extend({session:{name:{type:"string",required:!0,default:"bla"}}}),bindings:{"model.name":{type:"innerHTML",hook:"name"}},initialize:function(){e.a.prototype.initialize.apply(this,arguments)}})}}]);