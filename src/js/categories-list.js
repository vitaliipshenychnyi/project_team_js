import { getCategoriesList } from "./test";
import { createMarkupCategoriesList } from "./test";
import refs from "./refs";

// рендеринг списку категорій
getCategoriesList().then(async resp => {
    const categories = resp.data;
    const listFillingError = '<p class="categories - err">The list of categories is empty</p>';
    console.log(categories);
        if (categories.length === 0) {
            refs.categoriesList.innerHTML = listFillingError;
                return;
        }
    refs.categoriesList.innerHTML = createMarkupCategoriesList(categories);
    }).catch(err => {
        catList.innerHTML = listFillingError;
    })