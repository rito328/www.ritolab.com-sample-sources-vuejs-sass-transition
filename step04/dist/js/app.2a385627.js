(function(e){function t(t){for(var i,s,a=t[0],u=t[1],c=t[2],f=0,d=[];f<a.length;f++)s=a[f],r[s]&&d.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c79a")},"225d":function(e,t,n){"use strict";var i=n("24f6"),r=n.n(i);r.a},"24f6":function(e,t,n){},e76a:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"item_wrapper"},[n("div",{staticClass:"items"},[n("transition-group",{attrs:{name:"list"}},e._l(e.items,function(t){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],key:t.id,staticClass:"item"},[e._v(e._s(t.name))])}),0)],1)]),n("div",{staticClass:"btns"},e._l(e.items,function(t){return n("button",{key:t.id,staticClass:"switch",class:{hiding:!t.show},on:{click:function(n){return e.toggle(t.id)}}},[e._v(e._s(t.id))])}),0)])},r=[],o=(n("f13b"),{name:"app",data:function(){return{items:[{id:1,name:"item01",show:!0},{id:2,name:"item02",show:!0},{id:3,name:"item03",show:!0},{id:4,name:"item04",show:!0},{id:5,name:"item05",show:!0},{id:6,name:"item06",show:!0},{id:7,name:"item07",show:!0},{id:8,name:"item08",show:!0},{id:9,name:"item09",show:!0}]}},methods:{toggle:function(e){var t=this.items.find(function(t){return t.id===e});t.show=!t.show}}}),s=o,a=(n("225d"),n("7eab")),u=Object(a["a"])(s,i,r,!1,null,"4ca7d92e",null);t["a"]=u.exports}});
//# sourceMappingURL=app.2a385627.js.map