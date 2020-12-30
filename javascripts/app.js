document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    perPage: 2,
    breakpoints: {
      1023: {
        perPage: 1,
      }
    }
  }).mount();

  const learnMoreLinks = document.querySelectorAll('.learn-more-button');
  const hamburgerMenu = document.querySelector('.mobile-menu-toggle');
  const menuDrawer = document.querySelector('.mobile-menu-drawer');

  if (learnMoreLinks) {
    learnMoreLinks.forEach((link) => {
      link.setAttribute('href', 'https://clickup.com/');
    });
  }

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('menu-opened');
      if (menuDrawer) {
        menuDrawer.classList.toggle('drawer-opened');
      }
    });
  }
});
