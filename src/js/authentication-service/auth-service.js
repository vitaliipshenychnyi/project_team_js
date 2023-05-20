import refs from '../refs';
import { logout } from '../firebase-authentication/firebase-service';

refs.headerProfileEl.addEventListener('click', onProfileEl);
refs.mHeaderProfileEl.addEventListener('click', onProfileEl);
refs.mheaderSignupEl.addEventListener('click', showAuthForm);
refs.headerlogoutBtn.addEventListener('click', onLogoutBtn);
refs.mheaderlogoutBtn.addEventListener('click', onLogoutBtn);

export async function showProfile(name) {
  visibleProfileBtn();
  showLoginProfileName(name);
  showShoppingListBtn();
  hideAuthForm();
  disabledShoppingBtn(false);
}
export function onLogoutBtn() {
  logout();
  visibleSignupBtn();
  hideShoppingListBtn();
  disabledShoppingBtn(true);
}

export function showLoginProfileName(name) {
  refs.profileNameEl.textContent = name;
  refs.mProfileNameEl.textContent = name;
}

export function visibleSignupBtn() {
  showEl(refs.headerSignupEl);
  showEl(refs.mheaderSignupEl);

  hideEl(refs.headerProfileEl);
  hideEl(refs.mHeaderProfileEl);
  hideEl(refs.mheaderlogoutBtn);
}

export function visibleProfileBtn() {
  showEl(refs.headerProfileEl);
  showEl(refs.mHeaderProfileEl);
  showEl(refs.mheaderlogoutBtn);

  hideEl(refs.headerSignupEl);
  hideEl(refs.mheaderSignupEl);
}

export function onProfileEl() {
  refs.headerlogoutBtn.classList.toggle('active');
}

export function hideAuthForm() {
  hideEl(refs.authFormBackdrop);
  document.body.style.overflow = '';
}
export function showAuthForm() {
  showEl(refs.authFormBackdrop);
}

function hideEl(elem) {
  elem.classList.add('is-hidden');
}

function showEl(elem) {
  elem.classList.remove('is-hidden');
}

export function hideShoppingListBtn() {
  refs.headerShoppingBtn.style.display = 'none';
  refs.footerShoppingBtn.style.display = 'none';
}

export function showShoppingListBtn() {
  refs.headerShoppingBtn.style.display = 'block';
  refs.footerShoppingBtn.style.display = 'inline-flex';
}

export function disabledShoppingBtn(boolean) {
  refs.addRemoveShoppingBtn.disabled = boolean;
}
