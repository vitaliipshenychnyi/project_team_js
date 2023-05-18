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


import { parsedToken } from '../firebase-authentication/firebase-service';

export const dbRef = ref(getDatabase());

export async function writeBookToDatabase(dataBooks) {
  try {
    set(ref(db, `users/${parsedToken}/booksData/${dataBooks._id}`), {
      book_image,
      title,
      list_name,
      description,
      author,
      buy_links,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getBooksFromDatabase(dataBooks) {
  await get(child(dbRef, `users/${parsedToken}/booksData`))
    .then(snapshot => {
      if (snapshot.exists()) {
        dataBooks = snapshot.val();
        console.log('snapshot:', dataBooks);
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export async function deleteBookFromDatabase(dataBooks) {
  const bookId = dataBooks._id;
  set(ref(db, `users/${parsedToken}/booksData/${bookId}`), null)
    .then(() => {
      console.log('after delete', dataBooks);
    })
    .catch(error => {
      console.log(error);
    });
}
