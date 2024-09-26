const numberSliders = document.querySelectorAll('.number-slider ul li');
const vehicalName = document.querySelector('.vehical-name');
const vehicalDescription = document.querySelector('.vehical-description');
const vehicalImg = document.querySelector('.right-part img');

let index = 0;
let info;

fetch('data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        info = data.technology;
        useFetchedData(info);
    })


numberSliders.forEach(numberSlider => {
    numberSlider.onclick = () => {
        numberSliders.forEach(slider => {
            slider.classList.remove('active');
        })
        numberSlider.classList.add('active');
        index = numberSlider.dataset.index;
        useFetchedData(info)
    }
})

function useFetchedData(info) {
        vehicalName.classList.remove('visible')
        vehicalDescription.classList.remove('visible')
        vehicalImg.classList.remove('visible')
        setTimeout(() => {
        vehicalName.classList.add('visible')
        vehicalDescription.classList.add('visible')
        vehicalImg.classList.add('visible')

        vehicalName.textContent = info[index].name;
        vehicalDescription.textContent = info[index].description;
        vehicalImg.src = info[index].images.portrait;
    }, 500)
}