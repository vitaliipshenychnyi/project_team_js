import refs from '../refs';
import { createAccount, loginAccount } from './firebase-login';

refs.authForm.addEventListener('submit', onAuthFormData);

function onAuthFormData(e) {
  e.preventDefault();

  if (refs.authSubmitBtn.dataset.login === 'login') {
    loginAccount();
    console.log('welcome');
  }

  if (refs.authSubmitBtn.dataset.login === 'signup') {
    createAccount();
    console.log('user already registered');
  }
  // const userData = {};
  // const { uname, uemail, upassword } = e.target.elements;

  // userData.name = uname.value;
  // userData.email = uemail.value;
  // userData.password = upassword.value;

  // console.log(userData);

  // firebasePost(userData, 'users.json');
}
