'use strict';

// navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// navbar__menu btn
const navbarMenu = document.querySelector('.navbar__menu');

// home
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
// home__contact btn
const contactBtn = document.querySelector('.home__contact');

// navbar is transparent on scroll top else blue
document.addEventListener('scroll' , (e) => {
  if (window.scrollY > navbarHeight){
    navbar.classList.add('sticky');
  }
  else {
    navbar.classList.remove('sticky');
  }

});

// navbar click menu to scroll Update
navbarMenu.addEventListener('click', (e) => {
  console.log(e.target.dataset.link);
  const target = e.target;
  const link = target.dataset.link;

  scrollIntoViews(link);
});

// contact button scroll to contact section
contactBtn.addEventListener('click', () => {
  const contact = document.querySelector('#contact');
  scrollIntoViews(contact);
});

// scroll fade out home section

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})

// click btn scrollInto Function
function scrollIntoViews(selector) {
  const btnScroll = document.querySelector(selector);
  btnScroll.scrollIntoView({
    behavior : "smooth"
  });
}



