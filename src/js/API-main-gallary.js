import axios from 'axios';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import {
  renderGallery,
  renderGalleryCat,
  repWinSize,
} from './render-main-gallery';
import refs from './refs';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

// функція отримання даних по топовим книгам
export async function mainGallery() {
  try {
    const response = await axios.get(`${BASE_URL}top-books`);
    renderGallery(response.data);
    refs.spinnerEl.setAttribute('hidden', true); // вимикає spiner
  } catch (error) {
    console.log(error);
  }
}

// функція отримання даних по книгам певної категорії
export async function mainGalleryCategory(cat) {
  try {
    refs.spinnerEl.removeAttribute('hidden'); // вмикає spiner
    const response = await axios.get(`${BASE_URL}category?category=${cat}`);
    renderGalleryCat(response.data, cat);
    refs.spinnerEl.setAttribute('hidden', true); // вимикає spiner
  } catch (error) {
    console.log(error);
  }
}

// функціонал додавання книг в категорії ТОП по натискання на кнопку See more
mainGallery();
refs.mainGalleryEl.addEventListener('click', onBtnSeeMoreCategory);
//window.addEventListener('resize', throttle(() => { mainGallery(); }, 0));
window.addEventListener(
  'resize',
  debounce(() => {
    mainGallery();
  }, 200)
);

// функція, яка відслідковує за вибором категорії з переліку категорій
function onBtnSeeMoreCategory(evt) {
  if (evt.target.dataset.cat) {
    refs.mainGalleryEl.innerHTML = '';
    refs.mainGalleryTitleEl.innerHTML = '';
    mainGalleryCategory(evt.target.dataset.cat);
  }
}

// функція отримання списку категорій
export async function getCategoriesList() {
  return await axios.get(`${BASE_URL}category-list`);
}
