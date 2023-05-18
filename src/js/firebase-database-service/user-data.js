import { ref, set } from 'firebase/database';
import database from './database';

export async function writeUserDataToDatabase({
  uid: userId,
  email,
  displayName,
}) {
  set(ref(database, `users/${userId}/userData`), {
    username: displayName,
    email,
  });
}
