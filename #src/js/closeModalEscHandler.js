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
