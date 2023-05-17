import refs from '../refs';

refs.userLoginBtn.addEventListener('click', toggleAuthForm);
refs.authFormCloseBtn.addEventListener('click', toggleAuthForm);
refs.signUpFormBtn.addEventListener('click', toogleLoginBtn);
refs.loginFormBtn.addEventListener('click', toogleLoginBtn);
refs.authSubmitBtn.dataset.login = 'signup';

function toggleAuthForm() {
  toogleBodyOverflow();
  refs.authFormBackdrop.classList.toggle('is-hidden');
}

function toogleBodyOverflow() {
  const bodyOverflowHidden = document.body.style.overflow;
  bodyOverflowHidden === 'hidden'
    ? (document.body.style = null)
    : (document.body.style.overflow = 'hidden');
}

function toogleLoginBtn(e) {
  if (e.currentTarget === refs.signUpFormBtn) {
    onSignUpFormBtn();
  }
  if (e.currentTarget === refs.loginFormBtn) {
    onLoginFormBtn();
  }
}

function onSignUpFormBtn() {
  refs.signUpFormBtn.classList.add('active');
  refs.authSubmitBtn.dataset.login = 'signup';
  refs.loginFormBtn.classList.remove('active');

  refs.nameInput.style.display = 'block';
  refs.nameInput.disabled = false;

  refs.authSubmitBtn.textContent = refs.signUpFormBtn.textContent;
}

function onLoginFormBtn() {
  refs.loginFormBtn.classList.add('active');
  refs.authSubmitBtn.dataset.login = 'login';
  refs.signUpFormBtn.classList.remove('active');

  refs.nameInput.style.display = 'none';
  refs.nameInput.disabled = true;
  refs.authSubmitBtn.textContent = refs.loginFormBtn.textContent;
}
