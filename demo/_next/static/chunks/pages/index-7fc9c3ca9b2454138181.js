(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7191:function(r,e,n){const t=n(8247);r.exports=t("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},8247:function(r){"use strict";r.exports=function(r){if(r.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),n=0;n<e.length;n++)e[n]=255;for(var t=0;t<r.length;t++){var o=r.charAt(t),a=o.charCodeAt(0);if(255!==e[a])throw new TypeError(o+" is ambiguous");e[a]=t}var i=r.length,c=r.charAt(0),s=Math.log(i)/Math.log(256),f=Math.log(256)/Math.log(i);function u(r){if("string"!==typeof r)throw new TypeError("Expected String");if(0===r.length)return new Uint8Array;for(var n=0,t=0,o=0;r[n]===c;)t++,n++;for(var a=(r.length-n)*s+1>>>0,f=new Uint8Array(a);r[n];){var u=e[r.charCodeAt(n)];if(255===u)return;for(var h=0,l=a-1;(0!==u||h<o)&&-1!==l;l--,h++)u+=i*f[l]>>>0,f[l]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");o=h,n++}for(var w=a-o;w!==a&&0===f[w];)w++;for(var d=new Uint8Array(t+(a-w)),v=t;w!==a;)d[v++]=f[w++];return d}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var n=0,t=0,o=0,a=e.length;o!==a&&0===e[o];)o++,n++;for(var s=(a-o)*f+1>>>0,u=new Uint8Array(s);o!==a;){for(var h=e[o],l=0,w=s-1;(0!==h||l<t)&&-1!==w;w--,l++)h+=256*u[w]>>>0,u[w]=h%i>>>0,h=h/i>>>0;if(0!==h)throw new Error("Non-zero carry");t=l,o++}for(var d=s-t;d!==s&&0===u[d];)d++;for(var v=c.repeat(n);d<s;++d)v+=r.charAt(u[d]);return v},decodeUnsafe:u,decode:function(r){var e=u(r);if(e)return e;throw new Error("Non-base"+i+" character")}}}},3027:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var t=n(7729);function o(r,e,n,t,o,a,i){try{var c=r[a](i),s=c.value}catch(f){return void n(f)}c.done?e(s):Promise.resolve(s).then(t,o)}function a(r){return function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function c(r){o(i,t,a,c,s,"next",r)}function s(r){o(i,t,a,c,s,"throw",r)}c(void 0)}))}}var i=n(809),c=n.n(i),s=n(1350),f=n(7191),u=n.n(f),h=n(7294),l=n(582),w=n(780),d=n(5893),v=function(){var r=(0,s.Os)(),e=r.publicKey,n=r.signMessage,t=(0,h.useCallback)(a(c().mark((function r(){var t,o;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e){r.next=3;break}throw new Error("Wallet not connected!");case 3:if(n){r.next=5;break}throw new Error("Wallet does not support message signing!");case 5:return t=(new TextEncoder).encode("Crossmint test sign message\n\nNonce: "+Math.random()),r.next=8,n(t);case 8:if(o=r.sent,w.sign.detached.verify(t,o,e.toBytes())){r.next=11;break}throw new Error("Invalid signature!");case 11:l.ZP.success("Message signature: ".concat(u().encode(o))),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),l.ZP.error("Signing failed: ".concat(null===r.t0||void 0===r.t0?void 0:r.t0.message));case 17:case"end":return r.stop()}}),r,null,[[0,14]])}))),[e,n]);return(0,d.jsx)("button",{style:{padding:"8px 14px",margin:"12px"},onClick:t,disabled:!e,children:"Sign Message"})};function g(){return(0,d.jsxs)("div",{style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,d.jsx)(t.aD,{}),(0,d.jsx)(v,{})]})}},5301:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3027)}])}},function(r){r.O(0,[774,888,179],(function(){return e=5301,r(r.s=e);var e}));var e=r.O();_N_E=e}]);