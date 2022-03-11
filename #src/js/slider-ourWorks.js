// START ===== Slider =====


// START ===== values =====
const nextBtn = document.querySelector(".slider__arrows-right");
const prevBtn = document.querySelector(".slider__arrows-left");
const sliderBody = document.querySelector(".slider__body");
let sliderPaginationItems = 0;
const sliderDotsBody = document.querySelector('.slider__dots');

// END ===== values =====


// START ===== load default =====
createPagination (sliderBody.children.length, 'slider__dots-item', 'div');

// END ===== load default =====

// START ===== load event =====
prevBtn.addEventListener("click", () => {
    prevSlidePush(".slider__body-item:last-child", ".slider__body-item:first-child")
})
nextBtn.addEventListener("click", () => {
    nextSlidePush(".slider__body-item:first-child");
})

// END ===== load event =====


// START ===== function =====
function prevSlidePush(last, first) {
    const lastSlide = document.querySelector(last);
    const firstSlide = document.querySelector(first);
    sliderBody.insertBefore(lastSlide, firstSlide);
    sliderPagination();
}

function nextSlidePush(first) {
    const firstSlide = document.querySelector(first);
    sliderBody.append(firstSlide);
    sliderPagination();
}



function sliderPagination() {
    let child = sliderBody.children[0].getAttribute("name");
    for (let i = 0; i < sliderPaginationItems.length; i++) {
        sliderPaginationItems[i].classList.remove("active-dots");
        if (i == (child - 1)) {
            sliderPaginationItems[i].classList.add("active-dots");
        }
    }
}


function createPagination (numOfChild, classNameChild, typeOfChild) {   
    for (let i = 1; i <= numOfChild; i++){
        let sliderDot = document.createElement(typeOfChild);
        sliderDot.classList.add(classNameChild);
        sliderDotsBody.appendChild(sliderDot);
    }
    sliderPaginationItems = document.querySelectorAll(".slider__dots-item");
    sliderPagination();
}
// END ===== function =====
// END ===== Slider =====
