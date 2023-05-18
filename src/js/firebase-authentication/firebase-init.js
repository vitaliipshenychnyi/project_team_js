import { initializeApp } from 'firebase/app';
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

export default initializeApp(firebaseConfig);
