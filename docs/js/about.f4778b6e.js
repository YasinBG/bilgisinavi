"use strict";(self["webpackChunkbilgisinavi"]=self["webpackChunkbilgisinavi"]||[]).push([[443],{4902:function(t,r,e){e.r(r),e.d(r,{default:function(){return d}});var n=e(3396),o=e(7139);const i={class:"container mx-auto flex flex-col items-center"},a={class:"recordMicContainer"},c=["textContent"],u={class:"sound-wave"},s={ref:"canvas",class:"canvas"};function f(t,r,e,f,p,l){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",a,[(0,n._)("button",{class:(0,o.C_)("mic"+(f.isRecording?" recording":"")),onClick:r[0]||(r[0]=(...t)=>f.toggleMic&&f.toggleMic(...t))},(0,o.zw)(f.isRecording?"Stop Recording":"Start Recording"),3),(0,n._)("div",{class:"transcript",textContent:(0,o.zw)(f.transcript)},null,8,c)]),(0,n._)("div",u,[(0,n._)("canvas",s,null,512)])])}e(1439),e(7585),e(5315);var p=e(4870),l={setup(){const t=(0,p.iH)(""),r=(0,p.iH)(!1),e=(0,p.iH)(null),o=(0,p.iH)(null),i=(0,p.iH)(null),a=(0,p.iH)(null),c=800,u=100,s=(0,p.iH)(!1),f=window.SpeechRecognition||window.webkitSpeechRecognition,l=new f;(0,n.bv)((()=>{l.continuous=!0,l.interimResults=!0,l.onstart=()=>{console.log("SR Started"),r.value=!0},l.onend=()=>{console.log("SR Stopped"),r.value=!1},l.onresult=r=>{for(let t=0;t<r.results.length;t++){const e=r.results[t];e.isFinal&&y(e)}const e=Array.from(r.results).map((t=>t[0])).map((t=>t.transcript)).join("");t.value=e},e.value=document.querySelector(".canvas"),e.value?g():console.error("Canvas element not found.")}));const y=t=>{const r=t[0].transcript;r.includes("stop recording")?(l.stop(),s.value&&d()):(r.includes("what is the time")||r.includes("what's the time"))&&(l.stop(),alert((new Date).toLocaleTimeString()),setTimeout((()=>l.start()),100))},v=()=>{r.value?(l.stop(),s.value&&d()):(s.value||d(),l.start())},d=async()=>{try{if(s.value)o.value.close(),s.value=!1,a.value.clearRect(0,0,c,u);else{const t=await navigator.mediaDevices.getUserMedia({audio:!0});o.value=new(window.AudioContext||window.webkitAudioContext),i.value=o.value.createAnalyser();const r=o.value.createMediaStreamSource(t);r.connect(i.value),i.value.fftSize=256,s.value=!0,A()}}catch(t){console.error("Mikrofon erişimi reddedildi:",t)}},g=()=>{const t=e.value;t?(a.value=t.getContext("2d"),t.width=c,t.height=u):console.error("Canvas element not found.")},A=()=>{const t=new Uint8Array(i.value.frequencyBinCount),r=c/t.length,e=()=>{i.value.getByteFrequencyData(t),a.value.clearRect(0,0,c,u);for(let e=0;e<t.length;e++){let n;const o=t[e],i=t[e]/-55*u;n=o<85?"green":o<170?"yellow":"red",a.value.fillStyle=n,a.value.fillRect(e*r,u-2,r,2,i-u)}requestAnimationFrame(e)};e()};return{transcript:t,toggleMic:v,isRecording:r,canvasRef:e,audioContextStarted:s}}},y=e(89);const v=(0,y.Z)(l,[["render",f],["__scopeId","data-v-0ca71cb2"]]);var d=v},6077:function(t,r,e){var n=e(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,r,e){var n,o,i,a=e(3013),c=e(9781),u=e(7854),s=e(614),f=e(111),p=e(2597),l=e(648),y=e(6330),v=e(8880),d=e(8052),g=e(7045),A=e(7976),h=e(9518),w=e(7674),T=e(5112),x=e(9711),_=e(9909),m=_.enforce,b=_.get,C=u.Int8Array,R=C&&C.prototype,S=u.Uint8ClampedArray,O=S&&S.prototype,I=C&&h(C),M=R&&h(R),j=Object.prototype,U=u.TypeError,E=T("toStringTag"),B=x("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",P=a&&!!w&&"Opera"!==l(u.opera),k=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},H={BigInt64Array:8,BigUint64Array:8},z=function(t){if(!f(t))return!1;var r=l(t);return"DataView"===r||p(F,r)||p(H,r)},V=function(t){var r=h(t);if(f(r)){var e=b(r);return e&&p(e,D)?e[D]:V(r)}},Y=function(t){if(!f(t))return!1;var r=l(t);return p(F,r)||p(H,r)},q=function(t){if(Y(t))return t;throw U("Target is not a typed array")},G=function(t){if(s(t)&&(!w||A(I,t)))return t;throw U(y(t)+" is not a typed array constructor")},N=function(t,r,e,n){if(c){if(e)for(var o in F){var i=u[o];if(i&&p(i.prototype,t))try{delete i.prototype[t]}catch(a){try{i.prototype[t]=r}catch(s){}}}M[t]&&!e||d(M,t,e?r:P&&R[t]||r,n)}},L=function(t,r,e){var n,o;if(c){if(w){if(e)for(n in F)if(o=u[n],o&&p(o,t))try{delete o[t]}catch(i){}if(I[t]&&!e)return;try{return d(I,t,e?r:P&&I[t]||r)}catch(i){}}for(n in F)o=u[n],!o||o[t]&&!e||d(o,t,r)}};for(n in F)o=u[n],i=o&&o.prototype,i?m(i)[D]=o:P=!1;for(n in H)o=u[n],i=o&&o.prototype,i&&(m(i)[D]=o);if((!P||!s(I)||I===Function.prototype)&&(I=function(){throw U("Incorrect invocation")},P))for(n in F)u[n]&&w(u[n],I);if((!P||!M||M===j)&&(M=I.prototype,P))for(n in F)u[n]&&w(u[n].prototype,M);if(P&&h(O)!==M&&w(O,M),c&&!p(M,E))for(n in k=!0,g(M,E,{configurable:!0,get:function(){return f(this)?this[B]:void 0}}),F)u[n]&&v(u[n],B,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:k&&B,aTypedArray:q,aTypedArrayConstructor:G,exportTypedArrayMethod:N,exportTypedArrayStaticMethod:L,getTypedArrayConstructor:V,isView:z,isTypedArray:Y,TypedArray:I,TypedArrayPrototype:M}},7745:function(t,r,e){var n=e(6244);t.exports=function(t,r){var e=0,o=n(r),i=new t(o);while(o>e)i[e]=r[e++];return i}},1843:function(t,r,e){var n=e(6244);t.exports=function(t,r){for(var e=n(t),o=new r(e),i=0;i<e;i++)o[i]=t[e-i-1];return o}},1572:function(t,r,e){var n=e(6244),o=e(9303),i=RangeError;t.exports=function(t,r,e,a){var c=n(t),u=o(e),s=u<0?c+u:u;if(s>=c||s<0)throw i("Incorrect index");for(var f=new r(c),p=0;p<c;p++)f[p]=p===s?a:t[p];return f}},648:function(t,r,e){var n=e(1694),o=e(614),i=e(4326),a=e(5112),c=a("toStringTag"),u=Object,s="Arguments"===i(function(){return arguments}()),f=function(t,r){try{return t[r]}catch(e){}};t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=f(r=u(t),c))?e:s?i(r):"Object"===(n=i(r))&&o(r.callee)?"Arguments":n}},8544:function(t,r,e){var n=e(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},7045:function(t,r,e){var n=e(6339),o=e(3070);t.exports=function(t,r,e){return e.get&&n(e.get,r,{getter:!0}),e.set&&n(e.set,r,{setter:!0}),o.f(t,r,e)}},5668:function(t,r,e){var n=e(1702),o=e(9662);t.exports=function(t,r,e){try{return n(o(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(i){}}},4067:function(t,r,e){var n=e(648);t.exports=function(t){var r=n(t);return"BigInt64Array"===r||"BigUint64Array"===r}},9518:function(t,r,e){var n=e(2597),o=e(614),i=e(7908),a=e(6200),c=e(8544),u=a("IE_PROTO"),s=Object,f=s.prototype;t.exports=c?s.getPrototypeOf:function(t){var r=i(t);if(n(r,u))return r[u];var e=r.constructor;return o(e)&&r instanceof e?e.prototype:r instanceof s?f:null}},7674:function(t,r,e){var n=e(5668),o=e(9670),i=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{t=n(Object.prototype,"__proto__","set"),t(e,[]),r=e instanceof Array}catch(a){}return function(e,n){return o(e),i(n),r?t(e,n):e.__proto__=n,e}}():void 0)},4599:function(t,r,e){var n=e(7593),o=TypeError;t.exports=function(t){var r=n(t,"number");if("number"==typeof r)throw o("Can't convert number to bigint");return BigInt(r)}},1694:function(t,r,e){var n=e(5112),o=n("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},1439:function(t,r,e){var n=e(1843),o=e(260),i=o.aTypedArray,a=o.exportTypedArrayMethod,c=o.getTypedArrayConstructor;a("toReversed",(function(){return n(i(this),c(this))}))},7585:function(t,r,e){var n=e(260),o=e(1702),i=e(9662),a=e(7745),c=n.aTypedArray,u=n.getTypedArrayConstructor,s=n.exportTypedArrayMethod,f=o(n.TypedArrayPrototype.sort);s("toSorted",(function(t){void 0!==t&&i(t);var r=c(this),e=a(u(r),r);return f(e,t)}))},5315:function(t,r,e){var n=e(1572),o=e(260),i=e(4067),a=e(9303),c=e(4599),u=o.aTypedArray,s=o.getTypedArrayConstructor,f=o.exportTypedArrayMethod,p=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();f("with",{with:function(t,r){var e=u(this),o=a(t),f=i(e)?c(r):+r;return n(e,s(e),o,f)}}["with"],!p)}}]);
//# sourceMappingURL=about.f4778b6e.js.map