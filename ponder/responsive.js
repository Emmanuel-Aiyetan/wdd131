const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('hide');
    menuBtn.classList.toggle('change');
}