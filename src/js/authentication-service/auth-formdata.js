import refs from '../refs';
import {
  createAccount,
  loginAccount,
} from '../firebase-service/firebase-service';
import { hideAuthForm } from './auth-service';
import { LOCAL_STORAGE_TOKEN } from '../firebase-service/firebase-service';

refs.authForm.addEventListener('submit', onAuthFormData);

async function onAuthFormData(e) {
  e.preventDefault();

  if (refs.authSubmitBtn.dataset.login === 'login') {
    try {
      loginAccount()
        .then(() => {
          const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN));
          if (token) {
            hideAuthForm();
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
          const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN));
          if (token) {
            hideAuthForm();
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
