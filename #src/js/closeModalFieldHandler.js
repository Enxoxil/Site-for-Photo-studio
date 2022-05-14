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
