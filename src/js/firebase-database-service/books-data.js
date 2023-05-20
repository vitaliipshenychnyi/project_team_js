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
import { notifyDeletedBook, notifyAddedBook, emptyShoppingList } from './ui';

export const databaseRef = ref(getDatabase());
console.log(databaseRef);

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

export const deleteBookFromDatabase = async id =>
  set(ref(database, `users/${parsedToken}/booksData/${id}`), null)
    .then(() => {
      notifyDeletedBook();
    })
    .catch(error => {
      console.log(error);
    });

export async function dataBooksFromDatabase() {
  const response = await get(
    child(databaseRef, `users/${parsedToken}/booksData`)
  )
    .then(snapshot => {
      if (snapshot.exists()) {
        const objectData = snapshot.val();
        const result = Object.keys(objectData).map(key => objectData[key]);
        console.log('result', result);
        return result;
      } else {
        emptyShoppingList();
      }
    })
    .catch(error => {
      console.error(error);
    });

  return response;
}
