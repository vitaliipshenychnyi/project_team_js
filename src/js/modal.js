import refs from './refs';
import axios from 'axios';
import { renderBookCard } from './render-modal-book-card';

let arrDataBooks = [];
let objBookOne = [];
let idBookOne = [];

refs.mainGalleryEl.addEventListener('click', onBookCardClick);

if (localStorage.getItem('books-data')) {
  arrDataBooks = JSON.parse(localStorage.getItem('books-data'));
}

// функція отримання id книги
function onBookCardClick(event) {
  event.preventDefault();
  idBookOne = []; // стираємо дані з idBookOne про id книги
  const bookCard = event.target.closest('.book-card-wrapper');
  if (!bookCard) return;
  const idBook = bookCard.dataset.idbook;
  idBookOne.push(idBook); // додаємо до idBookOne дані про id книги
  openModal(idBook);
}

// функція відкриття модального вікна
function openModal(idBook) {
  refs.wrapperBookEl.innerHTML = '';
  refs.modalCloseBtn.addEventListener('click', closeModal);
  refs.mainGalleryEl.addEventListener('keydown', closeModalEsc);
  refs.modal.classList.remove('is-hidden');
  getDataBook(idBook);
  if (arrDataBooks.some(el => el._id === idBook)) {
    refs.addedTextEl.innerHTML =
      '<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>';
    refs.buttonAddBookEl.textContent = 'REMOVE FROM THE SHOPPING LIST';
    refs.buttonAddBookEl.addEventListener('click', deleteBookToLocalStorage);
  } else {
    refs.buttonAddBookEl.textContent = 'ADD TO SHOPPING LIST';
    refs.addedTextEl.innerHTML = '';
    refs.buttonAddBookEl.addEventListener('click', saveBookToLocalStorage);
  }
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

// функція формування об'єкту даних книги
function objectBook({
  _id,
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  objBookOne = []; // стираємо дані з objBookOne про книги
  const objBook = {
    _id,
    book_image,
    title,
    list_name,
    description,
    author,
    buy_links,
  };
  objBookOne.push(objBook); // записуємо дані з objBookOne про книги
}

// функція запису книги до сховища
function saveBookToLocalStorage() {
  refs.buttonAddBookEl.removeEventListener('click', saveBookToLocalStorage);
  refs.addedTextEl.innerHTML =
    '<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>';
  refs.buttonAddBookEl.textContent = 'REMOVE FROM THE SHOPPING LIST';
  arrDataBooks.push(objBookOne[0]);
  localStorage.setItem('books-data', JSON.stringify(arrDataBooks));
  closeModal();
}

// функція видалення книги зі сховища
function deleteBookToLocalStorage() {
  refs.buttonAddBookEl.removeEventListener('click', deleteBookToLocalStorage);
  refs.addedTextEl.innerHTML = '';
  refs.buttonAddBookEl.textContent = 'ADD TO SHOPPING LIST';
  const permId = arrDataBooks.findIndex(el => el._id === idBookOne[0]);
  arrDataBooks.splice(permId, 1);
  localStorage.setItem('books-data', JSON.stringify(arrDataBooks));
  closeModal();
}

// функція закриття модального вікна
function closeModal() {
  refs.modalCloseBtn.removeEventListener('click', closeModal);
  refs.mainGalleryEl.removeEventListener('keydown', closeModalEsc);
  refs.modal.classList.add('is-hidden');
}

function closeModalEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
