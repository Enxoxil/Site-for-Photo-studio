@@include('webpCheck.js'); // нет ошибки
@@include('burger.js');
@@include('slider-logical.js');
@@include('spoiler.js');
// START =====  ===== 

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// END =====  ===== 