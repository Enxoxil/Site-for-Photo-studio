// START ===== Slider =====

const nextBtn = document.querySelector(".slider__arrows-right");
const prevBtn = document.querySelector(".slider__arrows-left");
const sliderBody = document.querySelector(".slider__body");
const sliderPaginationItems = document.querySelectorAll(".slider__dots-item");
sliderPagination();

function prevSlidePush() {
    const lastSlide = document.querySelector(".slider__body-item:last-child");
    const firstSlide = document.querySelector(".slider__body-item:first-child");
    sliderBody.insertBefore(lastSlide, firstSlide);
    sliderPagination();
}
function nextSlidePush() {
    const firstSlide = document.querySelector(".slider__body-item:first-child");
    sliderBody.append(firstSlide);
    sliderPagination();
}

prevBtn.addEventListener("click", prevSlidePush);
nextBtn.addEventListener("click", nextSlidePush);

function sliderPagination() {
    let child = sliderBody.children[0].getAttribute("id");
    for (let i = 0; i < sliderPaginationItems.length; i++) {
        sliderPaginationItems[i].classList.remove("active-dots");
        if (i == (child - 1)) {
            sliderPaginationItems[i].classList.add("active-dots");
        }
    }
    console.log(child)
}

// END ===== Slider =====
