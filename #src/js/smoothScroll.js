// START ===== SmoothScroll =====

function getSmoothScrollLinks() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    return smoothScrollLinks;
}

function onClickScrollLinkHandler(link) {
    document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function subscribeScrollLink() {
    for (let smoothScrollLink of getSmoothScrollLinks()) {
        if (isMobile) {
            smoothScrollLink.addEventListener("touchend", function (e){
                e.preventDefault();
                onClickScrollLinkHandler(smoothScrollLink);
            });
        } else {
            smoothScrollLink.addEventListener("click", function (e){
                e.preventDefault();
                onClickScrollLinkHandler(smoothScrollLink);
            });
        }
    }
}

function initSmoothScroll() {
    subscribeScrollLink();
}

initSmoothScroll();

// END ===== SmoothScroll =====
