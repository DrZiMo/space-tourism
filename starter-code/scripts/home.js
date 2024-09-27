const heroMidText = document.querySelector('.hero-mid');
const heroMainText = document.querySelector('.hero-main');
const heroSmallText = document.querySelector('.hero-sml');

window.onload = () => {
    setTimeout(() => {
        heroMidText.classList.add('visible');
        heroMainText.classList.add('visible');
        heroSmallText.classList.add('visible');
    }, 100)
}