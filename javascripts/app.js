new Splide('.splide').mount();

const learnMoreLinks = document.querySelectorAll('.learn-more-button');
if(learnMoreLinks) {
  learnMoreLinks.forEach((link) => {
    link.setAttribute('href', 'https://clickup.com/');
  });
}