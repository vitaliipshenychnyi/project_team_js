import refs from './refs';
import axios from 'axios';

const arrDataBooks = [];
let objBook = {};

refs.mainGalleryEl.addEventListener('click', onBookCardClick);
refs.modalCloseBtn.addEventListener('click', closeModal);

// функція отримання id книги
function onBookCardClick(event) {
  const bookCard = event.target.closest('.book-card-wrapper');
  const idBook = bookCard.dataset.idbook;
  if (!bookCard) return;
  openModal(idBook);
}

// функція відкриття модального вікна
function openModal(idBook) {
  refs.modal.classList.remove('is-hidden');
  const booksInLocal = JSON.parse(localStorage.getItem('books-data'));
  if (!booksInLocal.filter(el => el._id == idBook)) {
    refs.buttonAddBookEl.textContent = 'Add to shopping list';
  }
  refs.addedTextEl.innerHTML =
    '<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>';

  getDataBook(idBook);
}

// функція отримання розширених даних книги
async function getDataBook(idBook) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${idBook}`
    );
    renderBookCard(response.data);
    objectBook(response.data);
  } catch (error) {
    console.log(error);
  }
}

// функція відтворення даних про книгу
function renderBookCard(book) {
  const bookCardMarkup = `
    <div class="wrapper-modal-data">
      <img class="img" src="${book.book_image}" alt="${
    book.title
  }" height="256" loading="lazy"/>
      <div>
        <p class="modal-name">${book.title}</p>
        <p class="modal-author">${book.author}</p>
        <div class="description">
          <p class="book-description">${book.description}</p>
        </div>
                     <ul class="shops-links-list">
             <li class="shop-item">
             <a href="${
               book.buy_links[0].url
             }" class="shop-item-link" target=_blank>
             <img
             class="shops-item-icon"
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
             class="shops-item-icon"
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
             class="shops-item-icon"
             srcset="
             ${require('/src/img/booksAMillion@1x.png')} 32w,
             ${require('/src/img/booksAMillion@2x.png')} 64w,
             "sizes="32px"
              src="${require('/src/img/booksAMillion@1x.png')}"
              width="32" height="30"
              alt="Bookshop"
              />
                </a>
                  </li>
                  </ul>
      </div>
    </div>
    `;

  refs.wrapperBookEl.innerHTML = bookCardMarkup;
}

// функція формування об'єкту даних книги
function objectBook({
  _id,
  book_image,
  title,
  description,
  author,
  buy_links,
}) {
  objBook = { _id, book_image, title, description, author, buy_links };
}

refs.buttonAddBookEl.addEventListener('click', saveBookToLocalStorage);

// функція запису книги до сховища
function saveBookToLocalStorage() {
  refs.addedTextEl.innerHTML =
    '<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>';
  refs.buttonAddBookEl.textContent = 'REMOVE FROM THE SHOPPING LIST';
  arrDataBooks.push(objBook);
  localStorage.setItem('books-data', JSON.stringify(arrDataBooks));
}

// функція закриття модального вікна
function closeModal() {
  refs.wrapperBookEl.innerHTML = '';
  refs.addedTextEl.innerHTML = '';
  refs.modal.classList.add('is-hidden');
}