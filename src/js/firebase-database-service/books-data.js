import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
  child,
  get,
  update,
} from 'firebase/database';
import database from './database';
import { parsedToken } from '../firebase-authentication/firebase-service';
import { notifyDeletedBook, notifyAddedBook } from './ui';

export const databaseRef = ref(getDatabase());
console.log(databaseRef);

export async function getBooksFromDatabase(userToken) {
  onValue(ref(database, `users/${userToken}/booksData/`), snapshot =>
    console.log(snapshot.val())
  );
}

export async function writeBookToDatabase(dataBooks) {
  const { _id, book_image, title, list_name, description, author, buy_links } =
    dataBooks;
  try {
    set(ref(database, `users/${parsedToken}/booksData/${_id}`), {
      _id,
      book_image,
      title,
      list_name,
      description,
      author,
      buy_links,
    }).then(() => {
      notifyAddedBook(title);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBookFromDatabase(id) {
  set(ref(database, `users/${parsedToken}/booksData/${id}`), null)
    .then(() => {
      notifyDeletedBook();
    })
    .catch(error => {
      console.log(error);
    });
}

export async function arrBooksFromDatabase() {
  const response = await get(
    child(databaseRef, `users/${parsedToken}/booksData`)
  )
    .then(snapshot => {
      if (snapshot.exists()) {
        // dataBooks = snapshot.val();
        // console.log('snapshot:', snapshot.val());
        const objectData = snapshot.val();
        console.log('snapshot:', objectData);
        const result = Object.keys(objectData).map(key => objectData[key]);
        console.log('result', result);
        // return result;
        return result;
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });

  return response;
}

export async function writeDataBooks() {
  const books = await arrBooksFromDatabase();
  //  console.log(books);
  return books;
  // console.log('books', books);
  // dataBooks.push(books.map(book => book));
  // console.log(dataBooks);
  // console.log('databooks', dataBooks);
}

export async function fetchBooksFromDatabase() {}
