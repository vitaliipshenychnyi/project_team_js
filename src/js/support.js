import refs from "./refs";
import img1 from '/src/img/support-icon/action@2x.png';
import img2 from '/src/img/support-icon/internationa@2x.png';
import img3 from '/src/img/support-icon/medicins@2x.png';
import img4 from '/src/img/support-icon/projectHOPE@2x.png';
import img5 from '/src/img/support-icon/razom@2x.png';
import img6 from '/src/img/support-icon/save@2x.png';
import img7 from '/src/img/support-icon/serhiy@2x.png';
import img8 from '/src/img/support-icon/united24@2x.png';
import img9 from '/src/img/support-icon/world@2x.png';
import svgdown from '/src/img/svg/svgdown.svg';
import svgup from '/src/img/svg/svgup.svg';

const icons = [
  { id: 1,  title: 'Save the Children',
   url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis', 
   icon: img1,
   position: "01",
   className: 'icon' },
  { id: 2, title: 'Project HOPE',
   url: 'https://www.projecthope.org/country/ukraine/',
    icon: img2, position: "02",
    className: 'icon', width: 129 },
  { id: 3,  title: 'UNITED24', url: 'https://u24.gov.ua/uk',
   icon: img3,
    position: "03",
    className: 'icon' },
  { id: 4,  title: 'International Medical Corps',
   url: 'https://internationalmedicalcorps.org/country/ukraine/', 
   icon: img4,
    position: "04",
    className: 'icon' },
  { id: 5, title: 'Medicins Sans Frontieres',
   url:'https://www.msf.org/ukraine',
    icon: img5,
     position: "05",
     className: 'icon'},
  { id: 6, title: 'RAZOM', url: 'https://www.razomforukraine.org/',
   icon: img6,
    position: "06",
    className: 'icon' },
  { id: 7, title: 'Action against hunger',
   url:'https://www.actionagainsthunger.org/location/europe/ukraine/',
    icon: img7,
     position: "07",
     className: 'icon' },
  { id: 8, title: 'World vision', url: 'https://www.wvi.org/emergencies/ukraine',
   icon: img8,
    position: "08",
    className: 'icon' },
  { id: 9, title: 'Serhiy Prytula Charity Foundation', 
  url: 'https://prytulafoundation.org/en', 
  icon: img9, 
  position: "09",
  className: 'icon' },
];

const SUPPORT_ITEMS_QUERY = 6;

let itemsQuery = SUPPORT_ITEMS_QUERY;
if (window.innerWidth >= 360 && window.innerWidth <= 767) {
  itemsQuery = 4;
}


function renderRowGallery(icons) {


  const markup = icons
    .slice(0, SUPPORT_ITEMS_QUERY)
    .map(
      elem =>
        `
        <a class = "support-link"  href="${elem.url}">
          <p class ="support-p">${elem.position}</p>
          <img src="${elem.icon}" class = "support-item"   alt="" loading="lazy"/> 
         
        </a>
       
      `
    )
    .join('');
  
  refs.supportRenderEl.innerHTML = markup;

}




const iconsShow = icons.slice(0, itemsQuery);
let isChangeIcon = true;
renderRowGallery(iconsShow);
refs.supportLoadBtn.addEventListener('click', onClick);
function onClick() {



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

  if (iconsShow[0].id === 4 || iconsShow[0].id === 1) {
    isChangeIcon = !isChangeIcon;
  }

  renderRowGallery(iconsShow);

  if(isChangeIcon){
    refs.iconSvgBtnEl.innerHTML = `<use href= "${svgdown}"></use>`;
// вниз
  }else{
   
    refs.iconSvgBtnEl.innerHTML = `<use href= "${svgup}"></use>`;
// вверх
  }
console.log(refs.iconSvgBtnEl)
}
// function renderRowGallery(icons) {
//   const container = document.createElement('div');

//   icons.slice(0, SUPPORT_ITEMS_QUERY).forEach((elem) => {
//     const div = document.createElement('div');
//     const link = document.createElement('a');
//     const paragraph1 = document.createElement('p');
//     const image = document.createElement('img');
//     const paragraph2 = document.createElement('p');

//     link.href = elem.url;
//     paragraph1.textContent = elem.id;
//     image.src = elem.icon;
//     image.alt = '';
//     image.loading = 'lazy';
//     paragraph2.textContent = elem.title;

//     link.appendChild(paragraph1);
//     link.appendChild(image);
//     link.appendChild(paragraph2);
//     div.appendChild(link);
//     container.appendChild(div);
//   });

//   refs.supportRenderEl.innerHTML = '';
//   refs.supportRenderEl.appendChild(container);
// }