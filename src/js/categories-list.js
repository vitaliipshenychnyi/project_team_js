import {
  getCategoriesList,
  mainGalleryCategory,
  mainGallery,
} from './API-main-gallary';
import { renderGallery, renderRowGallery } from './render-main-gallery';
import refs from './refs';

// функція створення списку категорій у сайдбарі
function createMarkupCategoriesList(categories) {
  return categories
    .map(
      ({ list_name }) =>
        `<li class="category-list-item"><button type="button" class="category">${list_name}</button></li>`
    )
    .join('');
}

const listFillingError =
  '<li class="category-list-item"><p class="categories-err">The list of categories is empty</p></li>';

// функція відтворення списку категорій
getCategoriesList()
  .then(async resp => {
    const categories = resp.data;
    if (categories.length === 0) {
      refs.categoriesList.innerHTML = listFillingError;
      return;
    }
    const markup =
      `<li class="category-list-item active"><button type="button" class="category category-active">All categories</button></li>` +
      createMarkupCategoriesList(categories);
    refs.categoriesList.innerHTML = markup;
  })
  .catch(err => {
    refs.categoriesList.innerHTML = listFillingError;
  });
refs.categoriesList.addEventListener('click', onCategoryClick);

// функція вибору категорії зі списку
function onCategoryClick(evt) {
  const categoryName = evt.target;
  const listOfCategories = [...evt.currentTarget.children];
  // console.log(categoryName);
  if (categoryName.classList.contains('category')) {
    if (categoryName.textContent === 'All categories') {
      removeActive(listOfCategories);
      activateCategory(categoryName);
      mainGallery();
      return;
    } else {
      refs.mainGalleryEl.innerHTML = '';
      mainGalleryCategory(categoryName.textContent);
    }
  }
  if (categoryName.classList.contains('category')) {
    removeActive(listOfCategories);
    activateCategory(categoryName);
  }
}

refs.mainGalleryEl.addEventListener('click', onBtnSeeMore);

// функція зміни категорії при натисканні кнопки SeeMore
function onBtnSeeMore(evt) {
 // console.log("2 Listener - categories-list.js");
  const categName = evt.target.dataset.cat;
  const categList = [...refs.categoriesList.children];
  if (categName) {
    for (let i = 0; i < categList.length; i++) {
      if (categList[i].firstChild.textContent === categName) {
        removeActive(categList)
        activateCategory(categList[i].firstChild)
      }
    }
  }
}

// функція активації категорії
function activateCategory(nameOfCategory){
  nameOfCategory.parentNode.classList.add('active');
  nameOfCategory.classList.add('category-active');
}

// функція деактивації категорії
function removeActive(categories) {
  for (let i = 0; i < categories.length; i++){
    if ((categories[i].classList.contains('active'))) {
      categories[i].classList.remove('active');
        categories[i].firstChild.classList.remove('category-active');
      }
    }
}