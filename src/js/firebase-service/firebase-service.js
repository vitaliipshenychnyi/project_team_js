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

const auth = getAuth(firebaseInitApp);

// connectAuthEmulator(auth, 'http://localhost:9099');

refs.btnLogout.addEventListener('click', logout);

AuthStateViewer();

const LOCAL_STORAGE_TOKEN = 'user-token';
const parsedToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN));

export async function loginAccount() {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      refs.emailInput.value.trim(),
      refs.passwordInput.value
    );

    console.log(userCredential.user.displayName);
    // console.log('token', userCredential.user.accessToken);
    // console.log('response user', userCredential.user);
    // console.log('response loginAccount', userCredential.user.uid);
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
    console.log('response createAccount', userCredential.user);

    updateProfile(auth.currentUser, {
      displayName: refs.nameInput.value,
      // photoURL: 'https://example.com/jane-q-user/profile.jpg',
    })
      .then(() => {
        console.log(userCredential.user.displayName);
      })
      .catch(error => {
        console.log(error.message);
        console.log('enter your name');
      });

    userCredential.user.displayName = refs.nameInput.value;
  } catch (error) {
    console.log(error);
  }
}

export async function AuthStateViewer() {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('Welcome ', user.displayName, '! email :', user.email);
      // console.log(user);
      console.log(user.displayName);
      console.log(user.accessToken);
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN,
        JSON.stringify(user.accessToken)
      );
      // refs.authFormBackdrop.style.display = 'none';
    } else {
      console.log('no user');
    }
  });
}

export async function logout() {
  await signOut(auth);
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
}
