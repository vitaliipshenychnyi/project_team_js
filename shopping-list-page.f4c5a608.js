function n(n,e,s,t){Object.defineProperty(n,e,{get:s,set:t,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},t={},i=e.parcelRequired7c6;null==i&&((i=function(n){if(n in s)return s[n].exports;if(n in t){var e=t[n];delete t[n];var i={id:n,exports:{}};return s[n]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){t[n]=e},e.parcelRequired7c6=i),i.register("kyEFX",(function(e,s){var t,i;n(e.exports,"register",(function(){return t}),(function(n){return t=n})),n(e.exports,"resolve",(function(){return i}),(function(n){return i=n}));var o={};t=function(n){for(var e=Object.keys(n),s=0;s<e.length;s++)o[e[s]]=n[e[s]]},i=function(n){var e=o[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i.register("5UGx0",(function(n,e){n.exports=new URL(i("kyEFX").resolve("15crv"),import.meta.url).toString()})),i.register("3DT0U",(function(n,e){n.exports=new URL(i("kyEFX").resolve("lOmPY"),import.meta.url).toString()})),i.register("lX0mA",(function(n,e){n.exports=new URL(i("kyEFX").resolve("i1sCD"),import.meta.url).toString()})),i.register("84bGB",(function(n,e){n.exports=new URL(i("kyEFX").resolve("1zCxK"),import.meta.url).toString()})),i.register("eq691",(function(n,e){n.exports=new URL(i("kyEFX").resolve("eiJlh"),import.meta.url).toString()})),i.register("4lLGQ",(function(n,e){n.exports=new URL(i("kyEFX").resolve("f90An"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"3bDNW":"shopping-list-page.f4c5a608.js","15crv":"amazon@1x.626c9508.png","lOmPY":"amazon@2x.104a65be.png","i1sCD":"appleBooks@1x.652b354e.png","1zCxK":"appleBooks@2x.15632d7d.png","eiJlh":"booksAMillion@1x.e377c706.png","f90An":"booksAMillion@2x.62451a44.png","4jukI":"shopping-list-page.bf9b7413.js"}')),i("krGWQ"),i("8FnLx"),i("6ZtAl"),i("dTazW");const o=document.querySelector(".shopping-list-js"),l=document.querySelector(".empty-list-js");let a=localStorage.getItem("books-data");try{a=JSON.parse(a)}catch(n){console.log(n)}function r(n){if(Array.isArray(n)){const e=function(n){if(n&&0!==n.length)return l.classList.add("visually-hidden"),o.classList.remove("visually-hidden"),n.map((n=>""!==n.description?`<li class="shopping-list-item" data-id=${n._id}>\n\n            <button type="button" data-action='delete' value="remove" class="shopping-button shopping-button-js" aria-label="button close">\n            <svg class="shopping-button-icon" data-action='delete' width="22" height="22" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>\n            <use href=""></use>\n            </svg>\n              </button>\n              <img class="shopping-img" src="${n.book_image}" alt="book">\n              <div class="book-info">\n              <h2 class="shopping-book-title">${n.title}</h2>\n              <p class="book-genre">${n.list_name}</p>\n             <p class="book-description">${n.description}</p>\n             <div class="shopping-box">\n             <p class="shopping-book-author">${n.author}</p>\n             <ul class="shops-links-list">\n             <li class="shop-item">\n             <a href="${n.buy_links[0].url}" class="shop-item-link" target=_blank>\n             <img\n             class="shops-item-icon amazon-img"\n             srcset="\n             ${i("5UGx0")} 48w,\n             ${i("3DT0U")} 96w,\n             "\n             sizes="48px"\n              src="${i("5UGx0")}"\n              width="48" height="15"\n              alt="Amazon"\n              />\n\n             </a>\n              </li>\n              <li class="shop-item">\n              <a href="${n.buy_links[1].url}" class="shop-item-link" target=_blank>\n               <img\n             class="shops-item-icon apple-img"\n             srcset="\n             ${i("lX0mA")} 28w,\n             ${i("84bGB")} 56w,\n             "\n             sizes="28px"\n              src="${i("lX0mA")}"\n              width="28" height="27"\n              alt="Apple Books"\n              />\n             </a>\n              </li>\n              <li class="shop-item">\n              <a href="${n.buy_links[4].url}" class="shop-item-link" target=_blank>\n               <img\n             class="shops-item-icon bookshop-img"\n             srcset="\n             ${i("eq691")} 32w,\n             ${i("4lLGQ")} 64w,\n             "\n\n             sizes="32px"\n              src="${i("eq691")}"\n              width="32" height="30"\n              alt="Bookshop"\n              />\n                </a>\n                  </li>\n                  </ul>\n                  </div>\n                  </div>\n                  </li>`:`<li class="shopping-list-item" data-id=${n._id}>\n\n            <button type="button" data-action='delete' value="remove" class="shopping-button shopping-button-js" aria-label="button close">\n            <svg class="shopping-button-icon" data-action='delete' width="22" height="22" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>\n            <use href=""></use>\n            </svg>\n              </button>\n              <img class="shopping-img" src="${n.book_image}" alt="book">\n              <div class="book-info">\n              <h2 class="shopping-book-title">${n.title}</h2>\n              <p class="book-genre">${n.list_name}</p>\n             <p class="book-description">Unfortunately, this book has no description yet.</p>\n             <div class="shopping-box">\n             <p class="shopping-book-author">${n.author}</p>\n             <ul class="shops-links-list">\n             <li class="shop-item">\n            <a href="${n.buy_links[0].url}" class="shop-item-link" target=_blank>\n             <img\n             class="shops-item-icon amazon-img"\n             srcset="\n             ${i("5UGx0")} 48w,\n             ${i("3DT0U")} 96w,\n             "\n             sizes="48px"\n              src="${i("5UGx0")}"\n              width="48" height="15"\n              alt="Amazon"\n              />\n                           </a>\n              </li>\n              <li class="shop-item">\n              <a href="${n.buy_links[1].url}" class="shop-item-link" target=_blank>\n               <img\n             class="shops-item-icon apple-img"\n             srcset="\n             ${i("lX0mA")} 28w,\n             ${i("84bGB")} 56w,\n             "\n             sizes="28px"\n              src="${i("lX0mA")}"\n              width="28" height="27"\n              alt="Apple Books"\n              />\n             </a>\n              </li>\n              <li class="shop-item">\n              <a href="${n.buy_links[4].url}" class="shop-item-link" target=_blank>\n               <img\n             class="shops-item-icon bookshop-img"\n             srcset="\n             ${i("eq691")} 32w,\n             ${i("4lLGQ")} 64w,\n             "\n             sizes="32px"\n              src="${i("eq691")}"\n              width="32" height="30"\n              alt="Bookshop"\n              />\n               </a>\n                  </li>\n                  </ul>\n                  </div>\n                  </div>\n                  </li>`)).join("");o.classList.add("visually-hidden")}(n);o.insertAdjacentHTML("beforeend",e),o.addEventListener("click",p)}else o.classList.add("visually-hidden"),l.classList.remove("visually-hidden")}function p(n){if("delete"!==n.target.dataset.action)return;const e=n.target.closest(".shopping-list-item").dataset.id;a=a.filter((n=>n._id!==e)),localStorage.setItem("books-data",JSON.stringify(a)),a&&0!==a.length||l.classList.remove("visually-hidden"),a.length>0&&l.classList.add("visually-hidden"),o.innerHTML="",r(a)}r(a),i("0PZIt"),i("l74Nr"),i("99iWG"),i("b4zTx"),i("eVVaU");
//# sourceMappingURL=shopping-list-page.f4c5a608.js.map