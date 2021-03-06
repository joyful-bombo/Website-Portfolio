'use strict';

// navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// navbar is transparent on scroll top else blue
document.addEventListener('scroll', (e) => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

});

// navbar__menu btn
const navbarMenu = document.querySelector('.navbar__menu');

// navbar toggle button for small display
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})

// navbar click menu to scroll Update
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;

  navbarMenu.classList.remove('open');
  scrollIntoViews(link);
});

// home__contact btn
const contactBtn = document.querySelector('.home__contact');

// contact button scroll to contact section
contactBtn.addEventListener('click', () => {
  scrollIntoViews('#contact');
});

// home
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

// scroll fade out home section

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})

// scroll Visible to-top button
const scrollTop = document.querySelector('#to-top');

document.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollTop.classList.add('visible')
  } else {
    scrollTop.classList.remove('visible')
  }
});

scrollTop.addEventListener('click', () => {
  scrollIntoViews('#home');
});

// Project work
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove active from the previous item and add active the new item
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');

  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300)
});

// click btn scrollInto Function
function scrollIntoViews(selector) {
  const btnScroll = document.querySelector(selector);
  btnScroll.scrollIntoView({
    behavior: "smooth"
  });
}