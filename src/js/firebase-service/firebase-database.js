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

import app from '../firebase-service/firebase-init';
import { auth } from '../firebase-service/firebase-service';
import { parsedToken } from '../firebase-service/firebase-service';

const db = getDatabase(app);
export const dbRef = ref(getDatabase());

export async function writeUserToDatabase({ uid: userId, email, displayName }) {
  set(ref(db, `users/${userId}/userData`), {
    username: displayName,
    email,
  });
}

export async function writeBookToDatabase(dataBooks) {
  try {
    const bookId = dataBooks._id;

    set(ref(db, `users/${parsedToken}/booksData/${bookId}`), dataBooks);
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
