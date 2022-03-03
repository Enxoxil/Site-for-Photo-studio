// START ===== Menu burger ===== 

const menuBurgerIcon = document.querySelector('.action-header__icon-menu');
if (menuBurgerIcon) {
    const menuBurgerBody = document.querySelector('.menu__body');
    menuBurgerIcon.onclick = () => {
        menuBurgerIcon.classList.toggle('_active');
        menuBurgerBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    }
}

// END ===== Menu burger =====