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
