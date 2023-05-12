import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from 'firebase/auth';

const email = document.querySelector('#uemail');
const password = document.querySelector('#upassword');

const btnLogin = document.querySelector('#btnLogin');
const btnSignup = document.querySelector('#btnSignup');
const btnLogout = document.querySelector('#btnLogout');

const firebaseConfig = {
  apiKey: 'AIzaSyBOLF7-CSzRfScSFCuoeI5r8YT_1hxm0Jg',
  authDomain: 'pixel-js-cake.firebaseapp.com',
  databaseURL:
    'https://pixel-js-cake-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'pixel-js-cake',
  storageBucket: 'pixel-js-cake.appspot.com',
  messagingSenderId: '416053417126',
  appId: '1:416053417126:web:e76de3bab9e0af76599067',
};

const auth = getAuth(initializeApp(firebaseConfig));

connectAuthEmulator(auth, 'http://localhost:9099');

btnLogin.addEventListener('click', loginAccount);
btnSignup.addEventListener('click', createAccount);
btnLogout.addEventListener('click', logout);
AuthStateViewer();

async function loginAccount() {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value.trim(),
      password.value
    );
    console.log('response loginAccount', userCredential.user);
  } catch (error) {
    console.log(error);
  }
}

async function createAccount() {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value.trim(),
      password.value
    );
    console.log('response createAccount', userCredential.user);
  } catch (error) {
    console.log(error);
  }
}

async function AuthStateViewer() {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('Welcome ', user.email);
      console.log(user);
    } else {
      console.log('no user');
    }
  });
}

async function logout() {
  await signOut(auth);
}
