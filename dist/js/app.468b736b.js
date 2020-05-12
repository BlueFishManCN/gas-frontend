(function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],c=0,p=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"359c2feb"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),a=n.n(o),u=(n("f689"),n("b2d6")),i=n.n(u),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-row",{staticStyle:{"margin-top":"18px","margin-bottom":"36px"}},[n("el-col",{attrs:{span:7,offset:2,type:"flex",justify:"middle"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-image",{staticStyle:{height:"64px",width:"64px"},attrs:{src:e.url,lazy:""}}),n("h3",[e._v("Global AMP Survey database (GAS)")])],1)],1),n("el-col",{attrs:{span:9,type:"flex",justify:"middle"}},[n("el-menu",{attrs:{mode:"horizontal","default-active":e.activeIndex,router:!0}},[n("el-menu-item",{attrs:{index:"home"}},[e._v("HOME")]),n("el-submenu",{attrs:{index:"browse"}},[n("template",{slot:"title"},[e._v("Browse")]),n("el-menu-item",{attrs:{index:"amps"}},[e._v("AMPs")]),n("el-menu-item",{attrs:{index:"families"}},[e._v("Families")]),n("el-menu-item",{attrs:{index:"environment"}},[e._v("Environment")])],2),n("el-submenu",{attrs:{index:"tools"}},[n("template",{slot:"title"},[e._v("Tools")]),n("el-menu-item",{attrs:{index:"blastp"}},[e._v("Blastp")]),n("el-menu-item",{attrs:{index:"hmm"}},[e._v("HMM")]),n("el-menu-item",{attrs:{index:"macrel"}},[e._v("Macrel")])],2),n("el-menu-item",{attrs:{index:"downloads"}},[e._v("Downloads")]),n("el-menu-item",{attrs:{index:"contact"}},[e._v("Contact")])],1)],1)],1),n("router-view")],1)},s=[],c={name:"app",data:function(){return{activeIndex:"home",url:n("cf05")}}},f=c,p=n("2877"),d=Object(p["a"])(f,l,s,!1,null,null,null),m=d.exports,b=(n("d3b7"),n("8c4f"));r["default"].use(b["a"]);var v=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/blastp",name:"Blastp",component:function(){return n.e("about").then(n.bind(null,"baba"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}}],h=new b["a"]({routes:v}),y=h,x=n("2f62");r["default"].use(x["a"]);var g=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=n("bc3a"),_=n.n(w),j=n("a7fe"),O=n.n(j);r["default"].config.productionTip=!1,r["default"].use(a.a,{locale:i.a}),r["default"].use(O.a,_.a),_.a.defaults.baseURL="",new r["default"]({router:y,store:g,render:function(e){return e(m)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.6885347c.png"},f689:function(e,t,n){}});
//# sourceMappingURL=app.468b736b.js.map