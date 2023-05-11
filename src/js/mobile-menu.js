const burgerBtnEl = document.querySelector('.js-open-mobile-menu');
const mobileDivEl = document.querySelector('.js-mobile-menu');
const iconOpenMobileMenu = document.querySelector('.icon-burger-mobile-menu');
const iconCloseMobileMenu = document.querySelector('.icon-close-mobile-menu');

burgerBtnEl.addEventListener('click', onOpenMobileMenu);

function onOpenMobileMenu(evt) {
  if (iconCloseMobileMenu.classList.contains('is-hidden')) {
    showMobileMenu();
    iconOpenMobileMenu.classList.add('is-hidden');
    iconCloseMobileMenu.classList.remove('is-hidden');
  } else {
    hideMobileMenu();
    iconOpenMobileMenu.classList.remove('is-hidden');
    iconCloseMobileMenu.classList.add('is-hidden');
  }
}

function showMobileMenu() {
  mobileDivEl.classList.remove('is-hidden-modal');
}
function hideMobileMenu() {
  mobileDivEl.classList.add('is-hidden-modal');
}
