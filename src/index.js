// import './js/test'; ПШЕНИЧНИЙ (не чипати)
import './js/refs';
import './js/test';
import './js/categories-list'
import './js/API-main-gallary'


refs.userLoginBtn.addEventListener('click', toggleAuthForm);
refs.authFormCloseBtn.addEventListener('click', toggleAuthForm);

function toggleAuthForm() {
  document.body.classList.toggle('.auth-form-open');
  refs.authFormBackdrop.classList.toggle('is-hidden');
}
