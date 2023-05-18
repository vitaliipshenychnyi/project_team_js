const burgerBtnEl = document.querySelector('.js-open-mobile-menu');
const mobileDivEl = document.querySelector('.js-mobile-menu');
const iconOpenMobileMenu = document.querySelector('.icon-burger-mobile-menu');
const iconCloseMobileMenu = document.querySelector('.icon-close-mobile-menu');

burgerBtnEl.addEventListener('click', onOpenMobileMenu);

function onOpenMobileMenu(evt) {
  window.addEventListener('keydown', closeMenuByEsc);
  function closeMenuByEsc(evt) {
    if (evt.code === 'Escape') hideMobileMenu();
    window.removeEventListener('keydown', closeMenuByEsc);
  }

  if (iconCloseMobileMenu.classList.contains('is-hidden')) {
    showMobileMenu();
  } else {
    hideMobileMenu();
  }
}
function showMobileMenu() {
  mobileDivEl.classList.remove('is-hidden-modal');
  iconOpenMobileMenu.classList.add('is-hidden');
  iconCloseMobileMenu.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}
function hideMobileMenu() {
  mobileDivEl.classList.add('is-hidden-modal');
  iconOpenMobileMenu.classList.remove('is-hidden');
  iconCloseMobileMenu.classList.add('is-hidden');
  document.body.style.overflowY = '';
}
