import axios from 'axios';
import { renderGallery } from './render-main-gallery';



const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function mainGallery() {
    try {
        const response = await axios.get(`${BASE_URL}top-books`);
        console.log(response.data);
        renderGallery(response.data);
    } catch (error) {
        console.log(error);
    }
}

mainGallery();

export async function getCategoriesList() {
  return await axios.get(`${BASE_URL}category-list`);
}