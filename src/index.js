import refs from './js/refs';
import axios from 'axios';
import { renderGallery } from './js/render-main-gallery';

const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';

async function mainGallery() {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    renderGallery(response.data);
  } catch (error) {
    console.log(error);
  }
}

mainGallery();

// import './js/test';

refs.userLoginBtn.addEventListener('click', toggleAuthForm);
refs.authFormCloseBtn.addEventListener('click', toggleAuthForm);

function toggleAuthForm() {
  document.body.classList.toggle('.auth-form-open');
  refs.authFormBackdrop.classList.toggle('is-hidden');
}
