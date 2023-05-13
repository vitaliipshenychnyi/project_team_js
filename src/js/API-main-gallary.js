import axios from 'axios';
import { renderGallery, renderGalleryCat } from './render-main-gallery';
import refs from './refs';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

// функція отримання даних по топовим книгам
export async function mainGallery() {
  try {
    const response = await axios.get(`${BASE_URL}top-books`);
    console.log(response.data);
    renderGallery(response.data);
  } catch (error) {
    console.log(error);
  }
}

// функція отримання даних по книгам певної категорії
export async function mainGalleryCategory(cat) {
  try {
    const response = await axios.get(`${BASE_URL}category?category=${cat}`);
    console.log(response.data);
    renderGalleryCat(response.data, cat);
  } catch (error) {
    console.log(error);
  }
}

mainGallery();
// mainGalleryCategory('Series Books');
refs.mainGalleryEl.addEventListener('click', onBtnSeeMoreCategory);

// функція, яка відслідковує за вибором категорії з переліку категорій
function onBtnSeeMoreCategory(evt) {
  if (evt.target.dataset.cat) {
    mainGalleryCategory(evt.target.dataset.cat);
  }
}

// функція отримання списку категорій
export async function getCategoriesList() {
  return await axios.get(`${BASE_URL}category-list`);
}
