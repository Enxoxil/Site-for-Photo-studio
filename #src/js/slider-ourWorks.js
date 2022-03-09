// START ===== Slider ===== 


const slides = document.querySelectorAll('.slider__body-item');
const buttonPrev = document.querySelector('.slider__arrows-left');
const buttonNext = document.querySelector('.slider__arrows-right');
let currentSlide = 0;

function prevSlide(steping = 1) {

    for (let i = 0; i <= slides.length - 1; i++){
        slides[i].classList.remove('active-slide', 'active-slide-before', 'active-slide-after');
    }
    
}

function nextSlide(steping = 1) {

}







buttonPrev.onclick = () => {
    prevSlide(steping)
}

buttonNext.onclick = () => {
    nextSlide(steping)
}


// END ===== Slider =====