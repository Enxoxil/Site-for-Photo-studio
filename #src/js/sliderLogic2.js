/*
 Класс _wrapper вешаем на контейнер в котором лежат 3 наследника.
 1 - тело слайдера в котором лежат слайды.
 2 - тело стрелок в котором лежат стрелки
 3 - тело пагинации c дата аттрибутом data-pagination
 
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
    if (isPaginationFromThisSlider.call(this)) {
        changePaginationItemActive.call(this);
    }
}

function nextSlidePush() {
    searchBodySlider
        .call(this)
        .append(searchBodySlider.call(this).firstElementChild);
    if (isPaginationFromThisSlider.call(this)) {
        changePaginationItemActive.call(this);
    }
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

// END ===== function =====

// END ===== Slider =====
