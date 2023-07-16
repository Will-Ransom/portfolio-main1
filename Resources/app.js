const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
const navLinks = document.getElementsByClassName('navlinks')[0];

hamburgerMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
})

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav"> 
            ${buttonsHtml.join("")}
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");   
        });    
    });

    //selects first item when page loads
    items[0].classList.add("carousel__item--selected");
    button.classList.add("carousel__button--selected");
});