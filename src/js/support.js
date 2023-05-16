import refs from "./refs";
import img1 from '/src/img/icon-support-logo/stc_logo_2x.png';
import img2 from '/src/img/icon-support-logo/hope_logo_2x.png';
import img3 from '/src/img/icon-support-logo/imc_logo_2x.png';
import img4 from '/src/img/icon-support-logo/razom_logo_2x.png';
import img5 from '/src/img/icon-support-logo/aah_logo_2x.png';
import img6 from '/src/img/icon-support-logo/pritula_logo_2x.png';
import img7 from '/src/img/icon-support-logo/msf_logo_2x.png';
import img8 from '/src/img/icon-support-logo/wv_logo_2x.png';
import img9 from '/src/img/icon-support-logo/united_logo_2x.png';

import svgdown from '/src/img/svg/svgdown.svg';
import svgup from '/src/img/svg/svgup.svg';

const icons = [
  {
    id: 1,
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    icon: img1,
    position: '01',
    className: 'icon',
    width: '131',
    height: '32',
    class: 'save-children',
  },
  {
    id: 2,
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    icon: img2,
    position: '02',
    className: 'icon',
    width: '62',
    height: '32',
    class: 'project-hope',
  },
  {
    id: 3,
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    icon: img3,
    position: '03',
    className: 'icon',
    width: '101',
    height: '32',
    class: 'medical-corps',
  },
  {
    id: 4,
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    icon: img4,
    position: '04',
    className: 'icon',
    width: '82',
    height: '32',
    class: 'razom',
  },
  {
    id: 5,
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    icon: img5,
    position: '05',
    className: 'icon',
    width: '55',
    height: '32',
    class: 'against-hunger',
  },
  {
    id: 6,
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    icon: img6,
    position: '06',
    className: 'icon',
    width: '115',
    height: '32',
    class: 'serhiy-prytula',
  },
  {
    id: 7,
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    icon: img7,
    position: '07',
    className: 'icon',
    width: '129',
    height: '35',
    class: 'medicins-sans',
  },
  {
    id: 8,
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    icon: img8,
    position: '08',
    className: 'icon',
    width: '81',
    height: '39',
    class: 'world-vision',
  },
  {
    id: 9,
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    icon: img9,
    position: '09',
    className: 'icon',
    width: '149',
    height: '15',
  },
];

const SUPPORT_ITEMS_QUERY = 6;
let stopper = 4;

let itemsQuery = SUPPORT_ITEMS_QUERY;
if (window.innerWidth >= 360 && window.innerWidth <= 767) {
  itemsQuery = 4;
  stopper = 6;
}

function renderRowGallery(icons) {
  const markup = icons
    .slice(0, SUPPORT_ITEMS_QUERY)
    .map(elem =>
        `<a class = "support-link link"  href="${elem.url}">
          ${elem.position}
          <img src="${elem.icon}" class = "support-item" width="${elem.width}" height="${elem.height}"  alt="" loading="lazy"/> 
         </a>`)
    .join('');
  refs.supportRenderEl.innerHTML = markup;
}

const iconSupport = document.querySelector('.support-icon');
const iconsShow = icons.slice(0, itemsQuery);
let isChangeIcon = true;
renderRowGallery(iconsShow);
refs.supportLoadBtn.addEventListener('click', onClick);
function onClick() {

  if (isChangeIcon) {
    if (iconsShow[iconsShow.length - 1].id === 9) {
      return isChangeIcon = false;
    }
    const indexLastElement = icons.findIndex((element) => element.id === iconsShow[iconsShow.length - 1].id);
    iconsShow.push(icons[indexLastElement + 1]);
    iconsShow.shift(); // delete first element
  } else {
    if (iconsShow[0].id === 1) {
      return isChangeIcon = true;
    }
    const indexFirstElement = icons.findIndex((element) => element.id === iconsShow[0].id);
    iconsShow.unshift(icons[indexFirstElement - 1]);
    iconsShow.pop(); // delete last element
  }

  if (iconsShow[0].id === stopper || iconsShow[0].id === 1) {
    isChangeIcon = !isChangeIcon;
  }

  renderRowGallery(iconsShow);

  if(isChangeIcon){
    console.log(iconSupport.classList);
           iconSupport.classList.remove('up');
// вниз
  }else{
    iconSupport.classList.add('up');
// вверх
  }
console.log(refs.iconSvgBtnEl)
}

