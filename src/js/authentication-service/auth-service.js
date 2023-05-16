import refs from '../refs';
import { parsedToken } from '../firebase-service/firebase-service';
import { logout } from '../firebase-service/firebase-service';
import { auth, user } from '../firebase-service/firebase-service';

refs.headerProfileEl.addEventListener('click', onProfileEl);
refs.mHeaderProfileEl.addEventListener('click', onProfileEl);
refs.mheaderSignupEl.addEventListener('click', showAuthForm);
refs.headerlogoutBtn.addEventListener('click', onLogoutBtn);

refs.mheaderlogoutBtn.addEventListener('click', onLogoutBtn);

export function checkLoginToken() {
  if (parsedToken) {
    visibleProfileBtn();
    onLoginDisplayInfo();
    // console.log(user.displayName);

    // console.log(parsedToken);
    // console.log(auth.currentUser);
    // if (auth.currentUser) {
    // refs.authFormBackdrop.classList.add('is-hidden');
    // }
  }
}
if (user) {
  console.log(user);
}

function onLoginDisplayInfo() {
  refs.profileNameEl.textContent = auth.currentUser.displayName;
  refs.mProfileNameEl.textContent = auth.currentUser.displayName;
  // console.log(object);
}

export function visibleSignupBtn() {
  // refs.headerSignupEl.classList.remove('is-hidden');
  // refs.mheaderSignupEl.classList.remove('is-hidden');
  showEl(refs.headerSignupEl);
  showEl(refs.mheaderSignupEl);
  // refs.headerProfileEl.classList.add('is-hidden');
  // refs.mHeaderProfileEl.classList.add('is-hidden');
  // refs.mheaderlogoutBtn.classList.add('is-hidden');
  hideEl(refs.headerProfileEl);
  hideEl(refs.mHeaderProfileEl);
  hideEl(refs.mheaderlogoutBtn);
}

export function visibleProfileBtn() {
  showEl(refs.headerProfileEl);
  showEl(refs.mHeaderProfileEl);
  // refs.headerProfileEl.classList.remove('is-hidden');
  // refs.mHeaderProfileEl.classList.remove('is-hidden');
  hideEl(refs.headerSignupEl);
  hideEl(refs.mheaderSignupEl);
  showEl(refs.mheaderlogoutBtn);
  // refs.headerSignupEl.classList.add('is-hidden');
  // refs.mheaderSignupEl.classList.add('is-hidden');
  // refs.mheaderlogoutBtn.classList.remove('is-hidden');
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
export function showAuthForm() {
  refs.authFormBackdrop.classList.remove('is-hidden');
}

function hideEl(elem) {
  elem.classList.add('is-hidden');
}

function showEl(elem) {
  elem.classList.remove('is-hidden');
}
