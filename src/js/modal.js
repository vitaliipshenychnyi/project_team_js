import refs from './refs';
import axios from 'axios';
import { renderBookCard } from './render-modal-book-card';
import { parsedToken } from './firebase-authentication/firebase-service.js';
import {
  writeBookToDatabase,
  dataBooksFromDatabase,
  deleteBookFromDatabase,
} from './firebase-database-service/books-data';

refs.mainGalleryEl.addEventListener('click', onBookCardClick);

// функція отримання id книги
const onBookCardClick = e => {
  e.preventDefault();
  const bookId = e.target.closest('.book-card-wrapper').dataset.idbook ?? '';
  openModal(bookId);
};

const showBookCard = async idBook => {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${idBook}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// функція відкриття модального вікна
const openModal = async id => {
  refs.modalCloseBtn.addEventListener('click', closeModal);
  refs.mainGalleryEl.addEventListener('keydown', closeModalEsc);

  refs.wrapperBookEl.innerHTML = '';
  refs.modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  const bookCard = await showBookCard(id);
  console.log(bookCard);
  renderBookCard(bookCard);
  // addBookModal();
  // const dataBooks = await checkBookInDatabase(id);
  await checkBookInDatabase(id).then(dataBooks => {
    const isBook = dataBooks ? dataBooks.some(book => book._id === id) : false;
    if (isBook) {
      removeBookModal();
      refs.buttonAddBookEl.addEventListener('click', () =>
        onButtonAddBookEl(isBook, bookCard, id)
      );
      return;
    } else {
      addBookModal();
      refs.buttonAddBookEl.addEventListener('click', () =>
        onButtonAddBookEl(isBook, bookCard, id)
      );
      return;
    }
  });
};

const checkBookInDatabase = async () => {
  return await dataBooksFromDatabase();
};

const onButtonAddBookEl = async (boolean, data, id) => {
  if (boolean) {
    deleteBookFromDatabase(id);
    addBookModal();
  } else {
    noteAddBookModal();
    writeBookToDatabase(data);
    removeBookModal();
  }
};

const addBookModal = () => {
  // refs.buttonAddBookEl.dataset.list = 'add';
  refs.buttonAddBookEl.textContent = 'ADD TO SHOPPING LIST';
  refs.addedTextEl.innerHTML = '';
};

const removeBookModal = () => {
  // refs.buttonAddBookEl.dataset.list = 'remove';
  refs.buttonAddBookEl.textContent = 'REMOVE FROM THE SHOPPING LIST';
};

const noteAddBookModal = () => {
  refs.addedTextEl.innerHTML =
    '<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>';
};

// функція закриття модального вікна
const closeModal = () => {
  refs.modalCloseBtn.removeEventListener('click', closeModal);
  refs.mainGalleryEl.removeEventListener('keydown', closeModalEsc);
  refs.buttonAddBookEl.removeEventListener('click', () => {});
  refs.buttonAddBookEl.dataset.list = '';
  refs.modal.classList.add('is-hidden');
  document.body.style.overflow = '';
};

const closeModalEsc = e => {
  document.body.style.overflow = '';
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
};
