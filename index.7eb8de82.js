!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequired7c6=o),o.register("367HF",(function(t,e){t.exports=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("fT3Hh")})),o.register("3tx0H",(function(t,e){t.exports=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("6yAj5")})),o.register("aKRM2",(function(t,e){t.exports=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9lVRR")})),o.register("fL90f",(function(t,e){t.exports=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("gVIRL")})),o.register("2Jq4B",(function(t,e){t.exports=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9J3Vm")})),o.register("pLbh9",(function(t,e){t.exports=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9tERu")})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.7eb8de82.js","fT3Hh":"amazon@1x.626c9508.png","6yAj5":"amazon@2x.104a65be.png","9lVRR":"appleBooks@1x.652b354e.png","gVIRL":"appleBooks@2x.15632d7d.png","9J3Vm":"booksAMillion@1x.e377c706.png","9tERu":"booksAMillion@2x.62451a44.png","1Vwc0":"shopping-list-page.5fd54769.js"}')),o("4Nugj");var i=o("bpxeT"),s=o("8nrFW"),l=o("2TvXO"),r=(i=o("bpxeT"),l=o("2TvXO"),o("dIxxU")),c=o("4Nugj");function u(t){return t.map((function(t){return t.title.length<17?'<div class="book-card-wrapper" data-idbook="'.concat(t._id,'"><a class="overlay link" href="#">\n            <img src="').concat(t.book_image,'" alt="').concat(t.title,'" height="256" loading="lazy"/> \n            <div class="overlay-field">\n              <p class="overlay-text">QUICK VIEW</p>\n            </div>\n            <p class="book-name">').concat(t.title,'</p>\n            <p class="book-author">').concat(t.author,"</p>\n          </a></div>"):'<div class="book-card-wrapper" data-idbook="'.concat(t._id,'"><a class="overlay link" href="#">\n            <img src="').concat(t.book_image,'" alt="').concat(t.title,'" height="256" loading="lazy"/> \n            <div class="overlay-field">\n              <p class="overlay-text">QUICK VIEW</p>\n            </div>\n            <p class="book-name">').concat(t.title.split("").slice(0,17).join(""),'...</p>\n            <p class="book-author">').concat(t.author,"</p>\n          </a></div>")})).join("")}function d(t,e){c.default.mainGalleryEl.innerHTML="";var n=Math.trunc(e.split(" ").length/2);c.default.mainGalleryTitleEl.innerHTML="".concat(e.split(" ").splice(0,n).join(" "),' \n  <span class="category-title-span">').concat(e.split(" ").splice(n,n).join(" "),"</span>");var a;a=u(t),c.default.mainGalleryEl.classList.add("gal-category"),c.default.mainGalleryEl.insertAdjacentHTML("beforeend",a)}function p(t){c.default.mainGalleryEl.classList.remove("gal-category"),c.default.mainGalleryTitleEl.innerHTML="Best Sellers <span class='category-title-span'>Books</span>",c.default.mainGalleryEl.innerHTML="";var e;e=t.map((function(t){return window.innerWidth>=1440?'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul>\n            <li class="books__list">').concat(u(t.books),'</li>\n          </ul>\n          <button class="button-see-more" type="button" aria-label="button see more" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>'):window.innerWidth>=768?'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul>\n            <li class="books__list">').concat(u(t.books.slice(0,3)),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>'):'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul>\n            <li class="books__list">').concat(u(t.books.slice(0,1)),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>')})).join(""),c.default.mainGalleryEl.insertAdjacentHTML("beforeend",e)}c=o("4Nugj");var f="https://books-backend.p.goit.global/books/";function g(){return h.apply(this,arguments)}function h(){return(h=t(i)(t(l).mark((function e(){return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.default.get("".concat(f,"top-books"));case 3:p(t.sent.data),c.default.spinnerEl.setAttribute("hidden",!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(t){return b.apply(this,arguments)}function b(){return(b=t(i)(t(l).mark((function e(n){var a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c.default.spinnerEl.removeAttribute("hidden"),t.next=4,r.default.get("".concat(f,"category?category=").concat(n));case 4:a=t.sent,console.log(a.data),d(a.data,n),c.default.spinnerEl.setAttribute("hidden",!0),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(){return(v=t(i)(t(l).mark((function e(){return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("".concat(f,"category-list"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}g(),c.default.mainGalleryEl.addEventListener("click",(function(t){t.target.dataset.cat&&m(t.target.dataset.cat)}));c=o("4Nugj");function k(t){return t.map((function(t){var e=t.list_name;return'<li class="category-list-item"><button type="button" class="category" aria-label="button categories book">'.concat(e,"</button></li>")})).join("")}var y,E='<li class="category-list-item"><p class="categories-err">The list of categories is empty</p></li>';function L(t){t.parentNode.classList.add("active"),t.classList.add("category-active")}function x(t){for(var e=0;e<t.length;e++)t[e].classList.contains("active")&&(t[e].classList.remove("active"),t[e].firstChild.classList.remove("category-active"))}function T(){document.body.classList.toggle(".auth-form-open"),c.default.authFormBackdrop.classList.toggle("is-hidden")}function _(t){t.currentTarget===c.default.signUpFormBtn&&(c.default.signUpFormBtn.classList.add("active"),c.default.authSubmitBtn.dataset.login="signup",c.default.loginFormBtn.classList.remove("active"),c.default.nameInput.style.display="block",c.default.nameInput.disabled=!1,c.default.authSubmitBtn.textContent=c.default.signUpFormBtn.textContent),t.currentTarget===c.default.loginFormBtn&&(c.default.loginFormBtn.classList.add("active"),c.default.authSubmitBtn.dataset.login="login",c.default.signUpFormBtn.classList.remove("active"),c.default.nameInput.style.display="none",c.default.nameInput.disabled=!0,c.default.authSubmitBtn.textContent=c.default.loginFormBtn.textContent)}(function(){return v.apply(this,arguments)})().then((y=t(i)(t(l).mark((function e(n){var a,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(a=n.data).length){t.next=4;break}return c.default.categoriesList.innerHTML=E,t.abrupt("return");case 4:o='<li class="category-list-item active"><button type="button" aria-label="button all categories" class="category category-active">All categories</button></li>'+k(a),c.default.categoriesList.innerHTML=o;case 6:case"end":return t.stop()}}),e)}))),function(t){return y.apply(this,arguments)})).catch((function(t){c.default.categoriesList.innerHTML=E})),c.default.categoriesList.addEventListener("click",(function(e){var n=e.target,a=t(s)(e.currentTarget.children);if(n.classList.contains("category")){if("All categories"===n.textContent)return x(a),L(n),void g();c.default.mainGalleryEl.innerHTML="",m(n.textContent)}n.classList.contains("category")&&(x(a),L(n))})),c.default.mainGalleryEl.addEventListener("click",(function(e){var n=e.target.dataset.cat,a=t(s)(c.default.categoriesList.children);if(n)for(var o=0;o<a.length;o++)a[o].firstChild.textContent===n&&(x(a),L(a[o].firstChild))})),o("lgQb1"),(c=o("4Nugj")).default.userLoginBtn.addEventListener("click",T),c.default.authFormCloseBtn.addEventListener("click",T),c.default.signUpFormBtn.addEventListener("click",_),c.default.loginFormBtn.addEventListener("click",_),c.default.authSubmitBtn.dataset.login="signup";i=o("bpxeT"),l=o("2TvXO"),c=o("4Nugj");var w=o("9wf5v"),H=o("lgQb1");w=o("9wf5v");function B(){return(B=t(i)(t(l).mark((function e(n){return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"login"===c.default.authSubmitBtn.dataset.login)try{(0,w.loginAccount)().then((function(){JSON.parse(localStorage.getItem(w.LOCAL_STORAGE_TOKEN))&&((0,H.hideAuthForm)(),c.default.authForm.reset())})).catch((function(t){return console.log(t.message)}))}catch(t){console.log(t.message)}if("signup"!==c.default.authSubmitBtn.dataset.login){t.next=11;break}t.prev=3,(0,w.createAccount)().then((function(){JSON.parse(localStorage.getItem(w.LOCAL_STORAGE_TOKEN))&&((0,H.hideAuthForm)(),c.default.authForm.reset())})).catch((function(t){return console.log(t.message)})),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(3),console.log("user already registered"),t.abrupt("return");case 11:case"end":return t.stop()}}),e,null,[[3,7]])})))).apply(this,arguments)}c.default.authForm.addEventListener("submit",(function(t){return B.apply(this,arguments)})),o("9wf5v"),o("5nHy8"),o("cs7FV"),o("bTwnY"),o("xpKCW"),o("hfTVu");var O,S=o("l5bVx"),A="Expected a function",R=/^\s+|\s+$/g,F=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,N=/^0o[0-7]+$/i,j=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,I="object"==typeof self&&self&&self.Object===Object&&self,V=C||I||Function("return this")(),J=Object.prototype.toString,G=Math.max,U=Math.min,z=function(){return V.Date.now()};function q(t,e,n){var a,o,i,s,l,r,c=0,u=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(A);function f(e){var n=a,i=o;return a=o=void 0,c=e,s=t.apply(i,n)}function g(t){return c=t,l=setTimeout(m,e),u?f(t):s}function h(t){var n=t-r;return void 0===r||n>=e||n<0||d&&t-c>=i}function m(){var t=z();if(h(t))return b(t);l=setTimeout(m,function(t){var n=e-(t-r);return d?U(n,i-(t-c)):n}(t))}function b(t){return l=void 0,p&&a?f(t):(a=o=void 0,s)}function v(){var t=z(),n=h(t);if(a=arguments,o=this,r=t,n){if(void 0===l)return g(r);if(d)return l=setTimeout(m,e),f(r)}return void 0===l&&(l=setTimeout(m,e)),s}return e=W(e)||0,K(n)&&(u=!!n.leading,i=(d="maxWait"in n)?G(W(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,a=r=o=l=void 0},v.flush=function(){return void 0===l?s:b(z())},v}function K(e){var n=void 0===e?"undefined":t(S)(e);return!!e&&("object"==n||"function"==n)}function W(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(S)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==J.call(e)}(e))return NaN;if(K(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=K(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(R,"");var a=M.test(e);return a||N.test(e)?j(e.slice(2),a?2:8):F.test(e)?NaN:+e}O=function(t,e,n){var a=!0,o=!0;if("function"!=typeof t)throw new TypeError(A);return K(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),q(t,e,{leading:a,maxWait:e,trailing:o})};var D=document.querySelector(".scroll-up");D.addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",t(O)((function(t){(window.scrollY||document.documentElement.scrollTop)>3e3?D.classList.remove("is-hidden"):D.classList.add("is-hidden")}),1e3));i=o("bpxeT"),l=o("2TvXO"),c=o("4Nugj"),r=o("dIxxU"),c=o("4Nugj");function P(t){if(t.description){var e='\n  <div class="wrapper-modal-data">\n  <img class="img" src="'.concat(t.book_image,'" alt="').concat(t.title,'" height="256" loading="lazy"/>\n      <div>\n        <p class="modal-name">').concat(t.title,'</p>\n       <p class="modal-author">').concat(t.author,'</p>\n        <div class="description">\n          <p class="book-description">').concat(t.description,'</p>\n        </div>\n                     <ul class="shops-links-list">\n             <li class="shop-item">\n             <a href="').concat(t.buy_links[0].url,'" class="shop-item-link" target=_blank>\n             <img\n             class="shops-item-icon amazon-img"\n             srcset="\n             ').concat(o("367HF")," 48w,\n             ").concat(o("3tx0H"),' 96w,\n             "\n             sizes="48px"\n              src="').concat(o("367HF"),'"\n              width="48" height="15"\n              alt="Amazon"\n              />\n              \n             </a>\n              </li>\n              <li class="shop-item">\n              <a href="').concat(t.buy_links[1].url,'" class="shop-item-link" target=_blank>\n               <img\n             class="shops-item-icon"\n             srcset="\n             ').concat(o("aKRM2")," 28w,\n             ").concat(o("fL90f"),' 56w,\n             "\n             sizes="28px"\n              src="').concat(o("aKRM2"),'"\n              width="28" height="27"\n              alt="Apple Books"\n              />\n             </a>\n              </li>\n              <li class="shop-item">\n              <a href="').concat(t.buy_links[4].url,'" class="shop-item-link" target=_blank>\n               <img\n             class="shops-item-icon"\n             srcset="\n             ').concat(o("2Jq4B")," 32w,\n             ").concat(o("pLbh9"),' 64w,\n             "sizes="32px"\n              src="').concat(o("2Jq4B"),'"\n              width="32" height="30"\n              alt="Bookshop"\n              />\n                </a>\n                  </li>\n                  </ul>\n      </div>\n    </div>\n    ');c.default.wrapperBookEl.innerHTML=e}else{var n='\n  <div class="wrapper-modal-data">\n  <img class="img" src="'.concat(t.book_image,'" alt="').concat(t.title,'" height="256" loading="lazy"/>\n      <div>\n        <p class="modal-name">').concat(t.title,'</p>\n       <p class="modal-author">').concat(t.author,'</p>\n        <div class="description">\n          <p class="book-description">Unfortunately, this book has no description yet.</p>\n        </div>\n                     <ul class="shops-links-list">\n             <li class="shop-item">\n             <a href="').concat(t.buy_links[0].url,'" class="shop-item-link" target=_blank>\n             <img\n             class="shops-item-icon amazon-img"\n             srcset="\n             ').concat(o("367HF")," 48w,\n             ").concat(o("3tx0H"),' 96w,\n             "\n             sizes="48px"\n              src="').concat(o("367HF"),'"\n              width="48" height="15"\n              alt="Amazon"\n              />\n              \n             </a>\n              </li>\n              <li class="shop-item">\n              <a href="').concat(t.buy_links[1].url,'" class="shop-item-link" target=_blank>\n               <img\n             class="shops-item-icon"\n             srcset="\n             ').concat(o("aKRM2")," 28w,\n             ").concat(o("fL90f"),' 56w,\n             "\n             sizes="28px"\n              src="').concat(o("aKRM2"),'"\n              width="28" height="27"\n              alt="Apple Books"\n              />\n             </a>\n              </li>\n              <li class="shop-item">\n              <a href="').concat(t.buy_links[4].url,'" class="shop-item-link" target=_blank>\n               <img\n             class="shops-item-icon"\n             srcset="\n             ').concat(o("2Jq4B")," 32w,\n             ").concat(o("pLbh9"),' 64w,\n             "sizes="32px"\n              src="').concat(o("2Jq4B"),'"\n              width="32" height="30"\n              alt="Bookshop"\n              />\n                </a>\n                  </li>\n                  </ul>\n      </div>\n    </div>\n    ');c.default.wrapperBookEl.innerHTML=n}}var Q=[],X=[],Y=[];function $(){return($=t(i)(t(l).mark((function e(n){var a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.default.get("https://books-backend.p.goit.global/books/".concat(n));case 3:P((a=t.sent).data),Z(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function Z(t){var e={_id:t._id,book_image:t.book_image,title:t.title,list_name:t.list_name,description:t.description,author:t.author,buy_links:t.buy_links};(X=[]).push(e)}function tt(){c.default.buttonAddBookEl.removeEventListener("click",tt),c.default.addedTextEl.innerHTML='<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>',c.default.buttonAddBookEl.textContent="REMOVE FROM THE SHOPPING LIST",Q.push(X[0]),console.log("Кількість книг після додавання = "+Q.length),localStorage.setItem("books-data",JSON.stringify(Q)),nt()}function et(){c.default.buttonAddBookEl.removeEventListener("click",et),c.default.addedTextEl.innerHTML="",c.default.buttonAddBookEl.textContent="ADD TO SHOPPING LIST";var t=Q.findIndex((function(t){return t._id===Y[0]}));Q.splice(t,1),console.log("Кількість книг після видалення = "+Q.length),localStorage.setItem("books-data",JSON.stringify(Q)),nt()}function nt(){c.default.modalCloseBtn.removeEventListener("click",nt),c.default.modal.classList.add("is-hidden")}c.default.mainGalleryEl.addEventListener("click",(function(t){Y=[];var e=t.target.closest(".book-card-wrapper"),n=e.dataset.idbook;if(!e)return;Y.push(n),function(t){c.default.wrapperBookEl.innerHTML="",c.default.modalCloseBtn.addEventListener("click",nt),c.default.modal.classList.remove("is-hidden"),function(t){$.apply(this,arguments)}(t),Q.some((function(e){return e._id===t}))?(c.default.addedTextEl.innerHTML='<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>',c.default.buttonAddBookEl.textContent="REMOVE FROM THE SHOPPING LIST",c.default.buttonAddBookEl.addEventListener("click",et)):(c.default.buttonAddBookEl.textContent="ADD TO SHOPPING LIST",c.default.addedTextEl.innerHTML="",c.default.buttonAddBookEl.addEventListener("click",tt))}(n)})),localStorage.getItem("books-data")&&(Q=JSON.parse(localStorage.getItem("books-data")))}();
//# sourceMappingURL=index.7eb8de82.js.map
