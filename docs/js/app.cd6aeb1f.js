(function(){"use strict";var e={4782:function(e,t,i){var n=i(9242),o=i(3396);function u(e,t){const i=(0,o.up)("router-link"),n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(i,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Uk)(" --- "),(0,o.Wm)(i,{to:"/TestView"},{default:(0,o.w5)((()=>[(0,o.Uk)("TestView")])),_:1}),(0,o.Wm)(i,{to:"/NumberShotView"},{default:(0,o.w5)((()=>[(0,o.Uk)("NumberShotView")])),_:1})]),(0,o.Wm)(n)],64)}var r=i(89);const a={},s=(0,r.Z)(a,[["render",u]]);var l=s,d=i(2483),c=i(7139);const m=(0,o._)("div",{class:"text-2xl text-green-500"}," test ",-1),p=["src"];function f(e,t,i,n,u,r){const a=(0,o.up)("KosulIfade"),s=(0,o.up)("KosulIki");return(0,o.wg)(),(0,o.iD)(o.HY,null,[m,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.destinations,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o._)("p",null,(0,c.zw)(e.id),1),(0,o._)("h1",null,(0,c.zw)(e.title),1),(0,o._)("p",null,(0,c.zw)(e.body),1),(0,o._)("img",{class:"w-96 h-96 mx-auto",src:e.image,alt:""},null,8,p)])))),128)),(0,o.Wm)(a),(0,o.Wm)(s)],64)}const b={key:0},h={key:1};function v(e,t,i,n,u,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>n.toggleCondition&&n.toggleCondition(...e)),class:"bg-purple-500 text-white w-36 h-10"},"toggle button"),n.condition?((0,o.wg)(),(0,o.iD)("p",b,"basarili giris yaptiniz")):((0,o.wg)(),(0,o.iD)("p",h,"giris yapiniz lutfen"))])}var g=i(4870),w={components:{},setup(){const e=(0,g.iH)(!0),t=()=>{e.value=!e.value};return{condition:e,toggleCondition:t}}};const y=(0,r.Z)(w,[["render",v]]);var x=y;const k={class:"p-4"},q={class:"mt-4"},D=(0,o._)("h2",{class:"text-xl font-semibold"},"Diğer İçerikler:",-1),_={class:"list-disc ml-4"},H=["onClick"],C={class:"mt-4"};function G(e,t,i,u,r,a){return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",q,[D,(0,o._)("ul",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.items,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id,class:"mt-2"},[(0,o.Uk)((0,c.zw)(e.text)+" ",1),(0,o._)("button",{onClick:t=>u.removeItem(e.id),class:"ml-2 text-red-600"},"Sil",8,H)])))),128))])]),(0,o._)("div",C,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.newItemText=e),onKeyup:t[1]||(t[1]=(0,n.D2)(((...e)=>u.addItem&&u.addItem(...e)),["enter"])),placeholder:"Yeni öğe ekle",class:"p-2 border rounded"},null,544),[[n.nr,u.newItemText]]),(0,o._)("button",{onClick:t[2]||(t[2]=(...e)=>u.addItem&&u.addItem(...e)),class:"bg-green-500 text-white px-2 py-1 ml-2 rounded"},"Ekle")])])}i(7658);var I={setup(){const e=(0,g.iH)(!0),t=(0,g.iH)([{id:1,text:"Öğe 1"},{id:2,text:"Öğe 2"},{id:3,text:"Öğe 3"}]),i=(0,g.iH)(""),n=()=>{""!==i.value.trim()&&(t.value.push({id:t.value.length+1,text:i.value}),i.value="")},o=e=>{t.value=t.value.filter((t=>t.id!==e))};return{condition:e,items:t,newItemText:i,addItem:n,removeItem:o}}};const N=(0,r.Z)(I,[["render",G]]);var S=N,T=JSON.parse('{"M":[{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla","image":"https://images.unsplash.com/photo-1695142260208-520c6ce6c061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut","image":"https://images.unsplash.com/photo-1695088566123-593dc77ed3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit","image":"https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque","image":"https://plus.unsplash.com/premium_photo-1677269242095-565c0225c8e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"},{"userId":1,"id":6,"title":"dolorem eum magni eos aperiam quia","body":"ut aspernatur corporis harum nihil quis provident sequi\\nmollitia nobis aliquid molestiae\\nperspiciatis et ea nemo ab reprehenderit accusantium quas\\nvoluptate dolores velit et doloremque molestiae"},{"userId":1,"id":7,"title":"magnam facilis autem","body":"dolore placeat quibusdam ea quo vitae\\nmagni quis enim qui quis quo nemo aut saepe\\nquidem repellat excepturi ut quia\\nsunt ut sequi eos ea sed quas"},{"userId":1,"id":8,"title":"dolorem dolore est ipsam","body":"dignissimos aperiam dolorem qui eum\\nfacilis quibusdam animi sint suscipit qui sint possimus cum\\nquaerat magni maiores excepturi\\nipsam ut commodi dolor voluptatum modi aut vitae"},{"userId":1,"id":9,"title":"nesciunt iure omnis dolorem tempora et accusantium","body":"consectetur animi nesciunt iure dolore\\nenim quia ad\\nveniam autem ut quam aut nobis\\net est aut quod aut provident voluptas autem voluptas"}]}'),M={name:"HomeView",components:{KosulIfade:x,KosulIki:S},setup(){const e=(0,g.iH)(T.M);return{destinations:e}}};const A=(0,r.Z)(M,[["render",f]]);var O=A;i(541);const j={class:""},V=["onKeyup"],E={class:"my-6 flex flex-col"},B=["onChange","checked"],z={class:"fixed ml-40 flex"},K=["onClick"];var U={__name:"TestView",setup(e){const t=(0,g.iH)([{title:"Örnek Görev 1",completed:!1},{title:"Örnek Görev 2",completed:!0}]),i=(0,g.iH)(""),u=(0,g.iH)([]),r=()=>{t.value.push({title:i.value,completed:!1}),i.value=""},a=e=>{const i=t.value.splice(e,1)[0];u.value.unshift(i)},s=()=>{if(u.value.length>0){const e=u.value.shift();t.value.push(e)}},l=e=>{t.value[e].completed=!t.value[e].completed},d=(e,t)=>e.length>t?e.substring(0,t)+"...":e;return(e,u)=>((0,o.wg)(),(0,o.iD)("div",j,[(0,o.wy)((0,o._)("input",{class:"w-60 h-12 border-4 border-black rounded mx-auto","onUpdate:modelValue":u[0]||(u[0]=e=>i.value=e),onKeyup:(0,n.D2)(r,["enter"]),placeholder:"  Görev ekle..."},null,40,V),[[n.nr,i.value]]),(0,o._)("ul",E,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"flex text-start my-2 font-semibold",key:t},[(0,o._)("input",{class:"border rounded w-6 h-6",type:"checkbox",onChange:e=>l(t),checked:e.completed},null,40,B),(0,o._)("span",{class:"mx-2",style:(0,c.j5)({textDecoration:e.completed?"line-through":"none"})},(0,c.zw)(d(e.title,20)),5),(0,o._)("div",z,[(0,o._)("button",{class:"border rounded bg-red-300 ml-6 text-white w-12 h-6",onClick:e=>a(t)}," Sil ",8,K)])])))),128))]),(0,o._)("button",{class:"border rounded bg-green-300 ml-6 text-white w-12 h-6",onClick:s}," Geri Al ")]))}};const W=U;var Y=W;const P={class:"min-h-screen flex items-center justify-center bg-gray-100"},F={class:"bg-white p-8 rounded shadow-md"},L=(0,o._)("h1",{class:"text-3xl mb-4"},"Number Shot Oyunu",-1),Z={key:0,class:"mt-4"},J={key:0,class:"text-green-500 mb-4"},R={key:1,class:"mb-4"},Q={key:2,for:"guess",class:"block"},X={key:5,class:"mt-4"};function $(e,t,i,u,r,a){return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("div",F,[L,(0,o._)("div",null,[(0,o._)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:t[0]||(t[0]=(...e)=>a.startGame&&a.startGame(...e))}," Oyuna Başla ")]),r.gameStarted?((0,o.wg)(),(0,o.iD)("div",Z,[r.message?((0,o.wg)(),(0,o.iD)("p",J,(0,c.zw)(r.message),1)):(0,o.kq)("",!0),r.randomNumber?((0,o.wg)(),(0,o.iD)("p",R,"Rastgele sayı: "+(0,c.zw)(r.randomNumber),1)):(0,o.kq)("",!0),r.message?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("label",Q,"1 ile 100 arasında bir sayı girin:")),r.message?(0,o.kq)("",!0):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:3,type:"number",id:"guess","onUpdate:modelValue":t[1]||(t[1]=e=>r.userGuess=e),class:"block border rounded p-2 my-2 w-full",min:"1",max:"100"},null,512)),[[n.nr,r.userGuess,void 0,{number:!0}]]),r.message?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:4,onClick:t[2]||(t[2]=(...e)=>a.checkGuess&&a.checkGuess(...e)),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Tahmin Et ")),r.userGuess?((0,o.wg)(),(0,o.iD)("p",X,"Tahmininiz: "+(0,c.zw)(r.userGuess),1)):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])])}var ee={data(){return{gameStarted:!1,randomNumber:0,userGuess:0,message:""}},methods:{startGame(){this.randomNumber=Math.floor(100*Math.random())+1,this.gameStarted=!0},checkGuess(){this.userGuess===this.randomNumber?this.message="Tebrikler, doğru tahmin!":this.userGuess<this.randomNumber?this.message="Daha yüksek bir sayı girin.":this.message="Daha düşük bir sayı girin."}}};const te=(0,r.Z)(ee,[["render",$]]);var ie=te;const ne=[{path:"/",name:"home",component:O},{path:"/TestView",name:"TestView",component:Y},{path:"/NumberShotView",name:"NumberShotView",component:ie},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,4902))}],oe=(0,d.p7)({history:(0,d.PO)("/bilgisinavi/"),routes:ne});var ue=oe,re=i(65),ae=(0,re.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(l).use(ae).use(ue).mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,i),u.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,u){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],u=e[d][2];for(var a=!0,s=0;s<n.length;s++)(!1&u||r>=u)&&Object.keys(i.O).every((function(e){return i.O[e](n[s])}))?n.splice(s--,1):(a=!1,u<r&&(r=u));if(a){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}u=u||0;for(var d=e.length;d>0&&e[d-1][2]>u;d--)e[d]=e[d-1];e[d]=[n,o,u]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/about.f4778b6e.js"}}(),function(){i.miniCssF=function(e){return"css/about.61352d9c.css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bilgisinavi:";i.l=function(n,o,u,r){if(e[n])e[n].push(o);else{var a,s;if(void 0!==u)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+u){a=c;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+u),a.src=n),e[n]=[o];var m=function(t,i){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(i)})),t)return t(i)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/bilgisinavi/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,i,n,o){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css";var r=function(i){if(u.onerror=u.onload=null,"load"===i.type)n();else{var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=a,u.parentNode&&u.parentNode.removeChild(u),o(s)}};return u.onerror=u.onload=r,u.href=t,i?i.parentNode.insertBefore(u,i.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var o=i[n],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){o=r[n],u=o.getAttribute("data-href");if(u===e||u===t)return o}},n=function(n){return new Promise((function(o,u){var r=i.miniCssF(n),a=i.p+r;if(t(r,a))return o();e(n,a,null,o,u)}))},o={143:0};i.f.miniCss=function(e,t){var i={443:1};o[e]?t.push(o[e]):0!==o[e]&&i[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};i.f.j=function(t,n){var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var u=new Promise((function(i,n){o=e[t]=[i,n]}));n.push(o[2]=u);var r=i.p+i.u(t),a=new Error,s=function(n){if(i.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+r+")",a.name="ChunkLoadError",a.type=u,a.request=r,o[1](a)}};i.l(r,s,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,u,r=n[0],a=n[1],s=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(s)var d=s(i)}for(t&&t(n);l<r.length;l++)u=r[l],i.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return i.O(d)},n=self["webpackChunkbilgisinavi"]=self["webpackChunkbilgisinavi"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(4782)}));n=i.O(n)})();
//# sourceMappingURL=app.cd6aeb1f.js.map