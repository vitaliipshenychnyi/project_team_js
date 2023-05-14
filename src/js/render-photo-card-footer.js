const cards = [
  {
    id: 1,
    link: 'https://github.com/vitaliipshenychnyi',
    src: './img/card-photo/vitaliypshenychnyi@2x.jpg',
    alt: 'vitaliypshenychnyi',
  },
  {
    id: 2,
    link: 'https://github.com/WOWmasterJulia',
    src: './img/card-photo/julialuzina@2x.jpg',
    alt: 'julialuzina',
  },
  {
    id: 3,
    link: 'https://github.com/vitaliipshenychnyi',
    src: './img/card-photo/evgenvanchenko@2x.jpg',
    alt: 'evgenvanchenko',
  },
  {
    id: 4,
    link: 'https://github.com/Doluvit',
    src: './img/card-photo/vitaliydolyuk@2x.jpg',
    alt: 'vitaliydolyuk',
  },
  {
    id: 5,
    link: 'https://github.com/Matsypura',
    src: './img/card-photo/andriymatcipura@2x.jpg',
    alt: 'andriymatcipura',
  },
  {
    id: 6,
    link: 'https://github.com/LizaPikovskaya',
    src: './img/card-photo/lizapikovska@2x.jpg',
    alt: 'lizapikovska',
  },
  {
    id: 7,
    link: 'https://github.com/AleksandrBreslavets',
    src: './img/card-photo/olexanderbreslavets@2x.jpg',
    alt: 'olexanderbreslavets',
  },
  {
    id: 8,
    link: 'https://github.com/nedinix',
    src: './img/card-photo/hennadiyyarosh@2x.jpg',
    alt: 'hennadiyyarosh',
  },
  {
    id: 9,
    link: '#',
    src: './img/card-photo/ivanrusnak@2x.jpg',
    alt: 'ivanrusnak',
  },
];

const groupBtnEl = document.querySelector('.button-group-logo');
const cardListEl = document.querySelector('.card-list');
const checkIconEl = document.querySelector('.group-logo-icon');
groupBtnEl.addEventListener('click', onRollingOutClick);

function onRollingOutClick(evt) {
  if (cardListEl.childElementCount) {
    checkIconEl.classList.remove('return-check');
    cardListEl.classList.remove('animation-appear');
    cardListEl.innerHTML = '';
  } else {
    checkIconEl.classList.add('return-check');
    cardListEl.classList.add('animation-appear');
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
