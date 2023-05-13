
import throttle from 'lodash.throttle';
// OBSERVER

// const scrollUpBtnEl = document.querySelector('.scroll-up');
// scrollUpBtnEl.addEventListener('click', onScrollUpClick);

// function onScrollUpClick() {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth',
//   });
// }
// let options = {
//   root: null,
//   rootMargin: '300px',
//   threshold: 1.0,
// };

// let target = document.querySelector('.js-target');
// let observer = new IntersectionObserver(callback, options);
// observer.observe(target);



// function callback(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       showScrollUpBtn();
//     } else {
//       hideScrollUpBtn();
//     }
//   });
// }

// function hideScrollUpBtn() {
//   scrollUpBtnEl.classList.add('is-hidden');
// }

// function showScrollUpBtn() {
//   scrollUpBtnEl.classList.remove('is-hidden');
// }


const scrollUpBtnEl = document.querySelector(".scroll-up");
scrollUpBtnEl.addEventListener('click', onScrollUpClick);

function onScrollUpClick() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}
 window.addEventListener('scroll', throttle(showScrollUpButton,1000));
 
function showScrollUpButton(evt) {
    console.log(evt);
    const scrollY = window.scrollY || document.documentElement.scrollTop;
   scrollY > 3000 ? showScrollUpBtn() : hideScrollUpBtn(); 
}

function hideScrollUpBtn() {
 scrollUpBtnEl.classList.add("is-hidden") 
}

function showScrollUpBtn() {
  scrollUpBtnEl.classList.remove("is-hidden");
}