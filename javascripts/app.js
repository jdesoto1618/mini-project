new Splide('.splide').mount();

const learnMoreLinks  = document.querySelectorAll('.learn-more-button');
const hamburgerMenu   = document.querySelector('.mobile-menu-toggle');

if(learnMoreLinks) {
  learnMoreLinks.forEach((link) => {
    link.setAttribute('href', 'https://clickup.com/');
  });
}

if(hamburgerMenu) {
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('menu-opened');
  });
}
