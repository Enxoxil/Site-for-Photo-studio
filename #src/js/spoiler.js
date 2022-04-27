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
