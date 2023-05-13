import refs from '../refs';
import { parsedToken } from '../firebase-service/firebase-service';
import { logout } from '../firebase-service/firebase-service';

refs.headerProfileEl.addEventListener('click', onProfileEl);
refs.headerlogoutBtn.addEventListener('click', onLogoutBtn);

export function checkLoginToken() {
  if (parsedToken) {
    visibleProfileBtn();
    refs.authFormBackdrop.classList.add('is-hidden');
  }
}

export function visibleSignupBtn() {
  refs.headerSignupEl.classList.remove('is-hidden');
  refs.headerProfileEl.classList.add('is-hidden');
}

export function visibleProfileBtn() {
  refs.headerProfileEl.classList.remove('is-hidden');
  refs.headerSignupEl.classList.add('is-hidden');
}

export function onProfileEl() {
  refs.headerlogoutBtn.classList.toggle('active');
}

export function onLogoutBtn() {
  logout();
  // checkLoginToken;
  visibleSignupBtn;
}
