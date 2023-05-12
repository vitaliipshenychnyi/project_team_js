import refs from '../refs';
// import { firebasePost, firebaseRead } from '../api-firebase';

refs.authForm.addEventListener('submit', onAuthFormData);

function onAuthFormData(e) {
  e.preventDefault();
  // const userData = {};
  // const { uname, uemail, upassword } = e.target.elements;

  // userData.name = uname.value;
  // userData.email = uemail.value;
  // userData.password = upassword.value;

  // console.log(userData);

  // firebasePost(userData, 'users.json');
}
