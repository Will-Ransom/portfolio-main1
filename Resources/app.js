const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
const navLinks = document.getElementsByClassName('navlinks')[0];

hamburgerMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
})

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button></span>`;
    })
});

/*11 12 */