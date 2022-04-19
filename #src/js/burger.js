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
