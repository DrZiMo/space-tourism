const subNavItems = document.querySelectorAll('.sub-nav ul li');
const desImg = document.querySelector('.main-img img');
const desTitle = document.querySelector('.destination-title');
const desDescription = document.querySelector('.destination-description');
const desDistance = document.querySelector('.dist-amount');
const desTime = document.querySelector('.time-amount');

let index = 0;
let info;



fetch('data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        info = data.destinations
        updateInfo(info);
    })



subNavItems.forEach(subNavItem => {
    subNavItem.onclick = () => {
        index = subNavItem.dataset.index;
        subNavItems.forEach(item => {
            item.classList.remove('active');
        });
        subNavItem.classList.add('active');
        updateInfo(info)
    };
});

function updateInfo(info) {
    desImg.classList.remove('visible');
    desTitle.classList.remove('visible')
    desDescription.classList.remove('visible');
    desDistance.classList.remove('visible');
    desTime.classList.remove('visible');
    setTimeout(() => {
        desImg.src = info[index].images.png;
        desTitle.textContent = info[index].name;
        desDescription.textContent = info[index].description;
        desDistance.textContent = info[index].distance;
        desTime.textContent = info[index].travel;
        desImg.classList.add('visible');
        desTitle.classList.add('visible');
        desDescription.classList.add('visible');
        desDistance.classList.add('visible');
        desTime.classList.add('visible');
    }, 400)
    
}