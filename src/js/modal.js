
import refs from './refs';


export async function getDataBook(idBook) {
  return await axios.get(`https://books-backend.p.goit.global/books/${idBook}`);
}


refs.mainGalleryEl.addEventListener('click', onBookCardClick);

function onBookCardClick(event) {
  const bookCard = event.target.closest('.book-card-wrapper'); 
  console.log(bookCard)
  if (!bookCard) return;

  openModal();
}


function openModal() {
  refs.modal.classList.remove('is-hidden');
  console.log('openModal() called');
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
}

refs.modalCloseBtn.addEventListener('click', closeModal);

function renderBookCard(book) {
  const bookCardMarkup = `
    <div>
        <img src="${book.book_image}" alt="${book.title}" height="256" loading="lazy"/> 
        <div class="overlay-field">
          <p class="overlay-text">QUICK VIEW</p>
        </div>
        <p class="book-name">${book.title}</p>
        <p class="book-author">${book.author}</p>
      </a>
    </div>
  `;

  refs.modalContent.innerHTML = bookCardMarkup;
}
