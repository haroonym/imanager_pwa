(function(e){function t(t){for(var A,a,c=t[0],s=t[1],i=t[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(A in s)Object.prototype.hasOwnProperty.call(s,A)&&(e[A]=s[A]);g&&g(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],A=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(A=!1)}A&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var A={},r={app:0},o=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fa57e3b5"}[e]+".js"}function c(t){if(A[t])return A[t].exports;var n=A[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var A=new Promise((function(t,A){n=r[e]=[t,A]}));t.push(n[2]=A);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var A=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+A+": "+o+")",i.name="ChunkLoadError",i.type=A,i.request=o,n[1](i)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=A,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var A in e)c.d(n,A,function(t){return e[t]}.bind(null,A));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var g=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"networkAddress",(function(){return x}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var A=n("2b0e"),r=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-app",[A("v-main",[A("v-app-bar",{attrs:{color:"white accent-4",dark:"",app:""}},[A("v-toolbar-title",[A("v-img",{staticClass:"mr-3",attrs:{src:n("c82a"),width:"50px"}})],1),A("h3",{staticClass:"black--text"},[e._v("iManager")])],1),A("v-container",[A("router-view")],1)],1)],1)},o=[],a={name:"App",data:function(){return{}},methods:{}},c=a,s=n("2877"),i=n("6544"),u=n.n(i),g=n("7496"),f=n("40dc"),l=n("a523"),d=n("adda"),v=n("f6c4"),p=n("2a7f"),h=Object(s["a"])(c,r,o,!1,null,null,null),B=h.exports;u()(h,{VApp:g["a"],VAppBar:f["a"],VContainer:l["a"],VImg:d["a"],VMain:v["a"],VToolbarTitle:p["a"]});n("d3b7"),n("3ca3"),n("ddb0");var C=n("8c4f"),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"text-h5 text-center mt-2"},[e._v("Yuhuuu Geschafft!!!")])])}],b={name:"Home"},m=b,L=Object(s["a"])(m,w,Q,!1,null,null,null),E=L.exports;A["a"].use(C["a"]);var Y=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new C["a"]({mode:"history",base:"/",routes:Y}),W=I,F=n("f309");A["a"].use(F["a"]);var P=new F["a"]({}),G=n("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),A["a"].config.productionTip=!1;var x="http://127.0.0.1:3000";new A["a"]({router:W,vuetify:P,render:function(e){return e(B)}}).$mount("#app")},c82a:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.7918a84e.js.map