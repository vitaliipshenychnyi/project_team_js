// import './js/test'; ПШЕНИЧНИЙ (не чипати)
import './js/refs';
import './js/test';
import './js/categories-list'
import axios from 'axios';
import { renderGallery } from './js/render-main-gallery';



const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';

async function mainGallery() {
    try {
        const response = await axios.get(BASE_URL);
        console.log(response.data);
        renderGallery(response.data);
    } catch (error) {
        console.log(error);
    }
}

mainGallery();



