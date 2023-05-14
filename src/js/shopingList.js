const shoppingList = document.querySelector('.shopping-list-js');
const emptyList = document.querySelector('.empty-list-js');

// const a = [
//   {
//     _id: '643282b1e85766588626a080',
//     list_name: 'Advice How-To and Miscellaneous',
//     date: '2023-04-01T00:00:00.000Z',
//     age_group: '',
//     amazon_product_url:
//       'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
//     article_chapter_link: '',
//     author: 'James Clear',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg',
//     book_image_width: 328,
//     book_image_height: 495,
//     book_review_link: '',
//     book_uri: 'nyt://book/0398a355-c032-534e-a0af-647b06f0840d',
//     contributor: 'by James Clear',
//     contributor_note: '',
//     created_date: '2023-04-05 22:05:27',
//     description: '',
//     first_chapter_link: '',
//     price: '0.00',
//     primary_isbn10: '0735211299',
//     primary_isbn13: '9780735211292',
//     publisher: 'Avery',
//     rank: 1,
//     rank_last_week: 1,
//     sunday_review_link: '',
//     title: 'ATOMIC HABITS',
//     updated_date: '2023-04-05 22:10:16',
//     weeks_on_list: 175,
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9780735211292?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT',
//       },
//     ],
//   },
//   {
//     _id: '643282b1e85766588626a0dc',
//     list_name: 'Advice How-To and Miscellaneous',
//     date: '2023-04-09T09:28:38.946Z',
//     age_group: '',
//     amazon_product_url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
//     article_chapter_link: '',
//     author: 'Alison Roman',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
//     book_image_width: 402,
//     book_image_height: 500,
//     book_review_link: '',
//     book_uri: 'nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8',
//     contributor: 'by Alison Roman',
//     contributor_note: '',
//     created_date: '2023-04-05 22:05:27',
//     description: '',
//     first_chapter_link: '',
//     price: '0.00',
//     primary_isbn10: '1984826395',
//     primary_isbn13: '9781984826398',
//     publisher: 'Clarkson Potter',
//     rank: 3,
//     rank_last_week: 0,
//     sunday_review_link: '',
//     title: 'SWEET ENOUGH',
//     updated_date: '2023-04-05 22:10:17',
//     weeks_on_list: 1,
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9781984826398?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT',
//       },
//     ],
//   },
//   {
//     _id: '643282b1e85766588626a085',
//     list_name: 'Audio Fiction',
//     date: '2023-04-01T00:00:00.000Z',
//     age_group: '',
//     amazon_product_url: 'https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20',
//     article_chapter_link: '',
//     author: 'Bonnie Garmus',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg',
//     book_image_width: 328,
//     book_image_height: 500,
//     book_review_link: '',
//     book_uri: 'nyt://book/a7229ef2-7522-5cb7-86c4-024aca7420e7',
//     contributor: 'by Bonnie Garmus',
//     contributor_note: '',
//     created_date: '2023-04-05 23:10:05',
//     description:
//       'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show. Read by Miranda Raison, Pandora Sykes and the author. 11 hours, 55 minutes unabridged.',
//     first_chapter_link: '',
//     price: '0.00',
//     primary_isbn10: '0593507533',
//     primary_isbn13: '9780593507537',
//     publisher: 'Random House Audio',
//     rank: 1,
//     rank_last_week: 0,
//     sunday_review_link: '',
//     title: 'LESSONS IN CHEMISTRY',
//     updated_date: '2023-04-05 23:10:05',
//     weeks_on_list: 0,
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9780593507537?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593507537',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FLESSONS%252BIN%252BCHEMISTRY%252FBonnie%252BGarmus%252F9780593507537&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DLESSONS%252BIN%252BCHEMISTRY%252BBonnie%252BGarmus',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593507537&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLESSONS%2BIN%2BCHEMISTRY',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593507537%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DLESSONS%2BIN%2BCHEMISTRY%2BBonnie%2BGarmus%26aff%3DNYT',
//       },
//     ],
//   },
// ];

// localStorage.setItem('books-data', JSON.stringify(a));

let dataBooks = localStorage.getItem('books-data');

try {
  dataBooks = JSON.parse(dataBooks);
} catch (error) {
  console.log(error);
}

renderShoppingList(dataBooks);

function renderShoppingList(dataBooks) {
  if (Array.isArray(dataBooks)) {
    const cardMarkup = createCardMarkup(dataBooks);
    shoppingList.insertAdjacentHTML('beforeend', cardMarkup);
    shoppingList.addEventListener('click', removeCardMarkup);
  } else {
    shoppingList.classList.add('visually-hidden');
    emptyList.classList.remove('visually-hidden');
  }
}

