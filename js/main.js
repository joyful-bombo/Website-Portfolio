'use strict';

// navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// navbar is transparent on scroll top else blue
document.addEventListener('scroll' , (e) => {
  if (window.scrollY > navbarHeight){
    navbar.classList.add('sticky');
  }
  else {
    navbar.classList.remove('sticky');
  }

});

// navbar__menu btn
const navbarMenu = document.querySelector('.navbar__menu');

// navbar click menu to scroll Update
navbarMenu.addEventListener('click', (e) => {
  console.log(e.target.dataset.link);
  const target = e.target;
  const link = target.dataset.link;

  scrollIntoViews(link);
});

// home__contact btn
const contactBtn = document.querySelector('.home__contact');

// contact button scroll to contact section
contactBtn.addEventListener('click', () => {
  const contact = document.querySelector('#contact');
  scrollIntoViews(contact);
});

// home
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

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


// scroll Visible to-top button
const scrollTop = document.querySelector('#to-top');

document.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    scrollTop.classList.add('visible')
  }
  else {
    scrollTop.classList.remove('visible')
  }
});

scrollTop.addEventListener('click' , () => {
  window.scrollTo(0, 0);
});
