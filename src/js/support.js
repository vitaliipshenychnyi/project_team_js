import refs from "./refs";
const icons = [
    { id: '01',  title: 'Save the Children', url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis', icon: 'icon1.svg', position: 1 },
    { id: '02', title: 'Project HOPE', url: 'https://www.projecthope.org/country/ukraine/', icon: 'icon2.svg', position: 2 },
    { id: '03',  title: 'UNITED24', url: 'https://u24.gov.ua/uk', icon: 'icon3.svg', position: 3 },
    { id: '04',  title: 'International Medical Corps', url: 'https://internationalmedicalcorps.org/country/ukraine/', icon: 'icon4.svg', position: 4 },
    { id: '05', title: 'Medicins Sans Frontieres', url: 'https://www.msf.org/ukraine', icon: 'icon5.svg', position: 5 },
    { id: '06', title: 'RAZOM', url: 'https://www.razomforukraine.org/', icon: 'icon6.svg', position: 6 },
    { id: '07', title: 'Action against hunger', url: 'https://www.actionagainsthunger.org/location/europe/ukraine/', icon: 'icon7.svg', position: 7 },
    { id: '08', title: 'World vision', url: 'https://www.wvi.org/emergencies/ukraine', icon: 'icon8.svg', position: 8 },
    { id: '09', title: 'Serhiy Prytula Charity Foundation', url: 'https://prytulafoundation.org/en', icon: 'icon9.svg', position: 9 },
  ];






console.log('support');
  function renderRowGallery(row) {
    const sortedRow = row.sort((a, b) => a.position - b.position);
    const limitedRow = sortedRow.slice(0, 6);
    let markup = limitedRow.map(elem =>
          `<div class="support">
                  <a  href="${elem.url}">
                      <img src="${elem.icon}" alt="" loading="lazy"/> 
                      <p>${elem.title}</p>
                  </a>
              </div>`
              ).join('');
              refs.supportEl.insertAdjacentHTML('beforebegin', markup);

  };


renderRowGallery(icons);

const button = document.createElement('support-button'); 
button.addEventListener('click', swapElements); 


function swapElements() { 
    const hiddenElements = icons.slice(6).filter(elem => elem.position > 6); 
    const shiftedElements = icons.slice(0, 6).filter(elem => elem.position >= 0 && elem.position <= 6); 
   
    hiddenElements.forEach((elem, index) => { 
      const tempPosition = elem.position; 
      elem.position = shiftedElements[index].position; 
      shiftedElements[index].position = tempPosition; 
    }); 
   
    visibleElements = [...shiftedElements, ...hiddenElements]; 
    renderRowGallery(); 
  } 
   

   
  document.body.appendChild(button); 
  // renderRowGallery();







