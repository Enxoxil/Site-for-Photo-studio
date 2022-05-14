// START ===== Show modal =====

// START ===== variables =====


// END ===== variables =====

function getCollectionOpenModalButtons() {
    const collectionOpenModalButtons =
        document.querySelectorAll("._openModalButton");
    return collectionOpenModalButtons;
}

function openModalHundler() {
    getCollectionOpenModalButtons().forEach((button) => {
        if (isMobile) {
            button.addEventListener("touchend", showCurrentModal);
        } else {
            button.addEventListener("click", showCurrentModal);
        }
    });
}
openModalHundler();

// START ===== handlers =====

// END ===== handlers =====

// START ===== functions =====

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;

}

function showCurrentModal() {
    getClassNameCurrentModal.call(this).classList.add("_modalActive");
    if (!isMobile) {
        fixScrollbarWidth();
    }
    document.body.classList.add("_lock");
}

function fixScrollbarWidth() {
    let currentScrollbarWidth = `${getScrollbarWidth()}px`;
    document.documentElement.style.marginRight = currentScrollbarWidth;
    document.querySelector(".header__wrapper").style.paddingRight =
        currentScrollbarWidth;
}

function getClassNameCurrentModal() {
    return document.querySelector(`.${this.dataset.modalClassName}`);
}

function closeModal(event) {
    let modalSection = event.target.closest("._modal");
    if (modalSection) {
        modalSection.classList.remove("_modalActive");
        document.body.classList.remove("_lock");
        if (!isMobile) {
            document.documentElement.style.marginRight = "";
            document.querySelector(".header__wrapper").style.paddingRight = "";
        }
    }
}

// END ===== functions =====

// END ===== Show modal =====
