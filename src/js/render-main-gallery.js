import refs from './refs';

export function renderRowGallery(row) {
  return row.map(elem =>
      elem.title.length < 17
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
            <p class="book-name">${elem.title.split('').slice(0, 17).join('')}...</p>
            <p class="book-author">${elem.author}</p>
          </a></div>`
    )
    .join('');
}

export function renderGallery(books) {
  refs.mainGalleryEl.classList.remove("gal-category");
  refs.mainGalleryTitleEl.innerHTML = "Best Sellers <span class='category-title-span'>Books</span>";
  refs.mainGalleryEl.innerHTML = "";
  let markUp = '';
  markUp = books
    .map(elem =>
        `<div class="books-category">
          <p class="books-category-title">${elem.list_name}</p>
          <ul">
            <li class="books__list">${renderRowGallery(elem.books)}</li>
          </ul>
          <button class="button-see-more" type="button" data-cat="${elem.list_name}">SEE MORE</button>
        </div>`).join('');
  refs.mainGalleryEl.insertAdjacentHTML('beforeend', markUp);
}

export function renderGalleryCat(books, cat) {
  refs.mainGalleryEl.innerHTML = "";
  idx = Math.trunc(cat.split(' ').length / 2);
  refs.mainGalleryTitleEl.innerHTML = `${cat.split(' ').splice(0, idx).join(' ')} 
  <span class="category-title-span">${cat.split(' ').splice(idx, idx).join(' ')}</span>`;
  let markUp = "";
    //console.log(books);
  markUp = renderRowGallery(books);
  refs.mainGalleryEl.classList.add("gal-category");
  refs.mainGalleryEl.insertAdjacentHTML('beforeend', markUp);
}
