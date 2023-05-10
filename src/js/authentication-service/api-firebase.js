// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBOLF7-CSzRfScSFCuoeI5r8YT_1hxm0Jg',
  authDomain: 'pixel-js-cake.firebaseapp.com',
  projectId: 'pixel-js-cake',
  storageBucket: 'pixel-js-cake.appspot.com',
  messagingSenderId: '416053417126',
  appId: '1:416053417126:web:e76de3bab9e0af76599067',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
