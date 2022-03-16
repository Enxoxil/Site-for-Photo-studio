
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
const menuBurgerBody = document.querySelector(".menu__body");
const menuBurgerIcon = document.querySelector(".action-header__icon-menu");
const menuItems = document.querySelectorAll(".menu__item");


document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuBurgerBody.classList.contains("_active")) {
        showMenuBurger();
    }
});

for (item of menuItems) {
    item.addEventListener("touchstart", () => {
        if (menuBurgerBody.classList.contains("_active")) {
            showMenuBurger();
        }
    });
}

menuBurgerBody.addEventListener("touchstart", () => {
    if (menuBurgerBody.classList.contains("_active")) {
        showMenuBurger();
    }
});

menuBurgerIcon.addEventListener("touchstart", () => {
    if (menuBurgerIcon) {
        showMenuBurger();
    }
});

function showMenuBurger() {
    menuBurgerIcon.classList.toggle("_active");
    menuBurgerBody.classList.toggle("_active");
    document.body.classList.toggle("_lock");
}

// END ===== Menu burger =====
;
/*
 Класс _wrapper вешаем на контейнер в котором лежат 3 наследника.
 1 - тело слайдера в котором лежат слайды.
 2 - тело стрелок в котором лежат стрелки.
 3 - тело пагинации.
 
 Класс _left-arrow вешаем на левую стрелку 
 Класс _right-arrow вешаем на правую стрелку

 
 */

// START ===== Slider =====

// START ===== values =====


// END ===== values =====

// START ===== load default =====

initSliderPaginations();
handlerPushSlide();

// END ===== load default =====

// START ===== function =====

function handlerPushSlide() {
    const prevSlideButtons = document.querySelectorAll("._left-arrow");
    const nextSlideButtons = document.querySelectorAll("._right-arrow");
    for (let i = 0; i < prevSlideButtons.length; i++) {
        prevSlideButtons[i].onclick = prevSlidePush;
    }
    for (let i = 0; i < nextSlideButtons.length; i++) {
        nextSlideButtons[i].onclick = nextSlidePush;
    }
}

function prevSlidePush() {
    let bodySlider = this.closest("._wrapper").querySelector("ul");
    let lastSlide = bodySlider.lastElementChild;
    let firstSlide = bodySlider.firstElementChild;
    bodySlider.insertBefore(lastSlide, firstSlide);
    changeSliderPaginationActiveDot(this.closest("._wrapper").classList[0]);
}
function nextSlidePush() {
    let bodySlider = this.closest("._wrapper").querySelector("ul");
    let firstSlide = bodySlider.firstElementChild;
    bodySlider.append(firstSlide);
    changeSliderPaginationActiveDot(this.closest("._wrapper").classList[0]);
}

function changeSliderPaginationActiveDot(classNameSliderWrapper) {
    let numberOfSlideNameAttribute = document
        .querySelector(`.${classNameSliderWrapper}__body-item`)
        .getAttribute("name");
    let sliderPaginationItems = document.querySelectorAll(
        `.${classNameSliderWrapper}__dots-item`,
    );
    for (let i = 0; i < sliderPaginationItems.length; i++) {
        sliderPaginationItems[i].classList.remove("active-dots");
        if (i == numberOfSlideNameAttribute - 1) {
            sliderPaginationItems[i].classList.add("active-dots");
        }
    }
}

function initSliderPaginations() {
    const amountBodyPaginations = document.getElementsByName("_pagination");
    for (let i = 0; i < amountBodyPaginations.length; i++) {
        let amountPaginationDots = amountBodyPaginations[i]
            .closest("._wrapper")
            .querySelector("ul").children.length;
        for (let j = 1; j <= amountPaginationDots; j++) {
            const paginationItem = document.createElement("div");
            paginationItem.classList.add(
                `${amountBodyPaginations[i].classList.value}-item`,
            );
            amountBodyPaginations[i].appendChild(paginationItem);
        }
        changeSliderPaginationActiveDot(
            `${amountBodyPaginations[i].closest("._wrapper").classList[0]}`,
        );
    }
}

// END ===== function =====

// END ===== Slider =====
;
// START =====  ===== 



// END =====  ===== 