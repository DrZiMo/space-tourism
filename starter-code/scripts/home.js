const heroMidText = document.querySelector('.hero-mid');
const heroMainText = document.querySelector('.hero-main');
const heroSmallText = document.querySelector('.hero-sml');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-btn');
const navBar = document.querySelector('.nav');

window.onload = () => {
    navBar.style = 'transition: transform 0.3s;'
    setTimeout(() => {
        heroMidText.classList.add('visible');
        heroMainText.classList.add('visible');
        heroSmallText.classList.add('visible');
    }, 100)
}

menuIcon.onclick = () => {
    navBar.classList.add('visible')
}

closeIcon.onclick = () => {
    navBar.classList.remove('visible')
}