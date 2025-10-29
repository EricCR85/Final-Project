function openMenu(){
document.body.classList += ' menu--open'
}

function closeMenu(){
    document.body.classList.remove('menu--open')

}
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('.nav__links');

burgerMenu.addEventListener('click', ()=>{
   navLinks.classList.toggle('nav--visible');
});