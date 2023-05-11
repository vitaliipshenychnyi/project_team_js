import refs from './refs';

function renderRowGallery(row) {
  return row
    .map(
      elem =>
        `<div class="book-card">
                <a class="gallery link" href="${elem.amazon_product_url}">
                    <img src="${elem.book_image}" alt="" loading="lazy"/> 
                    <p class"book-name">${elem.title}</p>
                </a>
            </div>`
    )
    .join('');
}

export function renderGallery(books) {
  let markUp = '';
  console.log(books);
  markUp = books
    .map(
      elem =>
        `<p>${elem.list_name}</p>
        <div class="book-category">
            ${renderRowGallery(elem.books)}
        </div>
        <button class="button-see-more" type="button">SEE MORE</button>`
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
