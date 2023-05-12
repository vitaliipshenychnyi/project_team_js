import refs from '../refs';

refs.userLoginBtn.addEventListener('click', toggleAuthForm);
refs.authFormCloseBtn.addEventListener('click', toggleAuthForm);

function toggleAuthForm() {
  document.body.classList.toggle('.auth-form-open');
  refs.authFormBackdrop.classList.toggle('is-hidden');
}