function createCardMarkup(dataBooks) {
  if (!dataBooks || dataBooks.length === 0) {
    shoppingList.classList.add('visually-hidden');
  } else {
    emptyList.classList.add('visually-hidden');
    shoppingList.classList.remove('visually-hidden');

    return dataBooks
      .map(book => {
        if (book.description !== '') {
          return `<li class="shopping-list-item" data-id=${book._id}>
            
            <button type="button" data-action='delete' value="remove" class="shopping-button shopping-button-js">
            <svg class="shopping-button-icon" data-action='delete' width="22" height="22" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <use href=""></use>
            </svg>
              </button>
              <img class="shopping-img" src="${book.book_image}" alt="book">
              <div class="book-info">
              <h2 class="shopping-book-title">${book.title}</h2>
              <p class="book-genre">${book.list_name}</p> 
             <p class="book-description">${book.description}</p>
             <div class="shopping-box">
             <p class="shopping-book-author">${book.author}</p>
             <ul class="shops-links-list">
             <li class="shop-item">
             <a href="${
               book.buy_links[0].url
             }" class="shop-item-link" target=_blank>
             <img
             class="shops-item-icon amazon-img"
             srcset="
             ${require('/src/img/amazon@1x.png')} 48w,
             ${require('/src/img/amazon@2x.png')} 96w,
             "
             sizes="48px"
              src="${require('/src/img/amazon@1x.png')}"
              width="48" height="15"
              alt="Amazon"
              />
              
             </a>
              </li>
              <li class="shop-item">
              <a href="${
                book.buy_links[1].url
              }" class="shop-item-link" target=_blank>
               <img
             class="shops-item-icon apple-img"
             srcset="
             ${require('/src/img/appleBooks@1x.png')} 28w,
             ${require('/src/img/appleBooks@2x.png')} 56w,
             "
             sizes="28px"
              src="${require('/src/img/appleBooks@1x.png')}"
              width="28" height="27"
              alt="Apple Books"
              />
             </a>
              </li>
              <li class="shop-item">
              <a href="${
                book.buy_links[4].url
              }" class="shop-item-link" target=_blank>
               <img
             class="shops-item-icon bookshop-img"
             srcset="
             ${require('/src/img/booksAMillion@1x.png')} 32w,
             ${require('/src/img/booksAMillion@2x.png')} 64w,
             "

             sizes="32px"
              src="${require('/src/img/booksAMillion@1x.png')}"
              width="32" height="30"
              alt="Bookshop"
              />
                </a>
                  </li>
                  </ul>
                  </div>    
                  </div>
                  </li>`;
        } else {
          return `<li class="shopping-list-item" data-id=${book._id}>
            
            <button type="button" data-action='delete' value="remove" class="shopping-button shopping-button-js">
            <svg class="shopping-button-icon" data-action='delete' width="22" height="22" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <use href=""></use>
            </svg>
              </button>
              <img class="shopping-img" src="${book.book_image}" alt="book">
              <div class="book-info">
              <h2 class="shopping-book-title">${book.title}</h2>
              <p class="book-genre">${book.list_name}</p> 
             <p class="book-description">Unfortunately, this book has no description yet.</p>
             <div class="shopping-box">
             <p class="shopping-book-author">${book.author}</p>
             <ul class="shops-links-list">
             <li class="shop-item">
            <a href="${
              book.buy_links[0].url
            }" class="shop-item-link" target=_blank>
             <img
             class="shops-item-icon amazon-img"
             srcset="
             ${require('/src/img/amazon@1x.png')} 48w,
             ${require('/src/img/amazon@2x.png')} 96w,
             "
             sizes="48px"
              src="${require('/src/img/amazon@1x.png')}"
              width="48" height="15"
              alt="Amazon"
              />
                           </a>
              </li>
              <li class="shop-item">
              <a href="${
                book.buy_links[1].url
              }" class="shop-item-link" target=_blank>
               <img
             class="shops-item-icon apple-img"
             srcset="
             ${require('/src/img/appleBooks@1x.png')} 28w,
             ${require('/src/img/appleBooks@2x.png')} 56w,
             "
             sizes="28px"
              src="${require('/src/img/appleBooks@1x.png')}"
              width="28" height="27"
              alt="Apple Books"
              />
             </a>
              </li>
              <li class="shop-item">
              <a href="${
                book.buy_links[4].url
              }" class="shop-item-link" target=_blank>
               <img
             class="shops-item-icon bookshop-img"
             srcset="
             ${require('/src/img/booksAMillion@1x.png')} 32w,
             ${require('/src/img/booksAMillion@2x.png')} 64w,
             "
             sizes="32px"
              src="${require('/src/img/booksAMillion@1x.png')}"
              width="32" height="30"
              alt="Bookshop"
              />
               </a>
                  </li>
                  </ul>
                  </div>    
                  </div>
                  </li>`;
        }
      })
      .join('');
  }
}

function removeCardMarkup(event) {
  if (event.target.dataset.action !== 'delete') {
    return;
  }

  const parentNode = event.target.closest('.shopping-list-item');
  const bookToRemoveId = parentNode.dataset.id;

  dataBooks = dataBooks.filter(book => book._id !== bookToRemoveId);
  saveToLocalStorage(dataBooks);
  // parentNode.remove();
  if (!dataBooks || dataBooks.length === 0) {
    emptyList.classList.remove('visually-hidden');
  }
  if (dataBooks.length > 0) {
    emptyList.classList.add('visually-hidden');
  }
  shoppingList.innerHTML = '';
  renderShoppingList(dataBooks);
}

function saveToLocalStorage() {
  localStorage.setItem('books-data', JSON.stringify(dataBooks));
}
