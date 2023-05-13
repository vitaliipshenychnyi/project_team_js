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

const auth = getAuth(firebaseInitApp);
// connectAuthEmulator(auth, 'http://localhost:9099');
AuthStateViewer();

const LOCAL_STORAGE_TOKEN = 'user-token';
export const parsedToken = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_TOKEN)
);

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
    console.log('response createAccount', userCredential.user);

    await updateProfile(auth.currentUser, {
      displayName: refs.nameInput.value.trim(),
      // photoURL: 'https://example.com/jane-q-user/profile.jpg',
    })
      .then(() => {
        // console.log(userCredential.user.displayName);
      })
      .catch(error => {
        console.log(error.message);
      });

    userCredential.user.displayName = refs.nameInput.value;
  } catch (error) {
    console.log(error);
  }
}

export async function AuthStateViewer() {
  onAuthStateChanged(auth, user => {
    if (user) {
      refs.profileNameEl.textContent = user.displayName;
      console.log('Welcome ', user.displayName, '! email :', user.email);
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN,
        JSON.stringify(user.accessToken)
      );
      checkLoginToken();
    } else {
      console.log('no user');
    }
  });
}

export async function logout() {
  await signOut(auth);
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  visibleSignupBtn();
}
