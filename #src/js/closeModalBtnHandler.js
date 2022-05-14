// START ===== Close modal BTN hundler =====

function getArrayCloseModalButtons() {
    return document.querySelectorAll("._closeModalBtn");
}

function subscribeCloseModalButtonMobile(button) {
    button.addEventListener("touchstart", function (event) {
        if(this.closest("._modalActive")){
            closeModal(event);
        }
    });
}

function subscribeCloseModalButtonPC(button) {
    button.addEventListener("click", function (event) {
        if(this.closest("._modalActive")){
            closeModal(event);
        }
    });
}

function subscribeCloseModalButton() {
    getArrayCloseModalButtons().forEach((button) => {
        if (isMobile) {
            subscribeCloseModalButtonMobile(button);
        } else {
            subscribeCloseModalButtonPC(button);
        }
    });
}

function initSubscribeCloseModalButton() {
    subscribeCloseModalButton();
}

initSubscribeCloseModalButton();

// END ===== Close modal BTN hundler =====
