import refs from './refs';
import axios from 'axios';

const arrDataBooks = [];
let objBook;

refs.mainGalleryEl.addEventListener('click', onBookCardClick);
refs.modalCloseBtn.addEventListener('click', closeModal);

localStorage.setItem('books-data', JSON.stringify(arrDataBooks));

// функція отримання id книги
function onBookCardClick(event) {
  const bookCard = event.target.closest('.book-card-wrapper');
  const idBook = bookCard.dataset.idbook;
  if (!bookCard) return;
  openModal(idBook);
}

// функція відкриття модального вікна
function openModal(idBook) {
  const booksInLocal = JSON.parse(localStorage.getItem('books-data'));

  if (!booksInLocal.filter(el => el._id === idBook)) {
    refs.buttonAddBookEl.textContent = 'Add to shopping list';
  }

  refs.modal.classList.remove('is-hidden');
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
      <img class="img" src="${book.book_image}" alt="${book.title}" height="256" loading="lazy"/>
      <div>
        <p class="book-name modal-name">${book.title}</p>
        <p class="book-author modal-author">${book.author}</p>
        <div class="description">
          <p class="book-description">${book.description}</p>
        </div>
        <ul class="link-list">
          <li><a class="buy-link link" href="${book.buy_links[0].url}">Amazon</a></li>
          <li><a class="buy-link link" href="${book.buy_links[1].url}">Apple Books</a></li>
          <li><a class="buy-link link" href="${book.buy_links[2].url}">Barnes and Noble</a></li>
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
  const addedText =
    '<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>';
  refs.buttonAddBookEl.textContent = 'REMOVE FROM THE SHOPPING LIST';
  arrDataBooks.push(objBook);
  refs.buttonAddBookEl.insertAdjacentHTML('afterend', addedText);
}

// функція закриття модального вікна
function closeModal() {
  refs.wrapperBookEl.innerHTML = '';
  refs.modal.classList.add('is-hidden');
}
