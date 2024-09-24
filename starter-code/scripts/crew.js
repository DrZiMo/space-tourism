const crewRole = document.querySelector('.crew-role');
const crewName = document.querySelector('.crew-name');
const crewBio = document.querySelector('.crew-bio');
const crewImg = document.querySelector('.right-part img');
const sliderDots = document.querySelectorAll('.slider-dots div');

let index = 0;
let info;

fetch('data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        info = data.crew
        updateInfo(info);
    })

function updateInfo(info) {
    crewRole.classList.remove('visible');
    crewName.classList.remove('visible');
    crewBio.classList.remove('visible');
    crewImg.classList.remove('visible');
    setTimeout(() => {
        crewRole.classList.add('visible');
        crewName.classList.add('visible');
        crewBio.classList.add('visible');
        crewImg.classList.add('visible');
        crewRole.textContent = info[index].role;
        crewName.textContent = info[index].name;
        crewBio.textContent = info[index].bio;
        crewImg.src = info[index].images.png;
        crewImg.title = info[index].name;

        sliderDots.forEach(sliderDot => {
            sliderDot.classList.remove('current');
            sliderDot.onclick = () => {
                index = sliderDot.dataset.index;
            }
        })

        sliderDots[index].classList.add('current');

        index ++;
        
        if(index >= 4) {
            index = 0;
        }
    }, 500)

    setTimeout(() => {
        updateInfo(info)
    }, 4000);
}