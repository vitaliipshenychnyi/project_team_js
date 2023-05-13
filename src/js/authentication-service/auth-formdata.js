import refs from '../refs';
import {
  createAccount,
  loginAccount,
  AuthStateViewer,
} from '../firebase-service/firebase-service';
import { postUserIntoDatebase } from '../firebase-service/firebase-database';

refs.authForm.addEventListener('submit', onAuthFormData);

async function onAuthFormData(e) {
  e.preventDefault();

  if (refs.authSubmitBtn.dataset.login === 'login') {
    try {
      loginAccount().then(r => console.log(r.json));
      // .then(r => postUserIntoDatebase());
    } catch (error) {
      console.log(error.message);
    }
  }

  if (refs.authSubmitBtn.dataset.login === 'signup') {
    try {
      createAccount();
    } catch (error) {
      console.log('user already registered');
      return;
    }
  }

  // AuthStateViewer()
  //   .then(console.log('--------------> logged'))
  //   .catch(e => console.log('--------------> no login'));
  // refs.authFormBackdrop.classList.add('is-hidden');
}
