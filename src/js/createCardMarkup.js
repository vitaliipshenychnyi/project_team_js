// function createCardMarkup(dataBooks) {
//   if (!dataBooks || dataBooks.length === 0) {
//     shoppingList.classList.add('visually-hidden');
//   } else {
//     emptyList.classList.add('visually-hidden');
//     shoppingList.classList.remove('visually-hidden');

//     return dataBooks
//       .map(book => {
//         if (book.description !== '') {
//           return `<li class="shopping-list-item" data-id=${book._id}>
            
//             <button type="button" data-action='delete' value="remove" class="shopping-button shopping-button-js">
//             <svg class="shopping-button-icon" data-action='delete' width="22" height="22" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
//             <use href=""></use>
//             </svg>
//               </button>
//               <img class="shopping-img" src="${book.book_image}" alt="book">
//               <div class="book-info">
//               <h2 class="shopping-book-title">${book.title}</h2>
//               <p class="book-genre">${book.list_name}</p> 
//              <p class="book-description">${book.description}</p>
//              <div class="shopping-box">
//              <p class="shopping-book-author">${book.author}</p>
//              <ul class="shops-links-list">
//              <li class="shop-item">
//              <a href="${
//                book.buy_links[0].url
//              }" class="shop-item-link" target=_blank>
//              <img
//              class="shops-item-icon amazon-img"
//              srcset="
//              ${require('/src/img/amazon@1x.png')} 48w,
//              ${require('/src/img/amazon@2x.png')} 96w,
//              "
//              sizes="48px"
//               src="${require('/src/img/amazon@1x.png')}"
//               width="48" height="15"
//               alt="Amazon"
//               />
              
//              </a>
//               </li>
//               <li class="shop-item">
//               <a href="${
//                 book.buy_links[1].url
//               }" class="shop-item-link" target=_blank>
//                <img
//              class="shops-item-icon apple-img"
//              srcset="
//              ${require('/src/img/appleBooks@1x.png')} 28w,
//              ${require('/src/img/appleBooks@2x.png')} 56w,
//              "
//              sizes="28px"
//               src="${require('/src/img/appleBooks@1x.png')}"
//               width="28" height="27"
//               alt="Apple Books"
//               />
//              </a>
//               </li>
//               <li class="shop-item">
//               <a href="${
//                 book.buy_links[4].url
//               }" class="shop-item-link" target=_blank>
//                <img
//              class="shops-item-icon bookshop-img"
//              srcset="
//              ${require('/src/img/booksAMillion@1x.png')} 32w,
//              ${require('/src/img/booksAMillion@2x.png')} 64w,
//              "

//              sizes="32px"
//               src="${require('/src/img/booksAMillion@1x.png')}"
//               width="32" height="30"
//               alt="Bookshop"
//               />
//                 </a>
//                   </li>
//                   </ul>
//                   </div>    
//                   </div>
//                   </li>`;
//         } else {
//           return `<li class="shopping-list-item" data-id=${book._id}>
            
//             <button type="button" data-action='delete' value="remove" class="shopping-button shopping-button-js">
//             <svg class="shopping-button-icon" data-action='delete' width="22" height="22" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
//             <use href=""></use>
//             </svg>
//               </button>
//               <img class="shopping-img" src="${book.book_image}" alt="book">
//               <div class="book-info">
//               <h2 class="shopping-book-title">${book.title}</h2>
//               <p class="book-genre">${book.list_name}</p> 
//              <p class="book-description">Unfortunately, this book has no description yet.</p>
//              <div class="shopping-box">
//              <p class="shopping-book-author">${book.author}</p>
//              <ul class="shops-links-list">
//              <li class="shop-item">
//             <a href="${
//               book.buy_links[0].url
//             }" class="shop-item-link" target=_blank>
//              <img
//              class="shops-item-icon amazon-img"
//              srcset="
//              ${require('/src/img/amazon@1x.png')} 48w,
//              ${require('/src/img/amazon@2x.png')} 96w,
//              "
//              sizes="48px"
//               src="${require('/src/img/amazon@1x.png')}"
//               width="48" height="15"
//               alt="Amazon"
//               />
//                            </a>
//               </li>
//               <li class="shop-item">
//               <a href="${
//                 book.buy_links[1].url
//               }" class="shop-item-link" target=_blank>
//                <img
//              class="shops-item-icon apple-img"
//              srcset="
//              ${require('/src/img/appleBooks@1x.png')} 28w,
//              ${require('/src/img/appleBooks@2x.png')} 56w,
//              "
//              sizes="28px"
//               src="${require('/src/img/appleBooks@1x.png')}"
//               width="28" height="27"
//               alt="Apple Books"
//               />
//              </a>
//               </li>
//               <li class="shop-item">
//               <a href="${
//                 book.buy_links[4].url
//               }" class="shop-item-link" target=_blank>
//                <img
//              class="shops-item-icon bookshop-img"
//              srcset="
//              ${require('/src/img/booksAMillion@1x.png')} 32w,
//              ${require('/src/img/booksAMillion@2x.png')} 64w,
//              "
//              sizes="32px"
//               src="${require('/src/img/booksAMillion@1x.png')}"
//               width="32" height="30"
//               alt="Bookshop"
//               />
//                </a>
//                   </li>
//                   </ul>
//                   </div>    
//                   </div>
//                   </li>`;
//         }
//       })
//       .join('');
//   }
// }

// createCardMarkup();