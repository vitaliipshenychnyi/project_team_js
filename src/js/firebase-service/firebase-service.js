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

export const auth = getAuth(firebaseInitApp);
// connectAuthEmulator(auth, 'http://localhost:9099');

const LOCAL_STORAGE_TOKEN = 'user-token';
export const parsedToken = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_TOKEN)
);
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
    updateProfile(auth.currentUser, {
      displayName: refs.nameInput.value.trim(),
      // photoURL: 'https://example.com/jane-q-user/profile.jpg',
    });
    postUserIntoDatebase(userCredential.user);
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
