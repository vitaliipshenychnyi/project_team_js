import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from 'firebase/auth';
import refs from '../refs';

// const emailInput = document.getElementById('uemail');
// const passwordInput = document.getElementById('upassword');

// const btnLogin = document.getElementById('btnLogin');
// const btnSignup = document.getElementById('btnSignup');
// const btnLogout = document.getElementById('btnLogout');

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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

// connectAuthEmulator(auth, 'http://localhost:9099');

// refs.btnLogin.addEventListener('click', loginAccount);
// refs.btnSignup.addEventListener('click', createAccount);
refs.btnLogout.addEventListener('click', logout);
AuthStateViewer();

export async function loginAccount() {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      refs.emailInput.value.trim(),
      refs.passwordInput.value
    );
    console.log('response loginAccount', userCredential.user);
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
