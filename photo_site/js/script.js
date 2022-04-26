// START ===== INCLUDES =====

// START ===== функция проверяет может ли браузер отображать webp формат изображений =====

function testWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});

// END ===== функция проверяет может ли браузер отображать webp формат изображений =====
; // нет ошибки
// START ===== Menu burger =====

// START ===== variables =====
const menuBurgerBody = document.querySelector(".menu__body");
const menuBurgerIcon = document.querySelector(".action-header__icon-menu");
const menuItems = document.querySelectorAll(".menu__item");

// END ===== variables =====

// START ===== loops =====

for (item of menuItems) {
    item.addEventListener("touchstart", () => {
        if (menuBurgerBody.classList.contains("_active")) {
            showMenuBurger();
        }
        return false;
    });
}

// END ===== loops =====

// START ===== handlers =====

menuBurgerBody.addEventListener("touchstart", () => {
    if (menuBurgerBody.classList.contains("_active")) {
        showMenuBurger();
    }
    return false;
});

menuBurgerIcon.addEventListener("touchstart", () => {
    if (menuBurgerIcon) {
        showMenuBurger();
    }
    return false;
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuBurgerBody.classList.contains("_active")) {
        showMenuBurger();
    }
});

// END ===== handlers =====

// START ===== functions =====

function showMenuBurger() {
    menuBurgerIcon.classList.toggle("_active");
    menuBurgerBody.classList.toggle("_active");
    document.body.classList.toggle("_lock");
}
// END ===== functions =====

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
// START ===== ToggleSpoiler =====

// START ===== variables =====

const toggleSpoilerButtons = document.querySelectorAll(".article__button");

// END ===== variables =====

// START ===== loops =====

for (let toggleSpoilerButton of toggleSpoilerButtons) {
    toggleSpoilerButton.addEventListener("click", function () {
        this.parentElement.parentElement
            .querySelector(".article__content")
            .classList.toggle("_fullText");
        this.parentElement.parentElement
            .querySelector(".article__button")
            .classList.toggle("_activeButtonSpoiler");
    });
}

// END ===== loops =====

// END ===== ToggleSpoiler =====
;
// START ===== SmoothScroll =====

const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothScrollLink of smoothScrollLinks) {
    smoothScrollLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothScrollLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}

// END ===== SmoothScroll =====
;
// START ===== form handler =====

// START ===== variables =====

const url = "https://jsonplaceholder.typicode.com/todos";

// END ===== variables =====

async function sendForm(valuesForm) {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: valuesForm,
        });
        const result = await response.json();
    } catch (error) {
        console.log("Error: ", error);
    } finally {
        console.log("Finally");
    }
}

function resetForm(event) {
    event.target.reset();
}

function collectionData(currentForm) {
    const formData = new FormData(currentForm);
    const formValues = Object.fromEntries(formData.entries());
    return formValues;
}

function onSubmit(currentTarget, e) {
    sendForm(collectionData(currentTarget));
    closeModal(e);
    resetForm(e);
}

function subscribeSubmitForms(forms) {
    for (currentForm of forms) {
        if (currentForm.classList.contains("_form")) {
            currentForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const { currentTarget } = e;
                onSubmit(currentTarget, e);
            });
        }
    }
}

function getAllForms() {
    const forms = document.forms;
    subscribeSubmitForms(forms);
}

// END ===== form handler =====

;
// START ===== Show feedback modal =====

// START ===== variables =====

const sectionFormFeedback = document.querySelector(".feedback");
const closeFormFeedbackButton = document.querySelector(".feedback__btn");
const openFormFeedbackButton = document.querySelector(".main-content__button");
const bodyFormFeedback = document.querySelector("._formFeedback");

// END ===== variables =====

// START ===== handlers =====
bodyFormFeedback.addEventListener("submit", showFeedbackMessage);


// START ===== for mobile =====
if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    openFormFeedbackButton.addEventListener("touchstart", showFeedbackModal);

    closeFormFeedbackButton.addEventListener("touchstart", function (e) {
        if (sectionFormFeedback.classList.contains("_modalActive")) {
            closeModal(e);
        }
    });
    // END ===== for mobile =====
} else {
    // START ===== for pc =====

    openFormFeedbackButton.addEventListener("click", showFeedbackModal);

    closeFormFeedbackButton.addEventListener("click", function (event) {
        if (sectionFormFeedback.classList.contains("_modalActive")) {
            closeModal(event);
        }
    });
    // END ===== for pc =====
}

// END ===== handlers =====

// START ===== functions =====

function showFeedbackMessage(event) {
    closeModal(event);
}

function showFeedbackModal() {
    sectionFormFeedback.classList.add("_modalActive");
    document.body.classList.add("_lock");
}

function closeModal(event) {
    let modalSection = event.target.closest("._modal");
    if (modalSection) {
        modalSection.classList.remove("_modalActive");
        document.body.classList.remove("_lock");
    }
}

// END ===== functions =====

// END ===== Show feedback modal =====
;

// START ===== functions =====

function subscribeCloseModalFieldMobile() {
    document.addEventListener("touchstart", function (e) {
        if (
            !e.target.closest("._modalNoCloseField") &&
            e.target.closest("._modalActive")
        ) {
            closeModal(e);
        }
    });
}
function subscribeCloseModalFieldPC() {
    document.addEventListener("click", function (e) {
        if (
            !e.target.closest("._modalNoCloseField") &&
            e.target.closest("._modalActive")
        ) {
            closeModal(e);
        }
    });
}

function subscribeCloseModalField() {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        subscribeCloseModalFieldMobile();
    } else {
        subscribeCloseModalFieldPC();
    }
}

subscribeCloseModalField();

// END ===== functions =====;

// START ===== functions =====
function escCloseModalHandler() {
    document.addEventListener("keydown", function (e) {
        let isModalActive = document.querySelector("._modalActive");
        if (e.key === "Escape" && isModalActive) {
            isModalActive.classList.remove("_modalActive");
            document.body.classList.remove("_lock");
        }
        return false;
    });
}
escCloseModalHandler();
// END ===== functions =====

// END ===== INCLUDES =====

// START ===== init =====

getAllForms();

// END =====  =====
