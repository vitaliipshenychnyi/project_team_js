import refs from './refs';

// Ініціалізація axios
const axios = require('axios').default;

// Змінні попередні
const BASE_URL = 'https://books-backend.p.goit.global/books/';
const main = document.querySelector('.main');

getBooks();

// функція отримання даних по топовим книгам
async function getBooks() {
  const response = await axios.get(`${BASE_URL}top-books`);
  const topBooks = response.data.map(el => el.books);
  const topBooksCategories = response.data.map(el => el.list_name);
  console.log(topBooks);
  console.log(topBooksCategories);

  main.insertAdjacentHTML(
    'beforeend',
    createCategotiesList(topBooks, topBooksCategories)
  );
}

// створення категорій на головній сторінці
function createCategotiesList(topBooks, topBooksCategories) {
  return topBooksCategories
    .map((el, i) => {
      return `<ul class="categories__wrapper">
           <h2>${el}</h2>
            ${createMarkupCardBook(topBooks[i])}</ul>`;
    })
    .join('');
}

// створення картки книги
function createMarkupCardBook(topBooks) {
  return topBooks
    .map(
      ({ author, book_image, title }) =>
        `<li>
            <img src="${book_image}" alt="${title}" width="180">
            <p>${title}</p>
            <p>${author}</p>
        </li>`
    )
    .join('');
}

// функція отримання списку категорій
export async function getCategoriesList() {
  return await axios.get(`${BASE_URL}category-list`);
}

// створення списку категорій
export function createMarkupCategoriesList(categories) {
    return categories.map(({list_name}) =>
    `<li class="category-list-item"><button type="button" class="category">${list_name}</button></li>`).join("");
}