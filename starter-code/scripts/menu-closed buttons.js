const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-btn');
const navBar = document.querySelector('.nav');

window.addEventListener('load', () => {
    navBar.style = 'transition: transform 0.3s;';
})

menuIcon.onclick = () => {
    navBar.classList.add('visible')
}

closeIcon.onclick = () => {
    navBar.classList.remove('visible')
}