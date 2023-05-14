import imgMatcipura from '/src/img/card-photo/andriymatcipura@2x.jpg';
import imgPshenychnyi from '/src/img/card-photo/vitaliypshenychnyi@2x.jpg';
import imgLuzina from '/src/img/card-photo/julialuzina@2x.jpg';
import imgEnvanchenko from '/src/img/card-photo/evgenvanchenko@2x.jpg';
import imgDolyuk from '/src/img/card-photo/vitaliydolyuk@2x.jpg';
import imgPikovska from '/src/img/card-photo/lizapikovska@2x.jpg';
import imgBreslavets from '/src/img/card-photo/olexanderbreslavets@2x.jpg';
import imgYarosh from '/src/img/card-photo/hennadiyyarosh@2x.jpg';
import imgRusnak from '/src/img/card-photo/ivanrusnak@2x.jpg';

const cards = [
  {
    id: 1,
    link: 'https://github.com/vitaliipshenychnyi',
    src: imgPshenychnyi,
    alt: 'vitaliypshenychnyi',
  },
  {
    id: 2,
    link: 'https://github.com/WOWmasterJulia',
    src: imgLuzina,
    alt: 'julialuzina',
  },
  {
    id: 3,
    link: 'https://github.com/vitaliipshenychnyi',
    src: imgEnvanchenko,
    alt: 'evgenvanchenko',
  },
  {
    id: 4,
    link: 'https://github.com/Doluvit',
    src: imgDolyuk,
    alt: 'vitaliydolyuk',
  },
  {
    id: 5,
    link: 'https://github.com/Matsypura',
    src: imgMatcipura,
    alt: 'andriymatcipura',
  },
  {
    id: 6,
    link: 'https://github.com/LizaPikovskaya',
    src: imgPikovska,
    alt: 'lizapikovska',
  },
  {
    id: 7,
    link: 'https://github.com/AleksandrBreslavets',
    src: imgBreslavets,
    alt: 'olexanderbreslavets',
  },
  {
    id: 8,
    link: 'https://github.com/nedinix',
    src: imgYarosh,
    alt: 'hennadiyyarosh',
  },
  {
    id: 9,
    link: '#',
    src: imgRusnak,
    alt: 'ivanrusnak',
  },
];

const groupBtnEl = document.querySelector('.button-group-logo');
const cardListEl = document.querySelector('.card-list');
const checkIconEl = document.querySelector('.group-logo-icon');
const teamParEl = document.querySelector('.our-team')
groupBtnEl.addEventListener('click', onRollingOutClick);

function onRollingOutClick(evt) {
  if (cardListEl.childElementCount) {
    checkIconEl.classList.remove('return-check');
    // cardListEl.classList.remove('animation-appear');
    cardListEl.classList.add('is-hidden');
    teamParEl.classList.add('is-hidden');

    cardListEl.innerHTML = '';
  } else {
    checkIconEl.classList.add('return-check');
    // cardListEl.classList.add('animation-appear');
    teamParEl.classList.remove('is-hidden');
        cardListEl.classList.remove('is-hidden');
    cardListEl.innerHTML = createMArkUp(cards);
  }
}

function createMArkUp(cards) {
  return cards
    .map(({ id, link, src, alt }) => {
      return `<li class="card-item" data-id=${id}>
<a href="${link}" class="card-link">
<img src="${src}" alt="${alt}">
</a>
</li>`;
    })
    .join(' ');
}
