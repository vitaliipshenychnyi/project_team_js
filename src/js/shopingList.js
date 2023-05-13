
const shoppingList = document.querySelector('.shopping-list-js');
const emptyList = document.querySelector('.empty-list-js');

let dataBooks = localStorage.getItem('books-data');

try {
  dataBooks = JSON.parse(dataBooks);
} catch (error) {
  console.log(error);
}

function renderShoppingList (dataBooks) {
  if (Array.isArray(dataBooks)) {
    const cardMarkup = createCardMarkup(dataBooks);
    shoppingList.insertAdjacentHTML('beforeend', cardMarkup);
    shoppingList.addEventListener('click', removeCardMarkup);
  } else {
    shoppingList.classList.add('visually-hidden');
    emptyList.classList.remove('visually-hidden');
  }
};

function createCardMarkup(dataBooks) {
  if (!dataBooks || dataBooks.length === 0) {
    shoppingList.classList.add('visually-hidden');
  } else {
    emptyList.classList.add('visually-hidden');
    shoppingList.classList.remove('visually-hidden');

    return dataBooks
      .map(
        ({ book_image, title, list_name, description, author, buy_links }) => {
          const amazon = buy_links.find(link => link.name === 'Amazon').url;
          const appleBooks = buy_links.find(
            link => link.name === 'Apple Books'
          ).url;
          const booksAMillion = buy_links.find(
            link => link.name === 'Books-A-Million'
          ).url;

          return `<li class="shopping-list-item" data-id=${_id}>
       
          <button type="button" data-action='delete' value="remove" class="shopping-button shopping-button-js">
              <svg class="shopping-button-icon" width="22" height="22">
              <use href="/src/img/svg/sprite.svg#icon-trash"></use>
    </svg>
            </button>
        <img class="shopping-img" src="${book_image}" alt="book">
        <div class="book-info">
           <h2 class="book-title">${title}</h2>
           <p class="book-genre">${list_name}</p> 
           <p class="book-description">${description}</p>
           <div class="shopping-box">
           <p class="book-author">${author}</p>
            <ul class="shops-links-list">
    <li class="shop-item">
        <a href="${amazon}" class="shop-item-link">
         <picture class="shop-list-icon">
            <source
              srcset="
                /src/img/amazon@1x.png 1x,
                /src/img/amazon@2x.png 2x
              "
             <img
              src="/src/img/amazon@1x.png"
              alt="Amazon"
            />
          </picture>
          </a>
    </li>
    <li class="shop-item">
        <a href="${appleBooks}" class="shop-item-link">
         <picture class="shop-list-icon">
            <source
              srcset="
                /src/img/appleBooks@1x.png 1x,
                /src/img/appleBooks@2x.png 2x
              "
             <img
              src="/src/img/appleBooks@1x.png"
              alt="Apple Books"
            />
          </picture>
        </a>
    </li>
    <li class="shop-item">
        <a href="${booksAMillion}" class="shop-item-link">
            <picture class="shop-list-icon">
            <source
              srcset="
                /src/img/booksAMillion@1x.png 1x,
                /src/img/booksAMillion@2x.png 2x
              "
             <img
              src="/src/img/booksAMillion@1x.png"
              alt="Books A Million"
            />
          </picture>
        </a>
    </li>
  </ul>
       </div>    
        </div>
    </li>`;
        }
      )
      .join('');
  }
}

function removeCardMarkup(event) {
  if (event.target.dataset.action !== 'delete') {
    return;
  }

  const parentNode = event.target.closest('.shopping-list-item');
  const bookToRemoveId = parentNode.dataset.id;

    dataBooks = dataBooks.filter(book => book._id !== bookToRemoveId);
    
   
  saveToLocalStorage();
  parentNode.remove();
  if (!dataBooks || dataBooks.length === 0) {
    emptyList.classList.remove('visually-hidden');
  }
  if (dataBooks.length > 0) {
    emptyList.classList.add('visually-hidden');
  }
    shoppingList.innerHTML = '';
    renderShoppingList();
}

function saveToLocalStorage() {
  localStorage.setItem('books-data', JSON.stringify(dataBooks));
}
