!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}})),i("4Nugj");var a=i("bpxeT"),o=i("8nrFW"),s=i("2TvXO"),u=(a=i("bpxeT"),s=i("2TvXO"),i("dIxxU")),c=i("4Nugj");function l(e){return e.map((function(e){return e.title.length<17?'<div class="book-card-wrapper" data-idbook="'.concat(e._id,'"><a class="overlay link" href="#">\n            <img src="').concat(e.book_image,'" alt="').concat(e.title,'" height="256" loading="lazy"/> \n            <div class="overlay-field">\n              <p class="overlay-text">QUICK VIEW</p>\n            </div>\n            <p class="book-name">').concat(e.title,'</p>\n            <p class="book-author">').concat(e.author,"</p>\n          </a></div>"):'<div class="book-card-wrapper" data-idbook="'.concat(e._id,'"><a class="overlay link" href="#">\n            <img src="').concat(e.book_image,'" alt="').concat(e.title,'" height="256" loading="lazy"/> \n            <div class="overlay-field">\n              <p class="overlay-text">QUICK VIEW</p>\n            </div>\n            <p class="book-name">').concat(e.title.split("").slice(0,17).join(""),'...</p>\n            <p class="book-author">').concat(e.author,"</p>\n          </a></div>")})).join("")}function h(e,t){c.default.mainGalleryEl.innerHTML="";var n=Math.trunc(t.split(" ").length/2);c.default.mainGalleryTitleEl.innerHTML="".concat(t.split(" ").splice(0,n).join(" "),' \n  <span class="category-title-span">').concat(t.split(" ").splice(n,n).join(" "),"</span>");var r;r=l(e),c.default.mainGalleryEl.classList.add("gal-category"),c.default.mainGalleryEl.insertAdjacentHTML("beforeend",r)}function d(e){c.default.mainGalleryEl.classList.remove("gal-category"),c.default.mainGalleryTitleEl.innerHTML="Best Sellers <span class='category-title-span'>Books</span>",c.default.mainGalleryEl.innerHTML="";var t;t=e.map((function(e){return window.innerWidth>=1440?'<div class="books-category">\n          <p class="books-category-title">'.concat(e.list_name,'</p>\n          <ul">\n            <li class="books__list">').concat(l(e.books),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(e.list_name,'">SEE MORE</button>\n        </div>'):window.innerWidth>=768?'<div class="books-category">\n          <p class="books-category-title">'.concat(e.list_name,'</p>\n          <ul">\n            <li class="books__list">').concat(l(e.books.slice(0,3)),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(e.list_name,'">SEE MORE</button>\n        </div>'):'<div class="books-category">\n          <p class="books-category-title">'.concat(e.list_name,'</p>\n          <ul">\n            <li class="books__list">').concat(l(e.books.slice(0,1)),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(e.list_name,'">SEE MORE</button>\n        </div>')})).join(""),c.default.mainGalleryEl.insertAdjacentHTML("beforeend",t)}c=i("4Nugj");var f="https://books-backend.p.goit.global/books/";function p(){return v.apply(this,arguments)}function v(){return(v=e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.default.get("".concat(f,"top-books"));case 3:n=e.sent,console.log(n.data[0].books[0]),d(n.data),c.default.spinnerEl.setAttribute("hidden",!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.default.spinnerEl.removeAttribute("hidden"),e.next=4,u.default.get("".concat(f,"category?category=").concat(n));case 4:r=e.sent,console.log(r.data),h(r.data,n),c.default.spinnerEl.setAttribute("hidden",!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function g(){return(g=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("".concat(f,"category-list"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}p(),c.default.mainGalleryEl.addEventListener("click",(function(e){e.target.dataset.cat&&m(e.target.dataset.cat)}));c=i("4Nugj");function _(e){return e.map((function(e){var t=e.list_name;return'<li class="category-list-item"><button type="button" class="category">'.concat(t,"</button></li>")})).join("")}var k,b='<li class="category-list-item"><p class="categories-err">The list of categories is empty</p></li>';function w(e){e.parentNode.classList.add("active"),e.classList.add("category-active")}function I(e){for(var t=0;t<e.length;t++)e[t].classList.contains("active")&&(e[t].classList.remove("active"),e[t].firstChild.classList.remove("category-active"))}function T(){document.body.classList.toggle(".auth-form-open"),c.default.authFormBackdrop.classList.toggle("is-hidden")}function C(e){e.currentTarget===c.default.signUpFormBtn&&(c.default.signUpFormBtn.classList.add("active"),c.default.authSubmitBtn.dataset.login="signup",c.default.loginFormBtn.classList.remove("active"),c.default.nameInput.style.display="block",c.default.nameInput.disabled=!1,c.default.authSubmitBtn.textContent=c.default.signUpFormBtn.textContent),e.currentTarget===c.default.loginFormBtn&&(c.default.loginFormBtn.classList.add("active"),c.default.authSubmitBtn.dataset.login="login",c.default.signUpFormBtn.classList.remove("active"),c.default.nameInput.style.display="none",c.default.nameInput.disabled=!0,c.default.authSubmitBtn.textContent=c.default.loginFormBtn.textContent)}(function(){return g.apply(this,arguments)})().then((k=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(r=n.data).length){e.next=4;break}return c.default.categoriesList.innerHTML=b,e.abrupt("return");case 4:i='<li class="category-list-item active"><button type="button" class="category category-active">All categories</button></li>'+_(r),c.default.categoriesList.innerHTML=i;case 6:case"end":return e.stop()}}),t)}))),function(e){return k.apply(this,arguments)})).catch((function(e){c.default.categoriesList.innerHTML=b})),c.default.categoriesList.addEventListener("click",(function(t){var n=t.target,r=e(o)(t.currentTarget.children);if(n.classList.contains("category")){if("All categories"===n.textContent)return I(r),w(n),void p();c.default.mainGalleryEl.innerHTML="",m(n.textContent)}n.classList.contains("category")&&(I(r),w(n))})),c.default.mainGalleryEl.addEventListener("click",(function(t){var n=t.target.dataset.cat,r=e(o)(c.default.categoriesList.children);if(n)for(var i=0;i<r.length;i++)r[i].firstChild.textContent===n&&(I(r),w(r[i].firstChild))})),(c=i("4Nugj")).default.userLoginBtn.addEventListener("click",T),c.default.authFormCloseBtn.addEventListener("click",T),c.default.signUpFormBtn.addEventListener("click",C),c.default.loginFormBtn.addEventListener("click",C),c.default.authSubmitBtn.dataset.login="signup";a=i("bpxeT"),s=i("2TvXO"),c=i("4Nugj"),a=i("bpxeT"),s=i("2TvXO");var x=i("ds8z5"),E=i("8MBJY"),S=i("a2hTj"),R=i("eYQtU"),N=i("1t1Wn"),P=(o=i("8nrFW"),{});Object.defineProperty(P,"__esModule",{value:!0}),P.default=function(e){return F(e)};var O=M(i("ge8co")),A=M(i("cZGw3")),D=M(i("fVNic")),L=M(i("gD1JV"));function M(e){return e&&e.__esModule?e:{default:e}}function F(e){var t="function"==typeof Map?new Map:void 0;return F=function(e){if(null===e||!A.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return O.default(e,arguments,D.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),L.default(n,e)},F(e)}var U,j,W,H=i("2MbLg"),q=U={};function B(){throw new Error("setTimeout has not been defined")}function V(){throw new Error("clearTimeout has not been defined")}function z(e){if(j===setTimeout)return setTimeout(e,0);if((j===B||!j)&&setTimeout)return j=setTimeout,setTimeout(e,0);try{return j(e,0)}catch(t){try{return j.call(null,e,0)}catch(t){return j.call(this,e,0)}}}!function(){try{j="function"==typeof setTimeout?setTimeout:B}catch(e){j=B}try{W="function"==typeof clearTimeout?clearTimeout:V}catch(e){W=V}}();var K,G=[],Y=!1,J=-1;function Q(){Y&&K&&(Y=!1,K.length?G=K.concat(G):J=-1,G.length&&X())}function X(){if(!Y){var e=z(Q);Y=!0;for(var t=G.length;t;){for(K=G,G=[];++J<t;)K&&K[J].run();J=-1,t=G.length}K=null,Y=!1,function(e){if(W===clearTimeout)return clearTimeout(e);if((W===V||!W)&&clearTimeout)return W=clearTimeout,clearTimeout(e);try{W(e)}catch(t){try{return W.call(null,e)}catch(t){return W.call(this,e)}}}(e)}}function $(e,t){this.fun=e,this.array=t}function Z(){}q.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];G.push(new $(e,t)),1!==G.length||Y||z(X)},$.prototype.run=function(){this.fun.apply(null,this.array)},q.title="browser",q.browser=!0,q.env={},q.argv=[],q.version="",q.versions={},q.on=Z,q.addListener=Z,q.once=Z,q.off=Z,q.removeListener=Z,q.removeAllListeners=Z,q.emit=Z,q.prependListener=Z,q.prependOnceListener=Z,q.listeners=function(e){return[]},q.binding=function(e){throw new Error("process.binding is not supported")},q.cwd=function(){return"/"},q.chdir=function(e){throw new Error("process.chdir is not supported")},q.umask=function(){return 0};
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
var ee=!1,te=!1,ne="${JSCORE_VERSION}",re=function(e,t){if(!e)throw ie(t)},ie=function(e){return new Error("Firebase Database ("+ne+") INTERNAL ASSERT FAILED: "+e)},ae=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},oe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;u||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ae(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new se;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},se=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){var t;return e(E)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(P)(Error)),ue=function(e){var t=ae(e);return oe.encodeByteArray(t,!0)},ce=function(e){return ue(e).replace(/\./g,"")},le=function(e){try{return oe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function he(e){return de(void 0,e)}function de(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=de(e[n],t[n]));return e}
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
var fe=function(){
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
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},pe=function(){try{return fe()||function(){if(void 0!==U&&void 0!==U.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&le(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},ve=function(e){var t,n;return null===(n=null===(t=pe())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},me=function(e){var t=ve(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},ye=function(){var e;return null===(e=pe())||void 0===e?void 0:e.config},ge=function(e){var t;return null===(t=pe())||void 0===t?void 0:t["_".concat(e)]},_e=function(){"use strict";function t(){var n=this;e(E)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(S)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function ke(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ce(JSON.stringify({alg:"none",type:"JWT"})),ce(JSON.stringify(a)),""].join(".")}
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
 */function be(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function we(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Ie(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Te(){return!0===ee||!0===te}function Ce(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
var xe=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i,a){var o;return e(E)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(x)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(x)(o),Ee.prototype.create),o}return r}(e(P)(Error)),Ee=function(){"use strict";function t(n,r,i){e(E)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(S)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Se(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new xe(a,u,i);return c}}]),t}();function Se(e,t){return e.replace(Re,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Re=/\{\$([^}]+)}/g;
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
 */function Ne(e){return JSON.parse(e)}function Pe(e){return JSON.stringify(e)}
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
 */var Oe=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=Ne(le(a[0])||""),n=Ne(le(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Ae=function(e){var t=Oe(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
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
function De(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Le(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Me(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fe(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Ue(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(je(l)&&je(h)){if(!Ue(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,f=!1,p=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){f=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(f)throw p}}return!0}function je(e){return null!==e&&"object"==typeof e}
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
function We(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(N)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function He(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(N)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function qe(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var Be=function(){"use strict";function t(){e(E)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(S)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=d^l&(h^d),u=1518500249):(s=l^h^d,u=1859775393):p<60?(s=l&h|d&(l|h),u=2400959708):(s=l^h^d,u=3395469782);var v=(c<<5|c>>>27)+s+f+u+n[p]&4294967295;f=d,d=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var Ve=function(){"use strict";function t(n,r){var i=this;e(E)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(S)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=ze),void 0===r.error&&(r.error=ze),void 0===r.complete&&(r.complete=ze);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function ze(){}
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
 */function Ke(e,t){return"".concat(e," failed: ").concat(t," argument ")}
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
var Ge=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,re(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ye=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Je(e){return e&&e._delegate?e._delegate:e}a=i("bpxeT"),E=i("8MBJY"),S=i("a2hTj");var Qe=i("hKHmD"),Xe=(o=i("8nrFW"),s=i("2TvXO"),a=i("bpxeT"),E=i("8MBJY"),S=i("a2hTj"),N=i("1t1Wn"),o=i("8nrFW"),s=i("2TvXO"),function(){"use strict";function t(n,r,i){e(E)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(S)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}()),$e="[DEFAULT]",Ze=function(){"use strict";function t(n,r){e(E)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(S)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new _e;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:$e})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(N)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(o)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(o)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(N)(c.value,2),d=h[0],f=h[1],p=this.normalizeInstanceIdentifier(d);i===p&&f.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===$e?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.component?this.component.multipleInstances?e:$e:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();var et,tt,nt=function(){"use strict";function t(n){e(E)(this,t),this.name=n,this.providers=new Map}return e(S)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ze(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),rt=(E=i("8MBJY"),S=i("a2hTj"),Qe=i("hKHmD"),o=i("8nrFW"),[]);(tt=et||(et={}))[tt.DEBUG=0]="DEBUG",tt[tt.VERBOSE=1]="VERBOSE",tt[tt.INFO=2]="INFO",tt[tt.WARN=3]="WARN",tt[tt.ERROR=4]="ERROR",tt[tt.SILENT=5]="SILENT";var it,at={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},ot=et.INFO,st=(it={},e(Qe)(it,et.DEBUG,"log"),e(Qe)(it,et.VERBOSE,"log"),e(Qe)(it,et.INFO,"info"),e(Qe)(it,et.WARN,"warn"),e(Qe)(it,et.ERROR,"error"),it),ut=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s;if(!(n<t.logLevel)){var u=(new Date).toISOString(),c=st[n];if(!c)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(s=console)[c].apply(s,["[".concat(u,"]  ").concat(t.name,":")].concat(e(o)(i)))}},ct=function(){"use strict";function t(n){e(E)(this,t),this.name=n,this._logLevel=ot,this._logHandler=ut,this._userLogHandler=null,rt.push(this)}return e(S)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in et))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?at[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.DEBUG].concat(e(o)(n))),this._logHandler.apply(this,[this,et.DEBUG].concat(e(o)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.VERBOSE].concat(e(o)(n))),this._logHandler.apply(this,[this,et.VERBOSE].concat(e(o)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.INFO].concat(e(o)(n))),this._logHandler.apply(this,[this,et.INFO].concat(e(o)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.WARN].concat(e(o)(n))),this._logHandler.apply(this,[this,et.WARN].concat(e(o)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.ERROR].concat(e(o)(n))),this._logHandler.apply(this,[this,et.ERROR].concat(e(o)(n)))}}]),t}();a=i("bpxeT");var lt={};Object.defineProperty(lt,"__esModule",{value:!0}),lt.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){dt.default(e,t,n[t])}))}return e};var ht,dt=(ht=i("hKHmD"))&&ht.__esModule?ht:{default:ht};var ft,pt;o=i("8nrFW"),s=i("2TvXO"),o=i("8nrFW");var vt=new WeakMap,mt=new WeakMap,yt=new WeakMap,gt=new WeakMap,_t=new WeakMap;var kt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return mt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||yt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function bt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pt||(pt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Tt(this),n),It(vt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return It(t.apply(Tt(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s,u=(s=t).call.apply(s,[Tt(this),n].concat(e(o)(i)));return yt.set(u,n.sort?n.sort():[n]),It(u)}}function wt(e){return"function"==typeof e?bt(e):(e instanceof IDBTransaction&&function(e){if(!mt.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));mt.set(e,t)}}(e),t=e,(ft||(ft=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,kt):e);var t}function It(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(It(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&vt.set(e,t)})).catch((function(){})),_t.set(n,t),n;var t,n;if(gt.has(e))return gt.get(e);var r=wt(e);return r!==e&&(gt.set(e,r),_t.set(r,e)),r}var Tt=function(e){return _t.get(e)};function Ct(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=It(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(It(s.result),e.oldVersion,e.newVersion,It(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var xt=["get","getKey","getAll","getAllKeys","count"],Et=["put","add","delete","clear"],St=new Map;function Rt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(St.get(n))return St.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,u=Et.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(u||xt.includes(r))){var c=function(){var t=e(a)(e(s).mark((function t(n){var a,c,l,h,d,f,p=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=p.length,c=new Array(a>1?a-1:0),l=1;l<a;l++)c[l-1]=p[l];return d=this.transaction(n,u?"readwrite":"readonly"),f=d.store,i&&(f=f.index(c.shift())),t.next=7,Promise.all([(h=f)[r].apply(h,e(o)(c)),u&&d.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return St.set(n,c),c}}}kt=function(t){return e(lt)({},t,{get:function(e,n,r){return Rt(e,n)||t.get(e,n,r)},has:function(e,n){return!!Rt(e,n)||t.has(e,n)}})}(kt);
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
var Nt=function(){"use strict";function t(n){e(E)(this,t),this.container=n}return e(S)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Pt,Ot,At="@firebase/app",Dt="0.9.9",Lt=new ct("@firebase/app"),Mt="[DEFAULT]",Ft=(Pt={},e(Qe)(Pt,At,"fire-core"),e(Qe)(Pt,"@firebase/app-compat","fire-core-compat"),e(Qe)(Pt,"@firebase/analytics","fire-analytics"),e(Qe)(Pt,"@firebase/analytics-compat","fire-analytics-compat"),e(Qe)(Pt,"@firebase/app-check","fire-app-check"),e(Qe)(Pt,"@firebase/app-check-compat","fire-app-check-compat"),e(Qe)(Pt,"@firebase/auth","fire-auth"),e(Qe)(Pt,"@firebase/auth-compat","fire-auth-compat"),e(Qe)(Pt,"@firebase/database","fire-rtdb"),e(Qe)(Pt,"@firebase/database-compat","fire-rtdb-compat"),e(Qe)(Pt,"@firebase/functions","fire-fn"),e(Qe)(Pt,"@firebase/functions-compat","fire-fn-compat"),e(Qe)(Pt,"@firebase/installations","fire-iid"),e(Qe)(Pt,"@firebase/installations-compat","fire-iid-compat"),e(Qe)(Pt,"@firebase/messaging","fire-fcm"),e(Qe)(Pt,"@firebase/messaging-compat","fire-fcm-compat"),e(Qe)(Pt,"@firebase/performance","fire-perf"),e(Qe)(Pt,"@firebase/performance-compat","fire-perf-compat"),e(Qe)(Pt,"@firebase/remote-config","fire-rc"),e(Qe)(Pt,"@firebase/remote-config-compat","fire-rc-compat"),e(Qe)(Pt,"@firebase/storage","fire-gcs"),e(Qe)(Pt,"@firebase/storage-compat","fire-gcs-compat"),e(Qe)(Pt,"@firebase/firestore","fire-fst"),e(Qe)(Pt,"@firebase/firestore-compat","fire-fst-compat"),e(Qe)(Pt,"fire-js","fire-js"),e(Qe)(Pt,"firebase","fire-js-all"),Pt),Ut=new Map,jt=new Map;function Wt(e,t){try{e.container.addComponent(t)}catch(n){Lt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Ht(e){var t=e.name;if(jt.has(t))return Lt.debug("There were multiple attempts to register component ".concat(t,".")),!1;jt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=Ut.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){Wt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function qt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var Bt=(Ot={},e(Qe)(Ot,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(Qe)(Ot,"bad-app-name","Illegal App name: '{$appName}"),e(Qe)(Ot,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(Qe)(Ot,"app-deleted","Firebase App named '{$appName}' already deleted"),e(Qe)(Ot,"no-options","Need to provide options, when not being deployed to hosting via source."),e(Qe)(Ot,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(Qe)(Ot,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(Qe)(Ot,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(Qe)(Ot,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(Qe)(Ot,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(Qe)(Ot,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Ot),Vt=new Ee("app","Firebase",Bt),zt=function(){"use strict";function t(n,r,i){var a=this;e(E)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xe("app",(function(){return a}),"PUBLIC"))}return e(S)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}]),t}(),Kt="9.21.0";function Gt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Mt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Vt.create("bad-app-name",{appName:String(a)});if(n||(n=ye()),!n)throw Vt.create("no-options");var o=Ut.get(a);if(o){if(Ue(n,o.options)&&Ue(i,o.config))return o;throw Vt.create("duplicate-app",{appName:a})}var s=new nt(a),u=!0,c=!1,l=void 0;try{for(var h,d=jt.values()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;s.addComponent(f)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var p=new zt(n,i,s);return Ut.set(a,p),p}function Yt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=Ut.get(e);if(!t&&e===Mt)return Gt();if(!t)throw Vt.create("no-app",{appName:e});return t}function Jt(e,t,n){var r,i=null!==(r=Ft[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Lt.warn(s.join(" "))}Ht(new Xe("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var Qt="firebase-heartbeat-store",Xt=null;function $t(){return Xt||(Xt=Ct("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Qt)}}).catch((function(e){throw Vt.create("idb-open",{originalErrorMessage:e.message})}))),Xt}function Zt(e){return en.apply(this,arguments)}function en(){return(en=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$t();case 3:return r=e.sent,e.abrupt("return",r.transaction(Qt).objectStore(Qt).get(rn(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof xe?Lt.warn(e.t0.message):(i=Vt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Lt.warn(i.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function tn(e,t){return nn.apply(this,arguments)}function nn(){return(nn=e(a)(e(s).mark((function t(n,r){var i,a,o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$t();case 3:return i=e.sent,a=i.transaction(Qt,"readwrite"),o=a.objectStore(Qt),e.next=8,o.put(r,rn(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof xe?Lt.warn(e.t0.message):(u=Vt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Lt.warn(u.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function rn(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var an=function(){"use strict";function t(n){var r=this;e(E)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new cn(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(S)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=on(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a,o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=on(),i=sn(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,u=ce(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function on(){return(new Date).toISOString().substring(0,10)}function sn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),ln(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),ln(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var un,cn=function(){"use strict";function t(n){e(E)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(S)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ce()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Zt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",tn(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",tn(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(o)(a.heartbeats).concat(e(o)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function ln(e){return ce(JSON.stringify({version:2,heartbeats:e})).length}
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
 */un="",Ht(new Xe("platform-logger",(function(e){return new Nt(e)}),"PRIVATE")),Ht(new Xe("heartbeat",(function(e){return new an(e)}),"PRIVATE")),Jt(At,Dt,un),Jt(At,Dt,"esm2017"),Jt("fire-js","");x=i("ds8z5"),a=i("bpxeT"),E=i("8MBJY"),S=i("a2hTj"),Qe=i("hKHmD");var hn={};Object.defineProperty(hn,"__esModule",{value:!0}),hn.default=function(e,t,n){return fn(e,t,n)};var dn=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function fn(e,t,n){return(fn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=dn.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var pn=i("fVNic");R=i("eYQtU"),N=i("1t1Wn"),o=i("8nrFW"),H=i("2MbLg"),s=i("2TvXO");function vn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function mn(){return e(Qe)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var yn=mn,gn=new Ee("auth","Firebase",mn()),_n=new ct("@firebase/auth");function kn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;_n.logLevel<=et.WARN&&(a=_n).warn.apply(a,["Auth (".concat(Kt,"): ").concat(t)].concat(e(o)(r)))}function bn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;_n.logLevel<=et.ERROR&&(a=_n).error.apply(a,["Auth (".concat(Kt,"): ").concat(t)].concat(e(o)(r)))}
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
 */function wn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Cn.apply(void 0,[t].concat(e(o)(r)))}function In(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Cn.apply(void 0,[t].concat(e(o)(r)))}function Tn(t,n,r){var i=Object.assign(Object.assign({},yn()),e(Qe)({},n,r));return new Ee("auth","Firebase",i).create(n,{appName:t.name})}function Cn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var s,u=r[0],c=e(o)(r.slice(1));return c[0]&&(c[0].appName=t.name),(s=t._errorFactory).create.apply(s,[u].concat(e(o)(c)))}return(a=gn).create.apply(a,[t].concat(e(o)(r)))}function xn(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw Cn.apply(void 0,[n].concat(e(o)(i)))}function En(e){var t="INTERNAL ASSERTION FAILED: "+e;throw bn(t),new Error(t)}function Sn(e,t){e||En(t)}
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
 */function Rn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Nn(){return"http:"===Pn()||"https:"===Pn()}function Pn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function On(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Nn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var An=function(){"use strict";function t(n,r){e(E)(this,t),this.shortDelay=n,this.longDelay=r,Sn(r>n,"Short delay should be less than long delay!"),this.isMobile=we()||Ie()}return e(S)(t,[{key:"get",value:function(){return On()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
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
 */function Dn(e,t){Sn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var Ln,Mn=function(){"use strict";function t(){e(E)(this,t)}return e(S)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Fn=(Ln={},e(Qe)(Ln,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(Qe)(Ln,"MISSING_CUSTOM_TOKEN","internal-error"),e(Qe)(Ln,"INVALID_IDENTIFIER","invalid-email"),e(Qe)(Ln,"MISSING_CONTINUE_URI","internal-error"),e(Qe)(Ln,"INVALID_PASSWORD","wrong-password"),e(Qe)(Ln,"MISSING_PASSWORD","missing-password"),e(Qe)(Ln,"EMAIL_EXISTS","email-already-in-use"),e(Qe)(Ln,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(Qe)(Ln,"INVALID_IDP_RESPONSE","invalid-credential"),e(Qe)(Ln,"INVALID_PENDING_TOKEN","invalid-credential"),e(Qe)(Ln,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(Qe)(Ln,"MISSING_REQ_TYPE","internal-error"),e(Qe)(Ln,"EMAIL_NOT_FOUND","user-not-found"),e(Qe)(Ln,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(Qe)(Ln,"EXPIRED_OOB_CODE","expired-action-code"),e(Qe)(Ln,"INVALID_OOB_CODE","invalid-action-code"),e(Qe)(Ln,"MISSING_OOB_CODE","internal-error"),e(Qe)(Ln,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(Qe)(Ln,"INVALID_ID_TOKEN","invalid-user-token"),e(Qe)(Ln,"TOKEN_EXPIRED","user-token-expired"),e(Qe)(Ln,"USER_NOT_FOUND","user-token-expired"),e(Qe)(Ln,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(Qe)(Ln,"INVALID_CODE","invalid-verification-code"),e(Qe)(Ln,"INVALID_SESSION_INFO","invalid-verification-id"),e(Qe)(Ln,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(Qe)(Ln,"MISSING_SESSION_INFO","missing-verification-id"),e(Qe)(Ln,"SESSION_EXPIRED","code-expired"),e(Qe)(Ln,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(Qe)(Ln,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(Qe)(Ln,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(Qe)(Ln,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(Qe)(Ln,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(Qe)(Ln,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(Qe)(Ln,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(Qe)(Ln,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(Qe)(Ln,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(Qe)(Ln,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(Qe)(Ln,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),e(Qe)(Ln,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),e(Qe)(Ln,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),e(Qe)(Ln,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),e(Qe)(Ln,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),e(Qe)(Ln,"MISSING_CLIENT_TYPE","missing-client-type"),e(Qe)(Ln,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),e(Qe)(Ln,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),e(Qe)(Ln,"INVALID_REQ_TYPE","invalid-req-type"),Ln),Un=new An(3e4,6e4);function jn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Wn(e,t,n,r){return Hn.apply(this,arguments)}function Hn(){return Hn=e(a)(e(s).mark((function t(n,r,i,o){var u,c=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",qn(n,u,e(a)(e(s).mark((function t(){var a,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},o&&("GET"===r?u=o:a={body:JSON.stringify(o)}),c=We(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Mn.fetch()(Kn(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Hn.apply(this,arguments)}function qn(e,t,n){return Bn.apply(this,arguments)}function Bn(){return(Bn=e(a)(e(s).mark((function t(n,r,i){var a,o,u,c,l,h,d,f,p;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},Fn),r),t.prev=2,o=new Gn(n),t.next=6,Promise.race([i(),o.promise]);case 6:return u=t.sent,o.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Yn(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,h=e(N)(l.split(" : "),2),d=h[0],f=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw Yn(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw Yn(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw Yn(n,"user-disabled",c);case 29:if(p=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!f){t.next=34;break}throw Tn(n,p,f);case 34:wn(n,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof xe)){t.next=41;break}throw t.t0;case 41:wn(n,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Vn(e,t,n,r){return zn.apply(this,arguments)}function zn(){return zn=e(a)(e(s).mark((function t(n,r,i,a){var o,u,c=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Wn(n,r,i,a,o);case 3:return"mfaPendingCredential"in(u=e.sent)&&wn(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),zn.apply(this,arguments)}function Kn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Dn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Gn=function(){"use strict";function t(n){var r=this;e(E)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(In(n.auth,"network-request-failed"))}),Un.get())}))}return e(S)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Yn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=In(e,t,r);return i.customData._tokenResponse=n,i}function Jn(e,t){return Qn.apply(this,arguments)}function Qn(){return(Qn=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Wn(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xn(e,t){return $n.apply(this,arguments)}function $n(){return($n=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Wn(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function Zn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function er(){return er=e(a)(e(s).mark((function t(n){var r,i,a,o,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Je(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,xn((o=nr(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),u="object"==typeof o.firebase?o.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Zn(tr(o.auth_time)),issuedAtTime:Zn(tr(o.iat)),expirationTime:Zn(tr(o.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),er.apply(this,arguments)}function tr(e){return 1e3*Number(e)}function nr(t){var n=e(N)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return bn("JWT malformed, contained fewer than 3 sections"),null;try{var o=le(i);return o?JSON.parse(o):(bn("Failed to decode base64 JWT payload"),null)}catch(e){return bn("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function rr(e,t){return ir.apply(this,arguments)}function ir(){return ir=
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
e(a)(e(s).mark((function t(n,r){var i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof xe&&ar(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),ir.apply(this,arguments)}function ar(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var or=function(){"use strict";function t(n){e(E)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(S)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),sr=function(){"use strict";function t(n,r){e(E)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(S)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Zn(this.lastLoginAt),this.creationTime=Zn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function ur(e){return cr.apply(this,arguments)}function cr(){return(cr=
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
e(a)(e(s).mark((function t(n){var r,i,a,o,u,c,l,h,d,f,p;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,rr(n,Xn(i,{idToken:a}));case 7:xn(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),u=o.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?dr(u.providerUserInfo):[],l=hr(n.providerData,c),h=n.isAnonymous,d=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),f=!!h&&d,p={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new sr(u.createdAt,u.lastLoginAt),isAnonymous:f},Object.assign(n,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function lr(){return(lr=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Je(n),e.next=3,ur(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function hr(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(o)(r).concat(e(o)(n))}function dr(e){return e.map((function(e){var t=e.providerId,n=vn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function fr(e,t){return pr.apply(this,arguments)}function pr(){return(pr=
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
e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qn(n,{},e(a)(e(s).mark((function t(){var i,a,o,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=We({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,u=a.apiKey,c=Kn(n,o,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Mn.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var vr=function(){"use strict";function t(){e(E)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(S)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){xn(e.idToken,"internal-error"),xn(void 0!==e.idToken,"internal-error"),xn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,xn(n=nr(t),"internal-error"),xn(void 0!==n.exp,"internal-error"),xn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(xn(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){var a,o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fr(t,n);case 2:a=e.sent,o=a.accessToken,u=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(o,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return En("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(xn("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(xn("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(xn("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
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
 */function mr(e,t){xn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var yr=function(){"use strict";function t(n){e(E)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,s=vn(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new or(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?e(o)(s.providerData):[],this.metadata=new sr(s.createdAt||void 0,s.lastLoginAt||void 0)}return e(S)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,rr(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(xn(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return er.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return lr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(xn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){xn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,ur(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,rr(t,Jn(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;xn(_&&I,e,"internal-error");var T=vr.fromJSON(this.name,I);xn("string"==typeof _,e,"internal-error"),mr(h,e.name),mr(d,e.name),xn("boolean"==typeof k,e,"internal-error"),xn("boolean"==typeof b,e,"internal-error"),mr(f,e.name),mr(p,e.name),mr(v,e.name),mr(m,e.name),mr(y,e.name),mr(g,e.name);var C=new t({uid:_,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:T,createdAt:y,lastLoginAt:g});return w&&Array.isArray(w)&&(C.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(C._redirectEventId=m),C}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(s).mark((function a(){var o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new vr).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,ur(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),gr=new Map;
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
 */function _r(e){Sn(e instanceof Function,"Expected a class definition");var t=gr.get(e);return t?(Sn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,gr.set(e,t),t)}
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
 */var kr=function(){"use strict";function t(){e(E)(this,t),this.type="NONE",this.storage={}}return e(S)(t,[{key:"_isAvailable",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();kr.type="NONE";var br=kr;
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
 */function wr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ir=function(){"use strict";function t(n,r,i){e(E)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=wr(this.userKey,o.apiKey,s),this.fullPersistenceKey=wr("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(S)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?yr._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(s).mark((function o(){var u,c,l,h,d,f,p,v,m,y,g,_,k;return e(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new t(_r(br),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=o.sent.filter((function(e){return e})),c=u[0]||_r(br),l=wr(i,n.config.apiKey,n.name),h=null,d=!0,f=!1,p=void 0,o.prev=9,v=r[Symbol.iterator]();case 11:if(d=(m=v.next()).done){o.next=29;break}return y=m.value,o.prev=13,o.next=16,y._get(l);case 16:if(!(g=o.sent)){o.next=22;break}return _=yr._fromJSON(n,g),y!==c&&(h=_),c=y,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:d=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),f=!0,p=o.t1;case 35:o.prev=35,o.prev=36,d||null==v.return||v.return();case 38:if(o.prev=38,!f){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new t(c,n,i));case 46:if(c=k[0],!h){o.next=50;break}return o.next=50,c._set(l,h.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(c,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function Tr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Sr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Cr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nr(t))return"Blackberry";if(Pr(t))return"Webos";if(xr(t))return"Safari";if((t.includes("chrome/")||Er(t))&&!t.includes("edge/"))return"Chrome";if(Rr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return/firefox\//i.test(e)}function xr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Er(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return/crios\//i.test(e)}function Sr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return/iemobile/i.test(e)}function Rr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return/android/i.test(e)}function Nr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return/blackberry/i.test(e)}function Pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return/webos/i.test(e)}function Or(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ar(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return Or(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Dr(){return((e=be()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Lr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();return Or(e)||Rr(e)||Pr(e)||Nr(e)||/windows phone/i.test(e)||Sr(e)}
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
function Mr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Tr(be());break;case"Worker":t="".concat(Tr(be()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Kt,"/").concat(r)}function Fr(e,t){return Ur.apply(this,arguments)}function Ur(){return(Ur=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Wn(n,"GET","/v2/recaptchaConfig",jn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function jr(e){return void 0!==e&&void 0!==e.enterprise}var Wr=function t(n){"use strict";if(e(E)(this,t),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
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
 */function Hr(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=In("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function qr(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var Br="https://www.google.com/recaptcha/enterprise.js?render=",Vr="NO_RECAPTCHA",zr=function(){"use strict";function t(n){e(E)(this,t),this.type="recaptcha-enterprise",this.auth=Qr(n)}return e(S)(t,[{key:"verify",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){var o,u,c;return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(e){return u.apply(this,arguments)},u=function(){return u=e(a)(e(s).mark((function t(r){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){t.next=3;break}return t.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){t.next=5;break}return t.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return t.abrupt("return",new Promise(function(){var t=e(a)(e(s).mark((function t(n,i){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Fr(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new Wr(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 6:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)},c=function(e,n,r){var i=window.grecaptcha;jr(i)?i.enterprise.ready((function(){i.enterprise.execute(e,{action:t}).then((function(e){n(e)})).catch((function(){n(Vr)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){o(r.auth).then((function(r){if(!n&&jr(window.grecaptcha))c(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Hr(Br+r).then((function(){c(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),t}();function Kr(e,t,n){return Gr.apply(this,arguments)}function Gr(){return Gr=e(a)(e(s).mark((function t(n,r,i){var a,o,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]&&l[3],o=new zr(n),e.prev=3,e.next=6,o.verify(i);case 6:u=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,o.verify(i,!0);case 13:u=e.sent;case 14:return c=Object.assign({},r),a?Object.assign(c,{captchaResp:u}):Object.assign(c,{captchaResponse:u}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",c);case 19:case"end":return e.stop()}}),t,null,[[3,9]])}))),Gr.apply(this,arguments)}
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
 */var Yr=function(){"use strict";function t(n){e(E)(this,t),this.auth=n,this.queue=[]}return e(S)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a,o,u,c,l,h,d,f,p,v,m,y;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,u=void 0,e.prev=5,c=n.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){e.next=15;break}return h=l.value,e.next=11,h(t);case 11:h.onAbort&&i.push(h.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,u=e.t0;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!o){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),d=!0,f=!1,p=void 0,e.prev=35,v=i[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){y=m.value;try{y()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),f=!0,p=e.t2;case 43:e.prev=43,e.prev=44,d||null==v.return||v.return();case 46:if(e.prev=46,!f){e.next=49;break}throw p;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),Jr=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xr(this),this.idTokenSubscription=new Xr(this),this.beforeStateQueue=new Yr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(S)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=_r(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(s).mark((function i(){var a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Ir.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a,o,u,c,l,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(o=h.user,u=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return xn(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ur(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Je(t):null)&&xn(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&xn(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(_r(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"initializeRecaptchaConfig",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fr(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"});case 2:r=e.sent,i=new Wr(r),null==t.tenantId?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.emailPasswordEnabled&&new zr(t).verify();case 6:case"end":return e.stop()}}),n)})))()}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Ee("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return xn(i=t&&_r(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Ir.create(n,[_r(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return xn(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return xn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a,o;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(Qe)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,t._getAppCheckToken();case 9:return(o=n.sent)&&(i["X-Firebase-AppCheck"]=o),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,null===(r=t.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=e.sent)?void 0:i.error)&&kn("Error while retrieving App Check token: ".concat(i.error)),e.abrupt("return",null==i?void 0:i.token);case 6:case"end":return e.stop()}}),n)})))()}}]),t}();
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
 */function Qr(e){return Je(e)}var Xr=function(){"use strict";function t(n){var r,i,a=this;e(E)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Ve((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(S)(t,[{key:"next",get:function(){return xn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
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
 */function $r(e,t){var n=qt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Ue(n.getOptions(),null!=t?t:{}))return r;wn(r,"already-initialized")}return n.initialize({options:t})}function Zr(t,n,r){var i=Qr(t);xn(i._canInitEmulator,i,"emulator-config-failed"),xn(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=ei(n),s=function(t){var n=ei(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:ti(i.substr(o.length+1))}}var s=e(N)(i.split(":"),2);return{host:s[0],port:ti(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ei(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ti(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var ni=function(){"use strict";function t(n,r){e(E)(this,t),this.providerId=n,this.signInMethod=r}return e(S)(t,[{key:"toJSON",value:function(){return En("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return En("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return En("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return En("not implemented")}}]),t}();function ri(e,t){return ii.apply(this,arguments)}function ii(){return(ii=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Wn(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ai(e,t){return oi.apply(this,arguments)}function oi(){return(oi=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Vn(n,"POST","/v1/accounts:signInWithPassword",jn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function si(e,t){return ui.apply(this,arguments)}function ui(){return(ui=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Vn(n,"POST","/v1/accounts:signInWithEmailLink",jn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ci(e,t){return li.apply(this,arguments)}function li(){return(li=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Vn(n,"POST","/v1/accounts:signInWithEmailLink",jn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var hi=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(E)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(S)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o,u;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(o={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,Kr(t,o,"signInWithPassword");case 8:return u=r.sent,r.abrupt("return",ai(t,u));case 12:return r.abrupt("return",ai(t,o).catch(function(){var n=e(a)(e(s).mark((function n(r){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==r.code){e.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),e.next=4,Kr(t,o,"signInWithPassword");case 4:return i=e.sent,e.abrupt("return",ai(t,i));case 8:return e.abrupt("return",Promise.reject(r));case 9:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",si(t,{email:n._email,oobCode:n._password}));case 14:wn(t,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",ri(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",ci(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:wn(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(ni);function di(e,t){return fi.apply(this,arguments)}function fi(){return(fi=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Vn(n,"POST","/v1/accounts:signInWithIdp",jn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var pi=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){var t;return e(E)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(S)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return di(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,di(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,di(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=We(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=vn(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(ni);function vi(e,t){return mi.apply(this,arguments)}function mi(){return(mi=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Wn(n,"POST","/v1/accounts:sendVerificationCode",jn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function yi(){return(yi=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Vn(n,"POST","/v1/accounts:signInWithPhoneNumber",jn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gi(){return(gi=e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Vn(n,"POST","/v1/accounts:signInWithPhoneNumber",jn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Yn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var _i=e(Qe)({},"USER_NOT_FOUND","user-not-found");function ki(){return(ki=e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Vn(n,"POST","/v1/accounts:signInWithPhoneNumber",jn(n,i),_i));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var bi=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(S)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return yi.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return gi.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return ki.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(ni);
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
 */var wi=function(){"use strict";function t(n){var r,i,a,o,s,u;e(E)(this,t);var c=He(qe(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);xn(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(S)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=He(qe(e)).link,n=t?He(qe(t)).deep_link_id:null,r=He(qe(e)).deep_link_id;return(r?He(qe(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var Ii=function(){"use strict";function t(){e(E)(this,t),this.providerId=t.PROVIDER_ID}return e(S)(t,null,[{key:"credential",value:function(e,t){return hi._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=wi.parseLink(t);return xn(n,"argument-error"),hi._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Ii.PROVIDER_ID="password",Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var Ti=function(){"use strict";function t(n){e(E)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(S)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Ci=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){var t;return e(E)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(S)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(o)(this.scopes)}}]),r}(Ti),xi=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){return e(E)(this,r),n.call(this,"facebook.com")}return e(S)(r,null,[{key:"credential",value:function(e){return pi._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ci);
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
 */xi.FACEBOOK_SIGN_IN_METHOD="facebook.com",xi.PROVIDER_ID="facebook.com";
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
var Ei=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){var t;return e(E)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(S)(r,null,[{key:"credential",value:function(e,t){return pi._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ci);Ei.GOOGLE_SIGN_IN_METHOD="google.com",Ei.PROVIDER_ID="google.com";
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
var Si=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){return e(E)(this,r),n.call(this,"github.com")}return e(S)(r,null,[{key:"credential",value:function(e){return pi._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ci);Si.GITHUB_SIGN_IN_METHOD="github.com",Si.PROVIDER_ID="github.com";
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
var Ri=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){return e(E)(this,r),n.call(this,"twitter.com")}return e(S)(r,null,[{key:"credential",value:function(e,t){return pi._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ci);function Ni(e,t){return Pi.apply(this,arguments)}function Pi(){return(Pi=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Vn(n,"POST","/v1/accounts:signUp",jn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */Ri.TWITTER_SIGN_IN_METHOD="twitter.com",Ri.PROVIDER_ID="twitter.com";var Oi=function(){"use strict";function t(n){e(E)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(S)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(s).mark((function a(){var u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yr._fromIdTokenResponse(n,i,o);case 2:return u=e.sent,c=Ai(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(s).mark((function a(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Ai(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Ai(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Di=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i,a,o){var s,u;return e(E)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(x)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(S)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(xe);function Li(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Di._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Mi(e,t){return Fi.apply(this,arguments)}function Fi(){return Fi=e(a)(e(s).mark((function t(n,r){var i,a,o=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=rr,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Oi._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Fi.apply(this,arguments)}function Ui(e,t){return ji.apply(this,arguments)}function ji(){return ji=
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
e(a)(e(s).mark((function t(n,r){var i,a,o,u,c,l,h=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,rr(n,Li(a,o,r,n),i);case 6:return xn((u=e.sent).idToken,a,"internal-error"),xn(c=nr(u.idToken),a,"internal-error"),l=c.sub,xn(n.uid===l,a,"user-mismatch"),e.abrupt("return",Oi._forOperation(n,o,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&wn(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),ji.apply(this,arguments)}function Wi(e,t){return Hi.apply(this,arguments)}function Hi(){return Hi=
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
e(a)(e(s).mark((function t(n,r){var i,a,o,u,c=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,Li(n,a,r);case 4:return o=e.sent,e.next=7,Oi._fromIdTokenResponse(n,a,o);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),Hi.apply(this,arguments)}function qi(e,t){return Bi.apply(this,arguments)}function Bi(){return(Bi=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Wi(Qr(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vi(e,t,n){return zi.apply(this,arguments)}function zi(){return zi=e(a)(e(s).mark((function t(n,r,i){var o,u,c,l,h,d,f;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=Qr(n),c={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(o=u._getRecaptchaConfig())||void 0===o?void 0:o.emailPasswordEnabled)){t.next=11;break}return t.next=7,Kr(u,c,"signUpPassword");case 7:h=t.sent,l=Ni(u,h),t.next=12;break;case 11:l=Ni(u,c).catch(function(){var t=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=8;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,Kr(u,c,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",Ni(u,r));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 12:return t.next=14,l.catch((function(e){return Promise.reject(e)}));case 14:return d=t.sent,t.next=17,Oi._fromIdTokenResponse(u,"signIn",d);case 17:return f=t.sent,t.next=20,u._updateCurrentUser(f.user);case 20:return t.abrupt("return",f);case 21:case"end":return t.stop()}}),t)}))),zi.apply(this,arguments)}function Ki(e,t,n){return qi(Je(e),Ii.credential(t,n))}function Gi(e,t){return Yi.apply(this,arguments)}function Yi(){return(Yi=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Wn(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ji(e,t){return Qi.apply(this,arguments)}function Qi(){return(Qi=
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
e(a)(e(s).mark((function t(n,r){var i,a,o,u,c,l,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.displayName,a=r.photoURL,void 0!==i||void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return o=Je(n),e.next=6,o.getIdToken();case 6:return u=e.sent,c={idToken:u,displayName:i,photoUrl:a,returnSecureToken:!0},e.next=10,rr(o,Gi(o.auth,c));case 10:return l=e.sent,o.displayName=l.displayName||null,o.photoURL=l.photoUrl||null,(h=o.providerData.find((function(e){return"password"===e.providerId})))&&(h.displayName=o.displayName,h.photoURL=o.photoURL),e.next=17,o._updateTokensIfNecessary(l);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xi(e,t,n,r){return Je(e).onIdTokenChanged(t,n,r)}function $i(e,t,n){return Je(e).beforeAuthStateChanged(t,n)}function Zi(e,t,n,r){return Je(e).onAuthStateChanged(t,n,r)}function ea(e){return Je(e).signOut()}
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
function ta(e,t){return Wn(e,"POST","/v2/accounts/mfaEnrollment:start",jn(e,t))}function na(e,t){return Wn(e,"POST","/v2/accounts/mfaEnrollment:finalize",jn(e,t))}new WeakMap;var ra="__sak",ia=function(){"use strict";function t(n,r){e(E)(this,t),this.storageRetriever=n,this.type=r}return e(S)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var aa=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){var t,i;return e(E)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(xr(i=be())||Or(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Lr(),t._shouldAllowMigration=!0,t}return e(S)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Dr()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,o=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(hn)(e(pn)(r.prototype),"_set",i).call(o,t,n);case 2:o.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(s).mark((function a(){var o;return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(hn)(e(pn)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(hn)(e(pn)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(ia);aa.type="LOCAL";var oa=aa,sa=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){return e(E)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(S)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(ia);
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
 */sa.type="SESSION";var ua=sa;
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
 */function ca(t){return Promise.all(t.map(function(){var t=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}
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
 */var la=function(){"use strict";function t(n){e(E)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(S)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o,u,c,l,h,d,f;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=t).data,u=o.eventId,c=o.eventType,l=o.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(h).map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,ca(d);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function ha(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */la.receivers=[];var da=function(){"use strict";function t(n){e(E)(this,t),this.target=n,this.handlers=new Set}return e(S)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(s).mark((function a(){var o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var s=ha("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===s)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:s,data:n},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
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
 */function fa(){return window}function pa(e){fa().location.href=e}
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
 */function va(){return void 0!==fa().WorkerGlobalScope&&"function"==typeof fa().importScripts}function ma(){return ya.apply(this,arguments)}function ya(){return(ya=e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var ga="firebaseLocalStorageDb",_a="firebaseLocalStorage",ka="fbase_key",ba=function(){"use strict";function t(n){e(E)(this,t),this.request=n}return e(S)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function wa(e,t){return e.transaction([_a],t?"readwrite":"readonly").objectStore(_a)}function Ia(){var e=indexedDB.deleteDatabase(ga);return new ba(e).toPromise()}function Ta(){var t=indexedDB.open(ga,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(_a,{keyPath:ka})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(_a)){e.next=12;break}return i.close(),e.next=5,Ia();case 5:return e.t0=n,e.next=8,Ta();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Ca(e,t,n){return xa.apply(this,arguments)}function xa(){return(xa=e(a)(e(s).mark((function t(n,r,i){var a,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=wa(n,!0).put((a={},e(Qe)(a,ka,r),e(Qe)(a,"value",i),a)),t.abrupt("return",new ba(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ea(e,t){return Sa.apply(this,arguments)}function Sa(){return(Sa=e(a)(e(s).mark((function t(n,r){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=wa(n,!1).get(r),e.next=3,new ba(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ra(e,t){var n=wa(e,!0).delete(t);return new ba(n).toPromise()}var Na=function(){"use strict";function t(){e(E)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(S)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Ta();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",va()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=la._getInstance(va()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(s).mark((function n(r,i){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,ma();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new da(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ta();case 5:return n=e.sent,e.next=8,Ca(n,ra,"1");case 8:return e.next=10,Ra(n,ra);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ca(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ea(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ra(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,a,o,u,c,l,h,d,f,p,v,m,y,g,_,k;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=wa(e,!1).getAll();return new ba(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(o=(h=l.next()).done);o=!0)d=h.value,f=d.fbase_key,p=d.value,a.add(f),JSON.stringify(t.localCache[f])!==JSON.stringify(p)&&(t.notifyListeners(f,p),i.push(f));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,o||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,y=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(v=(_=g.next()).done);v=!0)k=_.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,y=e.t1;case 35:e.prev=35,e.prev=36,v||null==g.return||g.return();case 38:if(e.prev=38,!m){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Na.type="LOCAL";var Pa=Na;
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
 */function Oa(e,t){return Wn(e,"POST","/v2/accounts/mfaSignIn:start",jn(e,t))}function Aa(e,t){return Wn(e,"POST","/v2/accounts/mfaSignIn:finalize",jn(e,t))}
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
qr("rcb"),new An(3e4,6e4);var Da="recaptcha";
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
 */function La(e,t,n){return Ma.apply(this,arguments)}function Ma(){return(Ma=e(a)(e(s).mark((function t(n,r,i){var a,o,u,c,l,h,d,f;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,xn("string"==typeof o,n,"argument-error"),xn(i.type===Da,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return xn("enroll"===c.type,n,"internal-error"),e.next=15,ta(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return xn("signin"===c.type,n,"internal-error"),xn(h=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Oa(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,vi(n,{phoneNumber:u.phoneNumber,recaptchaToken:o});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Fa=function(){"use strict";function t(n){e(E)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Qr(n)}return e(S)(t,[{key:"verifyPhoneNumber",value:function(e,t){return La(this.auth,e,Je(t))}}],[{key:"credential",value:function(e,t){return bi._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?bi._fromTokenResponse(n,r):null}}]),t}();
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
function Ua(e,t){return t?_r(t):(xn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Fa.PROVIDER_ID="phone",Fa.PHONE_SIGN_IN_METHOD="phone";var ja=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(S)(r,[{key:"_getIdTokenResponse",value:function(e){return di(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return di(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return di(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(ni);function Wa(e){return Wi(e.auth,new ja(e),e.bypassAuthState)}function Ha(e){var t=e.auth,n=e.user;return xn(n,t,"internal-error"),Ui(n,new ja(e),e.bypassAuthState)}function qa(e){return Ba.apply(this,arguments)}function Ba(){return(Ba=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,xn(i=n.user,r,"internal-error"),e.abrupt("return",Mi(i,new ja(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Va=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(E)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(S)(t,[{key:"execute",value:function(){var t=this;return new Promise(function(){var n=e(a)(e(s).mark((function n(r,i){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a,o,u,c,l,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wa;case"linkViaPopup":case"linkViaRedirect":return qa;case"reauthViaPopup":case"reauthViaRedirect":return Ha;default:wn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),za=new An(2e3,1e4);
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
 */var Ka=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i,a,o,s){var u;return e(E)(this,r),(u=n.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(x)(u),u}return e(S)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return xn(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Sn(1===t.filter.length,"Popup operations only handle one event"),r=ha(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(In(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(In(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(In(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,za.get())};t()}}]),r}(Va);Ka.currentPopupAction=null;
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
var Ga=new Map,Ya=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(E)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(S)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(s).mark((function i(){var a,o;return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Ga.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Ja(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(hn)(e(pn)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Ga.set(n.auth._key(),a);case 21:return n.bypassAuthState||Ga.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,o=function(){return e(hn)(e(pn)(r.prototype),"onAuthEvent",n)};return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Va);function Ja(e,t){return Qa.apply(this,arguments)}function Qa(){return(Qa=e(a)(e(s).mark((function t(n,r){var i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Za(r),a=$a(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xa(e,t){Ga.set(e._key(),t)}function $a(e){return _r(e._redirectPersistence)}function Za(e){return wr("pendingRedirect",e.config.apiKey,e.name)}
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
 */function eo(e,t){return to.apply(this,arguments)}function to(){return to=e(a)(e(s).mark((function t(n,r){var i,a,o,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Qr(n),o=Ua(a,r),u=new Ya(a,o,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),to.apply(this,arguments)}
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
var no=function(){"use strict";function t(n){e(E)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(S)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return io(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!io(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(In(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ro(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(ro(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function ro(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function io(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function ao(e){return oo.apply(this,arguments)}function oo(){return oo=
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
e(a)(e(s).mark((function t(n){var r,i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Wn(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),oo.apply(this,arguments)}
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
 */var so=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uo=/^https?/;function co(){return(co=e(a)(e(s).mark((function t(n){var r,i,a,o,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ao(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!lo(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:wn(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function lo(e){var t=Rn(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!uo.test(r))return!1;if(so.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */var ho=new An(3e4,6e4);function fo(){var t=fa().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,s=Object.keys(t.H)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value;if(t.H[u].r=t.H[u].r||[],t.H[u].L=t.H[u].L||[],t.H[u].r=e(o)(t.H[u].L),t.CP)for(var c=0;c<t.CP.length;c++)t.CP[c]=null}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}}var po=null;function vo(e){return po=po||function(e){return new Promise((function(t,n){var r,i,a;function o(){fo(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){fo(),n(In(e,"network-request-failed"))},timeout:ho.get()})}if(null===(i=null===(r=fa().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=fa().gapi)||void 0===a?void 0:a.load)){var s=qr("iframefcb");return fa()[s]=function(){gapi.load?o():n(In(e,"network-request-failed"))},Hr("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw po=null,e}))}(e),po}
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
 */var mo=new An(5e3,15e3),yo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},go=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _o(e){var t=e.config;xn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Dn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Kt},i=go.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(We(r).slice(1))}function ko(e){return bo.apply(this,arguments)}function bo(){return bo=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vo(n);case 2:return r=t.sent,xn(i=fa().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:_o(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yo,dontclear:!0},(function(t){return new Promise(function(){var r=e(a)(e(s).mark((function r(i,a){var o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){fa().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=In(n,"network-request-failed"),u=fa().setTimeout((function(){a(o)}),mo.get()),t.ping(c).then(c,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())})));case 6:case"end":return t.stop()}}),t)}))),bo.apply(this,arguments)}
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
 */var wo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Io="_blank",To="http://localhost",Co=function(){"use strict";function t(n){e(E)(this,t),this.window=n,this.associatedEvent=null}return e(S)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function xo(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},wo),{width:i.toString(),height:a.toString(),top:o,left:s}),l=be().toLowerCase();r&&(u=Er(l)?Io:r),Cr(l)&&(n=n||To,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(N)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(Ar(l)&&"_self"!==u)return Eo(n||"",u),new Co(null);var d=window.open(n||"",u,h);xn(d,t,"popup-blocked");try{d.focus()}catch(e){}return new Co(d)}function Eo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var So=encodeURIComponent("fac");function Ro(e,t,n,r,i,a){return No.apply(this,arguments)}function No(){return(No=e(a)(e(s).mark((function t(n,r,i,a,o,u){var c,l,h,d,f,p,v,m,y,g,_,k,b,w,I,T,C,x,E;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(xn(n.config.authDomain,n,"auth-domain-config-required"),xn(n.config.apiKey,n,"invalid-api-key"),c={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:Kt,eventId:o},!(r instanceof Ti)){t.next=24;break}for(r.setDefaultLanguage(n.languageCode),c.providerId=r.providerId||"",Me(r.getCustomParameters())||(c.customParameters=JSON.stringify(r.getCustomParameters())),l=!0,h=!1,d=void 0,t.prev=8,f=Object.entries(u||{})[Symbol.iterator]();!(l=(p=f.next()).done);l=!0)v=e(N)(p.value,2),m=v[0],y=v[1],c[m]=y;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),h=!0,d=t.t0;case 16:t.prev=16,t.prev=17,l||null==f.return||f.return();case 19:if(t.prev=19,!h){t.next=22;break}throw d;case 22:return t.finish(19);case 23:return t.finish(16);case 24:for(r instanceof Ci&&(g=r.getScopes().filter((function(e){return""!==e}))).length>0&&(c.scopes=g.join(",")),n.tenantId&&(c.tid=n.tenantId),_=c,k=!0,b=!1,w=void 0,t.prev=28,I=Object.keys(_)[Symbol.iterator]();!(k=(T=I.next()).done);k=!0)C=T.value,void 0===_[C]&&delete _[C];t.next=36;break;case 32:t.prev=32,t.t1=t.catch(28),b=!0,w=t.t1;case 36:t.prev=36,t.prev=37,k||null==I.return||I.return();case 39:if(t.prev=39,!b){t.next=42;break}throw w;case 42:return t.finish(39);case 43:return t.finish(36);case 44:return t.next=46,n._getAppCheckToken();case 46:return x=t.sent,E=x?"#".concat(So,"=").concat(encodeURIComponent(x)):"",t.abrupt("return","".concat(Po(n),"?").concat(We(_).slice(1)).concat(E));case 49:case"end":return t.stop()}}),t,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function Po(e){var t=e.config;return t.emulator?Dn(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
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
 */var Oo="webStorageSupport",Ao=function(){"use strict";function t(){e(E)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ua,this._completeRedirectFn=eo,this._overrideRedirectResult=Xa}return e(S)(t,[{key:"_openPopup",value:function(t,n,r,i){var o=this;return e(a)(e(s).mark((function a(){var u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Sn(null===(u=o.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),e.next=4,Ro(t,n,r,Rn(),i);case 4:return c=e.sent,e.abrupt("return",xo(t,c,ha()));case 6:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var o=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return e.next=4,Ro(t,n,r,Rn(),i);case 4:return pa(e.sent),e.abrupt("return",new Promise((function(){})));case 7:case"end":return e.stop()}}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(Sn(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ko(t);case 2:return i=e.sent,a=new no(t),i.register("authEvent",(function(e){return xn(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Oo,{type:Oo},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),wn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return co.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Lr()||xr()||Or()}}]),t}(),Do=Ao,Lo=function(){"use strict";function t(n){e(E)(this,t),this.factorId=n}return e(S)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return En("unexpected MultiFactorSessionType")}}}]),t}(),Mo=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(S)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Wn(e,"POST","/v2/accounts/mfaEnrollment:finalize",jn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Wn(e,"POST","/v2/accounts/mfaSignIn:finalize",jn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Lo);(function(){"use strict";function t(){e(E)(this,t)}return e(S)(t,null,[{key:"assertion",value:function(e){return Mo._fromCredential(e)}}]),t}()).FACTOR_ID="phone",(function(){"use strict";function t(){e(E)(this,t)}return e(S)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return Fo._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Fo._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(a)(e(s).mark((function n(){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xn(void 0!==(r=t).auth,"internal-error"),e.next=4,n=r.auth,a={idToken:r.credential,totpEnrollmentInfo:{}},Wn(n,"POST","/v2/accounts/mfaEnrollment:start",jn(n,a));case 4:return i=e.sent,e.abrupt("return",Uo._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return e.stop()}var n,a}),n)})))()}}]),t}()).FACTOR_ID="totp";var Fo=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i,a){var o;return e(E)(this,r),(o=n.call(this,"totp")).otp=t,o.enrollmentId=i,o.secret=a,o}return e(S)(r,[{key:"_finalizeEnroll",value:function(t,n,r){var i=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xn(void 0!==i.secret,t,"argument-error"),e.abrupt("return",na(t,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return e.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xn(void 0!==r.enrollmentId&&void 0!==r.otp,t,"argument-error"),a={verificationCode:r.otp},e.abrupt("return",Aa(t,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return e.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Lo),Uo=function(){"use strict";function t(n,r,i,a,o,s,u){e(E)(this,t),this.sessionInfo=s,this.auth=u,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return e(S)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(jo(e)||jo(t))&&(r=!0),r&&(jo(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),jo(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}}]),t}();function jo(e){return void 0===e||0===(null==e?void 0:e.length)}var Wo="@firebase/auth",Ho="0.23.1",qo=function(){"use strict";function t(n){e(E)(this,t),this.auth=n,this.internalListeners=new Map}return e(S)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){xn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
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
var Bo,Vo=ge("authIdTokenMaxAge")||300,zo=null,Ko=function(t){return function(){var n=e(a)(e(s).mark((function n(r){var i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Vo)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,zo!==o){e.next=12;break}return e.abrupt("return");case 12:return zo=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};Bo="Browser",Ht(new Xe("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;xn(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),xn(!(null==u?void 0:u.includes(":")),"argument-error",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:Bo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mr(Bo)},l=new Jr(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_r);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Ht(new Xe("auth-internal",(function(e){var t=Qr(e.getProvider("auth").getImmediate());return new qo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Wo,Ho,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Bo)),Jt(Wo,Ho,"esm2017");c=i("4Nugj");
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
Jt("firebase","9.21.0","app");var Go=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt(),t=qt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=$r(e,{popupRedirectResolver:Do,persistence:[Pa,oa,ua]}),r=ge("authTokenSyncURL");if(r){var i=Ko(r);$i(n,i,(function(){return i(n.currentUser)})),Xi(n,(function(e){return i(e)}))}var a=ve("auth");return a&&Zr(n,"http://".concat(a)),n}(Gt({apiKey:"AIzaSyBOLF7-CSzRfScSFCuoeI5r8YT_1hxm0Jg",authDomain:"pixel-js-cake.firebaseapp.com",databaseURL:"https://pixel-js-cake-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pixel-js-cake",storageBucket:"pixel-js-cake.appspot.com",messagingSenderId:"416053417126",appId:"1:416053417126:web:e76de3bab9e0af76599067"}));c.default.btnLogout.addEventListener("click",(function(){return ts.apply(this,arguments)})),Zo();var Yo="user-token";JSON.parse(localStorage.getItem(Yo));function Jo(){return Qo.apply(this,arguments)}function Qo(){return(Qo=e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ki(Go,c.default.emailInput.value.trim(),c.default.passwordInput.value);case 3:n=e.sent,console.log(n.user.displayName),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Xo(){return $o.apply(this,arguments)}function $o(){return($o=e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Vi(Go,c.default.emailInput.value.trim(),c.default.passwordInput.value);case 3:n=e.sent,console.log("response createAccount",n.user),Ji(Go.currentUser,{displayName:c.default.nameInput.value}).then((function(){console.log(n.user.displayName)})).catch((function(e){console.log(e.message),console.log("enter your name")})),n.user.displayName=c.default.nameInput.value,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function Zo(){return es.apply(this,arguments)}function es(){return(es=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Zi(Go,(function(e){e?(console.log("Welcome ",e.displayName,"! email :",e.email),console.log(e.displayName),console.log(e.accessToken),localStorage.setItem(Yo,JSON.stringify(e.accessToken))):console.log("no user")}));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ts(){return(ts=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ea(Go);case 2:localStorage.removeItem(Yo);case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}x=i("ds8z5"),a=i("bpxeT"),E=i("8MBJY"),S=i("a2hTj"),R=i("eYQtU"),N=i("1t1Wn"),o=i("8nrFW");var ns=i("l5bVx"),rs=(H=i("2MbLg"),s=i("2TvXO"),"@firebase/database"),is="0.14.4",as="";
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
var os,ss=function(){"use strict";function t(n){e(E)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(S)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Ne(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),us=function(){"use strict";function t(){e(E)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(S)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return De(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),cs=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ss(t)}}catch(e){}return new us},ls=cs("localStorage"),hs=cs("sessionStorage"),ds=new ct("@firebase/database"),fs=(os=1,function(){return os++}),ps=function(e){var t=Ge(e),n=new Be;n.update(t);var r=n.digest();return oe.encodeByteArray(r)},vs=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=vs.apply(null,a):r+="object"==typeof a?Pe(a):a,r+=" "}return r},ms=null,ys=!0,gs=function(e,t){re(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(ds.logLevel=et.VERBOSE,ms=ds.log.bind(ds),t&&hs.set("logging_enabled",!0)):"function"==typeof e?ms=e:(ms=null,hs.remove("logging_enabled"))},_s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===ys&&(ys=!1,null===ms&&!0===hs.get("logging_enabled")&&gs(!0)),ms){var r=vs.apply(null,t);ms(r)}},ks=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];_s.apply(void 0,[t].concat(e(o)(r)))}},bs=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+vs.apply(void 0,e(o)(n));ds.error(i)},ws=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(vs.apply(void 0,e(o)(n)));throw ds.error(i),new Error(i)},Is=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+vs.apply(void 0,e(o)(n));ds.warn(i)},Ts=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Cs="[MIN_NAME]",xs="[MAX_NAME]",Es=function(e,t){if(e===t)return 0;if(e===Cs||t===xs)return-1;if(t===Cs||e===xs)return 1;var n=Ls(e),r=Ls(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Ss=function(e,t){return e===t?0:e<t?-1:1},Rs=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Pe(t))},Ns=function(e){if("object"!=typeof e||null===e)return Pe(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=Pe(t[i]),r+=":",r+=Ns(e[t[i]]);return r+="}"},Ps=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
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
 */function Os(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var As=function(e){re(!Ts(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Ds=new RegExp("^-?(0*)\\d{1,10}$"),Ls=function(e){if(Ds.test(e)){var t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Ms=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw Is("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Fs=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Us=function(){"use strict";function t(n,r){var i=this;e(E)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(S)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){Is('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),js=function(){"use strict";function t(n,r,i){var a=this;e(E)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(S)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(_s("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Is(e)}}]),t}(),Ws=function(){"use strict";function t(n){e(E)(this,t),this.accessToken=n}return e(S)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();Ws.OWNER="owner";
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
var Hs="5",qs=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bs="websocket",Vs="long_polling",zs=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=arguments.length>7&&void 0!==arguments[7]&&arguments[7];e(E)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this.isUsingEmulator=c,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ls.get("host:"+n)||this._host}return e(S)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ls.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function Ks(e,t,n){var r;if(re("string"==typeof t,"typeof type must == string"),re("object"==typeof n,"typeof params must == object"),t===Bs)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Vs)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return Os(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
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
 */var Gs=function(){"use strict";function t(){e(E)(this,t),this.counters_={}}return e(S)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;De(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return he(this.counters_)}}]),t}(),Ys={},Js={};
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
 */function Qs(e){var t=e.toString();return Ys[t]||(Ys[t]=new Gs),Ys[t]}
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
var Xs=function(){"use strict";function t(n){e(E)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(S)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Ms((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),$s="start",Zs="close",eu=function(){"use strict";function t(n,r,i,a,o,s,u){var c=this;e(E)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ks(n),this.stats_=Qs(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),Ks(r,Vs,e)}}return e(S)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Xs(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Te()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new tu((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(N)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===$s)t.id=s,t.password=u;else{if(o!==Zs)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(N)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=Hs,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&qs.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=ue(t),r=Ps(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!Te()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=Pe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!Te()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),tu=function(){"use strict";function t(n,r,i,a){if(e(E)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Te())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=fs(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){_s("frame writing exception"),e.stack&&_s(e.stack),_s(e)}}}return e(S)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.textContent="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;Te()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){_s("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||_s("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),nu=null;
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
 */"undefined"!=typeof MozWebSocket?nu=MozWebSocket:"undefined"!=typeof WebSocket&&(nu=WebSocket);var ru=function(){"use strict";function t(n,r,i,a,o,s,u){e(E)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ks(this.connId),this.stats_=Qs(r),this.connURL=t.connectionURL_(r,s,u,a,i),this.nodeAdmin=r.nodeAdmin}return e(S)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ls.set("previous_websocket_failure",!0);try{var r;if(Te()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(Hs,"/").concat(as,"/").concat(U.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new nu(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){ls.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=Ne(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(re(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Ps(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=Hs,!Te()&&"undefined"!=typeof location&&location.hostname&&qs.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),Ks(e,Bs,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==nu&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return ls.isInMemoryStorage||!0===ls.get("previous_websocket_failure")}}]),t}();ru.responsesRequiredToBeHealthy=2,ru.healthyTimeout=3e4;
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
var iu=function(){"use strict";function t(n){e(E)(this,t),this.initTransports_(n)}return e(S)(t,[{key:"initTransports_",value:function(e){var n=ru&&ru.isAvailable(),r=n&&!ru.previouslyFailed();if(e.webSocketOnly&&(n||Is("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ru];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[eu,ru]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();iu.globalTransportInitialized_=!1;
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
var au=function(){"use strict";function t(n,r,i,a,o,s,u,c,l,h){e(E)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ks("c:"+this.id+":"),this.transportManager_=new iu(r),this.log_("Connection created"),this.start_()}return e(S)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fs((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=Rs("t",e),n=Rs("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=Rs("t",e),n=Rs("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=Rs("t",e);if("d"in e){var n=e.d;if("h"===t){var r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?bs("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bs("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Hs!==n&&Is("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fs((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fs((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),ou=function(){"use strict";function t(){e(E)(this,t)}return e(S)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),su=function(){"use strict";function t(n){e(E)(this,t),this.allowedEvents_=n,this.listeners_={},re(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(S)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(o)(this.listeners_[t]),s=0;s<a.length;s++)a[s].callback.apply(a[s].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){re(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),uu=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){var t;return e(E)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||we()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(S)(r,[{key:"getInitialEvent",value:function(e){return re("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(su),cu=function(){"use strict";function t(n,r){if(e(E)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(S)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function lu(){return new cu("")}function hu(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function du(e){return e.pieces_.length-e.pieceNum_}function fu(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new cu(e.pieces_,t)}function pu(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function vu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function mu(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new cu(t,0)}function yu(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof cu)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new cu(n,0)}function gu(e){return e.pieceNum_>=e.pieces_.length}function _u(e,t){var n=hu(e),r=hu(t);if(null===n)return t;if(n===r)return _u(fu(e),fu(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ku(e,t){if(du(e)!==du(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function bu(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(du(e)>du(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var wu=function t(n,r){"use strict";e(E)(this,t),this.errorPrefix_=r,this.parts_=vu(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Ye(this.parts_[i]);Iu(this)};function Iu(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Tu(e))}function Tu(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */var Cu=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){var t,i,a;return e(E)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(S)(r,[{key:"getInitialEvent",value:function(e){return re("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(su),xu=1e3,Eu=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i,a,o,s,u,c,l){var h;if(e(E)(this,r),(h=n.call(this)).repoInfo_=t,h.applicationId_=i,h.onDataUpdate_=a,h.onConnectStatus_=o,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=l,h.id=r.nextPersistentConnectionId_++,h.log_=ks("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=xu,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,l&&!Te())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return Cu.getInstance().on("visible",h.onVisible_,e(x)(h)),-1===t.host.indexOf("fblocal")&&uu.getInstance().on("online",h.onOnline_,e(x)(h)),h}return e(S)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Pe(i)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new _e,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=Oe(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=Ae(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+Pe(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):bs("Unrecognized action received from server: "+Pe(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=xu),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(a)(e(s).mark((function n(){var i,a,o,u,c,l,h,d,f,p,v,m,y;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),o=t.onRealtimeDisconnect_.bind(t),u=t.id+":"+r.nextConnectionId_++,c=t.lastSessionId,l=!1,h=null,d=function(){h?h.close():(l=!0,o())},f=function(e){re(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},t.realtime_={close:d,sendRequest:f},p=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(N),n.next=20,Promise.all([t.authTokenProvider_.getToken(p),t.appCheckTokenProvider_.getToken(p)]);case 20:n.t1=n.sent,v=(0,n.t0)(n.t1,2),m=v[0],y=v[1],l?_s("getToken() completed but was canceled"):(_s("getToken() completed. Creating connection."),t.authToken_=m&&m.accessToken,t.appCheckToken_=y&&y.token,h=new au(u,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,o,(function(e){Is(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),c)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),l||(t.repoInfo_.nodeAdmin&&Is(n.t2),d());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){_s("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){_s("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Me(this.interruptReasons_)&&(this.reconnectDelay_=xu,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Ns(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new cu(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){_s("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){_s("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";Te()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+as.replace(/\./g,"-")]=1,we()?e["framework.cordova"]=1:Ie()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=uu.getInstance().currentlyOnline();return Me(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&De(e,"w")){var n=Le(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Is("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(ou);
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
 */Eu.nextPersistentConnectionId_=0,Eu.nextConnectionId_=0;
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
var Su,Ru=function(){"use strict";function t(n,r){e(E)(this,t),this.name=n,this.node=r}return e(S)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),Nu=function(){"use strict";function t(){e(E)(this,t)}return e(S)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Ru(Cs,e),r=new Ru(Cs,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Ru.MIN}}]),t}(),Pu=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return e(S)(r,[{key:"compare",value:function(e,t){return Es(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw ie("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Ru.MIN}},{key:"maxPost",value:function(){return new Ru(xs,Su)}},{key:"makePost",value:function(e,t){return re("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ru(e,Su)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return Su},set:function(e){Su=e}}]),r}(Nu),Ou=new Pu,Au=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(E)(this,t),this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,a&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(S)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),Du=function(){"use strict";function t(n,r,i,a,o){e(E)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:Fu.EMPTY_NODE,this.right=null!=o?o:Fu.EMPTY_NODE}return e(S)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Fu.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Fu.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
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
 */Du.RED=!0,Du.BLACK=!1;var Lu,Mu=function(){"use strict";function t(){e(E)(this,t)}return e(S)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Du(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),Fu=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(E)(this,t),this.comparator_=n,this.root_=r}return e(S)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Du.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Du.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Au(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Au(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Au(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Au(this.root_,null,this.comparator_,!0,e)}}]),t}();
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
function Uu(e,t){return Es(e.name,t.name)}function ju(e,t){return Es(e,t)}
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
 */Fu.EMPTY_NODE=new Mu;var Wu,Hu,qu,Bu=function(e){return"number"==typeof e?"number:"+As(e):"string:"+e},Vu=function(e){if(e.isLeafNode()){var t=e.val();re("string"==typeof t||"number"==typeof t||"object"==typeof t&&De(t,".sv"),"Priority must be a string or number.")}else re(e===Lu||e.isEmpty(),"priority of unexpected type.");re(e===Lu||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},zu=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(E)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,re(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Vu(this.priorityNode_)}return e(S)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return gu(e)?this:".priority"===hu(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=hu(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(re(".priority"!==r||1===du(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(fu(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Bu(this.priorityNode_.val())+":");var n=e(ns)(this.value_);t+=n+":",t+="number"===n?As(this.value_):this.value_,this.lazyHash_=ps(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(ns)(n.value_),i=e(ns)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return re(a>=0,"Unknown leaf type: "+r),re(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Wu},set:function(e){Wu=e}}]),t}();zu.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Ku,Gu,Yu=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return e(S)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Es(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Ru.MIN}},{key:"maxPost",value:function(){return new Ru(xs,new zu("[PRIORITY-POST]",qu))}},{key:"makePost",value:function(e,t){var n=Hu(e);return new Ru(t,new zu("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Nu),Ju=new Yu,Qu=Math.log(2),Xu=function(){"use strict";function t(n){e(E)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/Qu,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(S)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),$u=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new Du(o,a.node,Du.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new Du(o,a.node,Du.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],h=n?n(l):l;u(new Du(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Du.BLACK):(s(h,Du.BLACK),s(h,Du.RED))}return a}(new Xu(e.length));return new Fu(r||t,a)},Zu={},ec=function(){"use strict";function t(n,r){e(E)(this,t),this.indexes_=n,this.indexSet_=r}return e(S)(t,[{key:"get",value:function(e){var t=Le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Fu?t:null}},{key:"hasIndex",value:function(e){return De(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){re(e!==Ou,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(Ru.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?$u(i,e.getCompare()):Zu;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(Fe(this.indexes_,(function(t,i){var a=Le(r.indexSet_,i);if(re(a,"Missing index implementation for "+i),t===Zu){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(Ru.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),$u(o,a.getCompare())}return Zu}var c=n.get(e.name),l=t;return c&&(l=l.remove(new Ru(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(Fe(this.indexes_,(function(t){if(t===Zu)return t;var r=n.get(e.name);return r?t.remove(new Ru(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return re(Zu&&Ju,"ChildrenNode.ts has not been loaded"),Ku=Ku||new t({".priority":Zu},{".priority":Ju})}}]),t}(),tc=function(){"use strict";function t(n,r,i){e(E)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Vu(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(S)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||Gu}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Gu:t}},{key:"getChild",value:function(e){var t=hu(e);return null===t?this:this.getImmediateChild(t).getChild(fu(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(re(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new Ru(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?Gu:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=hu(e);if(null===n)return t;re(".priority"!==hu(e)||1===du(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(fu(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(Ju,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Bu(this.getPriority().val())+":"),this.forEachChild(Ju,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":ps(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Ru(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Ru(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Ru(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Ru.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Ru.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nc?-1:0}},{key:"withIndex",value:function(e){if(e===Ou||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Ou||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Ju),r=t.getIterator(Ju),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Ou?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return Gu||(Gu=new t(new Fu(ju),null,ec.Default))}}]),t}();tc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var nc=new(function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){return e(E)(this,r),n.call(this,new Fu(ju),tc.EMPTY_NODE,ec.Default)}return e(S)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return tc.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(tc));Object.defineProperties(Ru,{MIN:{value:new Ru(Cs,tc.EMPTY_NODE)},MAX:{value:new Ru(xs,nc)}}),Pu.__EMPTY_NODE=tc.EMPTY_NODE,zu.__childrenNodeConstructor=tc,Lu=nc,function(e){qu=e}(nc);function rc(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return tc.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),re(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(ns)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new zu(r,rc(n))}if(t instanceof Array){var i=tc.EMPTY_NODE;return Os(t,(function(e,n){if(De(t,e)&&"."!==e.substring(0,1)){var r=rc(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(rc(n))}var a=[],o=!1,s=t;if(Os(s,(function(e,t){if("."!==e.substring(0,1)){var n=rc(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new Ru(e,n)))}})),0===a.length)return tc.EMPTY_NODE;var u=$u(a,Uu,(function(e){return e.name}),ju);if(o){var c=$u(a,Ju.getCompare());return new tc(u,rc(n),new ec({".priority":c},{".priority":Ju}))}return new tc(u,rc(n),ec.Default)}!function(e){Hu=e}(rc);
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
var ic=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this)).indexPath_=t,re(!gu(t)&&".priority"!==hu(t),"Can't create PathIndex with empty path or .priority key"),i}return e(S)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Es(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=rc(e),r=tc.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ru(t,r)}},{key:"maxPost",value:function(){var e=tc.EMPTY_NODE.updateChild(this.indexPath_,nc);return new Ru(xs,e)}},{key:"toString",value:function(){return vu(this.indexPath_,0).join("/")}}]),r}(Nu),ac=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return e(S)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?Es(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Ru.MIN}},{key:"maxPost",value:function(){return Ru.MAX}},{key:"makePost",value:function(e,t){var n=rc(e);return new Ru(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Nu),oc=new ac;
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
function sc(e){return{type:"value",snapshotNode:e}}function uc(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function cc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function lc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
var hc=function(){"use strict";function t(){e(E)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ju}return e(S)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cs}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xs}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===Ju}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
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
 */function dc(e){var t,n={};if(e.isDefault())return n;if(e.index_===Ju?t="$priority":e.index_===oc?t="$value":e.index_===Ou?t="$key":(re(e.index_ instanceof ic,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=Pe(t),e.startSet_){var r=e.startAfterSet_?"startAfter":"startAt";n[r]=Pe(e.indexStartValue_),e.startNameSet_&&(n[r]+=","+Pe(e.indexStartName_))}if(e.endSet_){var i=e.endBeforeSet_?"endBefore":"endAt";n[i]=Pe(e.indexEndValue_),e.endNameSet_&&(n[i]+=","+Pe(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function fc(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ju&&(t.i=e.index_.toString()),t}
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
 */var pc=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i,a,o){var s;return e(E)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=a,s.appCheckTokenProvider_=o,s.log_=ks("p:rest:"),s.listens_={},s}return e(S)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=dc(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),Le(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=dc(e._queryParams),r=e._path.toString(),i=new _e;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(N)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+We(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=Ne(h.responseText)}catch(e){Is("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&Is("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(ou),vc=function(){"use strict";function t(){e(E)(this,t),this.rootNode_=tc.EMPTY_NODE}return e(S)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
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
function mc(){return{value:null,children:new Map}}function yc(e,t,n){if(gu(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=hu(t);e.children.has(r)||e.children.set(r,mc()),yc(e.children.get(r),t=fu(t),n)}}function gc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
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
 */(e,(function(e,r){gc(r,new cu(t.toString()+"/"+e),n)}))}var _c,kc,bc=function(){"use strict";function t(n){e(E)(this,t),this.collection_=n,this.last_=null}return e(S)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Os(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),wc=function(){"use strict";function t(n,r){e(E)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new bc(n);var i=1e4+2e4*Math.random();Fs(this.reportStats_.bind(this),Math.floor(i))}return e(S)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;Os(t,(function(t,i){i>0&&De(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Fs(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
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
 */function Ic(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(kc=_c||(_c={}))[kc.OVERWRITE=0]="OVERWRITE",kc[kc.MERGE=1]="MERGE",kc[kc.ACK_USER_WRITE=2]="ACK_USER_WRITE",kc[kc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Tc,Cc=function(){"use strict";function t(n,r,i){e(E)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=_c.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(S)(t,[{key:"operationForChild",value:function(e){if(gu(this.path)){if(null!=this.affectedTree.value)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new cu(e));return new t(lu(),n,this.revert)}return re(hu(this.path)===e,"operationForChild called for unrelated child."),new t(fu(this.path),this.affectedTree,this.revert)}}]),t}(),xc=function(){"use strict";function t(n,r,i){e(E)(this,t),this.source=n,this.path=r,this.snap=i,this.type=_c.OVERWRITE}return e(S)(t,[{key:"operationForChild",value:function(e){return gu(this.path)?new t(this.source,lu(),this.snap.getImmediateChild(e)):new t(this.source,fu(this.path),this.snap)}}]),t}(),Ec=function(){"use strict";function t(n,r,i){e(E)(this,t),this.source=n,this.path=r,this.children=i,this.type=_c.MERGE}return e(S)(t,[{key:"operationForChild",value:function(e){if(gu(this.path)){var n=this.children.subtree(new cu(e));return n.isEmpty()?null:n.value?new xc(this.source,lu(),n.value):new t(this.source,lu(),n)}return re(hu(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,fu(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),Sc=function(){"use strict";function t(n,r,i){e(E)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(S)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(gu(e))return this.isFullyInitialized()&&!this.filtered_;var t=hu(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}();
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
 */function Rc(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw ie("Should only compare child_ events.");var r=new Ru(t.childName,t.snapshotNode),i=new Ru(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Nc(e,t){return{eventCache:e,serverCache:t}}function Pc(e,t,n,r){return Nc(new Sc(t,n,r),e.serverCache)}function Oc(e,t,n,r){return Nc(e.eventCache,new Sc(t,n,r))}function Ac(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Dc(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */var Lc=function(){return Tc||(Tc=new Fu(Ss)),Tc},Mc=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Lc();e(E)(this,t),this.value=n,this.children=r}return e(S)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:lu(),value:this.value};if(gu(e))return null;var n=hu(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(fu(e),t);return null!=i?{path:yu(new cu(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(gu(e))return this;var n=hu(e),r=this.children.get(n);return null!==r?r.subtree(fu(e)):new t(null)}},{key:"set",value:function(e,n){if(gu(e))return new t(n,this.children);var r=hu(e),i=(this.children.get(r)||new t(null)).set(fu(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(gu(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=hu(e),r=this.children.get(n);if(r){var i,a=r.remove(fu(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(gu(e))return this.value;var t=hu(e),n=this.children.get(t);return n?n.get(fu(e)):null}},{key:"setTree",value:function(e,n){if(gu(e))return n;var r,i=hu(e),a=(this.children.get(i)||new t(null)).setTree(fu(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(lu(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(yu(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,lu(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(gu(e))return null;var i=hu(e),a=this.children.get(i);return a?a.findOnPath_(fu(e),yu(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,lu(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(gu(e))return this;this.value&&r(n,this.value);var i=hu(e),a=this.children.get(i);return a?a.foreachOnPath_(fu(e),yu(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(lu(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(yu(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return Os(e,(function(e,t){n=n.set(new cu(e),t)})),n}}]),t}(),Fc=function(){"use strict";function t(n){e(E)(this,t),this.writeTree_=n}return e(S)(t,null,[{key:"empty",value:function(){return new t(new Mc(null))}}]),t}();function Uc(e,t,n){if(gu(t))return new Fc(new Mc(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=_u(i,t);return a=a.updateChild(o,n),new Fc(e.writeTree_.set(i,a))}var s=new Mc(n),u=e.writeTree_.setTree(t,s);return new Fc(u)}function jc(e,t,n){var r=e;return Os(n,(function(e,n){r=Uc(r,yu(t,e),n)})),r}function Wc(e,t){if(gu(t))return Fc.empty();var n=e.writeTree_.setTree(t,new Mc(null));return new Fc(n)}function Hc(e,t){return null!=qc(e,t)}function qc(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(_u(n.path,t)):null}function Bc(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ju,(function(e,n){t.push(new Ru(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Ru(e,n.value))})),t}function Vc(e,t){if(gu(t))return e;var n=qc(e,t);return new Fc(null!=n?new Mc(n):e.writeTree_.subtree(t))}function zc(e){return e.writeTree_.isEmpty()}function Kc(e,t){return Gc(lu(),e.writeTree_,t)}function Gc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(re(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Gc(yu(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(yu(e,".priority"),r)),n}
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
 */function Yc(e,t){return ul(t,e)}function Jc(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Qc(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));re(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&Xc(s,r.path)?i=!1:bu(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=Zc(e.allWrites,$c,lu()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=Wc(e.visibleWrites,r.path):Os(r.children,(function(t){e.visibleWrites=Wc(e.visibleWrites,yu(r.path,t))}));return!0}return!1}function Xc(e,t){if(e.snap)return bu(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&bu(yu(e.path,n),t))return!0;return!1}function $c(e){return e.visible}function Zc(e,t,n){for(var r=Fc.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)bu(n,o)?r=Uc(r,s=_u(n,o),a.snap):bu(o,n)&&(s=_u(o,n),r=Uc(r,lu(),a.snap.getChild(s)));else{if(!a.children)throw ie("WriteRecord should have .snap or .children");if(bu(n,o))r=jc(r,s=_u(n,o),a.children);else if(bu(o,n))if(gu(s=_u(o,n)))r=jc(r,lu(),a.children);else{var u=Le(a.children,hu(s));if(u){var c=u.getChild(fu(s));r=Uc(r,lu(),c)}}}}}return r}function el(e,t,n,r,i){if(r||i){var a=Vc(e.visibleWrites,t);if(!i&&zc(a))return n;if(i||null!=n||Hc(a,lu())){return Kc(Zc(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(bu(e.path,t)||bu(t,e.path))}),t),n||tc.EMPTY_NODE)}return null}var o=qc(e.visibleWrites,t);if(null!=o)return o;var s=Vc(e.visibleWrites,t);return zc(s)?n:null!=n||Hc(s,lu())?Kc(s,n||tc.EMPTY_NODE):null}function tl(e,t,n,r){return el(e.writeTree,e.treePath,t,n,r)}function nl(e,t){return function(e,t,n){var r=tc.EMPTY_NODE,i=qc(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ju,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=Vc(e.visibleWrites,t);return n.forEachChild(Ju,(function(e,t){var n=Kc(Vc(a,new cu(e)),t);r=r.updateImmediateChild(e,n)})),Bc(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return Bc(Vc(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function rl(e,t,n,r){return function(e,t,n,r,i){re(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=yu(t,n);if(Hc(e.visibleWrites,a))return null;var o=Vc(e.visibleWrites,a);return zc(o)?i.getChild(n):Kc(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function il(e,t){return function(e,t){return qc(e.visibleWrites,t)}(e.writeTree,yu(e.treePath,t))}function al(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=Vc(e.visibleWrites,t),c=qc(u,lu());if(null!=c)s=c;else{if(null==n)return[];s=Kc(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),d=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),f=d.getNext();f&&l.length<i;)0!==h(f,r)&&l.push(f),f=d.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function ol(e,t,n){return function(e,t,n,r){var i=yu(t,n),a=qc(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?Kc(Vc(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function sl(e,t){return ul(yu(e.treePath,t),e.writeTree)}function ul(e,t){return{treePath:e,writeTree:t}}
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
 */var cl=function(){"use strict";function t(){e(E)(this,t),this.changeMap=new Map}return e(S)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;re("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),re(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,lc(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,cc(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,uc(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw ie("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,lc(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),ll=new(function(){"use strict";function t(){e(E)(this,t)}return e(S)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),hl=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(E)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(S)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Sc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ol(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Dc(this.viewCache_),i=al(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
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
 */function dl(e,t,n,r,i){var a,o,s=new cl;if(n.type===_c.OVERWRITE){var u=n;u.source.fromUser?a=vl(e,t,u.path,u.snap,r,i,s):(re(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!gu(u.path),a=pl(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===_c.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=yu(n,r);ml(t,hu(c))&&(s=vl(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=yu(n,r);ml(t,hu(c))||(s=vl(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(re(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=gl(e,t,c.path,c.children,r,i,o,s))}else if(n.type===_c.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=il(r,n))return t;var s,u=new hl(r,t,i),c=t.eventCache.getNode();if(gu(n)||".priority"===hu(n)){var l;if(t.serverCache.isFullyInitialized())l=tl(r,Dc(t));else{var h=t.serverCache.getNode();re(h instanceof tc,"serverChildren would be complete if leaf node"),l=nl(r,h)}s=e.filter.updateFullNode(c,l,a)}else{var d=hu(n),f=ol(r,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),(s=null!=f?e.filter.updateChild(c,d,f,fu(n),u,a):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(c,d,tc.EMPTY_NODE,fu(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=tl(r,Dc(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=il(r,lu()),Pc(t,s,o,e.filter.filtersNodes())}
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=il(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(gu(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return pl(e,t,n,u.getNode().getChild(n),i,a,s,o);if(gu(n)){var c=new Mc(null);return u.getNode().forEachChild(Ou,(function(e,t){c=c.set(new cu(e),t)})),gl(e,t,n,c,i,a,s,o)}return t}var l=new Mc(null);return r.foreach((function(e,t){var r=yu(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),gl(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==_c.LISTEN_COMPLETE)throw ie("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=Oc(t,a.getNode(),a.isFullyInitialized()||gu(n),a.isFiltered());return fl(e,o,n,r,ll,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Ac(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(sc(Ac(t)))}}(t,a,h),{viewCache:a,changes:h}}function fl(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=il(r,n))return t;if(gu(n))if(re(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Dc(t),l=nl(r,c instanceof tc?c:tc.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var h=tl(r,Dc(t));o=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var d=hu(n);if(".priority"===d){re(1===du(n),"Can't have a priority with additional path components");var f=u.getNode(),p=rl(r,n,f,s=t.serverCache.getNode());o=null!=p?e.filter.updatePriority(f,p):u.getNode()}else{var v,m=fu(n);if(u.isCompleteForChild(d)){s=t.serverCache.getNode();var y=rl(r,n,u.getNode(),s);v=null!=y?u.getNode().getImmediateChild(d).updateChild(m,y):u.getNode().getImmediateChild(d)}else v=ol(r,d,t.serverCache);o=null!=v?e.filter.updateChild(u.getNode(),d,v,m,i,a):u.getNode()}}return Pc(t,o,u.isFullyInitialized()||gu(n),e.filter.filtersNodes())}function pl(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(gu(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var d=hu(n);if(!c.isCompleteForPath(n)&&du(n)>1)return t;var f=fu(n),p=c.getNode().getImmediateChild(d).updateChild(f,r);u=".priority"===d?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),d,p,f,ll,null)}var v=Oc(t,u,c.isFullyInitialized()||gu(n),l.filtersNodes());return fl(e,v,n,i,new hl(i,v,a),s)}function vl(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new hl(i,t,a);if(gu(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=Pc(t,u,!0,e.filter.filtersNodes());else{var h=hu(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Pc(t,u,c.isFullyInitialized(),c.isFiltered());else{var d,f=fu(n),p=c.getNode().getImmediateChild(h);if(gu(f))d=r;else{var v=l.getCompleteChild(h);d=null!=v?".priority"===pu(f)&&v.getChild(mu(f)).isEmpty()?v:v.updateChild(f,r):tc.EMPTY_NODE}if(p.equals(d))s=t;else s=Pc(t,e.filter.updateChild(c.getNode(),h,d,f,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function ml(e,t){return e.eventCache.isCompleteForChild(t)}function yl(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function gl(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=gu(n)?r:new Mc(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=yl(0,t.serverCache.getNode().getImmediateChild(n),r);c=pl(e,c,new cu(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=yl(0,t.serverCache.getNode().getImmediateChild(n),r);c=pl(e,c,new cu(n),h,i,a,o,s)}})),c}var _l;function kl(e,t){var n=Dc(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!gu(t)&&!n.getImmediateChild(hu(t)).isEmpty())?n.getChild(t):null}function bl(e,t,n,r){t.type===_c.MERGE&&null!==t.source.queryId&&(re(Dc(e.viewCache_),"We should always have a full cache before handling merges"),re(Ac(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=dl(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,re(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),re(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),re(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,wl(e,s.changes,s.viewCache.eventCache.getNode(),null)}function wl(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Rc(e,i,"child_removed",t,r,n),Rc(e,i,"child_added",t,r,n),Rc(e,i,"child_moved",a,r,n),Rc(e,i,"child_changed",t,r,n),Rc(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */var Il;function Tl(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return re(null!=a,"SyncTree gave us an op for an invalid query."),bl(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;o=o.concat(bl(d,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return o}function Cl(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||kl(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}var xl=function t(n){"use strict";e(E)(this,t),this.listenProvider_=n,this.syncPointTree_=new Mc(null),this.pendingWriteTree_={visibleWrites:Fc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function El(e,t,n,r,i){return function(e,t,n,r,i){re(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Uc(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Ol(e,new xc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Sl(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Jc(e.pendingWriteTree_,t),i=Qc(e.pendingWriteTree_,t);if(i){var a=new Mc(null);return null!=r.snap?a=a.set(lu(),!0):Os(r.children,(function(e){a=a.set(new cu(e),!0)})),Ol(e,new Cc(r.path,a,n))}return[]}function Rl(e,t,n){return Ol(e,new xc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Nl(e,t,n,r){var i=Ll(e,r);if(null!=i){var a=Ml(i),o=a.path,s=a.queryId,u=_u(o,t);return Fl(e,o,new xc(Ic(s),u,n))}return[]}function Pl(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=Cl(n,_u(e,t));if(r)return r}));return el(r,t,i,n,!0)}function Ol(e,t){return Al(t,e.syncPointTree_,null,Yc(e.pendingWriteTree_,lu()))}function Al(e,t,n,r){if(gu(e.path))return Dl(e,t,n,r);var i=t.get(lu());null==n&&null!=i&&(n=Cl(i,lu()));var a=[],o=hu(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=sl(r,o);a=a.concat(Al(s,u,c,l))}return i&&(a=a.concat(Tl(i,e,r,n))),a}function Dl(e,t,n,r){var i=t.get(lu());null==n&&null!=i&&(n=Cl(i,lu()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=sl(r,t),u=e.operationForChild(t);u&&(a=a.concat(Dl(u,i,o,s)))})),i&&(a=a.concat(Tl(i,e,r,n))),a}function Ll(e,t){return e.tagToQueryMap.get(t)}function Ml(e){var t=e.indexOf("$");return re(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new cu(e.substr(0,t))}}function Fl(e,t,n){var r=e.syncPointTree_.get(t);return re(r,"Missing sync point for query tag that we're tracking"),Tl(r,n,Yc(e.pendingWriteTree_,t),null)}
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
var Ul=function(){"use strict";function t(n){e(E)(this,t),this.node_=n}return e(S)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),jl=function(){"use strict";function t(n,r){e(E)(this,t),this.syncTree_=n,this.path_=r}return e(S)(t,[{key:"getImmediateChild",value:function(e){var n=yu(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return Pl(this.syncTree_,this.path_)}}]),t}(),Wl=function(e,t,n){return e&&"object"==typeof e?(re(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Hl(e[".sv"],t,n):"object"==typeof e[".sv"]?ql(e[".sv"],t):void re(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Hl=function(e,t,n){if("timestamp"===e)return n.timestamp;re(!1,"Unexpected server value: "+e)},ql=function(e,t,n){e.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&re(!1,"Unexpected increment value: "+r);var i=t.node();if(re(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},Bl=function(e,t,n,r){return zl(t,new jl(n,e),r)},Vl=function(e,t,n){return zl(e,new Ul(t),n)};function zl(e,t,n){var r,i=e.getPriority().val(),a=Wl(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=Wl(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new zu(s,rc(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new zu(a))),u.forEachChild(Ju,(function(e,i){var a=zl(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
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
 */var Kl=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(E)(this,t),this.name=n,this.parent=r,this.node=i};function Gl(e,t){for(var n=t instanceof cu?t:new cu(t),r=e,i=hu(n);null!==i;){var a=Le(r.node.children,i)||{children:{},childCount:0};r=new Kl(i,r,a),i=hu(n=fu(n))}return r}function Yl(e){return e.node.value}function Jl(e,t){e.node.value=t,eh(e)}function Ql(e){return e.node.childCount>0}function Xl(e,t){Os(e.node.children,(function(n,r){t(new Kl(n,e,r))}))}function $l(e,t,n,r){n&&!r&&t(e),Xl(e,(function(e){$l(e,t,!0,r)})),n&&r&&t(e)}function Zl(e){return new cu(null===e.parent?e.name:Zl(e.parent)+"/"+e.name)}function eh(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Yl(e)&&!Ql(e)}(n),i=De(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,eh(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,eh(e))}
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
 */(e.parent,e.name,e)}var th=/[\[\].#$\/\u0000-\u001F\u007F]/,nh=/[\[\].#$\u0000-\u001F\u007F]/,rh=10485760,ih=function(e){return"string"==typeof e&&0!==e.length&&!th.test(e)},ah=function(e){return"string"==typeof e&&0!==e.length&&!nh.test(e)},oh=function(e,t,n){var r=n instanceof cu?new wu(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Tu(r));if("function"==typeof t)throw new Error(e+"contains a function "+Tu(r)+" with contents = "+t.toString());if(Ts(t))throw new Error(e+"contains "+t.toString()+" "+Tu(r));if("string"==typeof t&&t.length>3495253.3333333335&&Ye(t)>rh)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Tu(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(Os(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!ih(t)))throw new Error(e+" contains an invalid key ("+t+") "+Tu(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=Ye(s),Iu(o),oh(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Ye(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+Tu(r)+" in addition to actual children.")}},sh=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ih(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ah(e)}(n))throw new Error(Ke(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},uh=function t(){"use strict";e(E)(this,t),this.eventLists_=[],this.recursionDepth_=0};function ch(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||ku(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function lh(e,t,n){ch(e,n),hh(e,(function(e){return bu(e,t)||bu(t,e)}))}function hh(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(dh(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function dh(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();ms&&_s("event: "+n.toString()),Ms(r)}}}
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
 */var fh="repo_interrupt",ph=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mc(),this.transactionQueueTree_=new Kl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(S)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function vh(e,t,n){if(e.stats_=Qs(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new pc(e.repoInfo_,(function(t,n,r,i){gh(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return _h(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Eu(e.repoInfo_,t,(function(t,n,r,i){gh(e,t,n,r,i)}),(function(t){_h(e,t)}),(function(t){!function(e,t){Os(t,(function(t,n){kh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new wc(e.stats_,e.server_)},a=r.toString(),Js[a]||(Js[a]=i()),Js[a]),e.infoData_=new vc,e.infoSyncTree_=new xl({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=Rl(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),kh(e,"connected",!1),e.serverSyncTree_=new xl({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);lh(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function mh(e){var t=e.infoData_.getNode(new cu(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function yh(e){return(t=(t={timestamp:mh(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function gh(e,t,n,r,i){e.dataUpdateCount++;var a=new cu(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=Fe(n,(function(e){return rc(e)}));o=function(e,t,n,r){var i=Ll(e,r);if(i){var a=Ml(i),o=a.path,s=a.queryId,u=_u(o,t),c=Mc.fromObject(n);return Fl(e,o,new Ec(Ic(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=rc(n);o=Nl(e.serverSyncTree_,a,u,i)}else if(r){var c=Fe(n,(function(e){return rc(e)}));o=function(e,t,n){var r=Mc.fromObject(n);return Ol(e,new Ec({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=rc(n);o=Rl(e.serverSyncTree_,a,l)}var h=a;o.length>0&&(h=Eh(e,a)),lh(e.eventQueue_,h,o)}function _h(e,t){kh(e,"connected",t),!1===t&&function(e){Ih(e,"onDisconnectEvents");var t=yh(e),n=mc();gc(e.onDisconnect_,lu(),(function(r,i){var a=Bl(r,i,e.serverSyncTree_,t);yc(n,r,a)}));var r=[];gc(n,lu(),(function(t,n){r=r.concat(Rl(e.serverSyncTree_,t,n));var i=Oh(e,t);Eh(e,i)})),e.onDisconnect_=mc(),lh(e.eventQueue_,lu(),r)}(e)}function kh(e,t,n){var r=new cu("/.info/"+t),i=rc(n);e.infoData_.updateSnapshot(r,i);var a=Rl(e.infoSyncTree_,r,i);lh(e.eventQueue_,r,a)}function bh(e){return e.nextWriteId_++}function wh(e){e.persistentConnection_&&e.persistentConnection_.interrupt(fh)}function Ih(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),_s.apply(void 0,[a].concat(e(o)(r)))}function Th(e,t,n){return Pl(e.serverSyncTree_,t,n)||tc.EMPTY_NODE}function Ch(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Ph(e,t),Yl(t)){var n=Rh(e,t);re(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&xh(e,Zl(t),n)}else Ql(t)&&Xl(t,(function(t){Ch(e,t)}))}function xh(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=Th(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];re(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=_u(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){Ih(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(Sl(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);Ph(e,Gl(e.transactionQueueTree_,t)),Ch(e,e.transactionQueueTree_),lh(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)Ms(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{Is("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Eh(e,t)}}),o)}function Eh(e,t){var n=Sh(e,t),r=Zl(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=_u(n,u.path),l=!1,h=void 0;if(re(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,a=a.concat(Sl(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",a=a.concat(Sl(e.serverSyncTree_,u.currentWriteId,!0));else{var d=Th(e,u.path,o);u.currentInputSnapshot=d;var f=t[r].update(d.val());if(void 0!==f){oh("transaction failed: Data returned ",f,u.path);var p=rc(f);"object"==typeof f&&null!=f&&De(f,".priority")||(p=p.updatePriority(d.getPriority()));var v=u.currentWriteId,m=yh(e),y=Vl(p,d,m);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=y,u.currentWriteId=bh(e),o.splice(o.indexOf(v),1),a=(a=a.concat(El(e.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally))).concat(Sl(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",a=a.concat(Sl(e.serverSyncTree_,u.currentWriteId,!0))}lh(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Ph(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Ms(i[u]);Ch(e,e.transactionQueueTree_)}(e,Rh(e,n),r),r}function Sh(e,t){var n,r=e.transactionQueueTree_;for(n=hu(t);null!==n&&void 0===Yl(r);)r=Gl(r,n),n=hu(t=fu(t));return r}function Rh(e,t){var n=[];return Nh(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Nh(e,t,n){var r=Yl(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Xl(t,(function(t){Nh(e,t,n)}))}function Ph(e,t){var n=Yl(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Jl(t,n.length>0?n:void 0)}Xl(t,(function(t){Ph(e,t)}))}function Oh(e,t){var n=Zl(Sh(e,t)),r=Gl(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Ah(e,t)})),Ah(e,r),$l(r,(function(t){Ah(e,t)})),n}function Ah(e,t){var n=Yl(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(re(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(re(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Sl(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Jl(t,void 0):n.length=a+1,lh(e.eventQueue_,Zl(t),i);for(var s=0;s<r.length;s++)Ms(r[s])}}
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
 */var Dh,Lh,Mh=function(e,t){var n=Fh(e),r=n.namespace;"firebase.com"===n.domain&&ws(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||ws("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Is("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new zs(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new cu(n.pathString)}},Fh=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var d=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):Is("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),a=r}"ns"in d&&(a=d.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Uh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",jh=(Dh=0,Lh=[],function(){"use strict";function t(n,r,i,a){e(E)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(S)(t,[{key:"key",get:function(){return gu(this._path)?null:pu(this._path)}},{key:"ref",get:function(){return new Wh(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=fc(this._queryParams),t=Ns(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return fc(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Je(e))instanceof t))return!1;var n=this._repo===e._repo,r=ku(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}());var Wh=function(t){"use strict";e(R)(r,t);var n=e(H)(r);function r(t,i){return e(E)(this,r),n.call(this,t,i,new hc,!1)}return e(S)(r,[{key:"parent",get:function(){var e=mu(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(jh);!function(e){re(!_l,"__referenceConstructor has already been defined"),_l=e}(Wh),function(e){re(!Il,"__referenceConstructor has already been defined"),Il=e}(Wh);
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
var Hh={},qh=!1;function Bh(e,t,n,r){e.repoInfo_=new zs("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Vh(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||ws("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_s("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=Mh(a,i),u=s.repoInfo,c=void 0;void 0!==U&&U.env&&(c=U.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Mh(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new Ws(Ws.OWNER):new js(e.name,e.options,t);sh("Invalid Firebase Database URL",s),gu(s.path)||ws("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Hh[t.name];i||(i={},Hh[t.name]=i);var a=i[e.toURLString()];a&&ws("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new ph(e,qh,n,r),i[e.toURLString()]=a,a}(u,e,l,new Us(e.name,n));return new zh(h,e)}var zh=function(){"use strict";function t(n,r){e(E)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(S)(t,[{key:"_repo",get:function(){return this._instanceStarted||(vh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Wh(this._repo,lu())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Hh[t])&&n[e.key]===e||ws("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),wh(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&ws("Cannot call "+e+" on a deleted database.")}}]),t}();function Kh(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=Je(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ws("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,a=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ws('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Ws(Ws.OWNER);else if(r.mockUserToken){var o="string"==typeof r.mockUserToken?r.mockUserToken:ke(r.mockUserToken,e.app.options.projectId);a=new Ws(o)}Bh(i,t,n,a)}Eu.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Eu.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){as=Kt,Ht(new Xe("database",(function(e,t){var n=t.instanceIdentifier;return Vh(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Jt(rs,is,e),Jt(rs,is,"esm2017")}
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
 */();var Gh=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt(),n=arguments.length>1?arguments[1]:void 0,r=qt(t,"database").getImmediate({identifier:n});if(!r._instanceStarted){var i=me("database");i&&Kh.apply(void 0,[r].concat(e(o)(i)))}return r}(app);function Yh(){return(Yh=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"login"===c.default.authSubmitBtn.dataset.login)try{Jo().then((function(e){return console.log(e.json)}))}catch(e){console.log(e.message)}if("signup"!==c.default.authSubmitBtn.dataset.login){e.next=11;break}e.prev=3,Xo(),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(3),console.log("user already registered"),e.abrupt("return");case 11:Zo().then(console.log("--------------\x3e logged")).catch((function(e){return console.log("--------------\x3e no login")}));case 12:case"end":return e.stop()}}),t,null,[[3,7]])})))).apply(this,arguments)}console.log(Gh),c.default.authForm.addEventListener("submit",(function(e){return Yh.apply(this,arguments)})),i("5nHy8"),i("cs7FV"),i("bTwnY"),i("xpKCW");c=i("4Nugj");var Jh=[{name:"name",image:""},{name:"name",image:""},{name:"name",image:""},{name:"name",image:""},{name:"name",image:""},{name:"name",image:""},{name:"name",image:""},{name:"name",image:""},{name:"name",image:""},{name:"name",image:""}];c.default.pixelJsCakeBtn.addEventListener("click",(function(){c.default.footerProfilesEl.classList.toggle("is-hidden")})),c.default.footerProfilesEl.innerHTML=Jh.map((function(e){return'<li class="profile-card"><span class="profile-icon"></span></li>'})).join("");ns=i("l5bVx");var Qh,Xh="Expected a function",$h=/^\s+|\s+$/g,Zh=/^[-+]0x[0-9a-f]+$/i,ed=/^0b[01]+$/i,td=/^0o[0-7]+$/i,nd=parseInt,rd="object"==typeof t&&t&&t.Object===Object&&t,id="object"==typeof self&&self&&self.Object===Object&&self,ad=rd||id||Function("return this")(),od=Object.prototype.toString,sd=Math.max,ud=Math.min,cd=function(){return ad.Date.now()};function ld(e,t,n){var r,i,a,o,s,u,c=0,l=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError(Xh);function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function p(e){return c=e,s=setTimeout(m,t),l?f(e):o}function v(e){var n=e-u;return void 0===u||n>=t||n<0||h&&e-c>=a}function m(){var e=cd();if(v(e))return y(e);s=setTimeout(m,function(e){var n=t-(e-u);return h?ud(n,a-(e-c)):n}(e))}function y(e){return s=void 0,d&&r?f(e):(r=i=void 0,o)}function g(){var e=cd(),n=v(e);if(r=arguments,i=this,u=e,n){if(void 0===s)return p(u);if(h)return s=setTimeout(m,t),f(u)}return void 0===s&&(s=setTimeout(m,t)),o}return t=dd(t)||0,hd(n)&&(l=!!n.leading,a=(h="maxWait"in n)?sd(dd(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=u=i=s=void 0},g.flush=function(){return void 0===s?o:y(cd())},g}function hd(t){var n=void 0===t?"undefined":e(ns)(t);return!!t&&("object"==n||"function"==n)}function dd(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(ns)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==od.call(t)}(t))return NaN;if(hd(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=hd(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace($h,"");var r=ed.test(t);return r||td.test(t)?nd(t.slice(2),r?2:8):Zh.test(t)?NaN:+t}Qh=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(Xh);return hd(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ld(e,t,{leading:r,maxWait:t,trailing:i})};var fd=document.querySelector(".scroll-up");fd.addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",e(Qh)((function(e){(window.scrollY||document.documentElement.scrollTop)>3e3?fd.classList.remove("is-hidden"):fd.classList.add("is-hidden")}),1e3));a=i("bpxeT"),s=i("2TvXO"),c=i("4Nugj"),u=i("dIxxU");var pd,vd=[];function md(){return(md=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.default.get("https://books-backend.p.goit.global/books/".concat(n));case 3:yd((r=e.sent).data),gd(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function yd(e){var t='\n    <div class="wrapper-modal-data">\n      <img class="img" src="'.concat(e.book_image,'" alt="').concat(e.title,'" height="256" loading="lazy"/>\n      <div>\n        <p class="book-name modal-name">').concat(e.title,'</p>\n        <p class="book-author modal-author">').concat(e.author,'</p>\n        <div class="description">\n          <p class="book-description">').concat(e.description,'</p>\n        </div>\n        <ul class="link-list">\n          <li><a class="buy-link link" href="').concat(e.buy_links[0].url,'">Amazon</a></li>\n          <li><a class="buy-link link" href="').concat(e.buy_links[1].url,'">Apple Books</a></li>\n          <li><a class="buy-link link" href="').concat(e.buy_links[2].url,'">Barnes and Noble</a></li>\n        </ul>\n      </div>\n    </div>\n    ');c.default.wrapperBookEl.innerHTML=t}function gd(e){var t=e._id,n=e.book_image,r=e.title,i=e.description,a=e.author,o=e.buy_links;pd={_id:t,book_image:n,title:r,description:i,author:a,buy_links:o}}c.default.mainGalleryEl.addEventListener("click",(function(e){var t=e.target.closest(".book-card-wrapper"),n=t.dataset.idbook;if(!t)return;!function(e){JSON.parse(localStorage.getItem("books-data")).filter((function(t){return t._id===e}))||(c.default.buttonAddBookEl.textContent="Add to shopping list");c.default.modal.classList.remove("is-hidden"),function(e){md.apply(this,arguments)}(e)}(n)})),c.default.modalCloseBtn.addEventListener("click",(function(){c.default.wrapperBookEl.innerHTML="",c.default.modal.classList.add("is-hidden")})),localStorage.setItem("books-data",JSON.stringify(vd)),c.default.buttonAddBookEl.addEventListener("click",(function(){c.default.buttonAddBookEl.textContent="REMOVE FROM THE SHOPPING LIST",vd.push(pd)})),i("cxW2Y")}();
//# sourceMappingURL=index.ce6234cc.js.map
