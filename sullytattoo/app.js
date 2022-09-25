const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const portfolio__img =
    document.querySelectorAll(".portfolio__img");

const checkPortfolio__img = () => {
    const triggerBottom =
        (window.innerHeight / 5) * 4;

    portfolio__img.forEach((portfolio__img) => {
        const portfolio__imgTop =
            portfolio__img.getBoundingClientRect().top;

        if (portfolio__imgTop < triggerBottom) {
            portfolio__img.classList.add("show");
        } else {
            portfolio__img.classList.remove("show");
        }
    });
};
checkPortfolio__img();

window.addEventListener("scroll", checkPortfolio__img);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};
menuLinks.addEventListener('click', hideMobileMenu);