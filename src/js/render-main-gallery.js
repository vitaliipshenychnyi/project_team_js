import refs from "./refs";

function renderRowGallery(row) {
    return row.map((elem) => 
            `<div class="book-card">
                <a class="gallery link" href="${elem.amazon_product_url}">
                    <img src="${elem.book_image}" alt="" loading="lazy"/> 
                    <p class"book-name">${elem.title}</p>
                </a>
            </div>`).join("");
    }

export function renderGallery(books) {
    let markUp = "";
    console.log(books);
    markUp = books.map((elem) =>
        `<p>${elem.list_name}</p>
        <div class="book-category">
            ${renderRowGallery(elem.books)}
        </div>
        <button class="button-see-more" type="button">SEE MORE</button>`).join("");
    //console.log(markUp);
    refs.mainGalleryEl.insertAdjacentHTML("beforeend", markUp);
}