import refs from '../refs';
import { parsedToken } from '../firebase-service/firebase-service';
import { logout } from '../firebase-service/firebase-service';
import { auth, user } from '../firebase-service/firebase-service';

refs.headerProfileEl.addEventListener('click', onProfileEl);
refs.headerlogoutBtn.addEventListener('click', onLogoutBtn);

export function checkLoginToken() {
  if (parsedToken) {
    visibleProfileBtn();
    onLoginDisplayInfo();
    console.log(auth.currentUser.displayName);

    // console.log(parsedToken);
    // console.log(auth.currentUser);
  }
}

function onLoginDisplayInfo() {
  refs.profileNameEl.textContent = auth.currentUser.displayName;
  refs.authFormBackdrop.classList.add('is-hidden');
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

export function hideAuthForm() {
  refs.authFormBackdrop.classList.add('is-hidden');
}
