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
import { writeUserToDatabase } from './firebase-database';
import { showProfile } from '../authentication-service/auth-service';
import {
  showLoginError,
  showLoginState,
  showLogoutState,
  showCreateAccountError,
} from '../authentication-service/auth-ui';
import { hideShoppingListBtn } from '../authentication-service/auth-service';

export const auth = getAuth(firebaseInitApp);
// connectAuthEmulator(auth, 'http://localhost:9099');

const LOCAL_STORAGE_TOKEN = 'userToken';
export const parsedToken = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_TOKEN)
);
export const user = auth.currentUser;

AuthStateViewer();

export async function loginAccount() {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      refs.emailInput.value.trim(),
      refs.passwordInput.value
    );
    showProfile(user.displayName);
    showLoginState(auth.currentUser.displayName);
    visibleProfileBtn();
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
}

export async function createAccount() {
  try {
    const email = refs.emailInput.value.trim();
    const password = refs.passwordInput.value;
    const uName = refs.nameInput.value.trim();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, {
      displayName: uName,
    });
    await showProfile(auth.currentUser.displayName);
    await showLoginState(auth.currentUser.displayName);
    await writeUserToDatabase(user);
  } catch (error) {
    showCreateAccountError(error);
  }
}

export async function AuthStateViewer() {
  onAuthStateChanged(auth, user => {
    if (user) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(user.uid));
      showProfile(user.displayName);
    } else {
      hideShoppingListBtn();
    }
  });
}

export async function logout() {
  await signOut(auth);
  showLogoutState();
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  visibleSignupBtn();
}
