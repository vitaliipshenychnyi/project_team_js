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

function onBookCardClick(e) {
  e.preventDefault();
  const bookId = e.target.closest('.book-card-wrapper').dataset.idbook ?? '';
  openModal(bookId);
}

const openModal = async bookId => {
  refs.modalCloseBtn.addEventListener('click', closeModal);
  refs.mainGalleryEl.addEventListener('keydown', closeModalEsc);

  refs.wrapperBookEl.innerHTML = '';
  refs.modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  const bookCard = await getBookCard(bookId);
  renderBookCard(bookCard);

  if (parsedToken) {
    await checkBookInShoppingList(bookId);
    if (refs.buttonAddBookEl.dataset.action === 'add') {
      refs.buttonAddBookEl.addEventListener('click', onAddBookButton);
    }
    if (refs.buttonAddBookEl.dataset.action === 'remove') {
      refs.buttonAddBookEl.addEventListener('click', onRemoveBookButton);
    }
  }
};

const getBookCard = async bookId => {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${bookId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const checkBookInShoppingList = async bookId => {
  const response = await checkBookInDatabase(bookId);
  refs.buttonAddBookEl.dataset.book = bookId;
  if (!response) {
    setModalButtonToAdd();
  } else {
    setModalButtonToRemove();
  }
};

const onAddBookButton = async e => {
  try {
    const bookId = e.currentTarget.dataset.book;
    const dataBook = await getBookCard(bookId);
    if (refs.buttonAddBookEl.dataset.action === 'add') {
      writeBookToDatabase(dataBook);
      noteAddBookModal();
      refs.buttonAddBookEl.dataset.action = '';
      setModalButtonToRemove();
      refs.buttonAddBookEl.removeEventListener('click', onAddBookButton);
      refs.buttonAddBookEl.addEventListener('click', onRemoveBookButton);
    }
  } catch (error) {
    console.log(error);
  }
};

const onRemoveBookButton = async e => {
  try {
    const bookId = e.currentTarget.dataset.book;
    if (refs.buttonAddBookEl.dataset.action === 'remove') {
      deleteBookFromDatabase(bookId);
      refs.buttonAddBookEl.dataset.action = '';
      setModalButtonToAdd();
      refs.buttonAddBookEl.removeEventListener('click', onRemoveBookButton);
      refs.buttonAddBookEl.addEventListener('click', onAddBookButton);
    }
  } catch (error) {
    console.log(error);
  }
};

const checkBookInDatabase = async id => {
  const snapshotDataBooks = await dataBooksFromDatabase();
  const isBookInList = snapshotDataBooks
    ? snapshotDataBooks.some(book => book._id === id)
    : false;
  console.log('isBookInList :', isBookInList);
  return isBookInList ? true : false;
};

const setModalButtonToAdd = () => {
  refs.buttonAddBookEl.dataset.action = 'add';
  refs.buttonAddBookEl.textContent = 'ADD TO SHOPPING LIST';
  refs.addedTextEl.innerHTML = '';
};

const setModalButtonToRemove = () => {
  refs.buttonAddBookEl.dataset.action = 'remove';
  refs.buttonAddBookEl.textContent = 'REMOVE FROM THE SHOPPING LIST';
};

const noteAddBookModal = () => {
  refs.addedTextEl.innerHTML =
    '<p class="added-text">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>';
};

function closeModal() {
  refs.modalCloseBtn.removeEventListener('click', closeModal);
  refs.mainGalleryEl.removeEventListener('keydown', closeModalEsc);

  refs.buttonAddBookEl.removeEventListener('click', onAddBookButton);
  refs.buttonAddBookEl.removeEventListener('click', onRemoveBookButton);
  refs.buttonAddBookEl.dataset.action = '';

  refs.wrapperBookEl.innerHTML = '';
  refs.modal.classList.add('is-hidden');
  document.body.style.overflow = '';
}

function closeModalEsc(event) {
  document.body.style.overflow = '';
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}
