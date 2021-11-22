const hamburger = document.querySelector('.header-right i');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const xMenu = document.querySelector('.hamburger-menu i')

hamburger.addEventListener('click', function() {
    hamburgerMenu.classList.add('active')
});
xMenu.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active')
});
