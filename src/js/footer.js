import refs from './refs';

const profiles = [
  { name: 'name', image: '' },
  { name: 'name', image: '' },
  { name: 'name', image: '' },
  { name: 'name', image: '' },
  { name: 'name', image: '' },
  { name: 'name', image: '' },
  { name: 'name', image: '' },
  { name: 'name', image: '' },
  { name: 'name', image: '' },
  { name: 'name', image: '' },
];

export default function onPixelJsCakeBtn() {
  refs.pixelJsCakeBtn.addEventListener('click', displayFooterProfilesEl);
  // refs.authFormCloseBtn.addEventListener('click', toggleAuthForm);
}

function displayFooterProfilesEl() {
  refs.footerProfilesEl.classList.toggle('is-hidden');
}

function renderProfileList() {
  refs.footerProfilesEl.innerHTML = profiles
    .map(
      profile =>
        `<li class="profile-card"><span class="profile-icon"></span></li>`
    )
    .join('');
}

renderProfileList();
