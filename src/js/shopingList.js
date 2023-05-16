import { createCardMarkup } from './createCardMarkup.js';
import refs from './refs.js';

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
    refs.shoppingList.insertAdjacentHTML('beforeend', cardMarkup);
    refs.shoppingList.addEventListener('click', removeCardMarkup);
  } else {
    refs.shoppingList.classList.add('visually-hidden');
    refs.emptyList.classList.remove('visually-hidden');
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
  parentNode.remove();

  if (!dataBooks || dataBooks.length === 0) {
    refs.emptyList.classList.remove('visually-hidden');
  }
  if (dataBooks.length > 0) {
    refs.emptyList.classList.add('visually-hidden');
  }
}

function saveToLocalStorage() {
  localStorage.setItem('books-data', JSON.stringify(dataBooks));
}
