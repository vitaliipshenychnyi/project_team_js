import refs from './refs';

function renderRowGallery(row) {
  return row
    .map(elem =>
      elem.title.length < 20
        ? `<div class="book-card-wrapper"><a class="overlay link" href="${elem.amazon_product_url}">
            <img src="${elem.book_image}" alt="${elem.title}" height="256" loading="lazy"/> 
            <div class="overlay-field">
              <p class="overlay-text">QUICK VIEW</p>
            </div>
            <p class="book-name">${elem.title}</p>
            <p class="book-author">${elem.author}</p>
          </a></div>`
        : `<div class="book-card-wrapper"><a class="overlay link" href="${
            elem.amazon_product_url
          }">
            <img src="${elem.book_image}" alt="${
            elem.title
          }" height="256" loading="lazy"/> 
            <div class="overlay-field">
              <p class="overlay-text">QUICK VIEW</p>
            </div>
            <p class="book-name">${elem.title
              .split('')
              .slice(0, 20)
              .join('')}...</p>
            <p class="book-author">${elem.author}</p>
          </a></div>`
    )
    .join('');
}

export function renderGallery(books) {
  let markUp = '';
  console.log(books);
  markUp = books
    .map(
      elem =>
        `<div class="books-category">
          <p class="books-category-title">${elem.list_name}</p>
          <ul">
            <li class="books__list">${renderRowGallery(elem.books)}</li>
          </ul>
          <button class="button-see-more" type="button">SEE MORE</button>
        </div>`
    )
    .join('');
  refs.mainGalleryEl.insertAdjacentHTML('beforeend', markUp);
}

function renderRowGalleryCat(row,r1,r2,r3) {
    return `<div class="book-card">
                <a class="gallery link" href="${r1}">
                    <img src="${row}" alt="" loading="lazy"/> 
                    <p class"book-name">${r2}</p>
                    <p class"book-name">${r3}</p>
                </a>
            </div>`;
}

export function renderGalleryCat(books, cat) {
    let markUp = `<h2>${cat}</h2>
                <div class="book-category wrap">`;
   // console.log(markUp);
    console.log(books);
    markUp = markUp + books.map(elem =>
        `<div class="book-card">
            <a class="gallery link" href="${elem.amazon_product_url}">
                <img src="${elem.book_image}" alt="" loading="lazy"/> 
                <p class"book-name">${elem.title}</p>
                <p class"book-name">${elem.author}</p>
            </a>
        </div>`).join('');
    markUp = markUp + `</div>`
    console.log(markUp);
    refs.mainGalleryEl.insertAdjacentHTML('beforeend', markUp);
}
