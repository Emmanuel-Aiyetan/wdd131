const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}