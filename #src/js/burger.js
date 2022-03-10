// START ===== Menu burger ===== 

const menuBurgerIcon = document.querySelector('.action-header__icon-menu');
if (menuBurgerIcon) {
    const menuBurgerBody = document.querySelector('.menu__body');
    menuBurgerIcon.addEventListener('touchstart', () => {
        menuBurgerIcon.classList.toggle('_active');
        menuBurgerBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
    // menuBurgerIcon.ontouchstart = () => {
        
    // }
}

// END ===== Menu burger =====