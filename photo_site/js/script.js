// START ===== init =====

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
)

getAllForms();



// END ===== init =====

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

// START ===== ToggleSpoiler =====

function getSubscribeToggleSpoilerButtons() {
    return document.querySelectorAll(".article__button");
}

function toggleSpoilerButtonHandler() {
    this.parentElement.parentElement
        .querySelector(".article__content")
        .classList.toggle("_fullText");
    this.parentElement.parentElement
        .querySelector(".article__button")
        .classList.toggle("_activeButtonSpoiler");
}

function subscribeToggleSpoiler() {
    for (let toggleSpoilerButton of getSubscribeToggleSpoilerButtons()) {
        toggleSpoilerButton.addEventListener(
            "click",
            toggleSpoilerButtonHandler
        );
    }
}

function initSubscribeToggleSpoiler() {
    subscribeToggleSpoiler();
}

initSubscribeToggleSpoiler();

// END ===== ToggleSpoiler =====

// START ===== SmoothScroll =====

function getSmoothScrollLinks() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    return smoothScrollLinks;
}

function onClickScrollLinkHandler(link) {
    document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function subscribeScrollLink() {
    for (let smoothScrollLink of getSmoothScrollLinks()) {
        if (isMobile) {
            smoothScrollLink.addEventListener("touchend", function (e){
                e.preventDefault();
                onClickScrollLinkHandler(smoothScrollLink);
            });
        } else {
            smoothScrollLink.addEventListener("click", function (e){
                e.preventDefault();
                onClickScrollLinkHandler(smoothScrollLink);
            });
        }
    }
}

function initSmoothScroll() {
    subscribeScrollLink();
}

initSmoothScroll();

// END ===== SmoothScroll =====

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
        console.log(result);
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


// START ===== Close modal field hundler =====

function subscribeCloseModalFieldMobile() {
    document.addEventListener("touchend", function (e) {
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
    if (isMobile) {
        subscribeCloseModalFieldMobile();
    } else {
        subscribeCloseModalFieldPC();
    }
}

function initSubscribeCloseModalField() {
    subscribeCloseModalField();
}

initSubscribeCloseModalField();

// START ===== Close modal field hundler =====

// START ===== Close modal ESC hundler =====

function escCloseModalHandler() {
    document.addEventListener("keydown", function (e) {
        let isModalActive = document.querySelector("._modalActive");
        if (e.key === "Escape" && isModalActive) {
            isModalActive.classList.remove("_modalActive");
            document.body.classList.remove("_lock");
            if(!isMobile){
                document.body.style.marginRight = '';
                document.querySelector('.header__container').style.marginRight = '';
            }       
        }
        return false;
    });
}

function initEscCloseModalHandler() {
    escCloseModalHandler();
}

initEscCloseModalHandler();

// END ===== Close modal ESC hundler =====

// START ===== Close modal BTN hundler =====

function getArrayCloseModalButtons() {
    const closeModalButtons = document.querySelectorAll("._closeModalBtn");
    return closeModalButtons;
}

function subscribeCloseModalButtonMobile(button) {
    button.addEventListener("touchstart", function (event) {
        if (sectionFormFeedback.classList.contains("_modalActive")) {
            closeModal(event);
        }
    });
}

function subscribeCloseModalButtonPC(button) {
    button.addEventListener("click", function (event) {
        if (sectionFormFeedback.classList.contains("_modalActive")) {
            closeModal(event);
        }
    });
}

function subscribeCloseModalButton() {
    for (button of getArrayCloseModalButtons()) {
        if (isMobile) {
            subscribeCloseModalButtonMobile(button);
        } else {
            subscribeCloseModalButtonPC(button);
        }
    }
}

function initSubscribeCloseModalButton() {
    subscribeCloseModalButton();
}

initSubscribeCloseModalButton();

// END ===== Close modal BTN hundler =====

// START ===== Show modal =====

// START ===== variables =====

const sectionFormFeedback = document.querySelector(".feedback");
const openFormFeedbackButton = document.querySelector(".main-content__button");

// END ===== variables =====

// START ===== handlers =====

if (isMobile) {
    openFormFeedbackButton.addEventListener("touchend", showFeedbackModal);
} else {
    openFormFeedbackButton.addEventListener("click", showFeedbackModal);
}

// END ===== handlers =====

// START ===== functions =====


function getScrollbarWidth() {
    const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
}
function showFeedbackModal() {
    let currentScrollbarWidth = `${getScrollbarWidth()}px`;
    document.body.classList.add("_lock");
    if (isMobile) {
        sectionFormFeedback.classList.add("_modalActive");
    } else {
        sectionFormFeedback.classList.add("_modalActive");
        document.body.style.marginRight = currentScrollbarWidth;
        document.querySelector('.header__container').style.marginRight = currentScrollbarWidth;
    }
}

function closeModal(event) {
    let modalSection = event.target.closest("._modal");
    if (modalSection) {
        modalSection.classList.remove("_modalActive");
        document.body.classList.remove("_lock");
        if(!isMobile){
            document.body.style.marginRight = '';
            document.querySelector('.header__container').style.marginRight = '';
        }
    }
}

// END ===== functions =====

// END ===== Show modal =====







