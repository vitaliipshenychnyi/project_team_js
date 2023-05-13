import refs from '../refs';

refs.userLoginBtn.addEventListener('click', toggleAuthForm);
refs.authFormCloseBtn.addEventListener('click', toggleAuthForm);

function toggleAuthForm() {
  document.body.classList.toggle('.auth-form-open');
  refs.authFormBackdrop.classList.toggle('is-hidden');
}

refs.signUpFormBtn.addEventListener('click', toogleLoginBtn);
refs.loginFormBtn.addEventListener('click', toogleLoginBtn);

function toogleLoginBtn(e) {
  // refs.signInFormBtn.disabled = true;
  if (e.currentTarget === refs.signUpFormBtn) {
    refs.signUpFormBtn.classList.add('active');
    refs.loginFormBtn.classList.remove('active');
  }
  if (e.currentTarget === refs.loginFormBtn) {
    refs.loginFormBtn.classList.add('active');
    refs.signUpFormBtn.classList.remove('active');
  }

  console.log(e.currentTarget);
  console.log('click');
}
