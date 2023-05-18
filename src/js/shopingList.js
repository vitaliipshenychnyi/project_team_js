import { createCardMarkup } from './createCardMarkup.js';
import { parsedToken } from './firebase-authentication/firebase-service.js';
import refs from './refs.js';
import {
  deleteBookFromDatabase,
  arrBooksFromDatabase,
  writeDataBooks,
} from './firebase-database-service/books-data.js';

// let dataBooks =
//   JSON.parse(localStorage.getItem(`books-data-${parsedToken}`)) ?? [];
const dataBooks = writeDataBooks();

//   .then(resp => {
//   // resp.map(book => {
//   //   console.log(book);
//   //   dataBooks.push(book);
//   // })
//   return resp;
// });

// arrBooksFromDatabase(dataBooks);

// try {
//   dataBooks = JSON.parse(dataBooks);
// } catch (error) {
//   console.log(error);
// }

// pagination
// ****************
renderShoppingList(dataBooks);
// ****************
// if (dataBooks.length <= 5) {
//   renderShoppingList(dataBooks);
// } else {
//   pagination();
// }

// let up = 5;
// function list(event) {
//   if (event.code === 'ArrowRight') {
//     refs.shoppingList.innerHTML = '';
//     let next = dataBooks.slice(up, up + 5);
//     renderShoppingList(next);
//     up += 5;
//   }
//   if (event.code === 'ArrowLeft') {
//     refs.shoppingList.innerHTML = '';
//     up -= 10;
//     let next = dataBooks.slice(up, up + 5);
//     renderShoppingList(next);
//     up += 5;
//   }
// }

// function pagination() {
//   window.addEventListener('keydown', list);
//   renderShoppingList(dataBooks.slice(0, 5));
// }
// ****************

function renderShoppingList(dataBooks) {
  if (dataBooks.length) {
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

  deleteBookFromDatabase(bookToRemoveId);

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
  localStorage.setItem(`books-data-${parsedToken}`, JSON.stringify(dataBooks));
}
