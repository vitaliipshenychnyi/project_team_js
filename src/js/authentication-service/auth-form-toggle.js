import refs from '../refs';

refs.userLoginBtn.addEventListener('click', toggleAuthForm);
refs.authFormCloseBtn.addEventListener('click', toggleAuthForm);

function toggleAuthForm() {
  document.body.classList.toggle('.auth-form-open');
  refs.authFormBackdrop.classList.toggle('is-hidden');
}

refs.authSubmitBtn.dataset.login = 'signup';
refs.signUpFormBtn.addEventListener('click', toogleLoginBtn);
refs.loginFormBtn.addEventListener('click', toogleLoginBtn);

function toogleLoginBtn(e) {
  if (e.currentTarget === refs.signUpFormBtn) {
    refs.signUpFormBtn.classList.add('active');
    refs.authSubmitBtn.dataset.login = 'signup';
    refs.loginFormBtn.classList.remove('active');
    // refs.loginFormBtn.dataset.login = 'login';

    refs.authSubmitBtn.textContent = refs.signUpFormBtn.textContent;
  }
  if (e.currentTarget === refs.loginFormBtn) {
    refs.loginFormBtn.classList.add('active');
    refs.authSubmitBtn.dataset.login = 'login';
    refs.signUpFormBtn.classList.remove('active');
    // refs.signUpFormBtn.dataset.login = 'signup';

    refs.authSubmitBtn.textContent = refs.loginFormBtn.textContent;
  }
}
