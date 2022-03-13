
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
const menuBody = document.querySelector(".menu__body");

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuBody.classList.contains("_active")) {
        showMenuBurger();
    }
});

for (item of menuItems) {
    item.addEventListener("touchstart", () => {
        if (menuBody.classList.contains("_active")) {
            showMenuBurger();
        }
    });
}

menuBody.addEventListener("touchstart", () => {
    if (menuBody.classList.contains("_active")) {
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
 Класс _wrapper вешаем на контейнер в котором лежат 2 наследника.
 1 - тело слайдера в котором лежат слайды.
 2 - тело стрелок в котором лежат стрелки 
 
 Класс _left-arrow вешаем на левую стрелку 
 Класс _right-arrow вешаем на правую стрелку

 
 */

// START ===== Slider =====


// START ===== values =====
const sliderBody = document.querySelector(".slider__body");
let sliderPaginationItems = 0;
const sliderDotsBody = document.querySelector(".slider__dots");

const prevArrows = document.querySelectorAll("._left-arrow");
const nextArrows = document.querySelectorAll("._right-arrow");
// END ===== values =====



// START ===== load default =====
createPagination(sliderBody.children.length, "slider__dots-item", "div");

for (let i = 0; i < prevArrows.length; i++) {
    prevArrows[i].onclick = thisFuncLeft;
}
for (let i = 0; i < nextArrows.length; i++) {
    nextArrows[i].onclick = thisFuncRight;
}
// END ===== load default =====



// START ===== function =====

function thisFuncLeft() {
    let arrowArray = this.closest("._wrapper").children;
    let lastSlide = "";
    let firstSlide = "";
    let bodySlide = "";
    for (let i = 0; i < arrowArray.length; i++) {
        if (arrowArray[i].nodeName == "UL") {
            bodySlide = document.querySelector(
                `.${arrowArray[i].classList.value}`,
            );
            firstSlide = document.querySelector(
                `.${arrowArray[i].firstElementChild.classList.value}:first-child`,
            );
            lastSlide = document.querySelector(
                `.${arrowArray[i].firstElementChild.classList.value}:last-child`,
            );
        }
    }
    prevSlidePush(lastSlide, firstSlide, bodySlide);
}
function thisFuncRight() {
    let arrowArray = this.closest("._wrapper").children;
    let firstSlide = "";
    let bodySlide = "";
    for (let i = 0; i < arrowArray.length; i++) {
        if (arrowArray[i].nodeName == "UL") {
            bodySlide = document.querySelector(
                `.${arrowArray[i].classList.value}`,
            );
            firstSlide = document.querySelector(
                `.${arrowArray[i].firstElementChild.classList.value}:first-child`,
            );
        }
    }
    nextSlidePush(firstSlide, bodySlide);
}

function prevSlidePush(last, first, body) {
    body.insertBefore(last, first);
    sliderPagination();
}

function nextSlidePush(first, body) {
    body.append(first);
    sliderPagination();
}

function sliderPagination() {
    let child = sliderBody.children[0].getAttribute("name");
    for (let i = 0; i < sliderPaginationItems.length; i++) {
        sliderPaginationItems[i].classList.remove("active-dots");
        if (i == child - 1) {
            sliderPaginationItems[i].classList.add("active-dots");
        }
    }
}

function createPagination(numOfChild, classNameChild, typeOfChild) {
    for (let i = 1; i <= numOfChild; i++) {
        let sliderDot = document.createElement(typeOfChild);
        sliderDot.classList.add(classNameChild);
        sliderDotsBody.appendChild(sliderDot);
    }
    sliderPaginationItems = document.querySelectorAll(".slider__dots-item");
    sliderPagination();
}
// END ===== function =====


// END ===== Slider =====
;
// START =====  ===== 



// END =====  ===== 