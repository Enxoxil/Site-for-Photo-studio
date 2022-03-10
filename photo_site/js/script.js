
// START ===== функция проверяет может ли браузер отображатьь webp формат изображений ===== 

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
    }
    });

// END ===== функция проверяет может ли браузер отображатьь webp формат изображений ===== ; // нет ошибки
// START ===== Menu burger ===== 

const menuBurgerIcon = document.querySelector('.action-header__icon-menu');
if (menuBurgerIcon) {
    const menuBurgerBody = document.querySelector('.menu__body');
    menuBurgerIcon.addEventListener('touchstart', () => {
        menuBurgerIcon.classList.toggle('_active');
        menuBurgerBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
    // menuBurgerIcon.ontouchstart = () => {
        
    // }
}

// END ===== Menu burger =====;
// START ===== Slider =====

const nextBtn = document.querySelector(".slider__arrows-right");
const prevBtn = document.querySelector(".slider__arrows-left");
const sliderBody = document.querySelector(".slider__body");
const sliderPaginationItems = document.querySelectorAll(".slider__dots-item");
sliderPagination();

function prevSlidePush() {
    const lastSlide = document.querySelector(".slider__body-item:last-child");
    const firstSlide = document.querySelector(".slider__body-item:first-child");
    sliderBody.insertBefore(lastSlide, firstSlide);
    sliderPagination();
}
function nextSlidePush() {
    const firstSlide = document.querySelector(".slider__body-item:first-child");
    sliderBody.append(firstSlide);
    sliderPagination();
}

prevBtn.addEventListener("click", prevSlidePush);
nextBtn.addEventListener("click", nextSlidePush);

function sliderPagination() {
    let child = sliderBody.children[0].getAttribute("id");
    for (let i = 0; i < sliderPaginationItems.length; i++) {
        sliderPaginationItems[i].classList.remove("active-dots");
        if (i == (child - 1)) {
            sliderPaginationItems[i].classList.add("active-dots");
        }
    }
    console.log(child)
}

// END ===== Slider =====
;
// START =====  ===== 



// END =====  ===== 