import refs from "./refs";
const icons = [
  { id: 1,  title: 'Save the Children', url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis', icon: 'icon1.svg', position: 1 },
  { id: 2, title: 'Project HOPE', url: 'https://www.projecthope.org/country/ukraine/', icon: 'icon2.svg', position: 2 },
  { id: 3,  title: 'UNITED24', url: 'https://u24.gov.ua/uk', icon: 'icon3.svg', position: 3 },
  { id: 4,  title: 'International Medical Corps', url: 'https://internationalmedicalcorps.org/country/ukraine/', icon: 'icon4.svg', position: 4 },
  { id: 5, title: 'Medicins Sans Frontieres', url: 'https://www.msf.org/ukraine', icon: 'icon5.svg', position: 5 },
  { id: 6, title: 'RAZOM', url: 'https://www.razomforukraine.org/', icon: 'icon6.svg', position: 6 },
  { id: 7, title: 'Action against hunger', url: 'https://www.actionagainsthunger.org/location/europe/ukraine/', icon: 'icon7.svg', position: 7 },
  { id: 8, title: 'World vision', url: 'https://www.wvi.org/emergencies/ukraine', icon: 'icon8.svg', position: 8 },
  { id: 9, title: 'Serhiy Prytula Charity Foundation', url: 'https://prytulafoundation.org/en', icon: 'icon9.svg', position: 9 },
];

const SUPPORT_ITEMS_QUERY = 6;

function renderRowGallery() {
  const markup = iconsShow
    .slice(0, SUPPORT_ITEMS_QUERY)
    .map(
      elem =>
        `<div class="support-render">
                  <a  href="${elem.url}">
                      <p>${elem.id}</p>
                      <img src="${elem.icon}" alt="" loading="lazy"/> 
                      <p>${elem.title}</p>
                  </a>
              </div>`
    )
    .join('');
  
  refs.supportEl.insertAdjacentHTML('beforeEnd', markup);
  console.log(refs.supportEl);
}
refs.supportLoadBtn.addEventListener('click', onClick);

const iconsShow = icons.slice(0, 6);
let isChangeIcon = true;


function onClick() {
console.log(iconsShow)
console.log(isChangeIcon)
  if (isChangeIcon) {
    if (iconsShow[iconsShow.length - 1].id == 9) {
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
}
  
renderRowGallery(icons);