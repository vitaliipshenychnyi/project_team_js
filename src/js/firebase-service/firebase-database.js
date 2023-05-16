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
// import { userId } from '../firebase-service/firebase-service';

const db = getDatabase(app);
// console.log(userId);

export async function writeUserToDatabase({ uid: userId, email, displayName }) {
  set(ref(db, `users/${userId}/userData`), {
    username: displayName,
    email,
  });
}

// console.log(db);

// export async function postBookToDatabase({ userId, dataBooks }) {
//   const { _id, book_image, title, description, author, buy_links } = dataBooks;
//   try {
//     update(ref(db), updates);
//   } catch (error) {
//     console.log(error.message);
//   }
//   const postData = {
//     film: currentFilmId,
//   };
//   const updates = {};
//   updates[`users/${id}/dataBooks/${dataBooks}`];

//   return notifySuccessMessage('Film has been added');
// }

// //

// function deleteDataInDatabase({ userId, reference, endpoint }) {
//   set(ref(db, `users/${userId}/${reference}/${endpoint}`), null);
//   notifySuccessMessage('Film has been removed');
// }

// //
// function getUserDataById(id, refLink) {
//   const resp = ref(db, `users/${id}/userdata`);

//   onValue(resp, data => {
//     return data.val();
//   });
// }

// function getBookFromDatabase(userId, reference, bookId) {
//   get(child(ref(db), `users/${userId}/${reference}/${bookId}`))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//       }
//     })

//     .catch(error => {
//       console.error(error);
//     });
// }
