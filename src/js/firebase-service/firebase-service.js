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
  checkLoginToken,
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
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      refs.emailInput.value.trim(),
      refs.passwordInput.value
    );
    updateProfile(user, {
      displayName: refs.nameInput.value.trim(),
      // photoURL: 'https://example.com/jane-q-user/profile.jpg',
    });
    AuthStateViewer();
    postUserIntoDatebase(user);
  } catch (error) {
    console.log(error.message);
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
      // userId = user.uid;
      checkLoginToken();
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
