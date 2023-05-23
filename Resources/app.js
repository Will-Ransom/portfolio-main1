const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
const navLinks = document.getElementsByClassName('navlinks')[0];

hamburgerMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
})