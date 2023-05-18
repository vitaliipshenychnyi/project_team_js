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
  showProfile,
  hideShoppingListBtn,
} from '../authentication-service/auth-service';
import { writeUserDataToDatabase } from '../firebase-database-service/firebase-database';
import {
  showLoginError,
  showLoginState,
  showLogoutState,
  showCreateAccountError,
} from '../authentication-service/auth-ui';

export const auth = getAuth(firebaseInitApp);
// connectAuthEmulator(auth, 'http://localhost:9099');

const LOCAL_STORAGE_TOKEN = 'userToken';
export const parsedToken = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_TOKEN)
);

export const user = auth.currentUser;

AuthStateViewer();

refs.authForm.addEventListener('submit', onAuthFormData);

async function onAuthFormData(e) {
  e.preventDefault();

  if (refs.authSubmitBtn.dataset.login === 'login') {
    try {
      loginAccount()
        .then(() => {
          if (parsedToken) {
            refs.authForm.reset();
          }
        })
        .catch(e => console.log(e.message));
    } catch (error) {
      console.log(error.message);
    }
  }

  if (refs.authSubmitBtn.dataset.login === 'signup') {
    try {
      createAccount()
        .then(() => {
          if (parsedToken) {
            refs.authForm.reset();
          }
        })
        .catch(e => console.log(e.message));
    } catch (error) {
      console.log('user already registered');
      return;
    }
  }
}

export async function loginAccount() {
  try {
    const email = refs.emailInput.value.trim();
    const password = refs.passwordInput.value;
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    await showLoginState(user.displayName);
    await showProfile(user.displayName);
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
    await writeUserDataToDatabase(user);
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
  visibleSignupBtn();
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
}
