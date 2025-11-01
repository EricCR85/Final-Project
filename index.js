const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.querySelector('.nav__links');

burgerMenu.addEventListener('click', ()=>{
   navLinks.classList.toggle('nav--visible');
});