import { getCategoriesList } from "./API-main-gallary";
import refs from "./refs";

function createMarkupCategoriesList(categories) {
    return categories.map(({list_name}) =>
    `<li class="category-list-item"><button type="button" class="category">${list_name}</button></li>`).join("");
}

const listFillingError = '<p class="categories - err">The list of categories is empty</p>';

// рендеринг списку категорій
getCategoriesList().then(async resp => {
    const categories = resp.data;
        if (categories.length === 0) {
            refs.categoriesList.innerHTML = listFillingError;
                return;
        }
    refs.categoriesList.innerHTML = createMarkupCategoriesList(categories);
    }).catch(err => {
        refs.categoriesList.innerHTML = listFillingError;
    })