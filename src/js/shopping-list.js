import { createCardMarkup } from './createCardMarkup.js';
import { parsedToken } from './firebase-authentication/firebase-service.js';
import refs from './refs.js';
import {
  deleteBookFromDatabase,
  dataBooksFromDatabase,
} from './firebase-database-service/books-data.js';

const loadDataBooksShopping = async () => {
  const response = await dataBooksFromDatabase();
  console.log('loadDataBooks:', response);
  await toogleEmptyBackground(response);
  await renderShoppingList(response);
};

loadDataBooksShopping();

async function renderShoppingList(dataBooks) {
  if (dataBooks) {
    const cardMarkup = createCardMarkup(dataBooks);
    refs.shoppingList.insertAdjacentHTML('beforeend', cardMarkup);
    refs.shoppingList.addEventListener('click', removeCardMarkup);
  } else {
    refs.shoppingList.classList.add('visually-hidden');
    refs.emptyList.classList.remove('visually-hidden');
  }
}

async function removeCardMarkup(event) {
  if (event.target.dataset.action !== 'delete') {
    return;
  }

  const parentNode = event.target.closest('.shopping-list-item');
  const bookToRemoveId = parentNode.dataset.id;

  deleteBookFromDatabase(bookToRemoveId);
  loadDataBooksShopping();

  parentNode.remove();
}

async function toogleEmptyBackground(dataBooks) {
  dataBooks
    ? refs.emptyList.classList.add('visually-hidden')
    : refs.emptyList.classList.remove('visually-hidden');
}
