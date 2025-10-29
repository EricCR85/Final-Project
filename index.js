function openMenu(){
document.body.classList += ' menu--open'
}

function closeMenu(){
    document.body.classList.remove('menu--open')

}
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

burgerMenu.addEventListener('click', ()=>{
    navMenu.style.display = navMenu.style.display === 'black'? 'none': 'block';
})