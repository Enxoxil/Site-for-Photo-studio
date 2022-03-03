
// START ===== функция проверяет может ли браузер отображатьь webp формат изображений ===== 

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
    }
    });

// END ===== функция проверяет может ли браузер отображатьь webp формат изображений ===== ; // нет ошибки
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

// END ===== Menu burger =====;
// START =====  ===== 



// END =====  ===== 