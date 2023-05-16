!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("4Nugj",(function(t,n){e(t.exports,"default",(function(){return r}));var r={modal:document.querySelector(".backdrop"),modalContent:document.querySelector(".modal"),modalCloseBtn:document.querySelector("[data-modal-close]"),mainGalleryEl:document.querySelector(".container-main-gallery"),mainGalleryTitleEl:document.querySelector(".category-title"),mainGalleryTitleSpanEl:document.querySelector(".category-title-span"),categoriesList:document.querySelector(".categories-list"),userLoginBtn:document.querySelector(".user-login"),authFormBackdrop:document.querySelector(".auth-backdrop"),authFormCloseBtn:document.querySelector(".auth-form-close-btn"),authForm:document.querySelector(".js-register-form"),supportEl:document.querySelector(".support-container"),supportRenderEl:document.querySelector(".support-render"),iconSvgBtnEl:document.querySelector(".support-icon"),supportLoadBtn:document.querySelector(".support-button"),footerProfilesEl:document.querySelector(".profile-list"),pixelJsCakeBtn:document.querySelector(".pixel-js-cake-btn"),spinnerEl:document.querySelector(".breeding-rhombus-spinner"),wrapperBookEl:document.querySelector(".wrapper-book"),buttonAddBookEl:document.querySelector(".form__button"),addedTextEl:document.querySelector(".added-text"),signUpFormBtn:document.getElementById("signup-formbtn"),loginFormBtn:document.getElementById("signin-formbtn"),nameInput:document.getElementById("uname"),emailInput:document.getElementById("uemail"),passwordInput:document.getElementById("upassword"),btnLogin:document.getElementById("btnLogin"),btnSignup:document.getElementById("btnSignup"),btnLogout:document.getElementById("btnLogout"),authSubmitBtn:document.getElementById("authform-submitBtn"),profileNameEl:document.querySelector("[data-profile-name]"),mProfileNameEl:document.querySelector("[data-profile-mname]"),headerProfileEl:document.getElementById("header-profile-btn"),headerSignupEl:document.getElementById("header-signup"),headerlogoutBtn:document.getElementById("header-logout"),mHeaderProfileEl:document.getElementById("mobile-header-profile-btn"),mheaderSignupEl:document.getElementById("mobile-header-signup"),mheaderlogoutBtn:document.getElementById("mobile-header-logout"),groupBtnEl:document.querySelector(".button-group-logo"),cardListEl:document.querySelector(".card-list"),checkIconEl:document.querySelector(".group-logo-icon"),teamParEl:document.querySelector(".our-team")}})),o.register("5nHy8",(function(e,t){})),o.register("cs7FV",(function(e,t){var n=document.querySelector(".js-open-mobile-menu"),r=document.querySelector(".js-mobile-menu"),i=document.querySelector(".icon-burger-mobile-menu"),o=document.querySelector(".icon-close-mobile-menu");n.addEventListener("click",(function(e){o.classList.contains("is-hidden")?(r.classList.remove("is-hidden-modal"),i.classList.add("is-hidden"),o.classList.remove("is-hidden")):(r.classList.add("is-hidden-modal"),i.classList.remove("is-hidden"),o.classList.add("is-hidden"))}))})),o.register("bTwnY",(function(e,t){var n=document.querySelector('input[type="checkbox"]'),r=localStorage.getItem("theme");r&&(document.body.classList.add(r),n.checked="dark"===r),n.addEventListener("change",(function(){n.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))}))})),o.register("xpKCW",(function(e,n){var r=o("4Nugj"),i=o("4mtOU"),a=o("2NuD8"),s=o("eiUc4"),u=o("3F2fL"),c=o("4wc3d"),l=o("cogyY"),h=o("9uEWU"),f=o("bygx3"),d=o("ddcZI"),p=[{id:1,title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",icon:t(i),position:"01",className:"icon",width:"131",height:"32"},{id:2,title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",icon:t(a),position:"02",className:"icon",width:"62",height:"32"},{id:3,title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",icon:t(s),position:"03",className:"icon",width:"101",height:"32"},{id:4,title:"RAZOM",url:"https://www.razomforukraine.org/",icon:t(u),position:"04",className:"icon",width:"82",height:"32"},{id:5,title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",icon:t(c),position:"05",className:"icon",width:"55",height:"32"},{id:6,title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",icon:t(l),position:"06",className:"icon",width:"115",height:"32"},{id:7,title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",icon:t(h),position:"07",className:"icon",width:"129",height:"35"},{id:8,title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",icon:t(f),position:"08",className:"icon",width:"81",height:"39"},{id:9,title:"UNITED24",url:"https://u24.gov.ua/uk",icon:t(d),position:"09",className:"icon",width:"149",height:"15"}],v=6;function g(e){var t=e.slice(0,6).map((function(e){return' <a class="support-link link"  href="'.concat(e.url,'" target="_blank">\n          ').concat(e.position,'\n          <img src="').concat(e.icon,'" class = "support-item" width="').concat(e.width,'" height="').concat(e.height,'"  alt="" loading="lazy"/> \n        </a>')})).join("");r.default.supportRenderEl.innerHTML=t}window.innerWidth>=360&&window.innerWidth<=767&&(v=4);var m=document.querySelector(".support-icon"),y=p.slice(0,v),_=!0;g(y),r.default.supportLoadBtn.addEventListener("click",(function(){if(_){if(9==y[y.length-1].id)return _=!1;var e=p.findIndex((function(e){return e.id===y[y.length-1].id}));y.push(p[e+1]),y.shift()}else{if(1===y[0].id)return _=!0;var t=p.findIndex((function(e){return e.id===y[0].id}));y.unshift(p[t-1]),y.pop()}4!==y[0].id&&1!==y[0].id||(_=!_);g(y),_?m.classList.remove("up"):m.classList.add("up")}))})),o.register("4mtOU",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("3ZQG8")})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o.register("2NuD8",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("lT5Sb")})),o.register("eiUc4",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("lkTUI")})),o.register("3F2fL",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("cUmEl")})),o.register("4wc3d",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("6puB0")})),o.register("cogyY",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("af08D")})),o.register("9uEWU",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("4Iq1S")})),o.register("bygx3",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("lWsFU")})),o.register("ddcZI",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("5grJL")})),o.register("hfTVu",(function(e,n){var r=o("3zXFp"),i=o("g6uv9"),a=o("9Jd6R"),s=o("iQdLv"),u=o("aUfjh"),c=o("e9ZMY"),l=o("h7Pds"),h=o("8BbCK"),f=o("abPoD"),d=o("4Nugj"),p=[{id:1,link:"https://github.com/vitaliipshenychnyi",src:t(i),alt:"vitaliypshenychnyi"},{id:2,link:"https://github.com/WOWmasterJulia",src:t(a),alt:"julialuzina"},{id:3,link:"https://github.com/Vanchenko",src:t(s),alt:"evgenvanchenko"},{id:4,link:"https://github.com/Doluvit",src:t(u),alt:"vitaliydolyuk"},{id:5,link:"https://github.com/Matsypura",src:t(r),alt:"andriymatcipura"},{id:6,link:"https://github.com/LizaPikovskaya",src:t(c),alt:"lizapikovska"},{id:7,link:"https://github.com/AleksandrBreslavets",src:t(l),alt:"olexanderbreslavets"},{id:8,link:"https://github.com/nedinix",src:t(h),alt:"hennadiyyarosh"},{id:9,link:"https://github.com/ivan-2908",src:t(f),alt:"ivanrusnak"}];d.default.groupBtnEl.addEventListener("click",(function(e){d.default.cardListEl.childElementCount?(d.default.checkIconEl.classList.remove("return-check"),d.default.cardListEl.classList.add("is-hidden"),d.default.teamParEl.classList.add("is-hidden"),d.default.cardListEl.innerHTML=""):(d.default.checkIconEl.classList.add("return-check"),d.default.teamParEl.classList.remove("is-hidden"),d.default.cardListEl.classList.remove("is-hidden"),d.default.cardListEl.innerHTML=p.map((function(e){var t=e.id,n=e.link,r=e.src,i=e.alt;return'<li class="card-item" data-id='.concat(t,'>\n<a href="').concat(n,'" class="card-link" target="_blank">\n<img src="').concat(r,'" alt="').concat(i,'">\n</a>\n</li>')})).join(" "))}))})),o.register("3zXFp",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("hQKmN")})),o.register("g6uv9",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("7g4Ii")})),o.register("9Jd6R",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("3uWCI")})),o.register("iQdLv",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("KtZhs")})),o.register("aUfjh",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("8sijK")})),o.register("e9ZMY",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("cGK19")})),o.register("h7Pds",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("4KAoE")})),o.register("8BbCK",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("erXUd")})),o.register("abPoD",(function(e,t){e.exports=o("aNJCr").getBundleURL("1Vwc0")+o("iE7OH").resolve("kR5SC")})),o.register("lgQb1",(function(n,r){e(n.exports,"showProfile",(function(){return c})),e(n.exports,"visibleProfileBtn",(function(){return d})),e(n.exports,"visibleSignupBtn",(function(){return f})),e(n.exports,"hideAuthForm",(function(){return g}));var i=o("bpxeT"),a=o("2TvXO"),s=o("4Nugj"),u=o("9wf5v");o("9wf5v"),u=o("9wf5v");function c(e){return l.apply(this,arguments)}function l(){return(l=t(i)(t(a).mark((function e(n){return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(),h(n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){s.default.profileNameEl.textContent=e,s.default.mProfileNameEl.textContent=e}function f(){y(s.default.headerSignupEl),y(s.default.mheaderSignupEl),m(s.default.headerProfileEl),m(s.default.mHeaderProfileEl),m(s.default.mheaderlogoutBtn)}function d(){y(s.default.headerProfileEl),y(s.default.mHeaderProfileEl),y(s.default.mheaderlogoutBtn),m(s.default.headerSignupEl),m(s.default.mheaderSignupEl)}function p(){s.default.headerlogoutBtn.classList.toggle("active")}function v(){(0,u.logout)()}function g(){s.default.authFormBackdrop.classList.add("is-hidden")}function m(e){e.classList.add("is-hidden")}function y(e){e.classList.remove("is-hidden")}s.default.headerProfileEl.addEventListener("click",p),s.default.mHeaderProfileEl.addEventListener("click",p),s.default.mheaderSignupEl.addEventListener("click",(function(){s.default.authFormBackdrop.classList.remove("is-hidden")})),s.default.headerlogoutBtn.addEventListener("click",v),s.default.mheaderlogoutBtn.addEventListener("click",v)})),o.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,u,"next",e)}function u(e){n(a,i,o,s,u,"throw",e)}s(void 0)}))}}})),o.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var _={};u(_,o,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(R([])));b&&b!==n&&r.call(b,o)&&(_=b);var w=y.prototype=g.prototype=Object.create(_);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function R(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return m.prototype=y,u(w,"constructor",y),u(y,"constructor",m),m.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},I(x.prototype),u(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new x(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),o.register("9wf5v",(function(n,r){e(n.exports,"LOCAL_STORAGE_TOKEN",(function(){return d})),e(n.exports,"loginAccount",(function(){return p})),e(n.exports,"createAccount",(function(){return g})),e(n.exports,"logout",(function(){return _}));var i=o("bpxeT"),a=o("2TvXO");o("gQOBw");var s=o("89ttn"),u=o("4Nugj"),c=o("01e4Y"),l=o("lgQb1"),h=o("4XEig"),f=(l=o("lgQb1"),(0,s.o)(c.default)),d="userToken";JSON.parse(localStorage.getItem(d)),f.currentUser;function p(){return v.apply(this,arguments)}function v(){return(v=t(i)(t(a).mark((function e(){var n;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.a9)(f,u.default.emailInput.value.trim(),u.default.passwordInput.value);case 3:n=e.sent.user,(0,l.showProfile)(n.displayName),(0,l.visibleProfileBtn)(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(){return m.apply(this,arguments)}function m(){return(m=t(i)(t(a).mark((function e(){var n,r,i,o;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=u.default.emailInput.value.trim(),r=u.default.passwordInput.value,i=u.default.nameInput.value.trim(),e.next=6,(0,s.a8)(f,n,r);case 6:return o=e.sent.user,e.next=9,(0,s.ai)(o,{displayName:i});case 9:return e.next=11,(0,l.showProfile)(f.currentUser.displayName);case 11:return e.next=13,(0,h.writeUserToDatabase)(o);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function y(){return(y=t(i)(t(a).mark((function e(){return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.x)(f,(function(e){e?(console.log("Welcome: ",e.displayName,"! Email :",e.email),localStorage.setItem(d,JSON.stringify(e.accessToken)),(0,l.showProfile)(e.displayName)):console.log("NO USER")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return k.apply(this,arguments)}function k(){return(k=t(i)(t(a).mark((function e(){return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.B)(f);case 2:localStorage.removeItem(d),(0,l.visibleSignupBtn)();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){y.apply(this,arguments)}()})),o.register("gQOBw",(function(t,n){e(t.exports,"getAuth",(function(){return o("89ttn").o})),e(t.exports,"signInWithEmailAndPassword",(function(){return o("89ttn").a9})),e(t.exports,"createUserWithEmailAndPassword",(function(){return o("89ttn").a8})),e(t.exports,"updateProfile",(function(){return o("89ttn").ai})),e(t.exports,"onAuthStateChanged",(function(){return o("89ttn").x})),e(t.exports,"signOut",(function(){return o("89ttn").B})),o("eMcUM")})),o.register("eMcUM",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return o("89ttn").a8})),e(t.exports,"getAuth",(function(){return o("89ttn").o})),e(t.exports,"onAuthStateChanged",(function(){return o("89ttn").x})),e(t.exports,"signInWithEmailAndPassword",(function(){return o("89ttn").a9})),e(t.exports,"signOut",(function(){return o("89ttn").B})),e(t.exports,"updateProfile",(function(){return o("89ttn").ai})),o("2xDiJ"),o("MjY8E"),o("kZfxc"),o("6ExWU");o("89ttn")})),o.register("2xDiJ",(function(r,i){e(r.exports,"assert",(function(){return m})),e(r.exports,"assertionError",(function(){return y})),e(r.exports,"base64",(function(){return k})),e(r.exports,"base64Encode",(function(){return w})),e(r.exports,"base64urlEncodeWithoutPadding",(function(){return I})),e(r.exports,"base64Decode",(function(){return x})),e(r.exports,"deepCopy",(function(){return E})),e(r.exports,"getDefaultEmulatorHost",(function(){return R})),e(r.exports,"getDefaultEmulatorHostnameAndPort",(function(){return N})),e(r.exports,"getDefaultAppConfig",(function(){return P})),e(r.exports,"getExperimentalSetting",(function(){return O})),e(r.exports,"Deferred",(function(){return A})),e(r.exports,"createMockUserToken",(function(){return L})),e(r.exports,"getUA",(function(){return D})),e(r.exports,"isMobileCordova",(function(){return M})),e(r.exports,"isBrowserExtension",(function(){return F})),e(r.exports,"isReactNative",(function(){return U})),e(r.exports,"isIE",(function(){return j})),e(r.exports,"isNodeSdk",(function(){return B})),e(r.exports,"isIndexedDBAvailable",(function(){return H})),e(r.exports,"validateIndexedDBOpenable",(function(){return q})),e(r.exports,"FirebaseError",(function(){return W})),e(r.exports,"ErrorFactory",(function(){return V})),e(r.exports,"jsonEval",(function(){return G})),e(r.exports,"stringify",(function(){return J})),e(r.exports,"isValidFormat",(function(){return Q})),e(r.exports,"isAdmin",(function(){return X})),e(r.exports,"contains",(function(){return $})),e(r.exports,"safeGet",(function(){return Z})),e(r.exports,"isEmpty",(function(){return ee})),e(r.exports,"map",(function(){return te})),e(r.exports,"deepEqual",(function(){return ne})),e(r.exports,"querystring",(function(){return ie})),e(r.exports,"querystringDecode",(function(){return oe})),e(r.exports,"extractQuerystring",(function(){return ae})),e(r.exports,"Sha1",(function(){return se})),e(r.exports,"createSubscribe",(function(){return ue})),e(r.exports,"errorPrefix",(function(){return he})),e(r.exports,"stringToByteArray",(function(){return fe})),e(r.exports,"stringLength",(function(){return de})),e(r.exports,"getModularInstance",(function(){return pe}));var a=o("ds8z5"),s=o("8MBJY"),u=o("a2hTj"),c=o("eYQtU"),l=o("1t1Wn"),h=(o("8nrFW"),o("4c7YB")),f=o("2MbLg"),d=o("6qd2L"),p=!1,v=!1,g="${JSCORE_VERSION}",m=function(e,t){if(!e)throw y(t)},y=function(e){return new Error("Firebase Database ("+g+") INTERNAL ASSERT FAILED: "+e)},_=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,h=(3&o)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,a||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw new b;var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},b=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return r}(t(h)(Error)),w=function(e){var t=_(e);return k.encodeByteArray(t,!0)},I=function(e){return w(e).replace(/\./g,"")},x=function(e){try{return k.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(e){return C(void 0,e)}function C(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=C(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var T=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},S=function(){try{return T()||function(){if(void 0!==d&&void 0!==d.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&x(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},R=function(e){var t,n;return null===(n=null===(t=S())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},N=function(e){var t=R(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},P=function(){var e;return null===(e=S())||void 0===e?void 0:e.config},O=function(e){var t;return null===(t=S())||void 0===t?void 0:t["_".concat(e)]},A=function(){"use strict";function e(){var n=this;t(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(u)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var o=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[I(JSON.stringify({alg:"none",type:"JWT"})),I(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function M(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())}function F(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function U(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function j(){var e=D();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function B(){return!0===p||!0===v}function H(){try{return"object"==typeof indexedDB}catch(e){return!1}}function q(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var W=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(e,i,o){var u;return t(s)(this,r),(u=n.call(this,i)).code=e,u.customData=o,u.name="FirebaseError",Object.setPrototypeOf(t(a)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(a)(u),V.prototype.create),u}return r}(t(h)(Error)),V=function(){"use strict";function e(n,r,i){t(s)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(u)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?z(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new W(o,u,i);return c}}]),e}();function z(e,t){return e.replace(K,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var K=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){return JSON.parse(e)}function J(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=G(x(o[0])||""),n=G(x(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Q=function(e){var t=Y(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},X=function(e){var t=Y(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ee(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function te(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ne(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(re(l)&&re(h)){if(!ne(l,h))return!1}else if(l!==h)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var f=!0,d=!1,p=void 0;try{for(var v,g=r[Symbol.iterator]();!(f=(v=g.next()).done);f=!0){var m=v.value;if(!n.includes(m))return!1}}catch(e){d=!0,p=e}finally{try{f||null==g.return||g.return()}finally{if(d)throw p}}return!0}function re(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ie(e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(e,r){var i=t(l)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){n.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(e)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n.length?"&"+n.join("&"):""}function oe(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(l)(e.split("="),2),i=r[0],o=r[1];n[decodeURIComponent(i)]=decodeURIComponent(o)}})),n}function ae(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se=function(){"use strict";function e(){t(s)(this,e),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return t(u)(e,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var o=16;o<80;o++){var a=n[o-3]^n[o-8]^n[o-14]^n[o-16];n[o]=4294967295&(a<<1|a>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],f=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=f^l&(h^f),u=1518500249):(s=l^h^f,u=1859775393):p<60?(s=l&h|f&(l|h),u=2400959708):(s=l^h^f,u=3395469782);var v=(c<<5|c>>>27)+s+d+u+n[p]&4294967295;d=f,f=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}]),e}();function ue(e,t){var n=new ce(e,t);return n.subscribe.bind(n)}var ce=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(u)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=le),void 0===r.error&&(r.error=le),void 0===r.complete&&(r.complete=le);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function le(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fe=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,m(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},de=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(e){return e&&e._delegate?e._delegate:e}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n}})),o.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),o.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||a.default(e,t)||i.default()};var n=s(o("8slrw")),r=s(o("7AJDX")),i=s(o("ifqQW")),a=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||a.default(e)||i.default()};var n=s(o("kMC0W")),r=s(o("7AJDX")),i=s(o("8CtQK")),a=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(o("ge8co")),r=s(o("cZGw3")),i=s(o("fVNic")),a=s(o("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return n.default(e,arguments,i.default(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a.default(o,e)},u(e)}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,o=r.default(e);if(t){var a=r.default(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i.default(this,n)}};var n=a(o("aTHs7")),r=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(o("ds8z5")),r=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("MjY8E",(function(n,r){e(n.exports,"_registerComponent",(function(){return C})),e(n.exports,"_getProvider",(function(){return T})),e(n.exports,"SDK_VERSION",(function(){return P})),e(n.exports,"initializeApp",(function(){return O})),e(n.exports,"getApp",(function(){return A})),e(n.exports,"registerVersion",(function(){return L}));var i=o("bpxeT"),a=o("8MBJY"),s=o("a2hTj"),u=o("hKHmD"),c=o("8nrFW"),l=o("2TvXO"),h=o("6ExWU"),f=o("kZfxc"),d=o("2xDiJ"),p=o("ajgRO"),v=(d=o("2xDiJ"),function(){"use strict";function e(n){t(a)(this,e),this.container=n}return t(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var g,m,y="@firebase/app",_="0.9.9",k=new(0,f.Logger)("@firebase/app"),b="[DEFAULT]",w=(g={},t(u)(g,y,"fire-core"),t(u)(g,"@firebase/app-compat","fire-core-compat"),t(u)(g,"@firebase/analytics","fire-analytics"),t(u)(g,"@firebase/analytics-compat","fire-analytics-compat"),t(u)(g,"@firebase/app-check","fire-app-check"),t(u)(g,"@firebase/app-check-compat","fire-app-check-compat"),t(u)(g,"@firebase/auth","fire-auth"),t(u)(g,"@firebase/auth-compat","fire-auth-compat"),t(u)(g,"@firebase/database","fire-rtdb"),t(u)(g,"@firebase/database-compat","fire-rtdb-compat"),t(u)(g,"@firebase/functions","fire-fn"),t(u)(g,"@firebase/functions-compat","fire-fn-compat"),t(u)(g,"@firebase/installations","fire-iid"),t(u)(g,"@firebase/installations-compat","fire-iid-compat"),t(u)(g,"@firebase/messaging","fire-fcm"),t(u)(g,"@firebase/messaging-compat","fire-fcm-compat"),t(u)(g,"@firebase/performance","fire-perf"),t(u)(g,"@firebase/performance-compat","fire-perf-compat"),t(u)(g,"@firebase/remote-config","fire-rc"),t(u)(g,"@firebase/remote-config-compat","fire-rc-compat"),t(u)(g,"@firebase/storage","fire-gcs"),t(u)(g,"@firebase/storage-compat","fire-gcs-compat"),t(u)(g,"@firebase/firestore","fire-fst"),t(u)(g,"@firebase/firestore-compat","fire-fst-compat"),t(u)(g,"fire-js","fire-js"),t(u)(g,"firebase","fire-js-all"),g),I=new Map,x=new Map;function E(e,t){try{e.container.addComponent(t)}catch(n){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function C(e){var t=e.name;if(x.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;x.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=I.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){E(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function T(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var S=(m={},t(u)(m,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(u)(m,"bad-app-name","Illegal App name: '{$appName}"),t(u)(m,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(u)(m,"app-deleted","Firebase App named '{$appName}' already deleted"),t(u)(m,"no-options","Need to provide options, when not being deployed to hosting via source."),t(u)(m,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(u)(m,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(u)(m,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(u)(m,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(u)(m,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(u)(m,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),m),R=new(0,d.ErrorFactory)("app","Firebase",S),N=function(){"use strict";function e(n,r,i){var o=this;t(a)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,h.Component)("app",(function(){return o}),"PUBLIC"))}return t(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw R.create("app-deleted",{appName:this._name})}}]),e}(),P="9.21.0";function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:b,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw R.create("bad-app-name",{appName:String(o)});if(n||(n=(0,d.getDefaultAppConfig)()),!n)throw R.create("no-options");var a=I.get(o);if(a){if((0,d.deepEqual)(n,a.options)&&(0,d.deepEqual)(i,a.config))return a;throw R.create("duplicate-app",{appName:o})}var s=new(0,h.ComponentContainer)(o),u=!0,c=!1,l=void 0;try{for(var f,p=x.values()[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var v=f.value;s.addComponent(v)}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}var g=new N(n,i,s);return I.set(o,g),g}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=I.get(e);if(!t&&e===b)return O();if(!t)throw R.create("no-app",{appName:e});return t}function L(e,t,n){var r,i=null!==(r=w[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}C(new(0,h.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var D="firebase-heartbeat-store",M=null;function F(){return M||(M=(0,p.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(D)}}).catch((function(e){throw R.create("idb-open",{originalErrorMessage:e.message})}))),M}function U(e){return j.apply(this,arguments)}function j(){return(j=t(i)(t(l).mark((function e(n){var r,i;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return r=e.sent,e.abrupt("return",r.transaction(D).objectStore(D).get(q(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?k.warn(e.t0.message):(i=R.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e,t){return H.apply(this,arguments)}function H(){return(H=t(i)(t(l).mark((function e(n,r){var i,o,a,s;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return i=e.sent,o=i.transaction(D,"readwrite"),a=o.objectStore(D),e.next=8,a.put(r,q(n));case 8:return e.abrupt("return",o.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?k.warn(e.t0.message):(s=R.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(s.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function q(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W=function(){"use strict";function e(n){var r=this;t(a)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new G(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=V(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==o&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,o,a,s;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=V(),i=z(e._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:o})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=a,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function V(){return(new Date).toISOString().substring(0,10)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),J(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),J(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var K,G=function(){"use strict";function e(n){t(a)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,U(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return o=t.sent,t.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,o;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return o=r.sent,r.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t(c)(o.heartbeats).concat(t(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function J(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */K="",C(new(0,h.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),C(new(0,h.Component)("heartbeat",(function(e){return new W(e)}),"PRIVATE")),L(y,_,K),L(y,_,"esm2017"),L("fire-js","")})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o.register("6ExWU",(function(n,r){e(n.exports,"Component",(function(){return f})),e(n.exports,"ComponentContainer",(function(){return v}));var i=o("bpxeT"),a=o("8MBJY"),s=o("a2hTj"),u=o("1t1Wn"),c=o("8nrFW"),l=o("2TvXO"),h=o("2xDiJ"),f=function(){"use strict";function e(n,r,i){t(a)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),d="[DEFAULT]",p=function(){"use strict";function e(n,r){t(a)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,h.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=t(u)(o.value,2),c=s[0],l=s[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,c=void 0;try{for(var l,h=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(l=h.next()).done);a=!0){var f=t(u)(l.value,2),d=f[0],p=f[1],v=this.normalizeInstanceIdentifier(d);i===v&&p.resolve(o)}}catch(e){s=!0,c=e}finally{try{a||null==h.return||h.return()}finally{if(s)throw c}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===d?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(n){t(a)(this,e),this.name=n,this.providers=new Map}return t(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new p(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),o.register("kZfxc",(function(n,r){e(n.exports,"LogLevel",(function(){return i})),e(n.exports,"Logger",(function(){return m})),e(n.exports,"setLogLevel",(function(){return y})),e(n.exports,"setUserLogHandler",(function(){return _}));var i,a,s=o("8MBJY"),u=o("a2hTj"),c=o("hKHmD"),l=o("8nrFW"),h=[];(a=i||(i={}))[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT";var f,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},p=i.INFO,v=(f={},t(c)(f,i.DEBUG,"log"),t(c)(f,i.VERBOSE,"log"),t(c)(f,i.INFO,"info"),t(c)(f,i.WARN,"warn"),t(c)(f,i.ERROR,"error"),f),g=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=v[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},m=function(){"use strict";function e(n){t(s)(this,e),this.name=n,this._logLevel=p,this._logHandler=g,this._userLogHandler=null,h.push(this)}return t(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(t(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(t(l)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(t(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(t(l)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(t(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(t(l)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(t(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(t(l)(n)))}}]),e}();function y(e){h.forEach((function(t){t.setLogLevel(e)}))}function _(e,t){var n=!0,r=!1,o=void 0;try{for(var a,s=h[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value,c=null;t&&t.level&&(c=d[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];var s=o.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}catch(e){r=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}}})),o.register("ajgRO",(function(n,r){e(n.exports,"openDB",(function(){return l}));var i=o("bpxeT"),a=o("dDDEV"),s=o("8nrFW"),u=o("2TvXO"),c=o("kKOTz");c=o("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(e){return o(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var h=["get","getKey","getAll","getAllKeys","count"],f=["put","add","delete","clear"],d=new Map;function p(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(d.get(n))return d.get(n);var r=n.replace(/FromIndex$/,""),o=n!==r,a=f.includes(r);if(r in(o?IDBIndex:IDBObjectStore).prototype&&(a||h.includes(r))){var c,l=(c=t(i)(t(u).mark((function e(n){var i,c,l,h,f,d,p=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=p.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=p[l];return f=this.transaction(n,a?"readwrite":"readonly"),d=f.store,o&&(d=d.index(c.shift())),e.next=7,Promise.all([(h=d)[r].apply(h,t(s)(c)),a&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return d.set(n,l),l}}}(0,c.r)((function(e){return t(a)({},e,{get:function(t,n,r){return p(t,n)||e.get(t,n,r)},has:function(t,n){return!!p(t,n)||e.has(t,n)}})}))})),o.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=o("hKHmD"))&&n.__esModule?n:{default:n}})),o.register("kKOTz",(function(n,r){e(n.exports,"w",(function(){return m})),e(n.exports,"r",(function(){return p}));var i,a,s=o("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap;var d={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function p(e){d=e(d)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(y(this),n),m(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(e.apply(y(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,u=(a=e).call.apply(a,[y(this),n].concat(t(s)(i)));return l.set(u,n.sort?n.sort():[n]),m(u)}}function g(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function m(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(m(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),f.set(n,t),n;var t,n;if(h.has(e))return h.get(e);var r=g(e);return r!==e&&(h.set(e,r),f.set(r,e)),r}var y=function(e){return f.get(e)}})),o.register("89ttn",(function(n,r){e(n.exports,"a8",(function(){return Yt})),e(n.exports,"a9",(function(){return Xt})),e(n.exports,"ai",(function(){return en})),e(n.exports,"x",(function(){return on})),e(n.exports,"B",(function(){return an})),e(n.exports,"o",(function(){return $r}));var i=o("ds8z5"),a=o("bpxeT"),s=o("8MBJY"),u=o("a2hTj"),c=o("hKHmD"),l=o("jh8P3"),h=o("fVNic"),f=o("eYQtU"),d=o("1t1Wn"),p=o("8nrFW"),v=o("2MbLg"),g=o("2TvXO"),m=o("2xDiJ"),y=o("MjY8E"),_=o("4tSb9"),k=o("kZfxc"),b=o("6ExWU");function w(){return t(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var I=w,x=new(0,m.ErrorFactory)("auth","Firebase",w()),E=new(0,k.Logger)("@firebase/auth");function C(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;E.logLevel<=k.LogLevel.WARN&&(o=E).warn.apply(o,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(t(p)(r)))}function T(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;E.logLevel<=k.LogLevel.ERROR&&(o=E).error.apply(o,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(t(p)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw P.apply(void 0,[e].concat(t(p)(r)))}function R(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return P.apply(void 0,[e].concat(t(p)(r)))}function N(e,n,r){var i=Object.assign(Object.assign({},I()),t(c)({},n,r));return new(0,m.ErrorFactory)("auth","Firebase",i).create(n,{appName:e.name})}function P(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;if("string"!=typeof e){var a,s=r[0],u=t(p)(r.slice(1));return u[0]&&(u[0].appName=e.name),(a=e._errorFactory).create.apply(a,[s].concat(t(p)(u)))}return(o=x).create.apply(o,[e].concat(t(p)(r)))}function O(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!e)throw P.apply(void 0,[n].concat(t(p)(i)))}function A(e){var t="INTERNAL ASSERTION FAILED: "+e;throw T(t),new Error(t)}function L(e,t){e||A(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function M(){return"http:"===F()||"https:"===F()}function F(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U=function(){"use strict";function e(n,r){t(s)(this,e),this.shortDelay=n,this.longDelay=r,L(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,m.isMobileCordova)()||(0,m.isReactNative)()}return t(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(M()||(0,m.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){L(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,H=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void A("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void A("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void A("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),q=(B={},t(c)(B,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(c)(B,"MISSING_CUSTOM_TOKEN","internal-error"),t(c)(B,"INVALID_IDENTIFIER","invalid-email"),t(c)(B,"MISSING_CONTINUE_URI","internal-error"),t(c)(B,"INVALID_PASSWORD","wrong-password"),t(c)(B,"MISSING_PASSWORD","missing-password"),t(c)(B,"EMAIL_EXISTS","email-already-in-use"),t(c)(B,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(c)(B,"INVALID_IDP_RESPONSE","invalid-credential"),t(c)(B,"INVALID_PENDING_TOKEN","invalid-credential"),t(c)(B,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(c)(B,"MISSING_REQ_TYPE","internal-error"),t(c)(B,"EMAIL_NOT_FOUND","user-not-found"),t(c)(B,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(c)(B,"EXPIRED_OOB_CODE","expired-action-code"),t(c)(B,"INVALID_OOB_CODE","invalid-action-code"),t(c)(B,"MISSING_OOB_CODE","internal-error"),t(c)(B,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(c)(B,"INVALID_ID_TOKEN","invalid-user-token"),t(c)(B,"TOKEN_EXPIRED","user-token-expired"),t(c)(B,"USER_NOT_FOUND","user-token-expired"),t(c)(B,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(c)(B,"INVALID_CODE","invalid-verification-code"),t(c)(B,"INVALID_SESSION_INFO","invalid-verification-id"),t(c)(B,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(c)(B,"MISSING_SESSION_INFO","missing-verification-id"),t(c)(B,"SESSION_EXPIRED","code-expired"),t(c)(B,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(c)(B,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(c)(B,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(c)(B,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(c)(B,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(c)(B,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(c)(B,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(c)(B,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(c)(B,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(c)(B,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(c)(B,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),t(c)(B,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),t(c)(B,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),t(c)(B,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),t(c)(B,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),t(c)(B,"MISSING_CLIENT_TYPE","missing-client-type"),t(c)(B,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),t(c)(B,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),t(c)(B,"INVALID_REQ_TYPE","invalid-req-type"),B),W=new U(3e4,6e4);function V(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function z(e,t,n,r){return K.apply(this,arguments)}function K(){return K=t(a)(t(g).mark((function e(n,r,i,o){var s,u=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",G(n,s,t(a)(t(g).mark((function e(){var a,s,u,c;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),u=(0,m.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",H.fetch()(X(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function G(e,t,n){return J.apply(this,arguments)}function J(){return(J=t(a)(t(g).mark((function e(n,r,i){var o,a,s,u,c,l,h,f,p;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,o=Object.assign(Object.assign({},q),r),e.prev=2,a=new $(n),e.next=6,Promise.race([i(),a.promise]);case 6:return s=e.sent,a.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw Z(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(d)(c.split(" : "),2),h=l[0],f=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){e.next=23;break}throw Z(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){e.next=27;break}throw Z(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){e.next=29;break}throw Z(n,"user-disabled",u);case 29:if(p=o[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!f){e.next=34;break}throw N(n,p,f);case 34:S(n,p);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof m.FirebaseError)){e.next=41;break}throw e.t0;case 41:S(n,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Y(e,t,n,r){return Q.apply(this,arguments)}function Q(){return Q=t(a)(t(g).mark((function e(n,r,i,o){var a,s,u=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,z(n,r,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&S(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function X(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?j(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var $=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(R(n.auth,"network-request-failed"))}),W.get())}))}return t(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Z(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=R(e,t,r);return i.customData._tokenResponse=n,i}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return oe=t(a)(t(g).mark((function e(n){var r,i,o,a,s,u,c=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,m.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return o=e.sent,O((a=se(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:ie(ae(a.auth_time)),issuedAtTime:ie(ae(a.iat)),expirationTime:ie(ae(a.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}function ae(e){return 1e3*Number(e)}function se(e){var n=t(d)(e.split("."),3),r=n[0],i=n[1],o=n[2];if(void 0===r||void 0===i||void 0===o)return T("JWT malformed, contained fewer than 3 sections"),null;try{var a=(0,m.base64Decode)(i);return a?JSON.parse(a):(T("Failed to decode base64 JWT payload"),null)}catch(e){return T("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ue(e,t){return ce.apply(this,arguments)}function ce(){return ce=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){var i=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof m.FirebaseError&&le(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),ce.apply(this,arguments)}function le(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(){"use strict";function e(n){t(s)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(a)(t(g).mark((function e(){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(a)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),fe=function(){"use strict";function e(n,r){t(s)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=ie(this.lastLoginAt),this.creationTime=ie(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){return pe.apply(this,arguments)}function pe(){return(pe=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n){var r,i,o,a,s,u,c,l,h,f,d;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return o=e.sent,e.next=7,ue(n,ne(i,{idToken:o}));case 7:O(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?me(s.providerUserInfo):[],c=ge(n.providerData,u),l=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new fe(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(n,d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){return(ve=t(a)(t(g).mark((function e(n){var r;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.getModularInstance)(n),e.next=3,de(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(p)(r).concat(t(p)(n))}function me(e){return e.map((function(e){var t=e.providerId,n=(0,_.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ye(e,t){return _e.apply(this,arguments)}function _e(){return(_e=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){var i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n,{},t(a)(t(g).mark((function e(){var i,o,a,s,u,c;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),o=n.config,a=o.tokenApiHost,s=o.apiKey,u=X(n,a,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",H.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){O(e.idToken,"internal-error"),O(void 0!==e.idToken,"internal-error"),O(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,O(n=se(t),"internal-error"),O(void 0!==n.exp,"internal-error"),O(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(g).mark((function i(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(a)(t(g).mark((function i(){var o,a,s,u;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ye(e,n);case 2:o=t.sent,a=o.accessToken,s=o.refreshToken,u=o.expiresIn,r.updateTokensAndExpiration(a,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return A("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new e;return r&&(O("string"==typeof r,"internal-error",{appName:t}),a.refreshToken=r),i&&(O("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(O("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){O("string"==typeof e||void 0===e,"internal-error",{appName:t})}var we=function(){"use strict";function e(n){t(s)(this,e);var r=n.uid,i=n.auth,o=n.stsTokenManager,a=(0,_.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?t(p)(a.providerData):[],this.metadata=new fe(a.createdAt||void 0,a.lastLoginAt||void 0)}return t(u)(e,[{key:"getIdToken",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(O(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return oe.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ve.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){var n=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(g).mark((function i(){var o;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),o=!0),!n){t.next=5;break}return t.next=5,de(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,ue(e,ee(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,o,a,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,p=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,g=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;O(_&&I,t,"internal-error");var x=ke.fromJSON(this.name,I);O("string"==typeof _,t,"internal-error"),be(h,t.name),be(f,t.name),O("boolean"==typeof k,t,"internal-error"),O("boolean"==typeof b,t,"internal-error"),be(d,t.name),be(p,t.name),be(v,t.name),be(g,t.name),be(m,t.name),be(y,t.name);var E=new e({uid:_,auth:t,email:f,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:x,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),g&&(E._redirectEventId=g),E}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(a)(t(g).mark((function o(){var a,s;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new ke).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),t.next=5,de(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),o)})))()}}]),e}(),Ie=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){L(e instanceof Function,"Expected a class definition");var t=Ie.get(e);return t?(L(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ie.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(u)(e,[{key:"_isAvailable",value:function(){return t(a)(t(g).mark((function e(){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(a)(t(g).mark((function i(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(a)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();Ee.type="NONE";var Ce=Ee;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Se=function(){"use strict";function e(n,r,i){t(s)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,u=o.name;this.fullUserKey=Te(this.userKey,a.apiKey,u),this.fullPersistenceKey=Te("persistence",a.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?we._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(a)(t(g).mark((function o(){var s,u,c,l,h,f,d,p,v,m,y,_,k;return t(g).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new e(xe(Ce),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var e=t(a)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),u=s[0]||xe(Ce),c=Te(i,n.config.apiKey,n.name),l=null,h=!0,f=!1,d=void 0,o.prev=9,p=r[Symbol.iterator]();case 11:if(h=(v=p.next()).done){o.next=29;break}return m=v.value,o.prev=13,o.next=16,m._get(c);case 16:if(!(y=o.sent)){o.next=22;break}return _=we._fromJSON(n,y),m!==u&&(l=_),u=m,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:h=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),f=!0,d=o.t1;case 35:o.prev=35,o.prev=36,h||null==p.return||p.return();case 38:if(o.prev=38,!f){o.next=41;break}throw d;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new e(u,n,i));case 46:if(u=k[0],!l){o.next=50;break}return o.next=50,u._set(c,l.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var e=t(a)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return o.abrupt("return",new e(u,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ae(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ne(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(De(t))return"Blackberry";if(Me(t))return"Webos";if(Pe(t))return"Safari";if((t.includes("chrome/")||Oe(t))&&!t.includes("edge/"))return"Chrome";if(Le(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/firefox\//i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/crios\//i.test(e)}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iemobile/i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/android/i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/blackberry/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/webos/i.test(e)}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ue(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Fe(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function je(){return(0,m.isIE)()&&10===document.documentMode}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Fe(e)||Le(e)||Me(e)||De(e)||/windows phone/i.test(e)||Ae(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Re((0,m.getUA)());break;case"Worker":t="".concat(Re((0,m.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(y.SDK_VERSION,"/").concat(r)}function qe(e,t){return We.apply(this,arguments)}function We(){return(We=t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"GET","/v2/recaptchaConfig",V(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e){return void 0!==e&&void 0!==e.enterprise}var ze=function e(n){"use strict";if(t(s)(this,e),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=R("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function Ge(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var Je="https://www.google.com/recaptcha/enterprise.js?render=",Ye="NO_RECAPTCHA",Qe=function(){"use strict";function e(n){t(s)(this,e),this.type="recaptcha-enterprise",this.auth=tt(n)}return t(u)(e,[{key:"verify",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(g).mark((function i(){var o,s,u;return t(g).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(e){return s.apply(this,arguments)},s=function(){return s=t(a)(t(g).mark((function e(r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){e.next=3;break}return e.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){e.next=5;break}return e.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return e.abrupt("return",new Promise(function(){var e=t(a)(t(g).mark((function e(n,i){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:qe(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new ze(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)},u=function(t,n,r){var i=window.grecaptcha;Ve(i)?i.enterprise.ready((function(){i.enterprise.execute(t,{action:e}).then((function(e){n(e)})).catch((function(){n(Ye)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){o(r.auth).then((function(r){if(!n&&Ve(window.grecaptcha))u(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Ke(Je+r).then((function(){u(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),e}();function Xe(e,t,n){return $e.apply(this,arguments)}function $e(){return $e=t(a)(t(g).mark((function e(n,r,i){var o,a,s,u,c=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>3&&void 0!==c[3]&&c[3],a=new Qe(n),e.prev=3,e.next=6,a.verify(i);case 6:s=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,a.verify(i,!0);case 13:s=e.sent;case 14:return u=Object.assign({},r),o?Object.assign(u,{captchaResp:s}):Object.assign(u,{captchaResponse:s}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",u);case 19:case"end":return e.stop()}}),e,null,[[3,9]])}))),$e.apply(this,arguments)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.queue=[]}return t(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i,o,a,s,u,c,l,h,f,d,p,v,m;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,o=!0,a=!1,s=void 0,t.prev=5,u=n.queue[Symbol.iterator]();case 7:if(o=(c=u.next()).done){t.next=15;break}return l=c.value,t.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:o=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),a=!0,s=t.t0;case 21:t.prev=21,t.prev=22,o||null==u.return||u.return();case 24:if(t.prev=24,!a){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),h=!0,f=!1,d=void 0,t.prev=35,p=i[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){m=v.value;try{m()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),f=!0,d=t.t2;case 43:t.prev=43,t.prev=44,h||null==p.return||p.return();case 46:if(t.prev=46,!f){t.next=49;break}throw d;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),et=function(){"use strict";function e(n,r,i,o){t(s)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nt(this),this.idTokenSubscription=new nt(this),this.beforeStateQueue=new Ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=o.sdkClientVersion}return t(u)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=xe(n));var r=this;return this._initializationPromise=this.queue(t(a)(t(g).mark((function i(){var o,a;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Se.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i,o,a,s,u,c,l;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(o=t.sent,a=o,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==a?void 0:a._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(a=l.user,s=!0);case 15:if(a){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(a._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(a);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),a=o,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!a){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return O(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==a._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(a));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(a)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(a)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?(0,m.getModularInstance)(e):null)&&O(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(g).mark((function i(){return t(g).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&O(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(a)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(a)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(a)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(xe(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"initializeRecaptchaConfig",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r,i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qe(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"});case 2:r=t.sent,i=new ze(r),null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.emailPasswordEnabled&&new Qe(e).verify();case 6:case"end":return t.stop()}}),n)})))()}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,m.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(a)(t(g).mark((function i(){var o;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return o=t.sent,t.abrupt("return",null===e?o.removeCurrentUser():o.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return O(i=e&&xe(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Se.create(n,[xe(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i,o;return t(g).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(a)(t(g).mark((function e(){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(a)(t(g).mark((function r(){return t(g).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(a)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return O(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(a)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=He(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r,i,o,a;return t(g).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=n.sent)&&(i["X-Firebase-Client"]=o),n.next=9,e._getAppCheckToken();case 9:return(a=n.sent)&&(i["X-Firebase-AppCheck"]=a),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r,i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,null===(r=e.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=t.sent)?void 0:i.error)&&C("Error while retrieving App Check token: ".concat(i.error)),t.abrupt("return",null==i?void 0:i.token);case 6:case"end":return t.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return(0,m.getModularInstance)(e)}var nt=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.observer=null,this.addObserver=(0,m.createSubscribe)((function(e){return r.observer=e}))}return t(u)(e,[{key:"next",get:function(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t){var n=(0,y._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,m.deepEqual)(i,null!=t?t:{}))return r;S(r,"already-initialized")}return n.initialize({options:t})}function it(e,n,r){var i=tt(e);O(i._canInitEmulator,i,"emulator-config-failed"),O(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var o=!!(null==r?void 0:r.disableWarnings),a=ot(n),s=function(e){var n=ot(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){var a=o[1];return{host:a,port:at(i.substr(a.length+1))}}var s=t(d)(i.split(":"),2);return{host:s[0],port:at(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(a,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ot(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function at(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var st=function(){"use strict";function e(n,r){t(s)(this,e),this.providerId=n,this.signInMethod=r}return t(u)(e,[{key:"toJSON",value:function(){return A("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return A("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return A("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return A("not implemented")}}]),e}();function ut(e,t){return ct.apply(this,arguments)}function ct(){return(ct=t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lt(e,t){return ht.apply(this,arguments)}function ht(){return(ht=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithPassword",V(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ft(e,t){return dt.apply(this,arguments)}function dt(){return(dt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithEmailLink",V(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pt(e,t){return vt.apply(this,arguments)}function vt(){return(vt=t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithEmailLink",V(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i,o){var a,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,r),(a=n.call(this,"password",o))._email=e,a._password=i,a._tenantId=u,a}return t(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i,o,s;return t(g).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(o={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,Xe(e,o,"signInWithPassword");case 8:return s=r.sent,r.abrupt("return",lt(e,s));case 12:return r.abrupt("return",lt(e,o).catch(function(){var n=t(a)(t(g).mark((function n(r){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("auth/missing-recaptcha-token"!==r.code){t.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),t.next=4,Xe(e,o,"signInWithPassword");case 4:return i=t.sent,t.abrupt("return",lt(e,i));case 8:return t.abrupt("return",Promise.reject(r));case 9:case"end":return t.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",ft(e,{email:n._email,oobCode:n._password}));case 14:S(e,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(a)(t(g).mark((function i(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",ut(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",pt(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:S(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(st);function mt(e,t){return yt.apply(this,arguments)}function yt(){return(yt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithIdp",V(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return mt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,mt(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,mt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,m.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):S("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=(0,_.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(st);function kt(e,t){return bt.apply(this,arguments)}function bt(){return(bt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:sendVerificationCode",V(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function wt(){return(wt=t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithPhoneNumber",V(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function It(){return(It=t(a)(t(g).mark((function e(n,r){var i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(n,"POST","/v1/accounts:signInWithPhoneNumber",V(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Z(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var xt=t(c)({},"USER_NOT_FOUND","user-not-found");function Et(){return(Et=t(a)(t(g).mark((function e(n,r){var i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Y(n,"POST","/v1/accounts:signInWithPhoneNumber",V(n,i),xt));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return wt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return It.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Et.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(st);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(){"use strict";function e(n){var r,i,o,a,u,c;t(s)(this,e);var l=(0,m.querystringDecode)((0,m.extractQuerystring)(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=l.mode)&&void 0!==o?o:null);O(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(a=l.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return t(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).link,n=t?(0,m.querystringDecode)((0,m.extractQuerystring)(t)).deep_link_id:null,r=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).deep_link_id;return(r?(0,m.querystringDecode)((0,m.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(u)(e,null,[{key:"credential",value:function(e,t){return gt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Tt.parseLink(t);return O(n,"argument-error"),gt._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rt=function(){"use strict";function e(n){t(s)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),Nt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(p)(this.scopes)}}]),r}(Rt),Pt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"facebook.com")}return t(u)(r,null,[{key:"credential",value:function(e){return _t._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Nt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Pt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ot=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(u)(r,null,[{key:"credential",value:function(e,t){return _t._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Nt);Ot.GOOGLE_SIGN_IN_METHOD="google.com",Ot.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var At=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"github.com")}return t(u)(r,null,[{key:"credential",value:function(e){return _t._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Nt);At.GITHUB_SIGN_IN_METHOD="github.com",At.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"twitter.com")}return t(u)(r,null,[{key:"credential",value:function(e,t){return _t._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Nt);function Dt(e,t){return Mt.apply(this,arguments)}function Mt(){return(Mt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y(n,"POST","/v1/accounts:signUp",V(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.TWITTER_SIGN_IN_METHOD="twitter.com",Lt.PROVIDER_ID="twitter.com";var Ft=function(){"use strict";function e(n){t(s)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(u)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(a)(t(g).mark((function a(){var s,u,c;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,we._fromIdTokenResponse(n,i,o);case 2:return s=t.sent,u=Ut(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return t(a)(t(g).mark((function o(){var a;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=Ut(i),t.abrupt("return",new e({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),o)})))()}}]),e}();function Ut(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,o,a,u){var c,l;return t(s)(this,r),(c=n.call(this,o.code,o.message)).operationType=a,c.user=u,Object.setPrototypeOf(t(i)(c),r.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:o.customData._serverResponse,operationType:a},c}return t(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(m.FirebaseError);function Bt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw jt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e,t){return qt.apply(this,arguments)}function qt(){return qt=t(a)(t(g).mark((function e(n,r){var i,o,a=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=ue,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",Ft._forOperation(n,"link",o));case 14:case"end":return e.stop()}}),e)}))),qt.apply(this,arguments)}function Wt(e,t){return Vt.apply(this,arguments)}function Vt(){return Vt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){var i,o,a,s,u,c,l=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],o=n.auth,a="reauthenticate",e.prev=3,e.next=6,ue(n,Bt(o,a,r,n),i);case 6:return O((s=e.sent).idToken,o,"internal-error"),O(u=se(s.idToken),o,"internal-error"),c=u.sub,O(n.uid===c,o,"user-mismatch"),e.abrupt("return",Ft._forOperation(n,a,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&S(o,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Vt.apply(this,arguments)}function zt(e,t){return Kt.apply(this,arguments)}function Kt(){return Kt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){var i,o,a,s,u=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],o="signIn",e.next=4,Bt(n,o,r);case 4:return a=e.sent,e.next=7,Ft._fromIdTokenResponse(n,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Kt.apply(this,arguments)}function Gt(e,t){return Jt.apply(this,arguments)}function Jt(){return(Jt=t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zt(tt(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Yt(e,t,n){return Qt.apply(this,arguments)}function Qt(){return Qt=t(a)(t(g).mark((function e(n,r,i){var o,s,u,c,l,h,f;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=tt(n),u={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(o=s._getRecaptchaConfig())||void 0===o?void 0:o.emailPasswordEnabled)){e.next=11;break}return e.next=7,Xe(s,u,"signUpPassword");case 7:l=e.sent,c=Dt(s,l),e.next=12;break;case 11:c=Dt(s,u).catch(function(){var e=t(a)(t(g).mark((function e(n){var r;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=8;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,Xe(s,u,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",Dt(s,r));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 12:return e.next=14,c.catch((function(e){return Promise.reject(e)}));case 14:return h=e.sent,e.next=17,Ft._fromIdTokenResponse(s,"signIn",h);case 17:return f=e.sent,e.next=20,s._updateCurrentUser(f.user);case 20:return e.abrupt("return",f);case 21:case"end":return e.stop()}}),e)}))),Qt.apply(this,arguments)}function Xt(e,t,n){return Gt((0,m.getModularInstance)(e),St.credential(t,n))}function $t(e,t){return Zt.apply(this,arguments)}function Zt(){return(Zt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function en(e,t){return tn.apply(this,arguments)}function tn(){return(tn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n,r){var i,o,a,s,u,c,l;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.displayName,o=r.photoURL,void 0!==i||void 0!==o){e.next=3;break}return e.abrupt("return");case 3:return a=(0,m.getModularInstance)(n),e.next=6,a.getIdToken();case 6:return s=e.sent,u={idToken:s,displayName:i,photoUrl:o,returnSecureToken:!0},e.next=10,ue(a,$t(a.auth,u));case 10:return c=e.sent,a.displayName=c.displayName||null,a.photoURL=c.photoUrl||null,(l=a.providerData.find((function(e){return"password"===e.providerId})))&&(l.displayName=a.displayName,l.photoURL=a.photoURL),e.next=17,a._updateTokensIfNecessary(c);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function nn(e,t,n,r){return(0,m.getModularInstance)(e).onIdTokenChanged(t,n,r)}function rn(e,t,n){return(0,m.getModularInstance)(e).beforeAuthStateChanged(t,n)}function on(e,t,n,r){return(0,m.getModularInstance)(e).onAuthStateChanged(t,n,r)}function an(e){return(0,m.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:start",V(e,t))}function un(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",V(e,t))}new WeakMap;var cn="__sak",ln=function(){"use strict";function e(n,r){t(s)(this,e),this.storageRetriever=n,this.type=r}return t(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(cn,"1"),this.storage.removeItem(cn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e,i;return t(s)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Pe(i=(0,m.getUA)())||Fe(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Be(),e._shouldAllowMigration=!0,e}return t(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);je()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,o=this;return t(a)(t(g).mark((function a(){return t(g).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(h)(r.prototype),"_set",i).call(o,e,n);case 2:o.localCache[e]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(a)(t(g).mark((function o(){var a;return t(g).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(h)(r.prototype),"_get",n).call(i,e);case 2:return a=o.sent,i.localCache[e]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(a)(t(g).mark((function o(){return t(g).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(h)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(ln);hn.type="LOCAL";var fn=hn,dn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(ln);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.type="SESSION";var pn=dn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e){return Promise.all(e.map((n=t(a)(t(g).mark((function e(n){var r;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn=function(){"use strict";function e(n){t(s)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i,o,s,u,c,l,h,f;return t(g).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=e).data,s=o.eventId,u=o.eventType,c=o.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),h=Array.from(l).map(function(){var e=t(a)(t(g).mark((function e(n){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,vn(h);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mn(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.receivers=[];var yn=function(){"use strict";function e(n){t(s)(this,e),this.target=n,this.handlers=new Set}return t(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(a)(t(g).mark((function o(){var a,s,u;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,o){var c=mn("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);u={messageChannel:a,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(u),a.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[a.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),o)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function kn(e){_n().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return void 0!==_n().WorkerGlobalScope&&"function"==typeof _n().importScripts}function wn(){return In.apply(this,arguments)}function In(){return(In=t(a)(t(g).mark((function e(){var n;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xn="firebaseLocalStorageDb",En="firebaseLocalStorage",Cn="fbase_key",Tn=function(){"use strict";function e(n){t(s)(this,e),this.request=n}return t(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Sn(e,t){return e.transaction([En],t?"readwrite":"readonly").objectStore(En)}function Rn(){var e=indexedDB.deleteDatabase(xn);return new Tn(e).toPromise()}function Nn(){var e=indexedDB.open(xn,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(En,{keyPath:Cn})}catch(e){r(e)}})),e.addEventListener("success",t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(En)){t.next=12;break}return i.close(),t.next=5,Rn();case 5:return t.t0=n,t.next=8,Nn();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Pn(e,t,n){return On.apply(this,arguments)}function On(){return(On=t(a)(t(g).mark((function e(n,r,i){var o,a;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Sn(n,!0).put((o={},t(c)(o,Cn,r),t(c)(o,"value",i),o)),e.abrupt("return",new Tn(a).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function An(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=t(a)(t(g).mark((function e(n,r){var i,o;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Sn(n,!1).get(r),e.next=3,new Tn(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Dn(e,t){var n=Sn(e,!0).delete(t);return new Tn(n).toPromise()}var Mn=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(u)(e,[{key:"_openDb",value:function(){var e=this;return t(a)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Nn();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i,o;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return o=t.sent,t.next=8,e(o);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(a)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",bn()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(a)(t(g).mark((function n(){return t(g).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=gn._getInstance(bn()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(a)(t(g).mark((function n(r,i){var o;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return o=t.sent,t.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(a)(t(g).mark((function e(n,r){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r,i,o;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,wn();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new yn(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(o=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(a)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(a)(t(g).mark((function e(){var n;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Nn();case 5:return n=e.sent,e.next=8,Pn(n,cn,"1");case 8:return e.next=10,Dn(n,cn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(a)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(a)(t(g).mark((function i(){return t(g).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(a)(t(g).mark((function i(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Pn(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return An(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(a)(t(g).mark((function r(){return t(g).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(a)(t(g).mark((function r(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Dn(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r,i,o,a,s,u,c,l,h,f,d,p,v,m,y,_,k;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Sn(e,!1).getAll();return new Tn(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)h=l.value,f=h.fbase_key,d=h.value,o.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(d)&&(e.notifyListeners(f,d),i.push(f));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,a||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(p=!0,v=!1,m=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(p=(_=y.next()).done);p=!0)k=_.value,e.localCache[k]&&!o.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,m=t.t1;case 35:t.prev=35,t.prev=36,p||null==y.return||y.return();case 38:if(t.prev=38,!v){t.next=41;break}throw m;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(a)(t(g).mark((function n(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Mn.type="LOCAL";var Fn=Mn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:start",V(e,t))}function jn(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ge("rcb"),new U(3e4,6e4);var Bn="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t,n){return qn.apply(this,arguments)}function qn(){return(qn=t(a)(t(g).mark((function e(n,r,i){var o,a,s,u,c,l,h,f;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,O("string"==typeof a,n,"argument-error"),O(i.type===Bn,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return O("enroll"===u.type,n,"internal-error"),e.next=15,sn(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return O("signin"===u.type,n,"internal-error"),O(l=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Un(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:a}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,kt(n,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wn=function(){"use strict";function e(n){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=tt(n)}return t(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Hn(this.auth,e,(0,m.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return Ct._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Ct._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vn(e,t){return t?xe(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn.PROVIDER_ID="phone",Wn.PHONE_SIGN_IN_METHOD="phone";var zn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return mt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return mt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return mt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(st);function Kn(e){return zt(e.auth,new zn(e),e.bypassAuthState)}function Gn(e){var t=e.auth,n=e.user;return O(n,t,"internal-error"),Wt(n,new zn(e),e.bypassAuthState)}function Jn(e){return Yn.apply(this,arguments)}function Yn(){return(Yn=t(a)(t(g).mark((function e(n){var r,i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,O(i=n.user,r,"internal-error"),e.abrupt("return",Ht(i,new zn(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn=function(){"use strict";function e(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=n,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(u)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(a)(t(g).mark((function e(r,i){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i,o,a,s,u,c,l;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,o=e.sessionId,a=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kn;case"linkViaPopup":case"linkViaRedirect":return Jn;case"reauthViaPopup":case"reauthViaRedirect":return Gn;default:S(this.auth,"internal-error")}}},{key:"resolve",value:function(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Xn=new U(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,o,a,u,c){var l;return t(s)(this,r),(l=n.call(this,e,o,u,c)).provider=a,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(i)(l),l}return t(u)(r,[{key:"executeNotNull",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return O(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(a)(t(g).mark((function n(){var r;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(1===e.filter.length,"Popup operations only handle one event"),r=mn(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(R(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(R(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(R(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,Xn.get())};t()}}]),r}(Qn);$n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zn=new Map,er=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,r),(o=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return t(u)(r,[{key:"execute",value:function(){var e=this,n=this;return t(a)(t(g).mark((function i(){var o,a;return t(g).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=Zn.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,tr(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(l)(t(h)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:Zn.set(n.auth._key(),o);case 21:return n.bypassAuthState||Zn.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,o=function(){return t(l)(t(h)(r.prototype),"onAuthEvent",n)};return t(a)(t(g).mark((function n(){var r;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",o().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",o().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(a)(t(g).mark((function e(){return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(Qn);function tr(e,t){return nr.apply(this,arguments)}function nr(){return(nr=t(a)(t(g).mark((function e(n,r){var i,o,a;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=or(r),o=ir(n),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rr(e,t){Zn.set(e._key(),t)}function ir(e){return xe(e._redirectPersistence)}function or(e){return Te("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e,t){return sr.apply(this,arguments)}function sr(){return sr=t(a)(t(g).mark((function e(n,r){var i,o,a,s,u,c=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o=tt(n),a=Vn(o,r),s=new er(o,a,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,o._persistUserIfCurrent(u.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),sr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ur=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lr(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!lr(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(R(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(cr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(cr(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function cr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function lr(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function hr(e){return fr.apply(this,arguments)}function fr(){return fr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(g).mark((function e(n){var r,i=arguments;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",z(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),fr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pr=/^https?/;function vr(){return(vr=t(a)(t(g).mark((function e(n){var r,i,o,a,s,u,c;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,hr(n);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!gr(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:S(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function gr(e){var t=D(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!pr.test(r))return!1;if(dr.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mr=new U(3e4,6e4);function yr(){var e=_n().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var o,a=Object.keys(e.H)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(p)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}var _r=null;function kr(e){return _r=_r||function(e){return new Promise((function(t,n){var r,i,o;function a(){yr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){yr(),n(R(e,"network-request-failed"))},timeout:mr.get()})}if(null===(i=null===(r=_n().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=_n().gapi)||void 0===o?void 0:o.load)){var s=Ge("iframefcb");return _n()[s]=function(){gapi.load?a():n(R(e,"network-request-failed"))},Ke("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw _r=null,e}))}(e),_r}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br=new U(5e3,15e3),wr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ir=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xr(e){var t=e.config;O(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?j(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:y.SDK_VERSION},i=Ir.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat((0,m.querystring)(r).slice(1))}function Er(e){return Cr.apply(this,arguments)}function Cr(){return Cr=t(a)(t(g).mark((function e(n){var r,i;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,kr(n);case 2:return r=e.sent,O(i=_n().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:xr(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wr,dontclear:!0},(function(e){return new Promise((r=t(a)(t(g).mark((function r(i,o){var a,s,u;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){_n().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:a=R(n,"network-request-failed"),s=_n().setTimeout((function(){o(a)}),br.get()),e.ping(u).then(u,(function(){o(a)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Cr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sr="_blank",Rr="http://localhost",Nr=function(){"use strict";function e(n){t(s)(this,e),this.window=n,this.associatedEvent=null}return t(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Pr(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Tr),{width:i.toString(),height:o.toString(),top:a,left:s}),l=(0,m.getUA)().toLowerCase();r&&(u=Oe(l)?Sr:r),Ne(l)&&(n=n||Rr,c.scrollbars="yes");var h=Object.entries(c).reduce((function(e,n){var r=t(d)(n,2),i=r[0],o=r[1];return"".concat(e).concat(i,"=").concat(o,",")}),"");if(Ue(l)&&"_self"!==u)return Or(n||"",u),new Nr(null);var f=window.open(n||"",u,h);O(f,e,"popup-blocked");try{f.focus()}catch(e){}return new Nr(f)}function Or(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar=encodeURIComponent("fac");function Lr(e,t,n,r,i,o){return Dr.apply(this,arguments)}function Dr(){return(Dr=t(a)(t(g).mark((function e(n,r,i,o,a,s){var u,c,l,h,f,p,v,_,k,b,w,I,x,E,C,T,S,R,N;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key"),u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:o,v:y.SDK_VERSION,eventId:a},!(r instanceof Rt)){e.next=24;break}for(r.setDefaultLanguage(n.languageCode),u.providerId=r.providerId||"",(0,m.isEmpty)(r.getCustomParameters())||(u.customParameters=JSON.stringify(r.getCustomParameters())),c=!0,l=!1,h=void 0,e.prev=8,f=Object.entries(s||{})[Symbol.iterator]();!(c=(p=f.next()).done);c=!0)v=t(d)(p.value,2),_=v[0],k=v[1],u[_]=k;e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),l=!0,h=e.t0;case 16:e.prev=16,e.prev=17,c||null==f.return||f.return();case 19:if(e.prev=19,!l){e.next=22;break}throw h;case 22:return e.finish(19);case 23:return e.finish(16);case 24:for(r instanceof Nt&&(b=r.getScopes().filter((function(e){return""!==e}))).length>0&&(u.scopes=b.join(",")),n.tenantId&&(u.tid=n.tenantId),w=u,I=!0,x=!1,E=void 0,e.prev=28,C=Object.keys(w)[Symbol.iterator]();!(I=(T=C.next()).done);I=!0)S=T.value,void 0===w[S]&&delete w[S];e.next=36;break;case 32:e.prev=32,e.t1=e.catch(28),x=!0,E=e.t1;case 36:e.prev=36,e.prev=37,I||null==C.return||C.return();case 39:if(e.prev=39,!x){e.next=42;break}throw E;case 42:return e.finish(39);case 43:return e.finish(36);case 44:return e.next=46,n._getAppCheckToken();case 46:return R=e.sent,N=R?"#".concat(Ar,"=").concat(encodeURIComponent(R)):"",e.abrupt("return","".concat(Mr(n),"?").concat((0,m.querystring)(w).slice(1)).concat(N));case 49:case"end":return e.stop()}}),e,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function Mr(e){var t=e.config;return t.emulator?j(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr="webStorageSupport",Ur=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pn,this._completeRedirectFn=ar,this._overrideRedirectResult=rr}return t(u)(e,[{key:"_openPopup",value:function(e,n,r,i){var o=this;return t(a)(t(g).mark((function a(){var s,u;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(null===(s=o.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),t.next=4,Lr(e,n,r,D(),i);case 4:return u=t.sent,t.abrupt("return",Pr(e,u,mn()));case 6:case"end":return t.stop()}}),a)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var o=this;return t(a)(t(g).mark((function a(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o._originValidation(e);case 2:return t.next=4,Lr(e,n,r,D(),i);case 4:return kn(t.sent),t.abrupt("return",new Promise((function(){})));case 7:case"end":return t.stop()}}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(L(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i,o;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Er(e);case 2:return i=t.sent,o=new ur(e),i.register("authEvent",(function(t){return O(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:o.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:o},n.iframes[e._key()]=i,t.abrupt("return",o);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Fr,{type:Fr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),S(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return vr.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Be()||Pe()||Fe()}}]),e}(),jr=Ur,Br=function(){"use strict";function e(n){t(s)(this,e),this.factorId=n}return t(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return A("unexpected MultiFactorSessionType")}}}]),e}(),Hr=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",V(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",V(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Br);(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertion",value:function(e){return Hr._fromCredential(e)}}]),e}()).FACTOR_ID="phone",(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertionForEnrollment",value:function(e,t){return qr._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return qr._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(e){return t(a)(t(g).mark((function n(){var r,i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(void 0!==(r=e).auth,"internal-error"),t.next=4,n=r.auth,o={idToken:r.credential,totpEnrollmentInfo:{}},z(n,"POST","/v2/accounts/mfaEnrollment:start",V(n,o));case 4:return i=t.sent,t.abrupt("return",Wr._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return t.stop()}var n,o}),n)})))()}}]),e}()).FACTOR_ID="totp";var qr=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i,o){var a;return t(s)(this,r),(a=n.call(this,"totp")).otp=e,a.enrollmentId=i,a.secret=o,a}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,n,r){var i=this;return t(a)(t(g).mark((function o(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(void 0!==i.secret,e,"argument-error"),t.abrupt("return",un(e,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return t.stop()}}),o)})))()}},{key:"_finalizeSignIn",value:function(e,n){var r=this;return t(a)(t(g).mark((function i(){var o;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(void 0!==r.enrollmentId&&void 0!==r.otp,e,"argument-error"),o={verificationCode:r.otp},t.abrupt("return",jn(e,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:o}));case 3:case"end":return t.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Br),Wr=function(){"use strict";function e(n,r,i,o,a,u,c){t(s)(this,e),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=o,this.enrollmentCompletionDeadline=a}return t(u)(e,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(Vr(e)||Vr(t))&&(r=!0),r&&(Vr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Vr(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}}]),e}();function Vr(e){return void 0===e||0===(null==e?void 0:e.length)}var zr="@firebase/auth",Kr="0.23.1",Gr=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.internalListeners=new Map}return t(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(a)(t(g).mark((function r(){var i;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jr,Yr=(0,m.getExperimentalSetting)("authIdTokenMaxAge")||300,Qr=null,Xr=function(e){return n=t(a)(t(g).mark((function n(r){var i,o,a;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((o=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&o>Yr)){t.next=9;break}return t.abrupt("return");case 9:if(a=null==i?void 0:i.token,Qr!==a){t.next=12;break}return t.abrupt("return");case 12:return Qr=a,t.next=15,fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}});case 15:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function $r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getApp)(),t=(0,y._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=rt(e,{popupRedirectResolver:jr,persistence:[Fn,fn,pn]}),r=(0,m.getExperimentalSetting)("authTokenSyncURL");if(r){var i=Xr(r);rn(n,i,(function(){return i(n.currentUser)})),nn(n,(function(e){return i(e)}))}var o=(0,m.getDefaultEmulatorHost)("auth");return o&&it(n,"http://".concat(o)),n}Jr="Browser",(0,y._registerComponent)(new(0,b.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),a=r.options,s=a.apiKey,u=a.authDomain;O(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),O(!(null==u?void 0:u.includes(":")),"argument-error",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:Jr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:He(Jr)},l=new et(r,i,o,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xe);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,y._registerComponent)(new(0,b.Component)("auth-internal",(function(e){var t=tt(e.getProvider("auth").getImmediate());return new Gr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,y.registerVersion)(zr,Kr,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Jr)),(0,y.registerVersion)(zr,Kr,"esm2017")})),o.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=o("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n||e):o.value}})(e,t,n)}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=o("fVNic"))&&n.__esModule?n:{default:n}})),o.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),o.register("01e4Y",(function(t,n){e(t.exports,"default",(function(){return r})),o("fkNhc");var r=(0,o("MjY8E").initializeApp)({apiKey:"AIzaSyBOLF7-CSzRfScSFCuoeI5r8YT_1hxm0Jg",authDomain:"pixel-js-cake.firebaseapp.com",databaseURL:"https://pixel-js-cake-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pixel-js-cake",storageBucket:"pixel-js-cake.appspot.com",messagingSenderId:"416053417126",appId:"1:416053417126:web:e76de3bab9e0af76599067"})})),o.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return o("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return o("MjY8E").registerVersion}));o("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,o("MjY8E").registerVersion)("firebase","9.21.0","app")})),o.register("4XEig",(function(n,r){e(n.exports,"writeUserToDatabase",(function(){return l}));var i=o("bpxeT"),a=o("2TvXO");o("cokon");var s=o("eA2L7"),u=o("01e4Y"),c=(0,s.getDatabase)(u.default);function l(e){return h.apply(this,arguments)}function h(){return(h=t(i)(t(a).mark((function e(n){var r,i,o;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.uid,i=n.email,o=n.displayName,(0,s.set)((0,s.ref)(c,"users/".concat(r,"/userData")),{username:o,email:i});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}})),o.register("cokon",(function(t,n){e(t.exports,"getDatabase",(function(){return o("eA2L7").getDatabase})),e(t.exports,"set",(function(){return o("eA2L7").set})),e(t.exports,"ref",(function(){return o("eA2L7").ref})),o("eA2L7")})),o.register("eA2L7",(function(n,r){e(n.exports,"ref",(function(){return li})),e(n.exports,"set",(function(){return fi})),e(n.exports,"getDatabase",(function(){return yi}));var i=o("ds8z5"),a=o("bpxeT"),s=o("8MBJY"),u=o("a2hTj"),c=o("eYQtU"),l=o("1t1Wn"),h=o("8nrFW"),f=o("l5bVx"),d=o("2MbLg"),p=o("2TvXO"),v=o("MjY8E"),g=o("6ExWU"),m=o("2xDiJ"),y=o("kZfxc"),_=o("6qd2L"),k="@firebase/database",b="0.14.4",w="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var I,x=function(){"use strict";function e(n){t(s)(this,e),this.domStorage_=n,this.prefix_="firebase:"}return t(u)(e,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,m.stringify)(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,m.jsonEval)(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),e}(),E=function(){"use strict";function e(){t(s)(this,e),this.cache_={},this.isInMemoryStorage=!0}return t(u)(e,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return(0,m.contains)(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),e}(),C=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new x(t)}}catch(e){}return new E},T=C("localStorage"),S=C("sessionStorage"),R=new(0,y.Logger)("@firebase/database"),N=(I=1,function(){return I++}),P=function(e){var t=(0,m.stringToByteArray)(e),n=new(0,m.Sha1);n.update(t);var r=n.digest();return m.base64.encodeByteArray(r)},O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var o=t[i];Array.isArray(o)||o&&"object"==typeof o&&"number"==typeof o.length?r+=O.apply(null,o):r+="object"==typeof o?(0,m.stringify)(o):o,r+=" "}return r},A=null,L=!0,D=function(e,t){(0,m.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(R.logLevel=y.LogLevel.VERBOSE,A=R.log.bind(R),t&&S.set("logging_enabled",!0)):"function"==typeof e?A=e:(A=null,S.remove("logging_enabled"))},M=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===L&&(L=!1,null===A&&!0===S.get("logging_enabled")&&D(!0)),A){var r=O.apply(null,t);A(r)}},F=function(e){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];M.apply(void 0,[e].concat(t(h)(r)))}},U=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+O.apply(void 0,t(h)(n));R.error(i)},j=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(O.apply(void 0,t(h)(n)));throw R.error(i),new Error(i)},B=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+O.apply(void 0,t(h)(n));R.warn(i)},H=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},q="[MIN_NAME]",W="[MAX_NAME]",V=function(e,t){if(e===t)return 0;if(e===q||t===W)return-1;if(t===q||e===W)return 1;var n=$(e),r=$(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},z=function(e,t){return e===t?0:e<t?-1:1},K=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,m.stringify)(t))},G=function(e){if("object"!=typeof e||null===e)return(0,m.stringify)(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=(0,m.stringify)(t[i]),r+=":",r+=G(e[t[i]]);return r+="}"},J=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Q=function(e){(0,m.assert)(!H(e),"Invalid JSON number");var t,n,r,i,o,a=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),a))+a,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(o=0;o<64;o+=8){var l=parseInt(u.substr(o,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var X=new RegExp("^-?(0*)\\d{1,10}$"),$=function(e){if(X.test(e)){var t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Z=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw B("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ee=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},te=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return t(u)(e,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){B('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),e}(),ne=function(){"use strict";function e(n,r,i){var o=this;t(s)(this,e),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return o.auth_=e}))}return t(u)(e,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(M("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',B(e)}}]),e}(),re=function(){"use strict";function e(n){t(s)(this,e),this.accessToken=n}return t(u)(e,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),e}();re.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ie="5",oe=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ae="websocket",se="long_polling",ue=function(){"use strict";function e(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];t(s)(this,e),this.secure=r,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=T.get("host:"+n)||this._host}return t(u)(e,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&T.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),e}();function ce(e,t,n){var r;if((0,m.assert)("string"==typeof t,"typeof type must == string"),(0,m.assert)("object"==typeof n,"typeof params must == object"),t===ae)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==se)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return Y(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le=function(){"use strict";function e(){t(s)(this,e),this.counters_={}}return t(u)(e,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;(0,m.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return(0,m.deepCopy)(this.counters_)}}]),e}(),he={},fe={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){var t=e.toString();return he[t]||(he[t]=new le),he[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pe=function(){"use strict";function e(n){t(s)(this,e),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t(u)(e,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Z((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var o=0;o<i.length;++o)n(o);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),e}(),ve="start",ge="close",me=function(){"use strict";function e(n,r,i,o,a,u,c){var l=this;t(s)(this,e),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.transportSessionId=u,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=F(n),this.stats_=de(r),this.urlFn=function(e){return l.appCheckToken&&(e.ac=l.appCheckToken),ce(r,se,e)}}return t(u)(e,[{key:"open",value:function(e,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pe(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,m.isNodeSdk)()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var e=r;if(!r.isClosed_){r.scriptTagHolder=new ye((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=t(l)(r,5),a=o[0],s=o[1],u=o[2];o[3],o[4];if(e.incrementIncomingBytes_(r),e.scriptTagHolder)if(e.connectTimeoutTimer_&&(clearTimeout(e.connectTimeoutTimer_),e.connectTimeoutTimer_=null),e.everConnected_=!0,a===ve)e.id=s,e.password=u;else{if(a!==ge)throw new Error("Unrecognized command received: "+a);if(s){var c=e;e.scriptTagHolder.sendNewPolls=!1,e.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else e.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=t(l)(r,2),a=o[0],s=o[1];e.incrementIncomingBytes_(r),e.myPacketOrderer.handleResponse(a,s)}),(function(){e.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=ie,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&oe.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=(0,m.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=(0,m.base64Encode)(t),r=J(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!(0,m.isNodeSdk)()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=(0,m.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){e.forceAllow_=!0}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!(0,m.isNodeSdk)()&&(!!e.forceAllow_||!(e.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),e}(),ye=function(){"use strict";function e(n,r,i,o){if(t(s)(this,e),this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,m.isNodeSdk)())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=N(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=e.createIFrame_();var a="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))a='<script>document.domain="'+document.domain+'";<\/script>';var u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(e){M("frame writing exception"),e.stack&&M(e.stack),M(e)}}}return t(u)(e,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.textContent="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;(0,m.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){M("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||M("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),e}(),_e=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"undefined"!=typeof MozWebSocket?_e=MozWebSocket:"undefined"!=typeof WebSocket&&(_e=WebSocket);var ke=function(){"use strict";function e(n,r,i,o,a,u,c){t(s)(this,e),this.connId=n,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=F(this.connId),this.stats_=de(r),this.connURL=e.connectionURL_(r,u,c,o,i),this.nodeAdmin=r.nodeAdmin}return t(u)(e,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,T.set("previous_websocket_failure",!0);try{var r;if((0,m.isNodeSdk)()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(ie,"/").concat(w,"/").concat(_.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var o={},a=0===this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy;a&&(r.proxy={origin:a})}this.mySock=new _e(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){T.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=(0,m.jsonEval)(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if((0,m.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=(0,m.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=J(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var o={};return o.v=ie,!(0,m.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&oe.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),ce(e,ae,o)}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){var t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==_e&&!e.forceDisallow_}},{key:"previouslyFailed",value:function(){return T.isInMemoryStorage||!0===T.get("previous_websocket_failure")}}]),e}();ke.responsesRequiredToBeHealthy=2,ke.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var be=function(){"use strict";function e(n){t(s)(this,e),this.initTransports_(n)}return t(u)(e,[{key:"initTransports_",value:function(t){var n=ke&&ke.isAvailable(),r=n&&!ke.previouslyFailed();if(t.webSocketOnly&&(n||B("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ke];else{var i=this.transports_=[],o=!0,a=!1,s=void 0;try{for(var u,c=e.ALL_TRANSPORTS[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}e.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[me,ke]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),e}();be.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var we=function(){"use strict";function e(n,r,i,o,a,u,c,l,h,f){t(s)(this,e),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=u,this.onReady_=c,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=F("c:"+this.id+":"),this.transportManager_=new be(r),this.log_("Connection created"),this.start_()}return t(u)(e,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=ee((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=K("t",e),n=K("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=K("t",e),n=K("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=K("t",e);if("d"in e){var n=e.d;if("h"===t){var r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?U("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):U("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ie!==n&&B("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ee((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ee((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(T.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),e}(),Ie=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),e}(),xe=function(){"use strict";function e(n){t(s)(this,e),this.allowedEvents_=n,this.listeners_={},(0,m.assert)(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return t(u)(e,[{key:"trigger",value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[e]))for(var o=t(h)(this.listeners_[e]),a=0;a<o.length;a++)o[a].callback.apply(o[a].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){(0,m.assert)(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),e}(),Ee=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,m.isMobileCordova)()||(window.addEventListener("online",(function(){e.online_||(e.online_=!0,e.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){e.online_&&(e.online_=!1,e.trigger("online",!1))}),!1)),e}return t(u)(r,[{key:"getInitialEvent",value:function(e){return(0,m.assert)("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(xe),Ce=function(){"use strict";function e(n,r){if(t(s)(this,e),void 0===r){this.pieces_=n.split("/");for(var i=0,o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return t(u)(e,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),e}();function Te(){return new Ce("")}function Se(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Re(e){return e.pieces_.length-e.pieceNum_}function Ne(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ce(e.pieces_,t)}function Pe(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Ae(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ce(t,0)}function Le(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Ce)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var o=t.split("/"),a=0;a<o.length;a++)o[a].length>0&&n.push(o[a]);return new Ce(n,0)}function De(e){return e.pieceNum_>=e.pieces_.length}function Me(e,t){var n=Se(e),r=Se(t);if(null===n)return t;if(n===r)return Me(Ne(e),Ne(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Fe(e,t){if(Re(e)!==Re(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ue(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Re(e)>Re(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var je=function e(n,r){"use strict";t(s)(this,e),this.errorPrefix_=r,this.parts_=Oe(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=(0,m.stringLength)(this.parts_[i]);Be(this)};function Be(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+He(e))}function He(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(){var e,i,o;return t(s)(this,r),e=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(o="visibilitychange",i="hidden"):void 0!==document.mozHidden?(o="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(o="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(o="webkitvisibilitychange",i="webkitHidden")),e.visible_=!0,o&&document.addEventListener(o,(function(){var t=!document[i];t!==e.visible_&&(e.visible_=t,e.trigger("visible",t))}),!1),e}return t(u)(r,[{key:"getInitialEvent",value:function(e){return(0,m.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(xe),We=1e3,Ve=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(e,o,a,u,c,l,h,f){var d;if(t(s)(this,r),(d=n.call(this)).repoInfo_=e,d.applicationId_=o,d.onDataUpdate_=a,d.onConnectStatus_=u,d.onServerInfoUpdate_=c,d.authTokenProvider_=l,d.appCheckTokenProvider_=h,d.authOverride_=f,d.id=r.nextPersistentConnectionId_++,d.log_=F("p:"+d.id+":"),d.interruptReasons_={},d.listens=new Map,d.outstandingPuts_=[],d.outstandingGets_=[],d.outstandingPutCount_=0,d.outstandingGetCount_=0,d.onDisconnectRequestQueue_=[],d.connected_=!1,d.reconnectDelay_=We,d.maxReconnectDelay_=3e5,d.securityDebugCallback_=null,d.lastSessionId=null,d.establishConnectionTimer_=null,d.visible_=!1,d.requestCBHash_={},d.requestNumber_=0,d.realtime_=null,d.authToken_=null,d.appCheckToken_=null,d.forceTokenRefresh_=!1,d.invalidAuthTokenCount_=0,d.invalidAppCheckTokenCount_=0,d.firstConnection_=!0,d.lastConnectionAttemptTime_=null,d.lastConnectionEstablishedTime_=null,f&&!(0,m.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return qe.getInstance().on("visible",d.onVisible_,t(i)(d)),-1===e.host.indexOf("fblocal")&&Ee.getInstance().on("online",d.onOnline_,t(i)(d)),d}return t(u)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,m.stringify)(i)),(0,m.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new(0,m.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),(0,m.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,m.assert)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);var a={p:i};e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest("q",a,(function(a){var s=a.d,u=a.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(o))===e&&(t.log_("listen response",a),"ok"!==u&&t.removeListen_(i,o),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){(e&&40===e.length||(0,m.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=(0,m.isValidFormat)(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,m.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+(0,m.stringify)(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):U("Unrecognized action received from server: "+(0,m.stringify)(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;(0,m.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=We,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=We,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=We),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var e=this;return t(a)(t(p).mark((function n(){var i,o,a,s,u,c,h,f,d,v,g,y,_;return t(p).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.shouldReconnect_()){n.next=31;break}return e.log_("Making a connection attempt"),e.lastConnectionAttemptTime_=(new Date).getTime(),e.lastConnectionEstablishedTime_=null,i=e.onDataMessage_.bind(e),o=e.onReady_.bind(e),a=e.onRealtimeDisconnect_.bind(e),s=e.id+":"+r.nextConnectionId_++,u=e.lastSessionId,c=!1,h=null,f=function(){h?h.close():(c=!0,a())},d=function(e){(0,m.assert)(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},e.realtime_={close:f,sendRequest:d},v=e.forceTokenRefresh_,e.forceTokenRefresh_=!1,n.prev=16,n.t0=t(l),n.next=20,Promise.all([e.authTokenProvider_.getToken(v),e.appCheckTokenProvider_.getToken(v)]);case 20:n.t1=n.sent,g=(0,n.t0)(n.t1,2),y=g[0],_=g[1],c?M("getToken() completed but was canceled"):(M("getToken() completed. Creating connection."),e.authToken_=y&&y.accessToken,e.appCheckToken_=_&&_.token,h=new we(s,e.repoInfo_,e.applicationId_,e.appCheckToken_,e.authToken_,i,o,a,(function(t){B(t+" ("+e.repoInfo_.toString()+")"),e.interrupt("server_kill")}),u)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),e.log_("Failed to get token: "+n.t2),c||(e.repoInfo_.nodeAdmin&&B(n.t2),f());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){M("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){M("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,m.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=We,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return G(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Ce(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){M("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){M("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,o=void 0;try{for(var a,s=this.listens.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}for(var f=0;f<this.outstandingPuts_.length;f++)this.outstandingPuts_[f]&&this.sendPut_(f);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";(0,m.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+w.replace(/\./g,"-")]=1,(0,m.isMobileCordova)()?e["framework.cordova"]=1:(0,m.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=Ee.getInstance().currentlyOnline();return(0,m.isEmpty)(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&(0,m.contains)(e,"w")){var n=(0,m.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();B("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(Ie);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.nextPersistentConnectionId_=0,Ve.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ze,Ke=function(){"use strict";function e(n,r){t(s)(this,e),this.name=n,this.node=r}return t(u)(e,null,[{key:"Wrap",value:function(t,n){return new e(t,n)}}]),e}(),Ge=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Ke(q,e),r=new Ke(q,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Ke.MIN}}]),e}(),Je=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(){return t(s)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"compare",value:function(e,t){return V(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw(0,m.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Ke.MIN}},{key:"maxPost",value:function(){return new Ke(W,ze)}},{key:"makePost",value:function(e,t){return(0,m.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ke(e,ze)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return ze},set:function(e){ze=e}}]),r}(Ge),Ye=new Je,Qe=function(){"use strict";function e(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;t(s)(this,e),this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];for(var u=1;!n.isEmpty();)if(u=r?i(n.key,r):1,o&&(u*=-1),u<0)n=this.isReverse_?n.left:n.right;else{if(0===u){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return t(u)(e,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),e}(),Xe=function(){"use strict";function e(n,r,i,o,a){t(s)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=o?o:et.EMPTY_NODE,this.right=null!=a?a:et.EMPTY_NODE}return t(u)(e,[{key:"copy",value:function(t,n,r,i,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return et.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return et.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight_",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.RED=!0,Xe.BLACK=!1;var $e,Ze=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Xe(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),e}(),et=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.EMPTY_NODE;t(s)(this,e),this.comparator_=n,this.root_=r}return t(u)(e,[{key:"insert",value:function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Xe.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Qe(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Qe(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Qe(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Qe(this.root_,null,this.comparator_,!0,e)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(e,t){return V(e.name,t.name)}function nt(e,t){return V(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et.EMPTY_NODE=new Ze;var rt,it,ot,at=function(e){return"number"==typeof e?"number:"+Q(e):"string:"+e},st=function(e){if(e.isLeafNode()){var t=e.val();(0,m.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,m.contains)(t,".sv"),"Priority must be a string or number.")}else(0,m.assert)(e===$e||e.isEmpty(),"priority of unexpected type.");(0,m.assert)(e===$e||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},ut=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.__childrenNodeConstructor.EMPTY_NODE;t(s)(this,e),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,(0,m.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),st(this.priorityNode_)}return t(u)(e,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(t){return new e(this.value_,t)}},{key:"getImmediateChild",value:function(t){return".priority"===t?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(t){return De(t)?this:".priority"===Se(t)?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(t,n){var r=Se(t);return null===r?n:n.isEmpty()&&".priority"!==r?this:((0,m.assert)(".priority"!==r||1===Re(t),".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(t),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+at(this.priorityNode_.val())+":");var n=t(f)(this.value_);e+=n+":",e+="number"===n?Q(this.value_):this.value_,this.lazyHash_=P(e)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:((0,m.assert)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}},{key:"compareToLeafNode_",value:function(n){var r=t(f)(n.value_),i=t(f)(this.value_),o=e.VALUE_TYPE_ORDER.indexOf(r),a=e.VALUE_TYPE_ORDER.indexOf(i);return(0,m.assert)(o>=0,"Unknown leaf type: "+r),(0,m.assert)(a>=0,"Unknown leaf type: "+i),o===a?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:a-o}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return rt},set:function(e){rt=e}}]),e}();ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];var ct,lt,ht=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(){return t(s)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?V(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Ke.MIN}},{key:"maxPost",value:function(){return new Ke(W,new ut("[PRIORITY-POST]",ot))}},{key:"makePost",value:function(e,t){var n=it(e);return new Ke(t,new ut("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Ge),ft=new ht,dt=Math.log(2),pt=function(){"use strict";function e(n){t(s)(this,e);var r;this.count=(r=n+1,parseInt(Math.log(r)/dt,10)),this.current_=this.count-1;var i,o=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&o}return t(u)(e,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),e}(),vt=function(e,t,n,r){e.sort(t);var i=function(t,r){var o,a,s=r-t;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Xe(a,o.node,Xe.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return o=e[u],a=n?n(o):o,new Xe(a,o.node,Xe.BLACK,c,l)},o=function(t){for(var r=null,o=null,a=e.length,s=function(t,r){var o=a-t,s=a;a-=t;var c=i(o+1,s),l=e[o],h=n?n(l):l;u(new Xe(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Xe.BLACK):(s(h,Xe.BLACK),s(h,Xe.RED))}return o}(new pt(e.length));return new et(r||t,o)},gt={},mt=function(){"use strict";function e(n,r){t(s)(this,e),this.indexes_=n,this.indexSet_=r}return t(u)(e,[{key:"get",value:function(e){var t=(0,m.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof et?t:null}},{key:"hasIndex",value:function(e){return(0,m.contains)(this.indexSet_,e.toString())}},{key:"addIndex",value:function(t,n){(0,m.assert)(t!==Ye,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],o=!1,a=n.getIterator(Ke.Wrap),s=a.getNext();s;)o=o||t.isDefinedOn(s.node),i.push(s),s=a.getNext();r=o?vt(i,t.getCompare()):gt;var u=t.toString(),c=Object.assign({},this.indexSet_);c[u]=t;var l=Object.assign({},this.indexes_);return l[u]=r,new e(l,c)}},{key:"addToIndexes",value:function(t,n){var r=this;return new e((0,m.map)(this.indexes_,(function(e,i){var o=(0,m.safeGet)(r.indexSet_,i);if((0,m.assert)(o,"Missing index implementation for "+i),e===gt){if(o.isDefinedOn(t.node)){for(var a=[],s=n.getIterator(Ke.Wrap),u=s.getNext();u;)u.name!==t.name&&a.push(u),u=s.getNext();return a.push(t),vt(a,o.getCompare())}return gt}var c=n.get(t.name),l=e;return c&&(l=l.remove(new Ke(t.name,c))),l.insert(t,t.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(t,n){return new e((0,m.map)(this.indexes_,(function(e){if(e===gt)return e;var r=n.get(t.name);return r?e.remove(new Ke(t.name,r)):e})),this.indexSet_)}}],[{key:"Default",get:function(){return(0,m.assert)(gt&&ft,"ChildrenNode.ts has not been loaded"),ct=ct||new e({".priority":gt},{".priority":ft})}}]),e}(),yt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&st(this.priorityNode_),this.children_.isEmpty()&&(0,m.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return t(u)(e,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||lt}},{key:"updatePriority",value:function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?lt:t}},{key:"getChild",value:function(e){var t=Se(e);return null===t?this:this.getImmediateChild(t).getChild(Ne(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(t,n){if((0,m.assert)(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);var r,i,o=new Ke(t,n);n.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(o,this.children_)):(r=this.children_.insert(t,n),i=this.indexMap_.addToIndexes(o,this.children_));var a=r.isEmpty()?lt:this.priorityNode_;return new e(r,a,i)}},{key:"updateChild",value:function(e,t){var n=Se(e);if(null===n)return t;(0,m.assert)(".priority"!==Se(e)||1===Re(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(Ne(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(ft,(function(a,s){n[a]=s.val(t),r++,o&&e.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1})),!t&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+at(this.getPriority().val())+":"),this.forEachChild(ft,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":P(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Ke(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Ke(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Ke(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Ke.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Ke.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_t?-1:0}},{key:"withIndex",value:function(t){if(t===Ye||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Ye||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(ft),r=t.getIterator(ft),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Ye?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return lt||(lt=new e(new et(nt),null,mt.Default))}}]),e}();yt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var _t=new(function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(){return t(s)(this,r),n.call(this,new et(nt),yt.EMPTY_NODE,mt.Default)}return t(u)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return yt.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(yt));Object.defineProperties(Ke,{MIN:{value:new Ke(q,yt.EMPTY_NODE)},MAX:{value:new Ke(W,_t)}}),Je.__EMPTY_NODE=yt.EMPTY_NODE,ut.__childrenNodeConstructor=yt,$e=_t,function(e){ot=e}(_t);function kt(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===e)return yt.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(n=e[".priority"]),(0,m.assert)(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":t(f)(n))),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){var r=e;return new ut(r,kt(n))}if(e instanceof Array){var i=yt.EMPTY_NODE;return Y(e,(function(t,n){if((0,m.contains)(e,t)&&"."!==t.substring(0,1)){var r=kt(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(t,r))}})),i.updatePriority(kt(n))}var o=[],a=!1,s=e;if(Y(s,(function(e,t){if("."!==e.substring(0,1)){var n=kt(t);n.isEmpty()||(a=a||!n.getPriority().isEmpty(),o.push(new Ke(e,n)))}})),0===o.length)return yt.EMPTY_NODE;var u=vt(o,tt,(function(e){return e.name}),nt);if(a){var c=vt(o,ft.getCompare());return new yt(u,kt(n),new mt({".priority":c},{".priority":ft}))}return new yt(u,kt(n),mt.Default)}!function(e){it=e}(kt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bt=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this)).indexPath_=e,(0,m.assert)(!De(e)&&".priority"!==Se(e),"Can't create PathIndex with empty path or .priority key"),i}return t(u)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?V(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=kt(e),r=yt.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ke(t,r)}},{key:"maxPost",value:function(){var e=yt.EMPTY_NODE.updateChild(this.indexPath_,_t);return new Ke(W,e)}},{key:"toString",value:function(){return Oe(this.indexPath_,0).join("/")}}]),r}(Ge),wt=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(){return t(s)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?V(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Ke.MIN}},{key:"maxPost",value:function(){return Ke.MAX}},{key:"makePost",value:function(e,t){var n=kt(e);return new Ke(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Ge),It=new wt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(e){return{type:"value",snapshotNode:e}}function Et(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ct(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Tt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St=function(){"use strict";function e(){t(s)(this,e),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ft}return t(u)(e,[{key:"hasStart",value:function(){return this.startSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return(0,m.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return(0,m.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:q}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return(0,m.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return(0,m.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:W}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return(0,m.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===ft}},{key:"copy",value:function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e){var t,n={};if(e.isDefault())return n;if(e.index_===ft?t="$priority":e.index_===It?t="$value":e.index_===Ye?t="$key":((0,m.assert)(e.index_ instanceof bt,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=(0,m.stringify)(t),e.startSet_){var r=e.startAfterSet_?"startAfter":"startAt";n[r]=(0,m.stringify)(e.indexStartValue_),e.startNameSet_&&(n[r]+=","+(0,m.stringify)(e.indexStartName_))}if(e.endSet_){var i=e.endBeforeSet_?"endBefore":"endAt";n[i]=(0,m.stringify)(e.indexEndValue_),e.endNameSet_&&(n[i]+=","+(0,m.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function Nt(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ft&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(e,i,o,a){var u;return t(s)(this,r),(u=n.call(this)).repoInfo_=e,u.onDataUpdate_=i,u.authTokenProvider_=o,u.appCheckTokenProvider_=a,u.log_=F("p:rest:"),u.listens_={},u}return t(u)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var o=this,a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=Rt(e._queryParams);this.restRequest_(a+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&o.onDataUpdate_(a,r,!1,n),(0,m.safeGet)(o.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=Rt(e._queryParams),r=e._path.toString(),i=new(0,m.Deferred);return this.restRequest_(r+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(r,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(o){var a=t(l)(o,2),s=a[0],u=a[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var h=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+e+"?ns="+i.repoInfo_.namespace+(0,m.querystring)(n);i.log_("Sending REST request for "+h);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(r&&4===f.readyState){c.log_("REST Response for "+h+" received. status:",f.status,"response:",f.responseText);var e=null;if(f.status>=200&&f.status<300){try{e=(0,m.jsonEval)(f.responseText)}catch(e){B("Failed to parse JSON response for "+h+": "+f.responseText)}r(null,e)}else 401!==f.status&&404!==f.status&&B("Got unsuccessful REST response for "+h+" Status: "+f.status),r(f.status);r=null}},f.open("GET",h,!0),f.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:((0,m.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(Ie),Ot=function(){"use strict";function e(){t(s)(this,e),this.rootNode_=yt.EMPTY_NODE}return t(u)(e,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(){return{value:null,children:new Map}}function Lt(e,t,n){if(De(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Se(t);e.children.has(r)||e.children.set(r,At()),Lt(e.children.get(r),t=Ne(t),n)}}function Dt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(function(e,r){Dt(r,new Ce(t.toString()+"/"+e),n)}))}var Mt,Ft,Ut=function(){"use strict";function e(n){t(s)(this,e),this.collection_=n,this.last_=null}return t(u)(e,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Y(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),e}(),jt=function(){"use strict";function e(n,r){t(s)(this,e),this.server_=r,this.statsToReport_={},this.statsListener_=new Ut(n);var i=1e4+2e4*Math.random();ee(this.reportStats_.bind(this),Math.floor(i))}return t(u)(e,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;Y(t,(function(t,i){i>0&&(0,m.contains)(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),ee(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ft=Mt||(Mt={}))[Ft.OVERWRITE=0]="OVERWRITE",Ft[Ft.MERGE=1]="MERGE",Ft[Ft.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ft[Ft.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Ht,qt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.path=n,this.affectedTree=r,this.revert=i,this.type=Mt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return t(u)(e,[{key:"operationForChild",value:function(t){if(De(this.path)){if(null!=this.affectedTree.value)return(0,m.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Ce(t));return new e(Te(),n,this.revert)}return(0,m.assert)(Se(this.path)===t,"operationForChild called for unrelated child."),new e(Ne(this.path),this.affectedTree,this.revert)}}]),e}(),Wt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.source=n,this.path=r,this.snap=i,this.type=Mt.OVERWRITE}return t(u)(e,[{key:"operationForChild",value:function(t){return De(this.path)?new e(this.source,Te(),this.snap.getImmediateChild(t)):new e(this.source,Ne(this.path),this.snap)}}]),e}(),Vt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.source=n,this.path=r,this.children=i,this.type=Mt.MERGE}return t(u)(e,[{key:"operationForChild",value:function(t){if(De(this.path)){var n=this.children.subtree(new Ce(t));return n.isEmpty()?null:n.value?new Wt(this.source,Te(),n.value):new e(this.source,Te(),n)}return(0,m.assert)(Se(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,Ne(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),e}(),zt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return t(u)(e,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;var t=Se(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t,n,r,i,o){var a=r.filter((function(e){return e.type===n}));a.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw(0,m.assertionError)("Should only compare child_ events.");var r=new Ke(t.childName,t.snapshotNode),i=new Ke(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)})),a.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Gt(e,t){return{eventCache:e,serverCache:t}}function Jt(e,t,n,r){return Gt(new zt(t,n,r),e.serverCache)}function Yt(e,t,n,r){return Gt(e.eventCache,new zt(t,n,r))}function Qt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Xt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t=function(){return Ht||(Ht=new et(z)),Ht},Zt=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$t();t(s)(this,e),this.value=n,this.children=r}return t(u)(e,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Te(),value:this.value};if(De(e))return null;var n=Se(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(Ne(e),t);return null!=i?{path:Le(new Ce(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(t){if(De(t))return this;var n=Se(t),r=this.children.get(n);return null!==r?r.subtree(Ne(t)):new e(null)}},{key:"set",value:function(t,n){if(De(t))return new e(n,this.children);var r=Se(t),i=(this.children.get(r)||new e(null)).set(Ne(t),n),o=this.children.insert(r,i);return new e(this.value,o)}},{key:"remove",value:function(t){if(De(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=Se(t),r=this.children.get(n);if(r){var i,o=r.remove(Ne(t));return i=o.isEmpty()?this.children.remove(n):this.children.insert(n,o),null===this.value&&i.isEmpty()?new e(null):new e(this.value,i)}return this}},{key:"get",value:function(e){if(De(e))return this.value;var t=Se(e),n=this.children.get(t);return n?n.get(Ne(e)):null}},{key:"setTree",value:function(t,n){if(De(t))return n;var r,i=Se(t),o=(this.children.get(i)||new e(null)).setTree(Ne(t),n);return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new e(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Te(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(Le(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Te(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(De(e))return null;var i=Se(e),o=this.children.get(i);return o?o.findOnPath_(Ne(e),Le(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Te(),t)}},{key:"foreachOnPath_",value:function(t,n,r){if(De(t))return this;this.value&&r(n,this.value);var i=Se(t),o=this.children.get(i);return o?o.foreachOnPath_(Ne(t),Le(n,i),r):new e(null)}},{key:"foreach",value:function(e){this.foreach_(Te(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(Le(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(t){var n=new e(null);return Y(t,(function(e,t){n=n.set(new Ce(e),t)})),n}}]),e}(),en=function(){"use strict";function e(n){t(s)(this,e),this.writeTree_=n}return t(u)(e,null,[{key:"empty",value:function(){return new e(new Zt(null))}}]),e}();function tn(e,t,n){if(De(t))return new en(new Zt(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,o=r.value,a=Me(i,t);return o=o.updateChild(a,n),new en(e.writeTree_.set(i,o))}var s=new Zt(n),u=e.writeTree_.setTree(t,s);return new en(u)}function nn(e,t,n){var r=e;return Y(n,(function(e,n){r=tn(r,Le(t,e),n)})),r}function rn(e,t){if(De(t))return en.empty();var n=e.writeTree_.setTree(t,new Zt(null));return new en(n)}function on(e,t){return null!=an(e,t)}function an(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Me(n.path,t)):null}function sn(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ft,(function(e,n){t.push(new Ke(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Ke(e,n.value))})),t}function un(e,t){if(De(t))return e;var n=an(e,t);return new en(null!=n?new Zt(n):e.writeTree_.subtree(t))}function cn(e){return e.writeTree_.isEmpty()}function ln(e,t){return hn(Te(),e.writeTree_,t)}function hn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?((0,m.assert)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=hn(Le(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Le(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e,t){return Cn(t,e)}function dn(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function pn(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));(0,m.assert)(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=e.allWrites.length-1;i&&a>=0;){var s=e.allWrites[a];s.visible&&(a>=n&&vn(s,r.path)?i=!1:Ue(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=mn(e.allWrites,gn,Te()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=rn(e.visibleWrites,r.path):Y(r.children,(function(t){e.visibleWrites=rn(e.visibleWrites,Le(r.path,t))}));return!0}return!1}function vn(e,t){if(e.snap)return Ue(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Ue(Le(e.path,n),t))return!0;return!1}function gn(e){return e.visible}function mn(e,t,n){for(var r=en.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var a=o.path,s=void 0;if(o.snap)Ue(n,a)?r=tn(r,s=Me(n,a),o.snap):Ue(a,n)&&(s=Me(a,n),r=tn(r,Te(),o.snap.getChild(s)));else{if(!o.children)throw(0,m.assertionError)("WriteRecord should have .snap or .children");if(Ue(n,a))r=nn(r,s=Me(n,a),o.children);else if(Ue(a,n))if(De(s=Me(a,n)))r=nn(r,Te(),o.children);else{var u=(0,m.safeGet)(o.children,Se(s));if(u){var c=u.getChild(Ne(s));r=tn(r,Te(),c)}}}}}return r}function yn(e,t,n,r,i){if(r||i){var o=un(e.visibleWrites,t);if(!i&&cn(o))return n;if(i||null!=n||on(o,Te())){return ln(mn(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ue(e.path,t)||Ue(t,e.path))}),t),n||yt.EMPTY_NODE)}return null}var a=an(e.visibleWrites,t);if(null!=a)return a;var s=un(e.visibleWrites,t);return cn(s)?n:null!=n||on(s,Te())?ln(s,n||yt.EMPTY_NODE):null}function _n(e,t,n,r){return yn(e.writeTree,e.treePath,t,n,r)}function kn(e,t){return function(e,t,n){var r=yt.EMPTY_NODE,i=an(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ft,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var o=un(e.visibleWrites,t);return n.forEachChild(ft,(function(e,t){var n=ln(un(o,new Ce(e)),t);r=r.updateImmediateChild(e,n)})),sn(o).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return sn(un(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function bn(e,t,n,r){return function(e,t,n,r,i){(0,m.assert)(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=Le(t,n);if(on(e.visibleWrites,o))return null;var a=un(e.visibleWrites,o);return cn(a)?i.getChild(n):ln(a,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function wn(e,t){return function(e,t){return an(e.visibleWrites,t)}(e.writeTree,Le(e.treePath,t))}function In(e,t,n,r,i,o){return function(e,t,n,r,i,o,a){var s,u=un(e.visibleWrites,t),c=an(u,Te());if(null!=c)s=c;else{if(null==n)return[];s=ln(u,n)}if((s=s.withIndex(a)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=a.getCompare(),f=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),d=f.getNext();d&&l.length<i;)0!==h(d,r)&&l.push(d),d=f.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,o)}function xn(e,t,n){return function(e,t,n,r){var i=Le(t,n),o=an(e.visibleWrites,i);return null!=o?o:r.isCompleteForChild(n)?ln(un(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function En(e,t){return Cn(Le(e.treePath,t),e.writeTree)}function Cn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn=function(){"use strict";function e(){t(s)(this,e),this.changeMap=new Map}return t(u)(e,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;(0,m.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,m.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Tt(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Ct(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Et(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,m.assertionError)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Tt(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),e}(),Sn=new(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),e}()),Rn=function(){"use strict";function e(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t(s)(this,e),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return t(u)(e,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new zt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xn(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Xt(this.viewCache_),i=In(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t,n,r,i){var o,a,s=new Tn;if(n.type===Mt.OVERWRITE){var u=n;u.source.fromUser?o=An(e,t,u.path,u.snap,r,i,s):((0,m.assert)(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!De(u.path),o=On(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===Mt.MERGE){var c=n;c.source.fromUser?o=function(e,t,n,r,i,o,a){var s=t;return r.foreach((function(r,u){var c=Le(n,r);Ln(t,Se(c))&&(s=An(e,s,c,u,i,o,a))})),r.foreach((function(r,u){var c=Le(n,r);Ln(t,Se(c))||(s=An(e,s,c,u,i,o,a))})),s}(e,t,c.path,c.children,r,i,s):((0,m.assert)(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Mn(e,t,c.path,c.children,r,i,a,s))}else if(n.type===Mt.ACK_USER_WRITE){var l=n;o=l.revert?function(e,t,n,r,i,o){var a;if(null!=wn(r,n))return t;var s,u=new Rn(r,t,i),c=t.eventCache.getNode();if(De(n)||".priority"===Se(n)){var l;if(t.serverCache.isFullyInitialized())l=_n(r,Xt(t));else{var h=t.serverCache.getNode();(0,m.assert)(h instanceof yt,"serverChildren would be complete if leaf node"),l=kn(r,h)}s=e.filter.updateFullNode(c,l,o)}else{var f=Se(n),d=xn(r,f,t.serverCache);null==d&&t.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),(s=null!=d?e.filter.updateChild(c,f,d,Ne(n),u,o):t.eventCache.getNode().hasChild(f)?e.filter.updateChild(c,f,yt.EMPTY_NODE,Ne(n),u,o):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(a=_n(r,Xt(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,a,o))}return a=t.serverCache.isFullyInitialized()||null!=wn(r,Te()),Jt(t,s,a,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,o,a){if(null!=wn(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(De(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return On(e,t,n,u.getNode().getChild(n),i,o,s,a);if(De(n)){var c=new Zt(null);return u.getNode().forEachChild(Ye,(function(e,t){c=c.set(new Ce(e),t)})),Mn(e,t,n,c,i,o,s,a)}return t}var l=new Zt(null);return r.foreach((function(e,t){var r=Le(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Mn(e,t,n,l,i,o,s,a)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Mt.LISTEN_COMPLETE)throw(0,m.assertionError)("Unknown operation type: "+n.type);o=function(e,t,n,r,i){var o=t.serverCache,a=Yt(t,o.getNode(),o.isFullyInitialized()||De(n),o.isFiltered());return Pn(e,a,n,r,Sn,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Qt(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(xt(Qt(t)))}}(t,o,h),{viewCache:o,changes:h}}function Pn(e,t,n,r,i,o){var a,s,u=t.eventCache;if(null!=wn(r,n))return t;if(De(n))if((0,m.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Xt(t),l=kn(r,c instanceof yt?c:yt.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),l,o)}else{var h=_n(r,Xt(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var f=Se(n);if(".priority"===f){(0,m.assert)(1===Re(n),"Can't have a priority with additional path components");var d=u.getNode(),p=bn(r,n,d,s=t.serverCache.getNode());a=null!=p?e.filter.updatePriority(d,p):u.getNode()}else{var v,g=Ne(n);if(u.isCompleteForChild(f)){s=t.serverCache.getNode();var y=bn(r,n,u.getNode(),s);v=null!=y?u.getNode().getImmediateChild(f).updateChild(g,y):u.getNode().getImmediateChild(f)}else v=xn(r,f,t.serverCache);a=null!=v?e.filter.updateChild(u.getNode(),f,v,g,i,o):u.getNode()}}return Jt(t,a,u.isFullyInitialized()||De(n),e.filter.filtersNodes())}function On(e,t,n,r,i,o,a,s){var u,c=t.serverCache,l=a?e.filter:e.filter.getIndexedFilter();if(De(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var f=Se(n);if(!c.isCompleteForPath(n)&&Re(n)>1)return t;var d=Ne(n),p=c.getNode().getImmediateChild(f).updateChild(d,r);u=".priority"===f?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),f,p,d,Sn,null)}var v=Yt(t,u,c.isFullyInitialized()||De(n),l.filtersNodes());return Pn(e,v,n,i,new Rn(i,v,o),s)}function An(e,t,n,r,i,o,a){var s,u,c=t.eventCache,l=new Rn(i,t,o);if(De(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,a),s=Jt(t,u,!0,e.filter.filtersNodes());else{var h=Se(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Jt(t,u,c.isFullyInitialized(),c.isFiltered());else{var f,d=Ne(n),p=c.getNode().getImmediateChild(h);if(De(d))f=r;else{var v=l.getCompleteChild(h);f=null!=v?".priority"===Pe(d)&&v.getChild(Ae(d)).isEmpty()?v:v.updateChild(d,r):yt.EMPTY_NODE}if(p.equals(f))s=t;else s=Jt(t,e.filter.updateChild(c.getNode(),h,f,d,l,a),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function Ln(e,t){return e.eventCache.isCompleteForChild(t)}function Dn(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Mn(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=De(n)?r:new Zt(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=Dn(0,t.serverCache.getNode().getImmediateChild(n),r);c=On(e,c,new Ce(n),u,i,o,a,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=Dn(0,t.serverCache.getNode().getImmediateChild(n),r);c=On(e,c,new Ce(n),h,i,o,a,s)}})),c}var Fn;function Un(e,t){var n=Xt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!De(t)&&!n.getImmediateChild(Se(t)).isEmpty())?n.getChild(t):null}function jn(e,t,n,r){t.type===Mt.MERGE&&null!==t.source.queryId&&((0,m.assert)(Xt(e.viewCache_),"We should always have a full cache before handling merges"),(0,m.assert)(Qt(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,o,a=e.viewCache_,s=Nn(e.processor_,a,t,n,r);return i=e.processor_,o=s.viewCache,(0,m.assert)(o.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),(0,m.assert)(o.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),(0,m.assert)(s.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Bn(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Bn(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],o=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Kt(e,i,"child_removed",t,r,n),Kt(e,i,"child_added",t,r,n),Kt(e,i,"child_moved",o,r,n),Kt(e,i,"child_changed",t,r,n),Kt(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn;function qn(e,t,n,r){var i=t.source.queryId;if(null!==i){var o=e.views.get(i);return(0,m.assert)(null!=o,"SyncTree gave us an op for an invalid query."),jn(o,t,n,r)}var a=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a=a.concat(jn(f,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return a}function Wn(e,t){var n=null,r=!0,i=!1,o=void 0;try{for(var a,s=e.views.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;n=n||Un(u,t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}var Vn=function e(n){"use strict";t(s)(this,e),this.listenProvider_=n,this.syncPointTree_=new Zt(null),this.pendingWriteTree_={visibleWrites:en.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function zn(e,t,n,r,i){return function(e,t,n,r,i){(0,m.assert)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=tn(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Qn(e,new Wt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Kn(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=dn(e.pendingWriteTree_,t),i=pn(e.pendingWriteTree_,t);if(i){var o=new Zt(null);return null!=r.snap?o=o.set(Te(),!0):Y(r.children,(function(e){o=o.set(new Ce(e),!0)})),Qn(e,new qt(r.path,o,n))}return[]}function Gn(e,t,n){return Qn(e,new Wt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Jn(e,t,n,r){var i=Zn(e,r);if(null!=i){var o=er(i),a=o.path,s=o.queryId,u=Me(a,t);return tr(e,a,new Wt(Bt(s),u,n))}return[]}function Yn(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=Wn(n,Me(e,t));if(r)return r}));return yn(r,t,i,n,!0)}function Qn(e,t){return Xn(t,e.syncPointTree_,null,fn(e.pendingWriteTree_,Te()))}function Xn(e,t,n,r){if(De(e.path))return $n(e,t,n,r);var i=t.get(Te());null==n&&null!=i&&(n=Wn(i,Te()));var o=[],a=Se(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var c=n?n.getImmediateChild(a):null,l=En(r,a);o=o.concat(Xn(s,u,c,l))}return i&&(o=o.concat(qn(i,e,r,n))),o}function $n(e,t,n,r){var i=t.get(Te());null==n&&null!=i&&(n=Wn(i,Te()));var o=[];return t.children.inorderTraversal((function(t,i){var a=n?n.getImmediateChild(t):null,s=En(r,t),u=e.operationForChild(t);u&&(o=o.concat($n(u,i,a,s)))})),i&&(o=o.concat(qn(i,e,r,n))),o}function Zn(e,t){return e.tagToQueryMap.get(t)}function er(e){var t=e.indexOf("$");return(0,m.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ce(e.substr(0,t))}}function tr(e,t,n){var r=e.syncPointTree_.get(t);return(0,m.assert)(r,"Missing sync point for query tag that we're tracking"),qn(r,n,fn(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nr=function(){"use strict";function e(n){t(s)(this,e),this.node_=n}return t(u)(e,[{key:"getImmediateChild",value:function(t){return new e(this.node_.getImmediateChild(t))}},{key:"node",value:function(){return this.node_}}]),e}(),rr=function(){"use strict";function e(n,r){t(s)(this,e),this.syncTree_=n,this.path_=r}return t(u)(e,[{key:"getImmediateChild",value:function(t){var n=Le(this.path_,t);return new e(this.syncTree_,n)}},{key:"node",value:function(){return Yn(this.syncTree_,this.path_)}}]),e}(),ir=function(e,t,n){return e&&"object"==typeof e?((0,m.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?or(e[".sv"],t,n):"object"==typeof e[".sv"]?ar(e[".sv"],t):void(0,m.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},or=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,m.assert)(!1,"Unexpected server value: "+e)},ar=function(e,t,n){e.hasOwnProperty("increment")||(0,m.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&(0,m.assert)(!1,"Unexpected increment value: "+r);var i=t.node();if((0,m.assert)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i.getValue();return"number"!=typeof o?r:o+r},sr=function(e,t,n,r){return cr(t,new rr(n,e),r)},ur=function(e,t,n){return cr(e,new nr(t),n)};function cr(e,t,n){var r,i=e.getPriority().val(),o=ir(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var a=e,s=ir(a.getValue(),t,n);return s!==a.getValue()||o!==a.getPriority().val()?new ut(s,kt(o)):e}var u=e;return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new ut(o))),u.forEachChild(ft,(function(e,i){var o=cr(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lr=function e(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};t(s)(this,e),this.name=n,this.parent=r,this.node=i};function hr(e,t){for(var n=t instanceof Ce?t:new Ce(t),r=e,i=Se(n);null!==i;){var o=(0,m.safeGet)(r.node.children,i)||{children:{},childCount:0};r=new lr(i,r,o),i=Se(n=Ne(n))}return r}function fr(e){return e.node.value}function dr(e,t){e.node.value=t,yr(e)}function pr(e){return e.node.childCount>0}function vr(e,t){Y(e.node.children,(function(n,r){t(new lr(n,e,r))}))}function gr(e,t,n,r){n&&!r&&t(e),vr(e,(function(e){gr(e,t,!0,r)})),n&&r&&t(e)}function mr(e){return new Ce(null===e.parent?e.name:mr(e.parent)+"/"+e.name)}function yr(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===fr(e)&&!pr(e)}(n),i=(0,m.contains)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,yr(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,yr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}var _r=/[\[\].#$\/\u0000-\u001F\u007F]/,kr=/[\[\].#$\u0000-\u001F\u007F]/,br=10485760,wr=function(e){return"string"==typeof e&&0!==e.length&&!_r.test(e)},Ir=function(e){return"string"==typeof e&&0!==e.length&&!kr.test(e)},xr=function(e,t,n,r){r&&void 0===t||Er((0,m.errorPrefix)(e,"value"),t,n)},Er=function(e,t,n){var r=n instanceof Ce?new je(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+He(r));if("function"==typeof t)throw new Error(e+"contains a function "+He(r)+" with contents = "+t.toString());if(H(t))throw new Error(e+"contains "+t.toString()+" "+He(r));if("string"==typeof t&&t.length>3495253.3333333335&&(0,m.stringLength)(t)>br)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+He(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,o=!1;if(Y(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!wr(t)))throw new Error(e+" contains an invalid key ("+t+") "+He(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,s;s=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(s),a.byteLength_+=(0,m.stringLength)(s),Be(a),Er(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=(0,m.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&o)throw new Error(e+' contains ".value" child '+He(r)+" in addition to actual children.")}},Cr=function(e,t,n,r){if(!(r&&void 0===n||Ir(n)))throw new Error((0,m.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Tr=function(e,t){if(".info"===Se(t))throw new Error(e+" failed = Can't modify data under /.info/")},Sr=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!wr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ir(e)}(n))throw new Error((0,m.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},Rr=function e(){"use strict";t(s)(this,e),this.eventLists_=[],this.recursionDepth_=0};function Nr(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();null===n||Fe(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Pr(e,t,n){Nr(e,n),Or(e,(function(e){return Ue(e,t)||Ue(t,e)}))}function Or(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(Ar(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ar(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();A&&M("event: "+n.toString()),Z(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr="repo_interrupt",Dr=function(){"use strict";function e(n,r,i,o){t(s)(this,e),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=At(),this.transactionQueueTree_=new lr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return t(u)(e,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),e}();function Mr(e,t,n){if(e.stats_=de(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Pt(e.repoInfo_,(function(t,n,r,i){jr(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return Br(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,m.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ve(e.repoInfo_,t,(function(t,n,r,i){jr(e,t,n,r,i)}),(function(t){Br(e,t)}),(function(t){!function(e,t){Y(t,(function(t,n){Hr(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,o;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new jt(e.stats_,e.server_)},o=r.toString(),fe[o]||(fe[o]=i()),fe[o]),e.infoData_=new Ot,e.infoSyncTree_=new Vn({startListening:function(t,n,r,i){var o=[],a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=Gn(e.infoSyncTree_,t._path,a),setTimeout((function(){i("ok")}),0)),o},stopListening:function(){}}),Hr(e,"connected",!1),e.serverSyncTree_=new Vn({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var o=i(n,r);Pr(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function Fr(e){var t=e.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ur(e){return(t=(t={timestamp:Fr(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function jr(e,t,n,r,i){e.dataUpdateCount++;var o=new Ce(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var a=[];if(i)if(r){var s=(0,m.map)(n,(function(e){return kt(e)}));a=function(e,t,n,r){var i=Zn(e,r);if(i){var o=er(i),a=o.path,s=o.queryId,u=Me(a,t),c=Zt.fromObject(n);return tr(e,a,new Vt(Bt(s),u,c))}return[]}(e.serverSyncTree_,o,s,i)}else{var u=kt(n);a=Jn(e.serverSyncTree_,o,u,i)}else if(r){var c=(0,m.map)(n,(function(e){return kt(e)}));a=function(e,t,n){var r=Zt.fromObject(n);return Qn(e,new Vt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,c)}else{var l=kt(n);a=Gn(e.serverSyncTree_,o,l)}var h=o;a.length>0&&(h=Qr(e,o)),Pr(e.eventQueue_,h,a)}function Br(e,t){Hr(e,"connected",t),!1===t&&function(e){zr(e,"onDisconnectEvents");var t=Ur(e),n=At();Dt(e.onDisconnect_,Te(),(function(r,i){var o=sr(r,i,e.serverSyncTree_,t);Lt(n,r,o)}));var r=[];Dt(n,Te(),(function(t,n){r=r.concat(Gn(e.serverSyncTree_,t,n));var i=ti(e,t);Qr(e,i)})),e.onDisconnect_=At(),Pr(e.eventQueue_,Te(),r)}(e)}function Hr(e,t,n){var r=new Ce("/.info/"+t),i=kt(n);e.infoData_.updateSnapshot(r,i);var o=Gn(e.infoSyncTree_,r,i);Pr(e.eventQueue_,r,o)}function qr(e){return e.nextWriteId_++}function Wr(e,t,n,r,i){zr(e,"set",{path:t.toString(),value:n,priority:r});var o=Ur(e),a=kt(n,r),s=Yn(e.serverSyncTree_,t),u=ur(a,s,o),c=qr(e),l=zn(e.serverSyncTree_,t,u,c,!0);Nr(e.eventQueue_,l),e.server_.put(t.toString(),a.val(!0),(function(n,r){var o="ok"===n;o||B("set at "+t+" failed: "+n);var a=Kn(e.serverSyncTree_,c,!o);Pr(e.eventQueue_,t,a),Kr(e,i,n,r)}));var h=ti(e,t);Qr(e,h),Pr(e.eventQueue_,h,[])}function Vr(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Lr)}function zr(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o="";e.persistentConnection_&&(o=e.persistentConnection_.id+":"),M.apply(void 0,[o].concat(t(h)(r)))}function Kr(e,t,n,r){t&&Z((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var o=new Error(i);o.code=e,t(o)}}))}function Gr(e,t,n){return Yn(e.serverSyncTree_,t,n)||yt.EMPTY_NODE}function Jr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||ei(e,t),fr(t)){var n=$r(e,t);(0,m.assert)(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&Yr(e,mr(t),n)}else pr(t)&&vr(t,(function(t){Jr(e,t)}))}function Yr(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=Gr(e,t,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];(0,m.assert)(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=Me(t,u.path);o=o.updateChild(c,u.currentOutputSnapshotRaw)}var l=o.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){zr(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var o=function(t){n[t].status=2,i=i.concat(Kn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&a.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},a=[],s=0;s<n.length;s++)o(s);ei(e,hr(e.transactionQueueTree_,t)),Jr(e,e.transactionQueueTree_),Pr(e.eventQueue_,t,i);for(var u=0;u<a.length;u++)Z(a[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{B("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Qr(e,t)}}),a)}function Qr(e,t){var n=Xr(e,t),r=mr(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=Me(n,u.path),l=!1,h=void 0;if((0,m.assert)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,o=o.concat(Kn(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",o=o.concat(Kn(e.serverSyncTree_,u.currentWriteId,!0));else{var f=Gr(e,u.path,a);u.currentInputSnapshot=f;var d=t[r].update(f.val());if(void 0!==d){Er("transaction failed: Data returned ",d,u.path);var p=kt(d);"object"==typeof d&&null!=d&&(0,m.contains)(d,".priority")||(p=p.updatePriority(f.getPriority()));var v=u.currentWriteId,g=Ur(e),y=ur(p,f,g);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=y,u.currentWriteId=qr(e),a.splice(a.indexOf(v),1),o=(o=o.concat(zn(e.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally))).concat(Kn(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",o=o.concat(Kn(e.serverSyncTree_,u.currentWriteId,!0))}Pr(e.eventQueue_,n,o),o=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],o=[],a=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);ei(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Z(i[u]);Jr(e,e.transactionQueueTree_)}(e,$r(e,n),r),r}function Xr(e,t){var n,r=e.transactionQueueTree_;for(n=Se(t);null!==n&&void 0===fr(r);)r=hr(r,n),n=Se(t=Ne(t));return r}function $r(e,t){var n=[];return Zr(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Zr(e,t,n){var r=fr(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);vr(t,(function(t){Zr(e,t,n)}))}function ei(e,t){var n=fr(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,dr(t,n.length>0?n:void 0)}vr(t,(function(t){ei(e,t)}))}function ti(e,t){var n=mr(Xr(e,t)),r=hr(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){ni(e,t)})),ni(e,r),gr(r,(function(t){ni(e,t)})),n}function ni(e,t){var n=fr(t);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)3===n[a].status||(1===n[a].status?((0,m.assert)(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):((0,m.assert)(0===n[a].status,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(Kn(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));-1===o?dr(t,void 0):n.length=o+1,Pr(e.eventQueue_,mr(t),i);for(var s=0;s<r.length;s++)Z(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ri,ii,oi=function(e,t){var n=ai(e),r=n.namespace;"firebase.com"===n.domain&&j(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||j("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&B("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Ce(n.pathString)}},ai=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var f=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var o,a=e.split("&")[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):B("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}},si="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ui=(ri=0,ii=[],function(){"use strict";function e(n,r,i,o){t(s)(this,e),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=o}return t(u)(e,[{key:"key",get:function(){return De(this._path)?null:Pe(this._path)}},{key:"ref",get:function(){return new ci(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=Nt(this._queryParams),t=G(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return Nt(this._queryParams)}},{key:"isEqual",value:function(t){if(!((t=(0,m.getModularInstance)(t))instanceof e))return!1;var n=this._repo===t._repo,r=Fe(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),e}());var ci=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(e,i){return t(s)(this,r),n.call(this,e,i,new St,!1)}return t(u)(r,[{key:"parent",get:function(){var e=Ae(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(ui);function li(e,t){return(e=(0,m.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?hi(e._root,t):e._root}function hi(e,t){var n,r,i,o;return null===Se((e=(0,m.getModularInstance)(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Cr(n,r,i,o)):Cr("child","path",t,!1),new ci(e._repo,Le(e._path,t))}function fi(e,t){e=(0,m.getModularInstance)(e),Tr("set",e._path),xr("set",t,e._path,!1);var n=new(0,m.Deferred);return Wr(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}!function(e){(0,m.assert)(!Fn,"__referenceConstructor has already been defined"),Fn=e}(ci),function(e){(0,m.assert)(!Hn,"__referenceConstructor has already been defined"),Hn=e}(ci);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var di={},pi=!1;function vi(e,t,n,r){e.repoInfo_=new ue("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function gi(e,t,n,r,i){var o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||j("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),M("Using default host for project ",e.options.projectId),o="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var a,s=oi(o,i),u=s.repoInfo,c=void 0;void 0!==_&&_.env&&(c=_.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o="http://".concat(c,"?ns=").concat(u.namespace),u=(s=oi(o,i)).repoInfo):a=!s.repoInfo.secure;var l=i&&a?new re(re.OWNER):new ne(e.name,e.options,t);Sr("Invalid Firebase Database URL",s),De(s.path)||j("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=di[t.name];i||(i={},di[t.name]=i);var o=i[e.toURLString()];o&&j("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Dr(e,pi,n,r),i[e.toURLString()]=o,o}(u,e,l,new te(e.name,n));return new mi(h,e)}var mi=function(){"use strict";function e(n,r){t(s)(this,e),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return t(u)(e,[{key:"_repo",get:function(){return this._instanceStarted||(Mr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new ci(this._repo,Te())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=di[t])&&n[e.key]===e||j("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),Vr(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&j("Cannot call "+e+" on a deleted database.")}}]),e}();function yi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,v.getApp)(),n=arguments.length>1?arguments[1]:void 0,r=(0,v._getProvider)(e,"database").getImmediate({identifier:n});if(!r._instanceStarted){var i=(0,m.getDefaultEmulatorHostnameAndPort)("database");i&&_i.apply(void 0,[r].concat(t(h)(i)))}return r}function _i(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=(0,m.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&j("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&j('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new re(re.OWNER);else if(r.mockUserToken){var a="string"==typeof r.mockUserToken?r.mockUserToken:(0,m.createMockUserToken)(r.mockUserToken,e.app.options.projectId);o=new re(a)}vi(i,t,n,o)}Ve.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ve.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var ki,bi;bi=v.SDK_VERSION,w=bi,(0,v._registerComponent)(new(0,g.Component)("database",(function(e,t){var n=t.instanceIdentifier;return gi(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),(0,v.registerVersion)(k,b,ki),(0,v.registerVersion)(k,b,"esm2017")})),o.register("aaNOt",(function(e,t){var n=o("4Nugj");function r(){document.body.classList.toggle(".auth-form-open"),n.default.authFormBackdrop.classList.toggle("is-hidden")}function i(e){e.currentTarget===n.default.signUpFormBtn&&(n.default.signUpFormBtn.classList.add("active"),n.default.authSubmitBtn.dataset.login="signup",n.default.loginFormBtn.classList.remove("active"),n.default.nameInput.style.display="block",n.default.nameInput.disabled=!1,n.default.authSubmitBtn.textContent=n.default.signUpFormBtn.textContent),e.currentTarget===n.default.loginFormBtn&&(n.default.loginFormBtn.classList.add("active"),n.default.authSubmitBtn.dataset.login="login",n.default.signUpFormBtn.classList.remove("active"),n.default.nameInput.style.display="none",n.default.nameInput.disabled=!0,n.default.authSubmitBtn.textContent=n.default.loginFormBtn.textContent)}n.default.userLoginBtn.addEventListener("click",r),n.default.authFormCloseBtn.addEventListener("click",r),n.default.signUpFormBtn.addEventListener("click",i),n.default.loginFormBtn.addEventListener("click",i),n.default.authSubmitBtn.dataset.login="signup"})),o.register("71aro",(function(e,n){var r=o("bpxeT"),i=o("2TvXO"),a=o("4Nugj"),s=o("9wf5v"),u=o("lgQb1");s=o("9wf5v");function c(){return(c=t(r)(t(i).mark((function e(n){return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"login"===a.default.authSubmitBtn.dataset.login)try{(0,s.loginAccount)().then((function(){JSON.parse(localStorage.getItem(s.LOCAL_STORAGE_TOKEN))&&((0,u.hideAuthForm)(),a.default.authForm.reset())})).catch((function(e){return console.log(e.message)}))}catch(e){console.log(e.message)}if("signup"!==a.default.authSubmitBtn.dataset.login){e.next=11;break}e.prev=3,(0,s.createAccount)().then((function(){JSON.parse(localStorage.getItem(s.LOCAL_STORAGE_TOKEN))&&((0,u.hideAuthForm)(),a.default.authForm.reset())})).catch((function(e){return console.log(e.message)})),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(3),console.log("user already registered"),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[3,7]])})))).apply(this,arguments)}o("lgQb1"),a.default.authForm.addEventListener("submit",(function(e){return c.apply(this,arguments)}))})),o("iE7OH").register(JSON.parse('{"1Vwc0":"shopping-list-page.24ff09c5.js","3ZQG8":"stc_logo_2x.86697aa4.png","lT5Sb":"hope_logo_2x.79c38b0f.png","lkTUI":"imc_logo_2x.bbad0e73.png","cUmEl":"razom_logo_2x.3819b38d.png","6puB0":"aah_logo_2x.c55a422a.png","af08D":"pritula_logo_2x.e697c812.png","4Iq1S":"msf_logo_2x.1fec69d6.png","lWsFU":"wv_logo_2x.4b9a1c80.png","5grJL":"united_logo_2x.0e642edc.png","hQKmN":"andriymatcipura@2x.58e29e7b.jpg","7g4Ii":"vitaliypshenychnyi@2x.566cd484.jpg","3uWCI":"julialuzina@2x.091401f6.jpg","KtZhs":"evgenvanchenko@2x.7d2ed229.jpg","8sijK":"vitaliydolyuk@2x.12fd621a.jpg","cGK19":"lizapikovska@2x.d5d09dd1.jpg","4KAoE":"olexanderbreslavets@2x.39c73fce.jpg","erXUd":"hennadiyyarosh@2x.e2f94562.jpg","kR5SC":"ivanrusnak@2x.1c1c73ce.jpg"}'))}();
//# sourceMappingURL=shopping-list-page.24ff09c5.js.map
