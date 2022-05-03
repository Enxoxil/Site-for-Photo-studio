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
    item.addEventListener("touchend", () => {
        if (menuBurgerBody.classList.contains("_active")) {
            showMenuBurger();
        }
        return false;
    });
}

// END ===== loops =====

// START ===== handlers =====

menuBurgerBody.addEventListener("touchend", () => {
    if (menuBurgerBody.classList.contains("_active")) {
        showMenuBurger();
    }
    return false;
});

menuBurgerIcon.addEventListener("touchend", () => {
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

initSlider();

// END ===== load default =====

// START ===== function =====

function searchBodySlider() {
    return this.closest("._wrapper").querySelector("ul");
}

function searchNextSliderButtons() {
    return document.querySelectorAll("._right-arrow");
}

function searchPrevSliderButtons() {
    return document.querySelectorAll("._left-arrow");
}

function prevSlidePush() {
    searchBodySlider
        .call(this)
        .insertBefore(
            searchBodySlider.call(this).lastElementChild,
            searchBodySlider.call(this).firstElementChild
        );
    changePaginationItemActive.call(this);
}

function changePaginationItemActive() {
    console.log();
    this.parentElement.parentElement
        .querySelector("[data-pagination]")
        .children[
            searchBodySlider.call(this).children[1].dataset.slideNumber
        ].classList.add("active-dots");
}

function nextSlidePush() {
    searchBodySlider
        .call(this)
        .append(searchBodySlider.call(this).firstElementChild);
    changePaginationItemActive.call(this);
}

function subscribeNextClickEvent() {
    for (let event of searchNextSliderButtons()) {
        if (isMobile) {
            event.addEventListener("touchend", nextSlidePush);
        } else {
            event.addEventListener("click", nextSlidePush);
        }
    }
}

function subscribePrevClickEvent() {
    for (let event of searchPrevSliderButtons()) {
        if (isMobile) {
            event.addEventListener("touchend", prevSlidePush);
        } else {
            event.addEventListener("click", prevSlidePush);
        }
    }
}

function initSlider() {
    subscribeNextClickEvent();
    subscribePrevClickEvent();
}

function createPaginationItem(parent) {
    const paginationItem = document.createElement("div");
    paginationItem.classList.add(`${parent.className}-item`);
    return paginationItem;
}

function appendPaginationItems(parent) {
    for (let i = 0; i < parent.previousElementSibling.children.length; i++) {
        parent.appendChild(createPaginationItem(parent));
    }
}

function getPaginationsArray() {
    return document.querySelectorAll("[data-pagination]");
}

function createPagination() {
    for (let paginationElement of getPaginationsArray()) {
        appendPaginationItems(paginationElement);
    }
}

function initPagination() {
    createPagination();
}

initPagination();
//active-dots
//document.querySelector('[data-pagination]').previousElementSibling.children.length;
//searchBodySlider.call(this).children[1].dataset.slideNumber;

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
            if (!isMobile) {
                document.documentElement.style.marginRight = "";
                document.querySelector(".header__wrapper").style.paddingRight =
                    "";
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
        document.documentElement.style.marginRight = currentScrollbarWidth;
        document.querySelector('.header__wrapper').style.paddingRight = currentScrollbarWidth;
    }
}

function closeModal(event) {
    let modalSection = event.target.closest("._modal");
    if (modalSection) {
        modalSection.classList.remove("_modalActive");
        document.body.classList.remove("_lock");
        if(!isMobile){
            document.documentElement.style.marginRight = '';
            document.querySelector('.header__wrapper').style.paddingRight = '';
        }
    }
}

// END ===== functions =====

// END ===== Show modal =====







