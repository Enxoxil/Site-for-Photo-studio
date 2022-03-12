// START ===== Menu burger =====
const menuBurgerBody = document.querySelector(".menu__body");
const menuBurgerIcon = document.querySelector(".action-header__icon-menu");
const menuItems = document.querySelectorAll(".menu__item");
const menuBody = document.querySelector(".menu__body");

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuBody.classList.contains("_active")) {
        showMenuBurger();
    }
});

for (item of menuItems) {
    item.addEventListener("touchstart", () => {
        if (menuBody.classList.contains("_active")) {
            showMenuBurger();
        }
    });
}

menuBody.addEventListener("touchstart", () => {
    if (menuBody.classList.contains("_active")) {
        showMenuBurger();
    }
});

menuBurgerIcon.addEventListener("touchstart", () => {
    if (menuBurgerIcon) {
        showMenuBurger();
    }
});

function showMenuBurger() {
    menuBurgerIcon.classList.toggle("_active");
    menuBurgerBody.classList.toggle("_active");
    document.body.classList.toggle("_lock");
}

// END ===== Menu burger =====
