import refs from '../refs';
import {
  createAccount,
  loginAccount,
} from '../firebase-service/firebase-service';
import { hideAuthForm } from './auth-service';

refs.authForm.addEventListener('submit', onAuthFormData);

async function onAuthFormData(e) {
  e.preventDefault();

  if (refs.authSubmitBtn.dataset.login === 'login') {
    try {
      loginAccount()
        .then(() => {
          hideAuthForm();
          refs.authForm.reset();
        })
        .catch()
        .finally();
    } catch (error) {
      console.log(error.message);
    }
  }

  if (refs.authSubmitBtn.dataset.login === 'signup') {
    try {
      createAccount().then(() => {
        hideAuthForm();
        refs.authForm.reset();
      });
    } catch (error) {
      console.log('user already registered');
      return;
    }
  }
}
