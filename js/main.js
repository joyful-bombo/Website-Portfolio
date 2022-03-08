'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll' , (e) => {
  console.log(`window.scrollY : ${window.scrollY}`);
  console.log(`navbarHeight : ${navbarHeight}`);
  if (window.scrollY > navbarHeight){
    navbar.classList.add('sticky');
  }
  else {
    navbar.classList.remove('sticky');
  }
});