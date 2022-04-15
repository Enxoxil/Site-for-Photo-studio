// START ===== ToggleSpoiler =====

const toggleSpoilerButtons = document.querySelectorAll(".article__button");

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

// END ===== ToggleSpoiler =====
