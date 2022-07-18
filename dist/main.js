(()=>{"use strict";var n={802:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(559),r=e.n(o),i=e(476),a=e.n(i)()(r());a.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n.header {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    background-color: lightblue;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12vh;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: gray;\n    display: grid;\n    grid-template-rows: 1fr auto 5fr;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n}\n\n.sidebar h2 {\n    font-size: 4rem;\n}\n\n.sidebar ul {\n    text-align: center;\n    font-size: 2rem;\n    list-style: none;\n}\n\n.add-project-button {\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    background-color: coral;\n    align-self: flex-end;\n    color: white;\n    font-size: 90px;\n    font-weight: bold;\n    justify-self: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-container {\n    grid-column: 2 / -1;\n    grid-row: 2 / 3;\n    background-color: lightgray;\n    display: grid;\n    grid-auto-rows: 300px;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    padding: 20px;\n    overflow-y: auto;\n}\n\n.task-card {\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-top: 20px;\n    align-items: center;\n    background-color: white;\n}\n\n.task-card div {\n    width: 100%;\n    height: 10px;\n}\n\n.add-task-button {\n    height: 100px;\n    width: 100px;\n    border: none;\n    border-radius: 50%;\n    background-color: lightblue;\n    font-size: 90px;\n    color: white;\n    position: fixed;\n    left: calc(25vw + 20px);\n    bottom: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-window {\n    position: absolute;\n    height: 30vh;\n    width: 70vw;\n    background-color: white;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    top: 30vh;\n    border: 4px lightblue solid;\n    border-radius: 20px;\n    box-shadow: 0px 0px 10px gray;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.add-window div {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-window div.buttons {\n    flex-direction: row;\n    gap: 20px;\n}\n\n.buttons button {\n    height: 50px;\n    width: 100px;\n    border: 1px darkgray solid;\n    box-shadow: 2px 2px 5px lightgray;\n    border-radius: 5px;\n}\n\n.buttons button:first-child{\n    background-color: #14F500;\n}\n\n.buttons button:last-child {\n    background-color: #F55A4B;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,aAAa;IACb,gCAAgC;IAChC,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,2BAA2B;IAC3B,aAAa;IACb,qBAAqB;IACrB,2DAA2D;IAC3D,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;IACf,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,2BAA2B;IAC3B,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,0BAA0B;IAC1B,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n.header {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    background-color: lightblue;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12vh;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: gray;\n    display: grid;\n    grid-template-rows: 1fr auto 5fr;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n}\n\n.sidebar h2 {\n    font-size: 4rem;\n}\n\n.sidebar ul {\n    text-align: center;\n    font-size: 2rem;\n    list-style: none;\n}\n\n.add-project-button {\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    background-color: coral;\n    align-self: flex-end;\n    color: white;\n    font-size: 90px;\n    font-weight: bold;\n    justify-self: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-container {\n    grid-column: 2 / -1;\n    grid-row: 2 / 3;\n    background-color: lightgray;\n    display: grid;\n    grid-auto-rows: 300px;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    padding: 20px;\n    overflow-y: auto;\n}\n\n.task-card {\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-top: 20px;\n    align-items: center;\n    background-color: white;\n}\n\n.task-card div {\n    width: 100%;\n    height: 10px;\n}\n\n.add-task-button {\n    height: 100px;\n    width: 100px;\n    border: none;\n    border-radius: 50%;\n    background-color: lightblue;\n    font-size: 90px;\n    color: white;\n    position: fixed;\n    left: calc(25vw + 20px);\n    bottom: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-window {\n    position: absolute;\n    height: 30vh;\n    width: 70vw;\n    background-color: white;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    top: 30vh;\n    border: 4px lightblue solid;\n    border-radius: 20px;\n    box-shadow: 0px 0px 10px gray;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.add-window div {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-window div.buttons {\n    flex-direction: row;\n    gap: 20px;\n}\n\n.buttons button {\n    height: 50px;\n    width: 100px;\n    border: 1px darkgray solid;\n    box-shadow: 2px 2px 5px lightgray;\n    border-radius: 5px;\n}\n\n.buttons button:first-child{\n    background-color: #14F500;\n}\n\n.buttons button:last-child {\n    background-color: #F55A4B;\n}"],sourceRoot:""}]);const c=a},476:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},559:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */"),a=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([i]).join("\n")}return[t].join("\n")}},892:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],d=o.base?A[0]+o.base:A[0],s=i[d]||0,l="".concat(d," ").concat(s);i[d]=s+1;var u=e(l),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var A=o(n,r),d=0;d<i.length;d++){var s=e(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=A}}},311:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},60:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},192:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},760:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},865:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(892),t=e.n(n),o=e(760),r=e.n(o),i=e(311),a=e.n(i),c=e(192),A=e.n(c),d=e(60),s=e.n(d),l=e(865),u=e.n(l),p=e(802),m={};m.styleTagTransform=u(),m.setAttributes=A(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;class f{constructor(n){this.title=n,this.tasks=[]}displayProject(){console.log(this);const n=document.querySelector(".task-container");n.innerHTML="",this.tasks.forEach((e=>{const o=function(n){const t=document.createElement("div");t.classList.add("task-card");const e=document.createElement("h2");e.textContent=n.title;const o=document.createElement("p");o.textContent=n.description;const r=document.createElement("button");r.textContent="Remove",r.id="remove-button";const i=document.createElement("div"),a="rgb("+2.55*n.priority+","+2.55*(100-n.priority)+",0, 1)";return i.style.backgroundColor=a,t.append(e,o,r,i),t}(e);n.appendChild(o),o.querySelector("button").addEventListener("click",(()=>{console.log("hello world"),this.tasks.splice(this.tasks.indexOf(e),1),this.displayProject(),document.body.removeChild(t)}))}));const t=document.createElement("button");t.textContent="+",t.classList.add("add-task-button"),t.addEventListener("click",(()=>{this.displayAddTaskWindow(),document.body.removeChild(t)})),document.body.appendChild(t)}displayAddTaskWindow(){const n=document.createElement("div");n.classList.add("add-window");const t=document.createElement("div"),e=document.createElement("input");e.id="title";const o=document.createElement("label");o.textContent="Title",o.for="title",t.append(o,e);const r=document.createElement("div"),i=document.createElement("input");i.id="description";const a=document.createElement("label");a.textContent="Description",a.for="description",r.append(a,i);const c=document.createElement("div"),A=document.createElement("input");A.type="range",A.min=0,A.max=100,A.id="priority";const d=document.createElement("label");d.textContent="Priority",d.for="priority",c.append(d,A);const s=document.createElement("div");s.classList.add("buttons");const l=document.createElement("button");l.textContent="ADD";const u=document.createElement("button");function p(){return[e.value,i.value,A.value]}u.textContent="CANCEL",s.append(l,u),u.addEventListener("click",(()=>{document.body.removeChild(n)})),l.addEventListener("click",(()=>m())),n.append(t,r,c,s),document.body.appendChild(n);const m=()=>{document.body.removeChild(n),console.log(this),this.tasks.push(new g(p()[0],p()[1],p()[2])),this.displayProject()}}}const C=document.querySelector("#project-list"),B=[];f.prototype.removeTask;class g{constructor(n,t,e){this.title=n,this.description=t,this.priority=e}getTask(){return this}}document.querySelector(".add-project-button").addEventListener("click",(()=>{!function(){const n=document.createElement("div");n.classList.add("add-window");const t=document.createElement("div"),e=document.createElement("input");e.id="title";const o=document.createElement("label");o.textContent="Title",o.for="title",t.append(o,e);const r=document.createElement("div");r.classList.add("buttons");const i=document.createElement("button");i.textContent="ADD";const a=document.createElement("button");a.textContent="CANCEL",r.append(i,a),a.addEventListener("click",(()=>{document.body.removeChild(n)})),i.addEventListener("click",(()=>(B.push(new f(e.value)),C.innerHTML="",B.forEach((n=>{const t=document.createElement("li");t.textContent=n.title,t.addEventListener("click",(()=>{console.log("hello"),n.displayProject()})),C.appendChild(t)})),void document.body.removeChild(n)))),n.append(t,r),document.body.appendChild(n)}()}))})()})();
//# sourceMappingURL=main.js.map