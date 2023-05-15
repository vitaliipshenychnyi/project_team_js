import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  updateProfile,
} from 'firebase/auth';
import refs from '../refs';
import firebaseInitApp from './firebase-init';
import {
  showProfile,
  visibleProfileBtn,
  visibleSignupBtn,
} from '../authentication-service/auth-service';
import { postUserIntoDatebase } from './firebase-database';
import { async } from '@firebase/util';

export const auth = getAuth(firebaseInitApp);
// connectAuthEmulator(auth, 'http://localhost:9099');

export const LOCAL_STORAGE_TOKEN = 'userToken';
export const parsedToken = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_TOKEN)
);
export const user = auth.currentUser;

// export function getUserId() {
//   if (!user) {
//     return;
//   }
//   return user.uid;
// }

AuthStateViewer();

export async function loginAccount() {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      refs.emailInput.value.trim(),
      refs.passwordInput.value
    );

    visibleProfileBtn();
  } catch (error) {
    console.log(error);
  }
}

export async function createAccount() {
  try {
    const email = refs.emailInput.value.trim();
    const password = refs.passwordInput.value;
    const uName = refs.nameInput.value.trim();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // onAuthStateChanged(auth, user => console.log(user));
    await updateProfile(user, {
      displayName: uName ?? '',
    });
    writeUserToDatabase(user);
  } catch (error) {
    console.log(error);
  }
}

export async function AuthStateViewer() {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('Welcome: ', user.displayName, '! Email :', user.email);
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN,
        JSON.stringify(user.accessToken)
      );
      showProfile();
    } else {
      console.log('NO USER');
    }
  });
}

export async function logout() {
  await signOut(auth);
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  visibleSignupBtn();
}
