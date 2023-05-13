import refs from './refs';
import axios from 'axios';

refs.mainGalleryEl.addEventListener('click', onBookCardClick);
refs.modalCloseBtn.addEventListener('click', closeModal);

// функція отримання id книги
function onBookCardClick(event) {
  const bookCard = event.target.closest('.book-card-wrapper');
  const idBook = bookCard.dataset.idbook;
  console.log(idBook);
  if (!bookCard) return;
  openModal(idBook);
}

// функція отримання розширених даних книги
async function getDataBook(idBook) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${idBook}`
    );
    console.log(response.data);
    renderBookCard(response.data);
  } catch (error) {
    console.log(error);
  }
}

// функція відкриття модального вікна
function openModal(idBook) {
  refs.modal.classList.remove('is-hidden');
  getDataBook(idBook);
}

// функція закриття модального вікна
function closeModal() {
  // refs.modalContent.innerHTML = baseCodeModal;
  refs.modal.classList.add('is-hidden');
}

// функція відтворення даних про книгу
function renderBookCard(book) {
  const bookCardMarkup = `
    <div>
      <img src="${book.book_image}" alt="${book.title}" height="256" loading="lazy"/>
      <p class="book-name">${book.title}</p>
      <p class="book-author">${book.author}</p>
      <p class="book-description">${book.description}</p>
      <ul>
        <li><a href="${book.buy_links[0].url}">Amazon</a></li>
        <li><a href="${book.buy_links[1].url}">Apple Books</a></li>
        <li><a href="${book.buy_links[2].url}">Barnes and Noble</a></li>
      </ul>
    </div>
  `;
  // console.log(bookCardMarkup)
  refs.wrapperBookEl.innerHTML= bookCardMarkup;
  // console.log(refs.wrapperBookEl)
}
